'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Star, 
  Eye,
  Settings,
  Package
} from 'lucide-react'
import Link from 'next/link'

interface Product {
  id: string
  name: string
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
  createdAt: string
}

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [sortBy, setSortBy] = useState('createdAt')

  useEffect(() => {
    fetchProducts()
  }, [searchTerm, statusFilter, categoryFilter, sortBy])

  const fetchProducts = async () => {
    try {
      const params = new URLSearchParams({
        limit: '50',
        sortBy,
        page: '1'
      })

      if (searchTerm) params.append('search', searchTerm)
      if (statusFilter === 'featured') params.append('featured', 'true')
      if (statusFilter === 'published') params.append('published', 'true')

      const response = await fetch(`/api/products?${params}`)
      if (!response.ok) throw new Error('Failed to fetch products')
      
      const data = await response.json()
      setProducts(data.products)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteProduct = async (productId: string) => {
    if (!confirm('Tem certeza que deseja excluir este produto?')) return

    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE'
      })

      if (!response.ok) throw new Error('Failed to delete product')

      setProducts(prev => prev.filter(p => p.id !== productId))
    } catch (error) {
      console.error('Error deleting product:', error)
      alert('Erro ao excluir produto')
    }
  }

  const toggleFeatured = async (productId: string, currentFeatured: boolean) => {
    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ featured: !currentFeatured })
      })

      if (!response.ok) throw new Error('Failed to update product')

      setProducts(prev => prev.map(p => 
        p.id === productId 
          ? { ...p, featured: !currentFeatured }
          : p
      ))
    } catch (error) {
      console.error('Error updating product:', error)
    }
  }

  const togglePublished = async (productId: string, currentPublished: boolean) => {
    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ published: !currentPublished })
      })

      if (!response.ok) throw new Error('Failed to update product')

      setProducts(prev => prev.map(p => 
        p.id === productId 
          ? { ...p, published: !currentPublished }
          : p
      ))
    } catch (error) {
      console.error('Error updating product:', error)
    }
  }

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === 'all' ||
                         (statusFilter === 'featured' && product.featured) ||
                         (statusFilter === 'published' && product.published)

    return matchesSearch && matchesStatus
  })

  const discountPercentage = (originalPrice: string, currentPrice: string) => {
    if (!originalPrice) return 0
    const original = parseFloat(originalPrice.replace(/[R$ .]/g, ''))
    const current = parseFloat(currentPrice.replace(/[R$ .]/g, ''))
    return Math.round(((original - current) / original) * 100)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold">Gerenciar Produtos</h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} produtos encontrados
          </p>
        </div>
        <Link href="/admin/products/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Novo Produto
          </Button>
        </Link>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col md:flex-row gap-4 p-4 bg-card rounded-lg border"
      >
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
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="featured">Destaques</SelectItem>
              <SelectItem value="published">Publicado</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="createdAt">Mais Recentes</SelectItem>
              <SelectItem value="rating">Melhor Avaliados</SelectItem>
              <SelectItem value="name">Nome A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300">
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
                  <CardDescription className="line-clamp-2">
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
                        -{discountPercentage(product.originalPrice, product.price)}%
                      </Badge>
                    )}
                  </div>

                  {/* Quick Stats */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {product.reviewCount} reviews
                    </span>
                    <span className="text-muted-foreground">
                      {new Date(product.createdAt).toLocaleDateString('pt-BR')}
                    </span>
                  </div>

                  {/* Status Badges */}
                  <div className="flex gap-2">
                    {product.featured && (
                      <Badge variant="default" className="text-xs">
                        <Star className="mr-1 h-3 w-3" />
                        Destaque
                      </Badge>
                    )}
                    {product.published ? (
                      <Badge variant="secondary" className="text-xs">
                        Publicado
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="text-xs">
                        Rascunho
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Link href={`/admin/products/${product.id}/edit`}>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Edit className="mr-2 h-4 w-4" />
                        Editar
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleFeatured(product.id, product.featured)}
                    >
                      <Star className={`mr-2 h-4 w-4 ${product.featured ? 'fill-yellow-400 text-yellow-400' : ''}`} />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => togglePublished(product.id, product.published)}
                    >
                      {product.published ? (
                        <>
                          <Eye className="mr-2 h-4 w-4" />
                          Ocultar
                        </>
                      ) : (
                        <>
                          <Eye className="mr-2 h-4 w-4" />
                          Publicar
                        </>
                      )}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => deleteProduct(product.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <Card>
            <CardContent className="p-8">
              <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nenhum produto encontrado</h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm 
                  ? 'Nenhum produto corresponde à sua busca.'
                  : 'Ainda não há produtos cadastrados.'
                }
              </p>
              <Link href="/admin/products/new">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar Primeiro Produto
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}