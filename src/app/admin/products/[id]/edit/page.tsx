'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowLeft, 
  Save, 
  Plus, 
  X,
  Star,
  DollarSign,
  Image as ImageIcon,
  Link as LinkIcon
} from 'lucide-react'
import Link from 'next/link'

interface Product {
  id: string
  name: string
  description: string
  price: string
  originalPrice?: string
  rating: number
  imageUrl?: string
  affiliateLink?: string
  categoryId: string
  category: {
    id: string
    name: string
    slug: string
  }
  pros: string[]
  cons: string[]
  tags: string[]
  featured: boolean
  published: boolean
}

interface Category {
  id: string
  name: string
  slug: string
}

export default function EditProduct() {
  const params = useParams()
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    originalPrice: '',
    rating: 5,
    imageUrl: '',
    affiliateLink: '',
    categoryId: '',
    pros: [''],
    cons: [''],
    tags: [''],
    featured: false,
    published: false
  })

  useEffect(() => {
    fetchProduct()
    fetchCategories()
  }, [params.id])

  const fetchProduct = async () => {
    try {
      const response = await fetch(`/api/products/${params.id}`)
      if (!response.ok) throw new Error('Product not found')
      
      const data = await response.json()
      setProduct(data)
      
      // Parse JSON arrays and set form data
      setFormData({
        name: data.name,
        description: data.description,
        price: data.price,
        originalPrice: data.originalPrice || '',
        rating: data.rating,
        imageUrl: data.imageUrl || '',
        affiliateLink: data.affiliateLink || '',
        categoryId: data.categoryId,
        pros: Array.isArray(data.pros) ? data.pros : JSON.parse(data.pros || '[]'),
        cons: Array.isArray(data.cons) ? data.cons : JSON.parse(data.cons || '[]'),
        tags: Array.isArray(data.tags) ? data.tags : JSON.parse(data.tags || '[]'),
        featured: data.featured,
        published: data.published
      })
    } catch (error) {
      setError('Failed to load product')
    } finally {
      setLoading(false)
    }
  }

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories')
      if (!response.ok) throw new Error('Failed to fetch categories')
      
      const data = await response.json()
      setCategories(data)
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError(null)

    try {
      const response = await fetch(`/api/products/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) throw new Error('Failed to update product')

      await router.push('/admin/products')
      await router.refresh()
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to save product')
    } finally {
      setSaving(false)
    }
  }

  const addArrayItem = (field: 'pros' | 'cons' | 'tags') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }))
  }

  const removeArrayItem = (field: 'pros' | 'cons' | 'tags', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }))
  }

  const updateArrayItem = (field: 'pros' | 'cons' | 'tags', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }))
  }

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
            <h2 className="text-xl font-semibold mb-2">Erro</h2>
            <p className="text-muted-foreground mb-4">{error || 'Produto não encontrado'}</p>
            <Link href="/admin/products">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </Link>
          </CardContent>
        </Card>
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
        <div className="flex items-center gap-4">
          <Link href="/admin/products">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Editar Produto</h1>
            <p className="text-muted-foreground">
              {product.name}
            </p>
          </div>
        </div>
        <Button onClick={handleSubmit} disabled={saving}>
          <Save className="mr-2 h-4 w-4" />
          {saving ? 'Salvando...' : 'Salvar Alterações'}
        </Button>
      </motion.div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 bg-red-50 border border-red-200 rounded-lg"
        >
          <p className="text-sm text-red-600">{error}</p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Informações Básicas
            </CardTitle>
            <CardDescription>
              Dados principais do produto
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Nome do Produto</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Categoria</label>
                <Select value={formData.categoryId} onValueChange={(value) => setFormData(prev => ({ ...prev, categoryId: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Descrição</label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={4}
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Pricing */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Preços
            </CardTitle>
            <CardDescription>
              Configuração de preços do produto
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Preço Atual</label>
                <Input
                  placeholder="R$ 0,00"
                  value={formData.price}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Preço Original (opcional)</label>
                <Input
                  placeholder="R$ 0,00"
                  value={formData.originalPrice}
                  onChange={(e) => setFormData(prev => ({ ...prev, originalPrice: e.target.value }))}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Avaliação Inicial</label>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <Input
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  value={formData.rating}
                  onChange={(e) => setFormData(prev => ({ ...prev, rating: parseFloat(e.target.value) || 0 }))}
                  className="w-24"
                />
                <span className="text-sm text-muted-foreground">/ 5.0</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Media */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageIcon className="h-5 w-5" />
              Mídia
            </CardTitle>
            <CardDescription>
              Imagens e links do produto
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">URL da Imagem</label>
              <Input
                placeholder="https://..."
                value={formData.imageUrl}
                onChange={(e) => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Link de Afiliado</label>
              <Input
                placeholder="https://..."
                value={formData.affiliateLink}
                onChange={(e) => setFormData(prev => ({ ...prev, affiliateLink: e.target.value }))}
              />
            </div>
          </CardContent>
        </Card>

        {/* Lists */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ListIcon className="h-5 w-5" />
              Listas (Prós, Contras, Tags)
            </CardTitle>
            <CardDescription>
              Configure as listas do produto
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Pros */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium">Prós</label>
                <Button type="button" variant="outline" size="sm" onClick={() => addArrayItem('pros')}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2">
                {formData.pros.map((pro, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={pro}
                      onChange={(e) => updateArrayItem('pros', index, e.target.value)}
                      placeholder="Pró do produto..."
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeArrayItem('pros', index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Cons */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium">Contras</label>
                <Button type="button" variant="outline" size="sm" onClick={() => addArrayItem('cons')}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2">
                {formData.cons.map((con, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={con}
                      onChange={(e) => updateArrayItem('cons', index, e.target.value)}
                      placeholder="Contra do produto..."
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeArrayItem('cons', index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium">Tags</label>
                <Button type="button" variant="outline" size="sm" onClick={() => addArrayItem('tags')}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2">
                {formData.tags.map((tag, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={tag}
                      onChange={(e) => updateArrayItem('tags', index, e.target.value)}
                      placeholder="Tag do produto..."
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeArrayItem('tags', index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Status
            </CardTitle>
            <CardDescription>
              Configure o status do produto
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Publicado</h4>
                <p className="text-sm text-muted-foreground">
                  {formData.published ? 'Produto está visível para usuários' : 'Produto está em rascunho'}
                </p>
              </div>
              <Button
                variant={formData.published ? "default" : "outline"}
                onClick={() => setFormData(prev => ({ ...prev, published: !prev.published }))}
              >
                {formData.published ? 'Publicado' : 'Rascunho'}
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Em Destaque</h4>
                <p className="text-sm text-muted-foreground">
                  {formData.featured ? 'Produto em destaque' : 'Produto normal'}
                </p>
              </div>
              <Button
                variant={formData.featured ? "default" : "outline"}
                onClick={() => setFormData(prev => ({ ...prev, featured: !prev.featured }))}
              >
                <Star className={`mr-2 h-4 w-4 ${formData.featured ? 'fill-yellow-400' : ''}`} />
                {formData.featured ? 'Destaque' : 'Normal'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  )
}

function ListIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  )
}