'use client'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Star, 
  ShoppingCart, 
  Trophy, 
  Medal, 
  Award,
  ArrowLeft,
  CheckCircle,
  XCircle,
  ExternalLink
} from 'lucide-react'
import Link from 'next/link'

// Mock data - em produção viria do banco de dados
const bestProductsData: Record<string, any> = {
  'geral': {
    title: 'Melhores Produtos de 2024',
    description: 'Os produtos mais bem avaliados e recomendados pela nossa equipe de especialistas',
    subtitle: 'Top 10 produtos que se destacaram em qualidade, performance e custo-benefício',
    lastUpdated: 'Atualizado em 15 de janeiro de 2024',
    categories: ['Smartphones', 'Notebooks', 'Áudio', 'Casa Inteligente', 'Gaming', 'Fitness']
  },
  'smartphones': {
    title: 'Melhores Smartphones de 2024',
    description: 'Os melhores aparelhos celulares do mercado analisados por especialistas',
    subtitle: 'Top 10 smartphones com melhor câmera, bateria e performance',
    lastUpdated: 'Atualizado em 12 de janeiro de 2024',
    categories: ['Premium', 'Intermediário', 'Básico']
  }
}

const productsRanking = {
  'geral': [
    {
      rank: 1,
      id: 1,
      name: 'Smartphone Galaxy Pro Max',
      category: 'Smartphones',
      brand: 'Samsung',
      rating: 4.8,
      price: 'R$ 3.999',
      affiliateLink: 'https://afiliado.com/galaxy-pro-max',
      pros: ['Câmera excepcional', 'Bateria duradoura', 'Performance topo de linha'],
      cons: ['Preço elevado'],
      score: 96,
      bestFor: 'Melhor câmera e performance geral',
      verdict: 'O melhor smartphone do mercado, ideal para quem busca o máximo em tecnologia e qualidade.'
    },
    {
      rank: 2,
      id: 2,
      name: 'iPhone 15 Pro Max',
      category: 'Smartphones',
      brand: 'Apple',
      rating: 4.7,
      price: 'R$ 4.299',
      affiliateLink: 'https://afiliado.com/iphone-15-pro-max',
      pros: ['Ecossistema Apple', 'Performance excelente', 'Câmera profissional'],
      cons: ['Preço muito alto', 'Carregador não incluso'],
      score: 94,
      bestFor: 'Usuários do ecossistema Apple',
      verdict: 'Excelente opção para quem já investe no ecossistema Apple, com performance impressionante.'
    },
    {
      rank: 3,
      id: 7,
      name: 'MacBook Air M3',
      category: 'Notebooks',
      brand: 'Apple',
      rating: 4.8,
      price: 'R$ 7.999',
      affiliateLink: 'https://afiliado.com/macbook-air-m3',
      pros: ['Bateria incrível', 'Performance silenciosa', 'Design premium'],
      cons: ['Preço elevado', 'Portas limitadas'],
      score: 93,
      bestFor: 'Profissionais e estudantes',
      verdict: 'O melhor notebook para produtividade, com bateria que dura o dia todo.'
    },
    {
      rank: 4,
      id: 3,
      name: 'Fones de Ouvido Wireless X',
      category: 'Áudio',
      brand: 'Sony',
      rating: 4.7,
      price: 'R$ 899',
      affiliateLink: 'https://afiliado.com/fones-x',
      pros: ['Cancelamento de ruído', 'Qualidade de som', 'Confortável'],
      cons: ['Preço alto'],
      score: 92,
      bestFor: 'Audiófilos e viajantes',
      verdict: 'Melhor relação qualidade-preço em fones com cancelamento de ruído.'
    },
    {
      rank: 5,
      id: 2,
      name: 'Notebook UltraBook Pro',
      category: 'Notebooks',
      brand: 'Dell',
      rating: 4.6,
      price: 'R$ 5.499',
      affiliateLink: 'https://afiliado.com/ultrabook-pro',
      pros: ['Performance excelente', 'Design fino', 'Tela 4K'],
      cons: ['Bateria poderia ser melhor'],
      score: 90,
      bestFor: 'Profissionais em movimento',
      verdict: 'Ótimo notebook para trabalho com design premium e tela impressionante.'
    }
  ],
  'smartphones': [
    {
      rank: 1,
      id: 1,
      name: 'Smartphone Galaxy Pro Max',
      category: 'Smartphones',
      brand: 'Samsung',
      rating: 4.8,
      price: 'R$ 3.999',
      affiliateLink: 'https://afiliado.com/galaxy-pro-max',
      pros: ['Câmera excepcional', 'Bateria duradoura', 'Performance topo de linha'],
      cons: ['Preço elevado'],
      score: 96,
      bestFor: 'Melhor câmera e performance geral',
      verdict: 'O melhor smartphone Android do mercado atualmente.'
    },
    {
      rank: 2,
      id: 2,
      name: 'iPhone 15 Pro Max',
      category: 'Smartphones',
      brand: 'Apple',
      rating: 4.7,
      price: 'R$ 4.299',
      affiliateLink: 'https://afiliado.com/iphone-15-pro-max',
      pros: ['Ecossistema Apple', 'Performance excelente', 'Câmera profissional'],
      cons: ['Preço muito alto', 'Carregador não incluso'],
      score: 94,
      bestFor: 'Usuários do ecossistema Apple',
      verdict: 'Melhor iPhone já feito, com câmera revolucionária.'
    },
    {
      rank: 3,
      id: 5,
      name: 'Xiaomi 14 Ultra',
      category: 'Smartphones',
      brand: 'Xiaomi',
      rating: 4.6,
      price: 'R$ 3.599',
      affiliateLink: 'https://afiliado.com/xiaomi-14-ultra',
      pros: ['Custo-benefício', 'Câmera profissional', 'Carregamento rápido'],
      cons: ['UI poderia ser melhor'],
      score: 91,
      bestFor: 'Quem busca qualidade por menor preço',
      verdict: 'Alternativa premium com preço mais acessível.'
    }
  ]
}

export default function BestProductsPage({ params }: { params: { categoria: string } }) {
  const categoryData = bestProductsData[params.categoria]
  const products = productsRanking[params.categoria as keyof typeof productsRanking] || []

  if (!categoryData) {
    notFound()
  }

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />
      default:
        return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>
    }
  }

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case 2:
        return "bg-gray-100 text-gray-800 border-gray-200"
      case 3:
        return "bg-amber-100 text-amber-800 border-amber-200"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Link>
            </Button>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{categoryData.title}</h1>
              <p className="text-xl text-muted-foreground mb-4">{categoryData.description}</p>
              <p className="text-lg text-muted-foreground mb-8">{categoryData.subtitle}</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>Análises especializadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Produtos testados</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-yellow-500" />
                  <span>Ranking atualizado</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{categoryData.lastUpdated}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ranking */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categoryData.categories.map((cat: string) => (
                <Badge key={cat} variant="outline" className="px-4 py-2">
                  {cat}
                </Badge>
              ))}
            </div>

            {/* Products Ranking */}
            <div className="space-y-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                >
                  <Card className={`overflow-hidden ${product.rank <= 3 ? 'ring-2 ' + (product.rank === 1 ? 'ring-yellow-400' : product.rank === 2 ? 'ring-gray-400' : 'ring-amber-400') : ''}`}>
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        {/* Rank Column */}
                        <div className={`flex items-center justify-center p-6 ${product.rank <= 3 ? getRankBadgeColor(product.rank) : 'bg-muted'}`}>
                          <div className="text-center">
                            <div className="mb-2 flex justify-center">
                              {getRankIcon(product.rank)}
                            </div>
                            <div className="text-sm font-medium">Rank</div>
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 p-6">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <Badge variant="secondary">{product.category}</Badge>
                                <Badge variant="outline">{product.brand}</Badge>
                              </div>
                              <h3 className="text-xl font-bold">{product.name}</h3>
                              <div className="flex items-center gap-4 mt-2">
                                <div className="flex items-center gap-1">
                                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  <span className="font-medium">{product.rating}</span>
                                </div>
                                <span className="text-lg font-bold text-primary">{product.price}</span>
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary mb-1">{product.score}/100</div>
                              <Progress value={product.score} className="w-24 h-2" />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                              <h4 className="font-medium text-green-600 mb-2 flex items-center gap-1">
                                <CheckCircle className="h-4 w-4" />
                                Prós
                              </h4>
                              <ul className="text-sm space-y-1">
                                {product.pros.map((pro: string, idx: number) => (
                                  <li key={idx} className="text-muted-foreground">• {pro}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium text-red-600 mb-2 flex items-center gap-1">
                                <XCircle className="h-4 w-4" />
                                Contras
                              </h4>
                              <ul className="text-sm space-y-1">
                                {product.cons.map((con: string, idx: number) => (
                                  <li key={idx} className="text-muted-foreground">• {con}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium text-primary mb-2">Ideal para</h4>
                              <p className="text-sm text-muted-foreground">{product.bestFor}</p>
                            </div>
                          </div>

                          <div className="bg-muted/50 p-4 rounded-lg mb-4">
                            <h4 className="font-medium mb-2">Nosso Veredito</h4>
                            <p className="text-sm text-muted-foreground">{product.verdict}</p>
                          </div>

                          <div className="flex gap-3">
                            <Button className="flex-1" asChild>
                              <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                                <ShoppingCart className="mr-2 h-4 w-4" />
                                Ver Melhor Preço
                                <ExternalLink className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                            <Button variant="outline" asChild>
                              <Link href={`/review/${product.id}`}>
                                Ver Review Completa
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Methodology */}
            <Card className="mt-12">
              <CardHeader>
                <CardTitle>Nossa Metodologia de Avaliação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Como avaliamos os produtos</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Testes práticos em condições reais de uso</li>
                      <li>• Análise de especificações técnicas</li>
                      <li>• Comparação com produtos similares</li>
                      <li>• Avaliação de custo-benefício</li>
                      <li>• Pesquisa de opinião de usuários</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Critérios de avaliação</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Qualidade e performance (40%)</li>
                      <li>• Custo-benefício (25%)</li>
                      <li>• Design e usabilidade (15%)</li>
                      <li>• Suporte e garantia (10%)</li>
                      <li>• Inovação e recursos (10%)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}