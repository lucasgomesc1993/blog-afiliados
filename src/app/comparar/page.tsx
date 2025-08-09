'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  ArrowRight, 
  Star, 
  ShoppingCart, 
  CheckCircle, 
  XCircle,
  Plus,
  Minus,
  Trophy,
  Award,
  Eye,
  Calendar
} from 'lucide-react'

interface Product {
  id: number
  name: string
  brand: string
  category: string
  rating: number
  price: string
  originalPrice?: string
  image: string
  affiliateLink: string
  description: string
  specifications: { [key: string]: string }
  pros: string[]
  cons: string[]
  reviewDate: string
  views: number
  highlights: string[]
}

interface ComparisonCategory {
  name: string
  products: Product[]
}

const comparisonData: ComparisonCategory[] = [
  {
    name: 'Smartphones Premium',
    products: [
      {
        id: 1,
        name: 'Galaxy Pro Max',
        brand: 'Samsung',
        category: 'Smartphones',
        rating: 4.8,
        price: 'R$ 3.999',
        originalPrice: 'R$ 4.499',
        image: '/placeholder-phone.jpg',
        affiliateLink: 'https://afiliado.com/galaxy-pro-max',
        description: 'Smartphone Android topo de linha com câmera profissional e bateria de longa duração.',
        specifications: {
          'Tela': '6.8" AMOLED 120Hz',
          'Processador': 'Snapdragon 8 Gen 2',
          'Memória': '12GB RAM + 256GB',
          'Câmera Principal': '108MP',
          'Bateria': '5000mAh',
          'Carregamento': '45W rápido',
          'Sistema': 'Android 13',
          'Peso': '221g'
        },
        pros: ['Câmera incrível', 'Bateria duradoura', 'Tela AMOLED', 'Performance excelente'],
        cons: ['Preço elevado', 'Carregador não incluso'],
        reviewDate: '15/03/2024',
        views: 1234,
        highlights: ['108MP Camera', '5000mAh Battery', '120Hz Display']
      },
      {
        id: 2,
        name: 'iPhone 15 Pro',
        brand: 'Apple',
        category: 'Smartphones',
        rating: 4.7,
        price: 'R$ 4.299',
        image: '/placeholder-iphone.jpg',
        affiliateLink: 'https://afiliado.com/iphone-15-pro',
        description: 'Smartphone iOS com chip A17 Pro e câmera profissional em design titânio.',
        specifications: {
          'Tela': '6.1" Super Retina XDR',
          'Processador': 'A17 Pro',
          'Memória': '8GB RAM + 256GB',
          'Câmera Principal': '48MP',
          'Bateria': '3274mAh',
          'Carregamento': '20W rápido',
          'Sistema': 'iOS 17',
          'Peso': '187g'
        },
        pros: ['Performance excelente', 'Câmera profissional', 'Ecossistema Apple', 'Design premium'],
        cons: ['Preço muito alto', 'Bateria menor que concorrentes'],
        reviewDate: '10/03/2024',
        views: 987,
        highlights: ['A17 Pro Chip', 'Titanium Design', 'Pro Camera System']
      }
    ]
  },
  {
    name: 'Notebooks Profissionais',
    products: [
      {
        id: 3,
        name: 'UltraBook Pro',
        brand: 'Dell',
        category: 'Notebooks',
        rating: 4.6,
        price: 'R$ 5.499',
        image: '/placeholder-laptop.jpg',
        affiliateLink: 'https://afiliado.com/ultrabook-pro',
        description: 'Notebook ultrafino com performance excepcional para profissionais e criativos.',
        specifications: {
          'Tela': '14" 4K OLED',
          'Processador': 'Intel Core i7-13700H',
          'Memória': '16GB RAM + 512GB SSD',
          'Placa de Vídeo': 'Intel Iris Xe',
          'Bateria': '70Wh',
          'Peso': '1.2kg',
          'Sistema': 'Windows 11 Pro',
          'Portas': '2x Thunderbolt 4, 1x USB-A, 1x HDMI'
        },
        pros: ['Performance excelente', 'Design fino', 'Tela 4K', 'Portabilidade'],
        cons: ['Bateria poderia ser melhor', 'Preço elevado'],
        reviewDate: '12/03/2024',
        views: 876,
        highlights: ['4K OLED Display', 'Intel i7', 'Ultra-portable']
      },
      {
        id: 4,
        name: 'MacBook Air M2',
        brand: 'Apple',
        category: 'Notebooks',
        rating: 4.8,
        price: 'R$ 7.999',
        image: '/placeholder-macbook.jpg',
        affiliateLink: 'https://afiliado.com/macbook-air-m2',
        description: 'Notebook com chip M2, bateria incrível e design ultrafino.',
        specifications: {
          'Tela': '13.6" Liquid Retina',
          'Processador': 'Apple M2',
          'Memória': '8GB RAM + 256GB SSD',
          'Placa de Vídeo': 'Apple M2 GPU',
          'Bateria': '52.6Wh',
          'Peso': '1.24kg',
          'Sistema': 'macOS',
          'Portas': '2x Thunderbolt 4, 1x MagSafe'
        },
        pros: ['Bateria incrível', 'Silencioso', 'Performance excelente', 'Design premium'],
        cons: ['Preço elevado', 'Memória não expansível'],
        reviewDate: '05/03/2024',
        views: 1432,
        highlights: ['M2 Chip', '18h Battery', 'Silent Operation']
      }
    ]
  }
]

export default function CompararPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>(comparisonData[0].name)
  const [selectedProducts, setSelectedProducts] = useState<Product[]>(comparisonData[0].products)

  const currentCategory = comparisonData.find(cat => cat.name === selectedCategory)
  const availableProducts = currentCategory?.products || []

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategory(categoryName)
    const category = comparisonData.find(cat => cat.name === categoryName)
    if (category) {
      setSelectedProducts(category.products)
    }
  }

  const getWinner = (products: Product[]) => {
    return products.reduce((winner, product) => 
      product.rating > winner.rating ? product : winner
    )
  }

  const getSpecComparison = (products: Product[]) => {
    const allSpecs = new Set<string>()
    products.forEach(product => {
      Object.keys(product.specifications).forEach(spec => allSpecs.add(spec))
    })
    return Array.from(allSpecs)
  }

  const renderWinnerBadge = (product: Product, isWinner: boolean) => {
    if (!isWinner) return null
    
    return (
      <Badge className="bg-yellow-500 text-white">
        <Trophy className="h-3 w-3 mr-1" />
        Vencedor
      </Badge>
    )
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Comparar Produtos</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Compare produtos lado a lado com análises detalhadas e faça a melhor escolha para suas necessidades
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-sm">
                <CheckCircle className="h-4 w-4 mr-1" />
                Análise Detalhada
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Star className="h-4 w-4 mr-1" />
                Comparação Objetiva
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Trophy className="h-4 w-4 mr-1" />
                Recomendação Final
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Category Selection */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Escolha uma Categoria</h2>
            <p className="text-muted-foreground">
              Selecione a categoria de produtos que deseja comparar
            </p>
          </div>
          
          <div className="flex justify-center">
            <Select value={selectedCategory} onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-80">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {comparisonData.map(category => (
                  <SelectItem key={category.name} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {selectedProducts.length >= 2 && (
            <>
              {/* Winner Announcement */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
                  <Trophy className="h-5 w-5" />
                  <span className="font-semibold">
                    Vencedor: {getWinner(selectedProducts).name}
                  </span>
                </div>
              </motion.div>

              {/* Products Header */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div></div>
                {selectedProducts.map((product, index) => {
                  const isWinner = product.id === getWinner(selectedProducts).id
                  return (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                    >
                      <Card className="text-center">
                        <CardHeader className="pb-4">
                          <div className="flex justify-center mb-4">
                            <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                              <div className="text-3xl">📱</div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            {renderWinnerBadge(product, isWinner)}
                            <CardTitle className="text-lg">{product.name}</CardTitle>
                            <CardDescription>{product.brand}</CardDescription>
                            <div className="flex items-center justify-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{product.rating}</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-center justify-center gap-3">
                            <span className="text-2xl font-bold text-primary">{product.price}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                            )}
                          </div>
                          
                          <Button size="lg" asChild className="w-full">
                            <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                              <ShoppingCart className="mr-2 h-4 w-4" />
                              Comprar
                            </a>
                          </Button>
                          
                          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              <span>{product.views}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{product.reviewDate}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>

              {/* Specifications Comparison */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Especificações Técnicas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {getSpecComparison(selectedProducts).map((spec, index) => (
                      <div key={spec} className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b last:border-b-0">
                        <div className="font-medium">{spec}</div>
                        {selectedProducts.map((product, productIndex) => (
                          <div key={productIndex} className="text-center">
                            {product.specifications[spec] || '-'}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Pros and Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Pros */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="h-5 w-5" />
                      Prós
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {selectedProducts.map((product, index) => (
                        <div key={product.id}>
                          <div className="font-medium mb-2 flex items-center gap-2">
                            {product.name}
                            {renderWinnerBadge(product, product.id === getWinner(selectedProducts).id)}
                          </div>
                          <ul className="text-sm space-y-1">
                            {product.pros.map((pro, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <CheckCircle className="h-3 w-3 text-green-600" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Cons */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-600">
                      <XCircle className="h-5 w-5" />
                      Contras
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {selectedProducts.map((product, index) => (
                        <div key={product.id}>
                          <div className="font-medium mb-2 flex items-center gap-2">
                            {product.name}
                            {renderWinnerBadge(product, product.id === getWinner(selectedProducts).id)}
                          </div>
                          <ul className="text-sm space-y-1">
                            {product.cons.map((con, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <XCircle className="h-3 w-3 text-red-600" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Final Recommendation */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Recomendação Final
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <p className="mb-4">
                      Após análise detalhada dos produtos comparados, nossa recomendação é o <strong>{getWinner(selectedProducts).name}</strong>.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold mb-2">Principais Motivos:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Melhor avaliação geral ({getWinner(selectedProducts).rating}/5)</li>
                        <li>• Melhor relação custo-benefício</li>
                        <li>• Especificações superiores na categoria</li>
                        <li>• Melhor experiência do usuário</li>
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      * Esta recomendação é baseada em testes práticos, análise de especificações e feedback de usuários. 
                      Sua escolha final deve considerar suas necessidades específicas e orçamento.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </section>

      {/* Other Comparisons */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Outras Comparações</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore outras comparações detalhadas entre produtos populares
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisonData.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <CardDescription>
                      {category.products.length} produtos comparados
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {category.products.map(product => (
                        <div key={product.id} className="flex items-center justify-between text-sm">
                          <span>{product.name}</span>
                          <Badge variant="outline">{product.rating}</Badge>
                        </div>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => handleCategoryChange(category.name)}
                    >
                      Ver Comparação
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}