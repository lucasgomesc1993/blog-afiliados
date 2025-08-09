import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const product = await db.product.findUnique({
      where: {
        id: params.id
      },
      include: {
        category: true,
        reviews: {
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    })

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    // Parse JSON fields
    const parsedProduct = {
      ...product,
      pros: JSON.parse(product.pros || '[]'),
      cons: JSON.parse(product.cons || '[]'),
      tags: JSON.parse(product.tags || '[]')
    }

    // Calculate average rating
    const averageRating = product.reviews.length > 0 
      ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length 
      : product.rating

    return NextResponse.json({
      ...parsedProduct,
      averageRating
    })
  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
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

    const product = await db.product.update({
      where: {
        id: params.id
      },
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

    return NextResponse.json(product)
  } catch (error) {
    console.error('Error updating product:', error)
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await db.product.delete({
      where: {
        id: params.id
      }
    })

    return NextResponse.json({ message: 'Product deleted successfully' })
  } catch (error) {
    console.error('Error deleting product:', error)
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    )
  }
}