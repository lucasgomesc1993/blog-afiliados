'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { AffiliateCard } from '@/components/ui/affiliate-button'
import { Search, Filter, Star, ShoppingCart, TrendingUp, X } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  brand: string
  category: string
  price: string
  originalPrice?: string
  discount?: number
  rating: number
  affiliateLink: string
  image: string
  description: string
  pros: string[]
  cons: string[]
}

// Mock data - em produção, isso viria de uma API
const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Smartphone Galaxy Pro Max',
    brand: 'Samsung',
    category: 'Smartphones',
    price: 'R$ 3.999',
    originalPrice: 'R$ 4.999',
    discount: 20,
    rating: 4.8,
    affiliateLink: 'https://afiliado.com/galaxy-pro-max',
    image: '/placeholder-phone.jpg',
    description: 'O smartphone mais avançado da linha Galaxy com câmera profissional',
    pros: ['Câmera incrível', 'Bateria duradoura', 'Tela AMOLED'],
    cons: ['Preço elevado']
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    category: 'Smartphones',
    price: 'R$ 4.299',
    rating: 4.7,
    affiliateLink: 'https://afiliado.com/iphone-15-pro',
    image: '/placeholder-phone.jpg',
    description: 'O ecossistema Apple no seu bolso',
    pros: ['Processador rápido', 'Ecossistema', 'Build quality'],
    cons: ['Preço muito alto', 'Bateria menor']
  },
  {
    id: 3,
    name: 'Notebook UltraBook Pro',
    brand: 'Dell',
    category: 'Notebooks',
    price: 'R$ 5.499',
    originalPrice: 'R$ 6.999',
    discount: 21,
    rating: 4.6,
    affiliateLink: 'https://afiliado.com/ultrabook-pro',
    image: '/placeholder-laptop.jpg',
    description: 'Notebook premium para profissionais',
    pros: ['Performance excelente', 'Design fino', 'Tela 4K'],
    cons: ['Bateria poderia ser melhor']
  },
  {
    id: 4,
    name: 'Fones de Ouvido Wireless X',
    brand: 'Sony',
    category: 'Áudio',
    price: 'R$ 899',
    originalPrice: 'R$ 1.299',
    discount: 31,
    rating: 4.7,
    affiliateLink: 'https://afiliado.com/fones-x',
    image: '/placeholder-headphones.jpg',
    description: 'Melhor cancelamento de ruído do mercado',
    pros: ['Cancelamento de ruído', 'Qualidade de som', 'Confortável'],
    cons: ['Preço alto']
  },
  {
    id: 5,
    name: 'Smart TV 4K 55"',
    brand: 'LG',
    category: 'TVs',
    price: 'R$ 2.799',
    rating: 4.5,
    affiliateLink: 'https://afiliado.com/tv-lg',
    image: '/placeholder-tv.jpg',
    description: 'Smart TV 4K com tecnologia OLED',
    pros: ['Qualidade de imagem excepcional', 'Smart TV completo', 'Design fino'],
    cons: ['Preço elevado']
  },
  {
    id: 6,
    name: 'Console Gaming X',
    brand: 'Microsoft',
    category: 'Gaming',
    price: 'R$ 2.499',
    rating: 4.7,
    affiliateLink: 'https://afiliado.com/console-x',
    image: '/placeholder-console.jpg',
    description: 'Console de última geração com jogos inclusos',
    pros: ['Performance incrível', 'Exclusivos', 'Ecossistema'],
    cons: ['Preço alto', 'Tamanho grande']
  }
]

const categories = [
  'Todas',
  'Smartphones',
  'Notebooks',
  'Áudio',
  'TVs',
  'Gaming'
]

const sortOptions = [
  { value: 'relevance', label: 'Relevância' },
  { value: 'price-low', label: 'Menor Preço' },
  { value: 'price-high', label: 'Maior Preço' },
  { value: 'rating', label: 'Melhor Avaliação' },
  { value: 'discount', label: 'Maior Desconto' }
]

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '')
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const [sortBy, setSortBy] = useState('relevance')
  const [showFilters, setShowFilters] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts)

  useEffect(() => {
    let results = mockProducts

    // Filter by search term
    if (searchTerm) {
      results = results.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by category
    if (selectedCategory !== 'Todas') {
      results = results.filter(product => product.category === selectedCategory)
    }

    // Sort results
    switch (sortBy) {
      case 'price-low':
        results.sort((a, b) => {
          const priceA = parseFloat(a.price.replace('R$ ', '').replace('.', '').replace(',', '.'))
          const priceB = parseFloat(b.price.replace('R$ ', '').replace('.', '').replace(',', '.'))
          return priceA - priceB
        })
        break
      case 'price-high':
        results.sort((a, b) => {
          const priceA = parseFloat(a.price.replace('R$ ', '').replace('.', '').replace(',', '.'))
          const priceB = parseFloat(b.price.replace('R$ ', '').replace('.', '').replace(',', '.'))
          return priceB - priceA
        })
        break
      case 'rating':
        results.sort((a, b) => b.rating - a.rating)
        break
      case 'discount':
        results.sort((a, b) => {
          const discountA = a.discount || 0
          const discountB = b.discount || 0
          return discountB - discountA
        })
        break
      default:
        // Relevance - keep original order
        break
    }

    setFilteredProducts(results)
  }, [searchTerm, selectedCategory, sortBy])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Search is handled by useEffect
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('Todas')
    setSortBy('relevance')
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Buscar Produtos</h1>
            
            {/* Search Form */}
            <form onSubmit={handleSearch} className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar por produto, marca ou categoria..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 h-12 text-lg"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </form>

            {/* Quick Stats */}
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{filteredProducts.length} produtos encontrados</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                Filtros
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      {showFilters && (
        <section className="py-6 bg-muted/30 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <h3 className="font-medium mb-3">Categoria</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                          selectedCategory === category
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-background border hover:bg-muted'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort Options */}
                <div>
                  <h3 className="font-medium mb-3">Ordenar por</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-2 border rounded-md bg-background"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Clear Filters */}
                <div className="flex items-end">
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="w-full"
                  >
                    Limpar Filtros
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <AffiliateCard
                      product={product}
                      showProsCons={false}
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Nenhum produto encontrado</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Não encontramos produtos que correspondam à sua busca. Tente usar termos diferentes ou navegue por categorias.
                  </p>
                  <div className="space-y-4">
                    <Button onClick={clearFilters} variant="outline">
                      Limpar Busca
                    </Button>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Ou explore por categorias:</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {categories.slice(1).map((category) => (
                          <Link
                            key={category}
                            href={`/categoria/${category.toLowerCase()}`}
                          >
                            <Badge variant="outline" className="cursor-pointer hover:bg-primary/20">
                              {category}
                            </Badge>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Popular Searches */}
      {filteredProducts.length === 0 && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-xl font-semibold mb-6">Buscas Populares</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  'smartphone',
                  'notebook',
                  'fone de ouvido',
                  'smart tv',
                  'console',
                  'tablet',
                  'smartwatch',
                  'caixa de som'
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchTerm(term)}
                    className="px-3 py-1 bg-background border rounded-full text-sm hover:bg-muted transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SEO Tips */}
      <section className="py-12 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-6">Dicas para Buscar</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Use Termos Específicos</h4>
                  <p className="text-sm text-muted-foreground">
                    Em vez de "celular", tente "smartphone Samsung" ou "iPhone 15" para resultados mais precisos.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Busque por Características</h4>
                  <p className="text-sm text-muted-foreground">
                    Tente buscar por "câmera boa", "bateria duradoura" ou "tela 4K" para encontrar produtos com essas características.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Use Filtros</h4>
                  <p className="text-sm text-muted-foreground">
                    Combine a busca com filtros de categoria e ordenação para encontrar exatamente o que procura.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Verifique Ofertas</h4>
                  <p className="text-sm text-muted-foreground">
                    Products com descontos aparecem primeiro em algumas ordenações. Fique de olho nas etiquetas de oferta!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}