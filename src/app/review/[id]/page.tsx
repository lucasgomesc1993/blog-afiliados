'use client'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2, 
  CheckCircle, 
  XCircle, 
  Camera, 
  Monitor, 
  Battery, 
  Cpu,
  ArrowLeft,
  ExternalLink
} from 'lucide-react'
import Link from 'next/link'

// Mock data - em produção viria do banco de dados
const productData: Record<string, any> = {
  '1': {
    id: 1,
    name: 'Smartphone Galaxy Pro Max',
    category: 'Smartphones',
    brand: 'Samsung',
    rating: 4.8,
    totalReviews: 1247,
    price: 'R$ 3.999',
    originalPrice: 'R$ 4.599',
    discount: 13,
    affiliateLink: 'https://afiliado.com/galaxy-pro-max',
    images: ['/images/products/smartphone-galaxy-pro-max.jpg', '/images/products/smartphone-galaxy-pro-max-side.jpg', '/images/products/smartphone-galaxy-pro-max-camera.jpg'],
    description: 'O Smartphone Galaxy Pro Max é o topo de linha da Samsung, combinando design premium com performance excepcional. Equipado com o mais recente processador e câmera revolucionária, este dispositivo redefine o que um smartphone pode fazer.',
    pros: [
      'Câmera de 200MP com zoom espacial',
      'Bateria de 5000mAh com carregamento rápido',
      'Tela Dynamic AMOLED 2X de 6.8 polegadas',
      'Processador Snapdragon 8 Gen 3',
      'Resistência à água IP68',
      'Suporte a 5G e Wi-Fi 6E'
    ],
    cons: [
      'Preço elevado',
      'Pode ser grande para algumas mãos',
      'Carregador não incluso na caixa'
    ],
    specifications: {
      'Tela': '6.8" Dynamic AMOLED 2X, 144Hz',
      'Processador': 'Snapdragon 8 Gen 3',
      'Memória': '12GB RAM + 256GB/512GB/1TB',
      'Câmera Traseira': '200MP + 12MP + 10MP',
      'Câmera Frontal': '12MP',
      'Bateria': '5000mAh',
      'Carregamento': '45W rápido, 15W wireless',
      'Sistema': 'Android 14 com One UI 6.1',
      'Conectividade': '5G, Wi-Fi 6E, Bluetooth 5.3',
      'Resistência': 'IP68'
    },
    alternatives: [
      {
        id: 2,
        name: 'iPhone 15 Pro Max',
        price: 'R$ 4.299',
        rating: 4.7,
        href: '/review/2'
      },
      {
        id: 3,
        name: 'Xiaomi 14 Ultra',
        price: 'R$ 3.599',
        rating: 4.6,
        href: '/review/3'
      }
    ],
    userReviews: [
      {
        id: 1,
        user: 'João Silva',
        rating: 5,
        date: '2024-01-15',
        comment: 'Excelente smartphone! A câmera é incrível e a bateria dura o dia todo.'
      },
      {
        id: 2,
        user: 'Maria Santos',
        rating: 4,
        date: '2024-01-10',
        comment: 'Ótimo aparelho, mas o preço é um pouco salgado. Vale a pena se você quer o melhor.'
      }
    ]
  }
}

export default function ReviewPage({ params }: { params: { id: string } }) {
  const product = productData[params.id]

  if (!product) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary">
              Início
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link href={`/categoria/${product.category.toLowerCase()}`} className="text-muted-foreground hover:text-primary">
              {product.category}
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Header */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-4">
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <Camera className="h-24 w-24 text-muted-foreground" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                      <Camera className="h-8 w-8 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="secondary">{product.category}</Badge>
                  <Badge variant="outline">{product.brand}</Badge>
                  {product.discount > 0 && (
                    <Badge variant="destructive">-{product.discount}%</Badge>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-lg font-semibold">{product.rating}</span>
                    <span className="text-muted-foreground">({product.totalReviews} avaliações)</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-6">
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  )}
                  <span className="text-3xl font-bold text-primary">{product.price}</span>
                  {product.discount > 0 && (
                    <Badge variant="destructive" className="text-sm">
                      Economize {product.discount}%
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground mb-6">{product.description}</p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button size="lg" className="w-full" asChild>
                  <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Ver Melhor Preço
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <div className="flex gap-3">
                  <Button size="lg" variant="outline" className="flex-1">
                    <Heart className="mr-2 h-4 w-4" />
                    Favoritar
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    <Share2 className="mr-2 h-4 w-4" />
                    Compartilhar
                  </Button>
                </div>
              </div>

              {/* Quick Pros/Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-green-600 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Prós
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.pros.slice(0, 3).map((pro: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-red-600 flex items-center gap-2">
                      <XCircle className="h-5 w-5" />
                      Contras
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.cons.map((con: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Review */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="review" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="review">Review Completa</TabsTrigger>
              <TabsTrigger value="specs">Especificações</TabsTrigger>
              <TabsTrigger value="alternatives">Alternativas</TabsTrigger>
              <TabsTrigger value="reviews">Avaliações</TabsTrigger>
            </TabsList>
            
            <TabsContent value="review" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Análise Detalhada</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                          <Camera className="h-5 w-5" />
                          Câmera Excepcional
                        </h3>
                        <p className="text-muted-foreground">
                          O Galaxy Pro Max vem equipado com um sistema de câmera revolucionário. 
                          A câmera principal de 200MP captura imagens com detalhes impressionantes, 
                          mesmo em condições de baixa luminosidade. O zoom espacial permite até 100x de ampliação 
                          com qualidade surpreendente.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                          <Monitor className="h-5 w-5" />
                          Tela Imersiva
                        </h3>
                        <p className="text-muted-foreground">
                          A tela Dynamic AMOLED 2X de 6.8 polegadas oferece cores vibrantes e pretos profundos. 
                          Com taxa de atualização de 144Hz, a experiência visual é fluida e responsiva, 
                          perfeita para jogos e consumo de conteúdo.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                          <Battery className="h-5 w-5" />
                          Bateria de Longa Duração
                        </h3>
                        <p className="text-muted-foreground">
                          Com 5000mAh de capacidade, a bateria facilmente dura um dia inteiro de uso intensivo. 
                          O carregamento rápido de 45W permite carregar de 0 a 100% em menos de uma hora.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                          <Cpu className="h-5 w-5" />
                          Performance de Alto Nível
                        </h3>
                        <p className="text-muted-foreground">
                          O processador Snapdragon 8 Gen 3 combinado com 12GB de RAM garante performance 
                          excepcional para qualquer tarefa, desde jogos pesados até multitasking intensivo.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card className="sticky top-4">
                    <CardHeader>
                      <CardTitle>Resumo da Avaliação</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">{product.rating}/5</div>
                        <div className="flex justify-center mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`h-5 w-5 ${star <= Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                            />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">Recomendado</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Design</span>
                            <span>4.8/5</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: '96%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Performance</span>
                            <span>4.9/5</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: '98%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Câmera</span>
                            <span>4.9/5</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: '98%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Bateria</span>
                            <span>4.7/5</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: '94%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Custo-Benefício</span>
                            <span>4.2/5</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: '84%' }}></div>
                          </div>
                        </div>
                      </div>
                      
                      <Button className="w-full mt-6" asChild>
                        <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Comprar Agora
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="specs" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Especificações Técnicas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b">
                        <span className="font-medium">{key}</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="alternatives" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.alternatives.map((alt: any) => (
                  <Card key={alt.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{alt.name}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-primary">
                        {alt.price}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 mb-4">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{alt.rating}/5</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" asChild className="flex-1">
                          <Link href={alt.href}>Ver Review</Link>
                        </Button>
                        <Button size="sm" className="flex-1">
                          Ver Preço
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-8">
              <div className="space-y-6">
                {product.userReviews.map((review: any) => (
                  <Card key={review.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{review.user}</CardTitle>
                          <CardDescription>{review.date}</CardDescription>
                        </div>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`h-4 w-4 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                            />
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Back to Products */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Produtos
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}