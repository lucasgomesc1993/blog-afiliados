import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Star, 
  ShoppingCart, 
  CheckCircle, 
  XCircle, 
  ArrowLeft,
  ExternalLink,
  Award,
  Trophy,
  Scale,
  Zap
} from 'lucide-react'
import Link from 'next/link'
import { AffiliatePriceBox } from '@/components/ui/affiliate-button'
import { AffiliateButton } from '@/components/ui/affiliate-button'

// Mock data - em produção viria do banco de dados
const productsData: Record<string, any> = {
  'galaxy-pro-max': {
    id: 1,
    name: 'Smartphone Galaxy Pro Max',
    brand: 'Samsung',
    category: 'Smartphones',
    rating: 4.8,
    price: 'R$ 3.999',
    originalPrice: 'R$ 4.599',
    discount: 13,
    affiliateLink: 'https://afiliado.com/galaxy-pro-max',
    store: 'Amazon',
    inStock: true,
    shipping: 'Grátis',
    warranty: '12 meses',
    image: '/placeholder-phone.jpg',
    specifications: {
      'Tela': '6.8" Dynamic AMOLED 2X, 144Hz',
      'Processador': 'Snapdragon 8 Gen 3',
      'Memória': '12GB RAM + 256GB',
      'Câmera Traseira': '200MP + 12MP + 10MP',
      'Câmera Frontal': '12MP',
      'Bateria': '5000mAh',
      'Carregamento': '45W rápido, 15W wireless',
      'Sistema': 'Android 14',
      'Resistência': 'IP68'
    },
    scores: {
      'Design': 95,
      'Performance': 98,
      'Câmera': 99,
      'Bateria': 94,
      'Custo-Benefício': 85
    },
    pros: [
      'Câmera excepcional de 200MP',
      'Tela AMOLED de alta qualidade',
      'Performance topo de linha',
      'Carregamento rápido',
      'Resistência à água'
    ],
    cons: [
      'Preço elevado',
      'Pode ser grande para algumas mãos'
    ]
  },
  'iphone-15-pro-max': {
    id: 2,
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    category: 'Smartphones',
    rating: 4.7,
    price: 'R$ 4.299',
    originalPrice: 'R$ 4.599',
    discount: 7,
    affiliateLink: 'https://afiliado.com/iphone-15-pro-max',
    store: 'Apple Store',
    inStock: true,
    shipping: 'Grátis',
    warranty: '12 meses',
    image: '/placeholder-iphone.jpg',
    specifications: {
      'Tela': '6.7" Super Retina XDR, 120Hz',
      'Processador': 'A17 Pro',
      'Memória': '8GB RAM + 256GB',
      'Câmera Traseira': '48MP + 12MP + 12MP',
      'Câmera Frontal': '12MP',
      'Bateria': '4422mAh',
      'Carregamento': '20W rápido, 15W MagSafe',
      'Sistema': 'iOS 17',
      'Resistência': 'IP68'
    },
    scores: {
      'Design': 98,
      'Performance': 96,
      'Câmera': 95,
      'Bateria': 88,
      'Custo-Benefício': 80
    },
    pros: [
      'Design premium em titanium',
      'Ecossistema Apple integrado',
      'Performance excelente',
      'Câmera profissional',
      'Atualizações por anos'
    ],
    cons: [
      'Preço muito alto',
      'Carregador não incluso',
      'Portas limitadas'
    ]
  }
}

export default function ComparisonPage({ params }: { params: { slugs: string[] } }) {
  // Parse slugs like "produto-1-vs-produto-2"
  const productSlugs = params.slugs.join('-vs-').split('-vs-')
  
  if (productSlugs.length < 2) {
    notFound()
  }

  const products = productSlugs.map((slug: string) => productsData[slug]).filter(Boolean)

  if (products.length < 2) {
    notFound()
  }

  const comparisonCategories = [
    { key: 'design', label: 'Design', icon: '🎨' },
    { key: 'performance', label: 'Performance', icon: '⚡' },
    { key: 'camera', label: 'Câmera', icon: '📷' },
    { key: 'battery', label: 'Bateria', icon: '🔋' },
    { key: 'value', label: 'Custo-Benefício', icon: '💰' }
  ]

  const getWinner = (category: string) => {
    const scores = products.map(p => p.scores[category.charAt(0).toUpperCase() + category.slice(1)])
    const maxScore = Math.max(...scores)
    const winnerIndex = scores.indexOf(maxScore)
    return products[winnerIndex].name
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Link>
            </Button>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Scale className="h-8 w-8" />
              <h1 className="text-4xl md:text-5xl font-bold">Comparação de Produtos</h1>
              <Scale className="h-8 w-8" />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              {products.map((product, index) => (
                <div key={product.id} className="flex items-center gap-3">
                  <div className="text-3xl">📱</div>
                  <div className="text-left">
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <p className="opacity-90">{product.brand}</p>
                  </div>
                  {index < products.length - 1 && (
                    <span className="text-3xl hidden md:block">VS</span>
                  )}
                </div>
              ))}
            </div>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Análise detalhada lado a lado para ajudar você a fazer a melhor escolha
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Comparison Table */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Comparação Rápida</CardTitle>
                  <CardDescription>
                    Visão geral das especificações principais
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-medium">Característica</th>
                          {products.map((product) => (
                            <th key={product.id} className="text-center p-3 font-medium">
                              {product.name}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Preço</td>
                          {products.map((product) => (
                            <td key={product.id} className="p-3 text-center">
                              <div className="space-y-1">
                                <div className="font-bold text-primary">{product.price}</div>
                                {product.originalPrice && (
                                  <div className="text-sm text-muted-foreground line-through">
                                    {product.originalPrice}
                                  </div>
                                )}
                                {product.discount && (
                                  <Badge variant="destructive" className="text-xs">
                                    -{product.discount}%
                                  </Badge>
                                )}
                              </div>
                            </td>
                          ))}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Avaliação</td>
                          {products.map((product) => (
                            <td key={product.id} className="p-3 text-center">
                              <div className="flex items-center justify-center gap-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="font-medium">{product.rating}</span>
                              </div>
                            </td>
                          ))}
                        </tr>
                        {Object.keys(products[0].specifications).map((spec) => (
                          <tr key={spec} className="border-b">
                            <td className="p-3 font-medium">{spec}</td>
                            {products.map((product) => (
                              <td key={product.id} className="p-3 text-center text-sm">
                                {product.specifications[spec]}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Winner Summary */}
            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    Vencedor por Categoria
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {comparisonCategories.map((category) => (
                    <div key={category.key} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{category.icon}</span>
                        <span className="font-medium">{category.label}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-primary">
                          {getWinner(category.key)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Vencedor
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Recomendação Final</h4>
                    <div className="space-y-2">
                      {products.map((product) => {
                        const avgScore = Object.values(product.scores).reduce((a: number, b: number) => a + b, 0) / Object.values(product.scores).length
                        const isWinner = avgScore === Math.max(...products.map(p => Object.values(p.scores).reduce((a: number, b: number) => a + b, 0) / Object.values(p.scores).length))
                        
                        return (
                          <div key={product.id} className={`p-3 rounded-lg border ${isWinner ? 'border-yellow-400 bg-yellow-50' : 'border-muted'}`}>
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium flex items-center gap-2">
                                  {product.name}
                                  {isWinner && <Trophy className="h-4 w-4 text-yellow-500" />}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Nota: {avgScore.toFixed(1)}/100
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-primary">{product.price}</div>
                                <div className="text-xs text-muted-foreground">
                                  {product.store}
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="scores" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="scores">Pontuação</TabsTrigger>
              <TabsTrigger value="pros-cons">Prós/Contras</TabsTrigger>
              <TabsTrigger value="detailed">Análise Detalhada</TabsTrigger>
              <TabsTrigger value="buy">Onde Comprar</TabsTrigger>
            </TabsList>
            
            <TabsContent value="scores" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {products.map((product) => (
                  <Card key={product.id}>
                    <CardHeader>
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription>Pontuação detalhada por categoria</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {Object.entries(product.scores).map(([category, score]) => (
                        <div key={category}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium capitalize">{category}</span>
                            <span className="font-bold">{score}/100</span>
                          </div>
                          <Progress value={score} className="h-2" />
                        </div>
                      ))}
                      
                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Média Final</span>
                          <span className="text-xl font-bold text-primary">
                            {(Object.values(product.scores).reduce((a: number, b: number) => a + b, 0) / Object.values(product.scores).length).toFixed(1)}/100
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="pros-cons" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {products.map((product) => (
                  <div key={product.id} className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          Prós - {product.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {product.pros.map((pro: string, index: number) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <XCircle className="h-5 w-5 text-red-600" />
                          Contras - {product.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {product.cons.map((con: string, index: number) => (
                            <li key={index} className="flex items-start gap-2">
                              <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="detailed" className="mt-8">
              <div className="space-y-8">
                {comparisonCategories.map((category) => (
                  <Card key={category.key}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-xl">{category.icon}</span>
                        {category.label}
                      </CardTitle>
                      <CardDescription>
                        Vencedor: {getWinner(category.key)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {products.map((product) => {
                          const score = product.scores[category.key.charAt(0).toUpperCase() + category.key.slice(1)]
                          const isWinner = score === Math.max(...products.map(p => p.scores[category.key.charAt(0).toUpperCase() + category.key.slice(1)]))
                          
                          return (
                            <div key={product.id} className={`p-4 rounded-lg border ${isWinner ? 'border-yellow-400 bg-yellow-50' : 'border-muted'}`}>
                              <div className="flex items-center justify-between mb-3">
                                <h4 className="font-medium">{product.name}</h4>
                                {isWinner && <Trophy className="h-5 w-5 text-yellow-500" />}
                              </div>
                              <div className="mb-3">
                                <Progress value={score} className="h-3" />
                                <div className="text-sm text-muted-foreground mt-1">
                                  {score}/100 pontos
                                </div>
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {category.key === 'design' && (
                                  <p>O {product.name} apresenta um design {score > 90 ? 'excepcional' : score > 80 ? 'muito bom' : 'bom'} com materiais premium e acabamento impecável.</p>
                                )}
                                {category.key === 'performance' && (
                                  <p>Performance {score > 90 ? 'excepcional' : score > 80 ? 'muito boa' : 'boa'} graças ao processador avançado e otimização de software.</p>
                                )}
                                {category.key === 'camera' && (
                                  <p>Sistema de câmera {score > 90 ? 'excepcional' : score > 80 ? 'muito bom' : 'bom'} com recursos profissionais e qualidade impressionante.</p>
                                )}
                                {category.key === 'battery' && (
                                  <p>Autonomia de bateria {score > 90 ? 'excepcional' : score > 80 ? 'muito boa' : 'boa'} com sistema de carregamento rápido eficiente.</p>
                                )}
                                {category.key === 'value' && (
                                  <p>Custo-benefício {score > 90 ? 'excepcional' : score > 80 ? 'muito bom' : 'bom'} considerando as características oferecidas.</p>
                                )}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="buy" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {products.map((product) => (
                  <AffiliatePriceBox
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Final Recommendation */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Recomendação Final</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {products.map((product) => {
                    const avgScore = Object.values(product.scores).reduce((a: number, b: number) => a + b, 0) / Object.values(product.scores).length
                    const isTopChoice = avgScore === Math.max(...products.map(p => Object.values(p.scores).reduce((a: number, b: number) => a + b, 0) / Object.values(p.scores).length))
                    
                    return (
                      <div key={product.id} className={`p-6 rounded-lg ${isTopChoice ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-400' : 'bg-muted'}`}>
                        {isTopChoice && (
                          <div className="flex items-center justify-center mb-4">
                            <Trophy className="h-8 w-8 text-yellow-500" />
                            <span className="ml-2 font-bold text-yellow-700">Melhor Escolha</span>
                          </div>
                        )}
                        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                        <div className="text-3xl font-bold text-primary mb-2">{product.price}</div>
                        <div className="text-lg font-semibold mb-2">
                          Nota: {avgScore.toFixed(1)}/100
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          {isTopChoice 
                            ? 'A melhor opção geral, equilibrando performance, câmera e custo-benefício.'
                            : avgScore > 90 
                              ? 'Excelente alternativa com características impressionantes.'
                              : 'Boa opção para quem busca funcionalidades específicas.'
                          }
                        </p>
                        <AffiliateButton
                          href={product.affiliateLink}
                          price={product.price}
                          store={product.store}
                          variant={isTopChoice ? 'glow' : 'default'}
                        >
                          {isTopChoice ? 'Comprar Melhor Opção' : 'Ver Preço'}
                        </AffiliateButton>
                      </div>
                    )
                  })}
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-bold text-blue-900 mb-2">Nossa Opinião</h4>
                  <p className="text-blue-800">
                    Ambos os produtos são excelentes escolhas, mas o {products.find(p => {
                      const avgScore = Object.values(p.scores).reduce((a: number, b: number) => a + b, 0) / Object.values(p.scores).length
                      return avgScore === Math.max(...products.map(p => Object.values(p.scores).reduce((a: number, b: number) => a + b, 0) / Object.values(p.scores).length))
                    })?.name} se destaca pela combinação superior de câmera, performance e valor geral. 
                    Sua escolha final deve considerar seu orçamento e preferências pessoais de ecossistema.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}