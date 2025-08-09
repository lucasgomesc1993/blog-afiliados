'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Star, ShoppingCart, ArrowLeft, Search, Filter } from 'lucide-react'
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
  affiliateLink: string
  category: {
    name: string
    slug: string
  }
  pros: string[]
  cons: string[]
  tags: string[]
  featured: boolean
}

interface Category {
  id: string
  name: string
  description: string
  icon: string
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
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('rating')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const limit = 12

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(`/api/categories`)
        if (!response.ok) {
          throw new Error('Failed to fetch categories')
        }
        const categories = await response.json()
        const foundCategory = categories.find((c: Category) => c.slug === params.slug)
        setCategory(foundCategory)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch category')
      }
    }

    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `/api/products?category=${params.slug}&limit=${limit}&page=${currentPage}&sortBy=${sortBy}`
        )
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        const data = await response.json()
        setProducts(data.products)
        setTotalPages(data.pagination.totalPages)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch products')
      } finally {
        setLoading(false)
      }
    }

    if (params.slug) {
      fetchCategory()
      fetchProducts()
    }
  }, [params.slug, currentPage, sortBy])

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const discountPercentage = (originalPrice: string, currentPrice: string) => {
    return Math.round(((parseFloat(originalPrice.replace(/[R$ ]/g, '')) - parseFloat(currentPrice.replace(/[R$ ]/g, ''))) / parseFloat(originalPrice.replace(/[R$ ]/g, ''))) * 100)
  }

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
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">{error || 'Category not found'}</p>
            <Button onClick={() => window.history.back()} className="w-full mt-4">
              Voltar
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Button 
              variant="ghost" 
              size="sm"
              asChild
            >
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Link>
            </Button>
            <div className="text-4xl">{category.icon}</div>
            <div>
              <h1 className="text-3xl font-bold">{category.name}</h1>
              <p className="text-muted-foreground">{category._count.products} produtos</p>
            </div>
          </div>
          {category.description && (
            <p className="text-lg text-muted-foreground max-w-3xl">
              {category.description}
            </p>
          )}
        </div>
      </div>

      {/* Filters and Search */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Melhor Avaliados</SelectItem>
                  <SelectItem value="price-low">Preço: Menor para Maior</SelectItem>
                  <SelectItem value="price-high">Preço: Maior para Menor</SelectItem>
                  <SelectItem value="name">Nome: A-Z</SelectItem>
                  <SelectItem value="newest">Mais Recentes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="aspect-square bg-muted relative overflow-hidden">
                      {product.imageUrl ? (
                        <img 
                          src={product.imageUrl} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-6xl text-muted-foreground">
                          {product.category.name === 'Smartphones' && '📱'}
                          {product.category.name === 'Notebooks' && '💻'}
                          {product.category.name === 'Áudio' && '🎧'}
                          {product.category.name === 'Casa Inteligente' && '🏠'}
                          {product.category.name === 'Gaming' && '🎮'}
                          {product.category.name === 'Fitness' && '💪'}
                        </div>
                      )}
                      
                      {product.originalPrice && (
                        <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
                          -{discountPercentage(product.originalPrice, product.price)}%
                        </Badge>
                      )}
                      
                      {product.featured && (
                        <Badge className="absolute top-2 right-2">
                          Em Destaque
                        </Badge>
                      )}
                    </div>
                    
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {product.category.name}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{product.rating.toFixed(1)}</span>
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                      </CardTitle>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-primary">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="text-xs">
                          <span className="font-medium text-green-600">Prós:</span>{' '}
                          {product.pros.slice(0, 2).join(', ')}
                          {product.pros.length > 2 && '...'}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" asChild className="flex-1">
                          <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Ver
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/product/${product.id}`}>
                            Detalhes
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  Anterior
                </Button>
                
                <div className="flex gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum
                    if (totalPages <= 5) {
                      pageNum = i + 1
                    } else if (currentPage <= 3) {
                      pageNum = i + 1
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i
                    } else {
                      pageNum = currentPage - 2 + i
                    }
                    
                    return (
                      <Button
                        key={pageNum}
                        variant={currentPage === pageNum ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(pageNum)}
                      >
                        {pageNum}
                      </Button>
                    )
                  })}
                </div>
                
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                >
                  Próximo
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">Nenhum produto encontrado</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm 
                ? 'Nenhum produto corresponde à sua busca.'
                : 'Ainda não há produtos nesta categoria.'
              }
            </p>
            {searchTerm && (
              <Button onClick={() => setSearchTerm('')}>
                Limpar busca
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}