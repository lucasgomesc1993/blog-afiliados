import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, ShoppingCart, Check, X, ArrowRight, Trophy } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface ComparisonPageProps {
  params: {
    products: string
  }
}

interface Product {
  id: number
  name: string
  brand: string
  price: string
  rating: number
  affiliateLink: string
  image: string
  specifications: Record<string, string>
  pros: string[]
  cons: string[]
  score: number
}

// Mock data - em produção, isso viria de um banco de dados
const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Galaxy Pro Max',
    brand: 'Samsung',
    price: 'R$ 3.999',
    rating: 4.8,
    affiliateLink: 'https://afiliado.com/galaxy-pro-max',
    image: '/placeholder-phone.jpg',
    specifications: {
      'Tela': '6.8" AMOLED',
      'Processador': 'Snapdragon 8 Gen 2',
      'RAM': '12GB',
      'Armazenamento': '256GB',
      'Câmera Principal': '200MP',
      'Bateria': '5000mAh',
      'Carregamento': '45W',
      'Sistema': 'Android 13'
    },
    pros: ['Câmera excelente', 'Bateria duradoura', 'Tela incrível', 'Performance top'],
    cons: ['Preço alto', 'Pode ser grande'],
    score: 92
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    price: 'R$ 4.299',
    rating: 4.7,
    affiliateLink: 'https://afiliado.com/iphone-15-pro',
    image: '/placeholder-phone.jpg',
    specifications: {
      'Tela': '6.1" Super Retina XDR',
      'Processador': 'A17 Pro',
      'RAM': '8GB',
      'Armazenamento': '256GB',
      'Câmera Principal': '48MP',
      'Bateria': '3274mAh',
      'Carregamento': '20W',
      'Sistema': 'iOS 17'
    },
    pros: ['Processador rápido', 'Ecossistema Apple', 'Build quality', 'Atualizações'],
    cons: ['Preço muito alto', 'Bateria menor', 'Carregamento lento'],
    score: 89
  }
]

export default function ComparisonPage({ params }: ComparisonPageProps) {
  const { products } = params
  const productSlugs = products.split('-vs-')
  
  // Em produção, buscaria os produtos pelos slugs/IDs
  const productsToCompare = mockProducts

  const getWinner = (spec: string) => {
    if (spec === 'Preço') {
      return productsToCompare[0].price.replace('R$ ', '').replace('.', '').replace(',', '.') < 
             productsToCompare[1].price.replace('R$ ', '').replace('.', '').replace(',', '.') ? 0 : 1
    }
    if (spec === 'Avaliação') {
      return productsToCompare[0].rating > productsToCompare[1].rating ? 0 : 1
    }
    if (spec === 'Nota Geral') {
      return productsToCompare[0].score > productsToCompare[1].score ? 0 : 1
    }
    return null
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : i < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Comparação: {productsToCompare.map(p => p.name).join(' vs ')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Análise detalhada lado a lado para ajudar você a fazer a melhor escolha
            </motion.p>
          </div>

          {/* Product Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {productsToCompare.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              >
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <Badge variant="secondary" className="mb-2">{product.brand}</Badge>
                    <CardTitle className="text-2xl">{product.name}</CardTitle>
                    <div className="flex justify-center items-center gap-2 mb-2">
                      {renderStars(product.rating)}
                      <span className="font-semibold">{product.rating}</span>
                    </div>
                    <CardDescription className="text-2xl font-bold text-primary">
                      {product.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-square bg-muted rounded-lg overflow-hidden relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Button size="lg" asChild className="w-full">
                      <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Ver Preço
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl font-bold mb-8 text-center"
            >
              Comparação Rápida
            </motion.h2>
            
            <div className="bg-background rounded-lg border overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 gap-4 p-6 border-b bg-muted/50">
                <div className="font-semibold">Especificação</div>
                {productsToCompare.map((product, index) => (
                  <div key={product.id} className="text-center">
                    <div className="font-semibold">{product.name}</div>
                    <div className="text-sm text-muted-foreground">{product.brand}</div>
                  </div>
                ))}
              </div>

              {/* Specifications */}
              {Object.keys(productsToCompare[0].specifications).map((spec, specIndex) => {
                const winner = getWinner(spec)
                return (
                  <div key={spec} className="grid grid-cols-3 gap-4 p-6 border-b last:border-b-0">
                    <div className="font-medium">{spec}</div>
                    {productsToCompare.map((product, productIndex) => (
                      <div key={product.id} className={`text-center ${winner === productIndex ? 'bg-green-50 text-green-800 rounded-lg py-2' : ''}`}>
                        {product.specifications[spec]}
                        {winner === productIndex && (
                          <Trophy className="h-4 w-4 inline-block ml-2 text-yellow-500" />
                        )}
                      </div>
                    ))}
                  </div>
                )
              })}

              {/* Price */}
              <div className="grid grid-cols-3 gap-4 p-6 border-b">
                <div className="font-medium">Preço</div>
                {productsToCompare.map((product, index) => {
                  const winner = getWinner('Preço')
                  return (
                    <div key={product.id} className={`text-center font-semibold ${winner === index ? 'bg-green-50 text-green-800 rounded-lg py-2' : ''}`}>
                      {product.price}
                      {winner === index && (
                        <Trophy className="h-4 w-4 inline-block ml-2 text-yellow-500" />
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Rating */}
              <div className="grid grid-cols-3 gap-4 p-6 border-b">
                <div className="font-medium">Avaliação</div>
                {productsToCompare.map((product, index) => {
                  const winner = getWinner('Avaliação')
                  return (
                    <div key={product.id} className={`text-center ${winner === index ? 'bg-green-50 text-green-800 rounded-lg py-2' : ''}`}>
                      <div className="flex justify-center items-center gap-1">
                        {renderStars(product.rating)}
                        <span className="font-semibold">{product.rating}</span>
                      </div>
                      {winner === index && (
                        <Trophy className="h-4 w-4 mx-auto mt-1 text-yellow-500" />
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Overall Score */}
              <div className="grid grid-cols-3 gap-4 p-6">
                <div className="font-medium">Nota Geral</div>
                {productsToCompare.map((product, index) => {
                  const winner = getWinner('Nota Geral')
                  return (
                    <div key={product.id} className={`text-center ${winner === index ? 'bg-green-50 text-green-800 rounded-lg py-2' : ''}`}>
                      <div className="text-2xl font-bold text-primary">{product.score}/100</div>
                      {winner === index && (
                        <Trophy className="h-4 w-4 mx-auto mt-1 text-yellow-500" />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl font-bold mb-8 text-center"
            >
              Prós e Contras
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {productsToCompare.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {product.name}
                        <Badge variant="secondary">{product.brand}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                          <Check className="h-5 w-5" />
                          Pontos Positivos
                        </h4>
                        <ul className="space-y-2">
                          {product.pros.map((pro, proIndex) => (
                            <li key={proIndex} className="flex items-start gap-2 text-green-700">
                              <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                          <X className="h-5 w-5" />
                          Pontos Negativos
                        </h4>
                        <ul className="space-y-2">
                          {product.cons.map((con, conIndex) => (
                            <li key={conIndex} className="flex items-start gap-2 text-red-700">
                              <X className="h-4 w-4 mt-0.5 flex-shrink-0" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Recommendation */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl font-bold mb-8"
            >
              Nossa Recomendação
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-background rounded-lg border p-8"
            >
              <div className="mb-6">
                <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">
                  {productsToCompare[0].score > productsToCompare[1].score ? productsToCompare[0].name : productsToCompare[1].name}
                </h3>
                <p className="text-lg text-muted-foreground">
                  Vencedor com nota {productsToCompare[0].score > productsToCompare[1].score ? productsToCompare[0].score : productsToCompare[1].score}/100
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {productsToCompare[0].score > productsToCompare[1].score 
                  ? `O ${productsToCompare[0].name} se destaca pela sua câmera superior, bateria mais duradoura e melhor relação custo-benefício. É a escolha ideal para quem busca o melhor em tecnologia móvel sem abrir mão da qualidade.`
                  : `O ${productsToCompare[1].name} oferece a melhor experiência de ecossistema, com processador poderoso e build quality excepcional. Perfeito para quem já está investido no ecossistema Apple ou busca a máxima integração entre dispositivos.`
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href={productsToCompare[0].score > productsToCompare[1].score ? productsToCompare[0].affiliateLink : productsToCompare[1].affiliateLink} target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Comprar o Vencedor
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/melhores/smartphones">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Ver Mais Opções
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}