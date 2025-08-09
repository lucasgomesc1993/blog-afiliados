'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Star, 
  ShoppingCart, 
  Clock, 
  Fire, 
  Gift,
  Search,
  Filter,
  Bell,
  ArrowRight,
  ExternalLink,
  Timer,
  Tag
} from 'lucide-react'
import Link from 'next/link'
import ProductCard from '@/components/ui/product-card'

// Mock data - em produção viria do banco de dados
const dealsData = {
  featured: [
    {
      id: 1,
      name: 'Smartphone Galaxy Pro Max',
      originalPrice: 'R$ 4.599',
      currentPrice: 'R$ 3.999',
      discount: 13,
      discountAmount: 'R$ 600',
      rating: 4.8,
      image: '/images/products/smartphone-galaxy-pro-max.jpg',
      affiliateLink: 'https://afiliado.com/galaxy-pro-max',
      store: 'Amazon',
      expiresIn: '2 dias',
      isHot: true,
      isLimited: true,
      category: 'Smartphones'
    },
    {
      id: 2,
      name: 'Notebook UltraBook Pro',
      originalPrice: 'R$ 6.299',
      currentPrice: 'R$ 5.499',
      discount: 13,
      discountAmount: 'R$ 800',
      rating: 4.6,
      image: '/images/products/laptop-ultrabook-pro.jpg',
      affiliateLink: 'https://afiliado.com/ultrabook-pro',
      store: 'Magazine Luiza',
      expiresIn: '1 dia',
      isHot: true,
      isLimited: false,
      category: 'Notebooks'
    }
  ],
  daily: [
    {
      id: 3,
      name: 'Fones de Ouvido Wireless X',
      originalPrice: 'R$ 1.299',
      currentPrice: 'R$ 899',
      discount: 31,
      discountAmount: 'R$ 400',
      rating: 4.7,
      image: '/images/products/headphones-wireless-x.jpg',
      affiliateLink: 'https://afiliado.com/fones-x',
      store: 'Americanas',
      expiresIn: '12 horas',
      isHot: false,
      isLimited: true,
      category: 'Áudio'
    },
    {
      id: 4,
      name: 'Smart TV 55" 4K',
      originalPrice: 'R$ 2.999',
      currentPrice: 'R$ 2.199',
      discount: 27,
      discountAmount: 'R$ 800',
      rating: 4.5,
      image: '/images/products/smart-tv-4k.jpg',
      affiliateLink: 'https://afiliado.com/smart-tv',
      store: 'Casas Bahia',
      expiresIn: '8 horas',
      isHot: true,
      isLimited: true,
      category: 'TVs'
    },
    {
      id: 5,
      name: 'Smartwatch Pro',
      originalPrice: 'R$ 1.599',
      currentPrice: 'R$ 999',
      discount: 38,
      discountAmount: 'R$ 600',
      rating: 4.4,
      image: '/images/products/smartwatch-premium.jpg',
      affiliateLink: 'https://afiliado.com/smartwatch',
      store: 'Amazon',
      expiresIn: '6 horas',
      isHot: false,
      isLimited: true,
      category: 'Wearables'
    }
  ],
  categories: [
    { name: 'Smartphones', count: 15, icon: '📱' },
    { name: 'Notebooks', count: 12, icon: '💻' },
    { name: 'Áudio', count: 8, icon: '🎧' },
    { name: 'TVs', count: 6, icon: '📺' },
    { name: 'Gaming', count: 9, icon: '🎮' },
    { name: 'Casa Inteligente', count: 7, icon: '🏠' }
  ],
  stores: [
    { name: 'Amazon', logo: '🛒', deals: 45 },
    { name: 'Magazine Luiza', logo: '🛍️', deals: 32 },
    { name: 'Americanas', logo: '🏪', deals: 28 },
    { name: 'Casas Bahia', logo: '🏬', deals: 24 },
    { name: 'Fast Shop', logo: '⚡', deals: 18 }
  ]
}

export default function OffersPage() {
  const { featured, daily, categories, stores } = dealsData

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-red-500 via-red-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Fire className="h-8 w-8" />
              <h1 className="text-4xl md:text-5xl font-bold">Ofertas Exclusivas</h1>
              <Fire className="h-8 w-8" />
            </div>
            <p className="text-xl mb-8 opacity-90">
              As melhores promoções e descontos em produtos selecionados pela nossa equipe
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Timer className="h-4 w-4" />
                <span>Ofertas relâmpago</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Tag className="h-4 w-4" />
                <span>Até 50% de desconto</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Gift className="h-4 w-4" />
                <span>Produtos verificados</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar ofertas..." 
                className="pl-10"
              />
            </div>
            <div className="flex gap-3">
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Todas categorias" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas categorias</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat.name} value={cat.name.toLowerCase()}>{cat.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Todas lojas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas lojas</SelectItem>
                  {stores.map((store) => (
                    <SelectItem key={store.name} value={store.name.toLowerCase()}>{store.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filtros
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Deals */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
                <Fire className="h-6 w-6 text-red-500" />
                Ofertas em Destaque
              </h2>
              <p className="text-muted-foreground">As melhores promoções selecionadas pela nossa equipe</p>
            </div>
            <Button variant="outline">
              Ver todas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featured.map((deal, index) => (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative">
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <div className="text-6xl text-muted-foreground">📱</div>
                    </div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      {deal.isHot && (
                        <Badge className="bg-red-500 hover:bg-red-600">
                          <Fire className="h-3 w-3 mr-1" />
                          Quente
                        </Badge>
                      )}
                      {deal.isLimited && (
                        <Badge variant="destructive">
                          <Clock className="h-3 w-3 mr-1" />
                          Limitado
                        </Badge>
                      )}
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="text-lg px-3 py-1">
                        -{deal.discount}%
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge variant="secondary" className="mb-2">{deal.category}</Badge>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {deal.name}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{deal.rating}</span>
                          <span>•</span>
                          <span>{deal.store}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg text-muted-foreground line-through">
                            {deal.originalPrice}
                          </span>
                          <span className="text-2xl font-bold text-primary">
                            {deal.currentPrice}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-red-800">
                          Você economiza {deal.discountAmount}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-red-600">
                          <Clock className="h-4 w-4" />
                          <span>Expira em {deal.expiresIn}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button className="flex-1" asChild>
                        <a href={deal.affiliateLink} target="_blank" rel="noopener noreferrer">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Aproveitar Oferta
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon">
                        <Bell className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Deals */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
                <Clock className="h-6 w-6 text-orange-500" />
                Ofertas do Dia
              </h2>
              <p className="text-muted-foreground">Promoções relâmpago que expiram em breve</p>
            </div>
            <div className="text-sm text-muted-foreground">
              Atualizado há 5 minutos
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {daily.map((deal, index) => (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <Card className="hover:shadow-lg transition-shadow group">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary">{deal.category}</Badge>
                      <Badge className="bg-orange-500 hover:bg-orange-600">
                        -{deal.discount}%
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {deal.name}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{deal.rating}</span>
                      <span>•</span>
                      <span>{deal.store}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-4xl text-muted-foreground">
                        {deal.category === 'Áudio' ? '🎧' : 
                         deal.category === 'TVs' ? '📺' : '⌚'}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground line-through text-sm">
                          {deal.originalPrice}
                        </span>
                        <span className="font-bold text-primary">
                          {deal.currentPrice}
                        </span>
                      </div>
                      <div className="text-sm text-green-600 font-medium">
                        Economize {deal.discountAmount}
                      </div>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-2">
                      <div className="flex items-center gap-1 text-sm text-orange-600">
                        <Clock className="h-4 w-4" />
                        <span>Expira em {deal.expiresIn}</span>
                      </div>
                    </div>

                    <Button className="w-full" asChild>
                      <a href={deal.affiliateLink} target="_blank" rel="noopener noreferrer">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Ver Oferta
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories and Stores */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Categories */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Ofertas por Categoria</h3>
              <div className="grid grid-cols-2 gap-4">
                {categories.map((category) => (
                  <Link key={category.name} href={`/ofertas?categoria=${category.name.toLowerCase()}`}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer group">
                      <CardContent className="p-4 text-center">
                        <div className="text-3xl mb-2">{category.icon}</div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">
                          {category.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {category.count} ofertas
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Stores */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Lojas Parceiras</h3>
              <div className="space-y-3">
                {stores.map((store) => (
                  <Card key={store.name} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{store.logo}</span>
                          <div>
                            <h4 className="font-medium">{store.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {store.deals} ofertas ativas
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Ver Ofertas
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Gift className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Nunca Perca uma Oferta
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Assine nossa newsletter e receba as melhores promoções diretamente no seu email. 
              Ofertas exclusivas e alertas de preço para não perder nenhuma oportunidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Seu melhor email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="secondary" size="lg" className="flex-1">
                <Bell className="mr-2 h-4 w-4" />
                Assinar
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}