'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, ShoppingCart, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface Product {
  id: string
  name: string
  description: string
  price: string
  originalPrice?: string
  rating: number
  reviewCount: number
  imageUrl?: string
  affiliateLink?: string
  category: {
    name: string
    slug: string
  }
  pros: string[]
  cons: string[]
  tags: string[]
  featured: boolean
  published: boolean
  averageRating: number
}

interface Category {
  id: string
  name: string
  description?: string
  icon?: string
  slug: string
  _count: {
    products: number
  }
}

export default function CategoryPage() {
  const params = useParams()
  const [category, setCategory] = useState<Category | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch category
        const categoryResponse = await fetch(`/api/categories`)
        if (!categoryResponse.ok) {
          throw new Error('Failed to fetch categories')
        }
        const categories = await categoryResponse.json()
        const currentCategory = categories.find((c: Category) => c.slug === params.slug)
        
        if (!currentCategory) {
          throw new Error('Category not found')
        }
        
        setCategory(currentCategory)

        // Fetch products for this category
        const productsResponse = await fetch(`/api/products?category=${params.slug}&limit=20`)
        if (!productsResponse.ok) {
          throw new Error('Failed to fetch products')
        }
        const productsData = await productsResponse.json()
        setProducts(productsData.products)
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [params.slug])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error || !category) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Categoria não encontrada</h2>
            <p className="text-muted-foreground mb-4">{error || 'A categoria que você procura não existe.'}</p>
            <Button onClick={() => window.history.back()}>
              Voltar
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const discount = (originalPrice: string, currentPrice: string) => {
    if (!originalPrice) return 0
    const original = parseFloat(originalPrice.replace(/[R$ .]/g, ''))
    const current = parseFloat(currentPrice.replace(/[R$ .]/g, ''))
    return Math.round(((original - current) / original) * 100)
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="text-6xl">{category.icon || '📱'}</div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{category.name}</h1>
            <p className="text-xl text-muted-foreground">
              {category.description || `Explore produtos na categoria ${category.name}`}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {category._count.products} produtos disponíveis
            </p>
          </div>
        </div>
      </motion.div>

      {/* Products Grid */}
      {products.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary">{product.category.name}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">
                        {product.averageRating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                    {product.originalPrice && (
                      <Badge 
                        variant="destructive" 
                        className="text-xs bg-red-500"
                      >
                        -{discount(product.originalPrice, product.price)}%
                      </Badge>
                    )}
                  </div>

                  {/* Quick Pros/Cons */}
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-medium text-green-600">Prós:</span>{' '}
                      {product.pros.slice(0, 2).join(', ')}
                      {product.pros.length > 2 && '...'}
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-red-600">Contras:</span>{' '}
                      {product.cons.slice(0, 2).join(', ')}
                      {product.cons.length > 2 && '...'}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {product.affiliateLink && (
                      <Button size="sm" asChild className="flex-1">
                        <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Ver Preço
                        </a>
                      </Button>
                    )}
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/product/${product.id}`}>
                        Detalhes
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <Card>
            <CardContent className="p-8">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-2">Nenhum produto encontrado</h3>
              <p className="text-muted-foreground mb-4">
                Ainda não há produtos disponíveis nesta categoria.
              </p>
              <Button onClick={() => window.history.back()}>
                Voltar para Home
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Back to Categories */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <Button variant="outline" asChild>
          <Link href="/">
            Ver todas as categorias
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}