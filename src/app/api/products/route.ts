import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const featured = searchParams.get('featured') === 'true'
    const limit = parseInt(searchParams.get('limit') || '10')
    const page = parseInt(searchParams.get('page') || '1')

    const skip = (page - 1) * limit

    const where: any = {}
    
    if (category) {
      where.category = {
        slug: category
      }
    }
    
    if (featured) {
      where.featured = true
    }
    
    where.published = true

    const [products, total] = await Promise.all([
      db.product.findMany({
        where,
        include: {
          category: true,
          reviews: {
            select: {
              rating: true
            }
          }
        },
        orderBy: {
          rating: 'desc'
        },
        skip,
        take: limit
      }),
      db.product.count({ where })
    ])

    // Calculate average rating for each product
    const productsWithRating = products.map(product => ({
      ...product,
      averageRating: product.reviews.length > 0 
        ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length 
        : product.rating
    }))

    return NextResponse.json({
      products: productsWithRating,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      name,
      description,
      price,
      originalPrice,
      rating,
      imageUrl,
      affiliateLink,
      categoryId,
      pros,
      cons,
      tags,
      featured,
      published
    } = body

    const product = await db.product.create({
      data: {
        name,
        description,
        price,
        originalPrice,
        rating: rating || 0,
        imageUrl,
        affiliateLink,
        categoryId,
        pros: JSON.stringify(pros || []),
        cons: JSON.stringify(cons || []),
        tags: JSON.stringify(tags || []),
        featured: featured || false,
        published: published || false
      },
      include: {
        category: true
      }
    })

    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    )
  }
}