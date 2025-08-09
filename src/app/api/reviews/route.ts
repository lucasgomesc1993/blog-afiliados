import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const productId = searchParams.get('productId')
    const limit = parseInt(searchParams.get('limit') || '10')
    const page = parseInt(searchParams.get('page') || '1')

    const skip = (page - 1) * limit

    const where: any = {}
    
    if (productId) {
      where.productId = productId
    }

    const [reviews, total] = await Promise.all([
      db.review.findMany({
        where,
        include: {
          product: {
            select: {
              name: true,
              imageUrl: true
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        },
        skip,
        take: limit
      }),
      db.review.count({ where })
    ])

    return NextResponse.json({
      reviews,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, content, rating, productId } = body

    // Validate rating
    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      )
    }

    const review = await db.review.create({
      data: {
        title,
        content,
        rating,
        productId
      },
      include: {
        product: {
          select: {
            name: true,
            imageUrl: true
          }
        }
      }
    })

    // Update product rating
    const productReviews = await db.review.findMany({
      where: { productId }
    })

    const averageRating = productReviews.reduce((sum, review) => sum + review.rating, 0) / productReviews.length
    const reviewCount = productReviews.length

    await db.product.update({
      where: { id: productId },
      data: {
        rating: averageRating,
        reviewCount
      }
    })

    return NextResponse.json(review, { status: 201 })
  } catch (error) {
    console.error('Error creating review:', error)
    return NextResponse.json(
      { error: 'Failed to create review' },
      { status: 500 }
    )
  }
}