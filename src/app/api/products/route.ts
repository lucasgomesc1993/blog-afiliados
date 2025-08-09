import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { productSchema, type ProductInput } from '@/lib/validations'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const featured = searchParams.get('featured') === 'true'
    const limit = parseInt(searchParams.get('limit') || '10')
    const page = parseInt(searchParams.get('page') || '1')
    const sortBy = searchParams.get('sortBy') || 'rating'

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

    const orderBy: any = {}
    switch (sortBy) {
      case 'rating':
        orderBy.rating = 'desc'
        break
      case 'price-low':
        orderBy.price = 'asc'
        break
      case 'price-high':
        orderBy.price = 'desc'
        break
      case 'name':
        orderBy.name = 'asc'
        break
      case 'newest':
        orderBy.createdAt = 'desc'
        break
      default:
        orderBy.rating = 'desc'
    }

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
        orderBy,
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
    
    // Validar dados de entrada
    const validatedData: ProductInput = productSchema.parse(body)
    
    const product = await db.product.create({
      data: {
        ...validatedData,
        pros: JSON.stringify(validatedData.pros || []),
        cons: JSON.stringify(validatedData.cons || []),
        tags: JSON.stringify(validatedData.tags || [])
      },
      include: {
        category: true
      }
    })

    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }
    console.error('Error creating product:', error)
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    )
  }
}