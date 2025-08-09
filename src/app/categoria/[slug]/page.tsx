'use client'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Star, 
  ShoppingCart, 
  SlidersHorizontal, 
  Grid, 
  List,
  ArrowLeft,
  Filter,
  Search
} from 'lucide-react'
import Link from 'next/link'

// Mock data - em produção viria do banco de dados
const categoriesData: Record<string, any> = {
  'smartphones': {
    name: 'Smartphones',
    description: 'Os melhores smartphones do mercado com análises detalhadas e comparações',
    totalProducts: 45,
    icon: '📱',
    filters: {
      brands: ['Samsung', 'Apple', 'Xiaomi', 'OPPO', 'Vivo'],
      priceRanges: [
        { label: 'Até R$ 1.000', min: 0, max: 1000 },
        { label: 'R$ 1.000 - R$ 2.000', min: 1000, max: 2000 },
        { label: 'R$ 2.000 - R$ 3.000', min: 2000, max: 3000 },
        { label: 'Acima de R$ 3.000', min: 3000, max: 999999 }
      ],
      features: ['5G', 'Câmera Tripla', 'Tela 120Hz+', 'Carregamento Rápido', ' Resistência à Água']
    }
  },
  'notebooks': {
    name: 'Notebooks',
    description: 'Notebooks para trabalho, estudos e gaming com avaliações completas',
    totalProducts: 32,
    icon: '💻',
    filters: {
      brands: ['Dell', 'HP', 'Lenovo', 'Apple', 'Asus', 'Acer'],
      priceRanges: [
        { label: 'Até R$ 2.000', min: 0, max: 2000 },
        { label: 'R$ 2.000 - R$ 4.000', min: 2000, max: 4000 },
        { label: 'R$ 4.000 - R$ 6.000', min: 4000, max: 6000 },
        { label: 'Acima de R$ 6.000', min: 6000, max: 999999 }
      ],
      features: ['SSD', 'Dedicado GPU', 'Tela 4K', 'Thunderbolt', 'Touchscreen']
    }
  }
}

const productsData = {
  'smartphones': [
    {
      id: 1,
      name: 'Smartphone Galaxy Pro Max',
      brand: 'Samsung',
      rating: 4.8,
      price: 'R$ 3.999',
      originalPrice: 'R$ 4.599',
      discount: 13,
      image: '/placeholder-phone.jpg',
      affiliateLink: 'https://afiliado.com/galaxy-pro-max',
      features: ['5G', 'Câmera Tripla', 'Tela 120Hz'],
      pros: ['Câmera incrível', 'Bateria duradoura'],
      cons: ['Preço elevado']
    },
    {
      id: 4,
      name: 'iPhone 15 Pro',
      brand: 'Apple',
      rating: 4.7,
      price: 'R$ 4.299',
      image: '/placeholder-iphone.jpg',
      affiliateLink: 'https://afiliado.com/iphone-15-pro',
      features: ['5G', 'Tela ProMotion', 'Titanium'],
      pros: ['Performance excelente', 'Câmera profissional'],
      cons: ['Preço muito alto', 'Carregador não incluso']
    },
    {
      id: 5,
      name: 'Xiaomi 14 Ultra',
      brand: 'Xiaomi',
      rating: 4.6,
      price: 'R$ 3.599',
      image: '/placeholder-xiaomi.jpg',
      affiliateLink: 'https://afiliado.com/xiaomi-14-ultra',
      features: ['5G', 'Câmera Leica', 'Carregamento rápido'],
      pros: ['Custo-benefício', 'Câmera profissional'],
      cons: ['UI poderia ser melhor']
    },
    {
      id: 6,
      name: 'OPPO Find X6 Pro',
      brand: 'OPPO',
      rating: 4.5,
      price: 'R$ 2.999',
      image: '/placeholder-oppo.jpg',
      affiliateLink: 'https://afiliado.com/oppo-find-x6-pro',
      features: ['5G', 'Câmera Hasselblad', 'Carregamento super rápido'],
      pros: ['Design premium', 'Carregamento rápido'],
      cons: ['Marca menos conhecida']
    }
  ],
  'notebooks': [
    {
      id: 2,
      name: 'Notebook UltraBook Pro',
      brand: 'Dell',
      rating: 4.6,
      price: 'R$ 5.499',
      originalPrice: 'R$ 6.299',
      discount: 13,
      image: '/placeholder-laptop.jpg',
      affiliateLink: 'https://afiliado.com/ultrabook-pro',
      features: ['SSD', 'Dedicado GPU', 'Tela 4K'],
      pros: ['Performance excelente', 'Design fino'],
      cons: ['Bateria poderia ser melhor']
    },
    {
      id: 7,
      name: 'MacBook Air M3',
      brand: 'Apple',
      rating: 4.8,
      price: 'R$ 7.999',
      image: '/placeholder-macbook.jpg',
      affiliateLink: 'https://afiliado.com/macbook-air-m3',
      features: ['SSD', 'Apple Silicon', 'Tela Retina'],
      pros: ['Bateria incrível', 'Performance silenciosa'],
      cons: ['Preço elevado', 'Portas limitadas']
    }
  ]
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categoriesData[params.slug]
  const products = productsData[params.slug as keyof typeof productsData] || []

  if (!category) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="outline" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Link>
            </Button>
          </div>
          
          <div className="text-center">
            <div className="text-6xl mb-4">{category.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              {category.description}
            </p>
            <div className="flex items-center justify-center gap-6 text-muted-foreground">
              <span>{category.totalProducts} produtos</span>
              <span>•</span>
              <span>Reviews imparciais</span>
              <span>•</span>
              <span>Links de afiliado confiáveis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:w-64 flex-shrink-0"
            >
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <SlidersHorizontal className="h-5 w-5" />
                    Filtros
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Search */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Buscar</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Buscar produtos..." 
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Brand Filter */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Marca</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Todas as marcas" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas as marcas</SelectItem>
                        {category.filters.brands.map((brand: string) => (
                          <SelectItem key={brand} value={brand.toLowerCase()}>{brand}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Faixa de Preço</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Qualquer preço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Qualquer preço</SelectItem>
                        {category.filters.priceRanges.map((range: any) => (
                          <SelectItem key={range.label} value={range.label}>{range.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Features */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Características</label>
                    <div className="space-y-2">
                      {category.filters.features.map((feature: string) => (
                        <label key={feature} className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{feature}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Rating Filter */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Avaliação Mínima</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Qualquer avaliação" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Qualquer avaliação</SelectItem>
                        <SelectItem value="4">4+ estrelas</SelectItem>
                        <SelectItem value="3">3+ estrelas</SelectItem>
                        <SelectItem value="2">2+ estrelas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full">
                    <Filter className="mr-2 h-4 w-4" />
                    Aplicar Filtros
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Produtos ({products.length})</h2>
                  <p className="text-muted-foreground">Ordenado por mais populares</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <List className="h-4 w-4" />
                  </Button>
                  <Select>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Mais populares</SelectItem>
                      <SelectItem value="rating">Melhor avaliados</SelectItem>
                      <SelectItem value="price-low">Menor preço</SelectItem>
                      <SelectItem value="price-high">Maior preço</SelectItem>
                      <SelectItem value="newest">Mais recentes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  >
                    <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start mb-3">
                          <Badge variant="secondary">{product.brand}</Badge>
                          {product.discount && (
                            <Badge variant="destructive">-{product.discount}%</Badge>
                          )}
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                          {product.name}
                        </CardTitle>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{product.rating}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">•</span>
                          <div className="flex gap-1">
                            {product.features.slice(0, 2).map((feature, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <CardDescription className="text-lg font-semibold text-primary">
                          {product.price}
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through ml-2">
                              {product.originalPrice}
                            </span>
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="text-sm">
                            <span className="font-medium text-green-600">Prós:</span> {product.pros.join(', ')}
                          </div>
                          {product.cons && product.cons.length > 0 && (
                            <div className="text-sm">
                              <span className="font-medium text-red-600\">Contras:</span> {product.cons.join(', ')}
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" asChild className="flex-1">
                            <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                              <ShoppingCart className="mr-2 h-4 w-4" />
                              Ver Preço
                            </a>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <Link href={`/review/${product.id}`}>
                              Review
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Load More */}
              {products.length > 0 && (
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg">
                    Carregar Mais Produtos
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}