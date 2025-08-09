'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, ShoppingCart, ArrowLeft, Clock, Users } from 'lucide-react'
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
  reviews: Review[]
}

interface Review {
  id: string
  title: string
  content: string
  rating: number
  createdAt: string
  product: {
    name: string
    imageUrl?: string
  }
}

export default function ProductDetail() {
  const params = useParams()
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${params.id}`)
        if (!response.ok) {
          throw new Error('Product not found')
        }
        const data = await response.json()
        setProduct(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch product')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [params.id])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Produto não encontrado</h2>
            <p className="text-muted-foreground mb-4">{error || 'O produto que você procura não existe.'}</p>
            <Button onClick={() => router.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const discount = product.originalPrice 
    ? Math.round(((parseFloat(product.originalPrice.replace(/[R$ .]/g, '')) - parseFloat(product.price.replace(/[R$ .]/g, ''))) / parseFloat(product.originalPrice.replace(/[R$ .]/g, ''))) * 100)
    : 0

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Button variant="ghost" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Home
          </Link>
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-square bg-muted flex items-center justify-center">
                <div className="text-6xl text-muted-foreground">
                  {product.category.icon || '📱'}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">{product.category.name}</Badge>
              {discount > 0 && (
                <Badge variant="destructive" className="bg-red-500">
                  -{discount}%
                </Badge>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-lg font-semibold">{product.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{product.reviewCount} reviews</span>
              </div>
            </div>

            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-3xl font-bold text-primary">{product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Descrição</h3>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Prós</h3>
            <ul className="space-y-2">
              {product.pros.map((pro, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-muted-foreground">{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contras</h3>
            <ul className="space-y-2">
              {product.cons.map((con, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-muted-foreground">{con}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 pt-4">
            {product.affiliateLink && (
              <Button size="lg" className="flex-1" asChild>
                <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Ver Preço
                </a>
              </Button>
            )}
            <Button size="lg" variant="outline" asChild>
              <Link href={`/review/${product.id}`}>
                Escrever Review
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Reviews Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-8"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Reviews dos Usuários</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja o que outros usuários estão dizendo sobre este produto
          </p>
        </div>

        {product.reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{review.title}</CardTitle>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {new Date(review.createdAt).toLocaleDateString('pt-BR')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {review.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">
                Ainda não há reviews para este produto. Seja o primeiro a avaliar!
              </p>
            </CardContent>
          </Card>
        )}
      </motion.section>
    </div>
  )
}