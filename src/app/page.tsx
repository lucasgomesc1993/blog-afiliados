'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Star, TrendingUp, ShoppingCart, Zap, Shield, Award } from 'lucide-react'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ui/product-card'

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Smartphone Galaxy Pro Max',
      category: 'Smartphones',
      rating: 4.8,
      price: 'R$ 3.999',
      image: '/images/products/smartphone-galaxy-pro-max.jpg',
      affiliateLink: 'https://afiliado.com/galaxy-pro-max',
      pros: ['Câmera incrível', 'Bateria duradoura', 'Tela AMOLED'],
      cons: ['Preço elevado']
    },
    {
      id: 2,
      name: 'Notebook UltraBook Pro',
      category: 'Notebooks',
      rating: 4.6,
      price: 'R$ 5.499',
      image: '/images/products/laptop-ultrabook-pro.jpg',
      affiliateLink: 'https://afiliado.com/ultrabook-pro',
      pros: ['Performance excelente', 'Design fino', 'Tela 4K'],
      cons: ['Bateria poderia ser melhor']
    },
    {
      id: 3,
      name: 'Fones de Ouvido Wireless X',
      category: 'Áudio',
      rating: 4.7,
      price: 'R$ 899',
      image: '/images/products/headphones-wireless-x.jpg',
      affiliateLink: 'https://afiliado.com/fones-x',
      pros: ['Cancelamento de ruído', 'Qualidade de som', 'Confortável'],
      cons: ['Preço alto']
    }
  ]

  const categories = [
    { name: 'Smartphones', icon: '📱', count: 45, href: '/categoria/smartphones' },
    { name: 'Notebooks', icon: '💻', count: 32, href: '/categoria/notebooks' },
    { name: 'Áudio', icon: '🎧', count: 28, href: '/categoria/audio' },
    { name: 'Casa Inteligente', icon: '🏠', count: 19, href: '/categoria/casa-inteligente' },
    { name: 'Gaming', icon: '🎮', count: 24, href: '/categoria/gaming' },
    { name: 'Fitness', icon: '💪', count: 16, href: '/categoria/fitness' }
  ]

  const features = [
    {
      icon: Star,
      title: 'Reviews Imparciais',
      description: 'Análises detalhadas e honestas para ajudar você a fazer a melhor escolha.'
    },
    {
      icon: Shield,
      title: 'Links Verificados',
      description: 'Todos os links de afiliado são de lojas confiáveis e seguras.'
    },
    {
      icon: TrendingUp,
      title: 'Preços Atualizados',
      description: 'Monitoramos os preços para garantir sempre as melhores ofertas.'
    },
    {
      icon: Award,
      title: 'Especialistas',
      description: 'Nossa equipe testa cada produto para oferecer análises completas.'
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero
        title="Encontre os Melhores Produtos com Reviews Imparciais"
        description="Análises detalhadas, comparações e links de afiliado confiáveis para você fazer compras inteligentes."
        badge={false}
        buttons={[
          {
            href: "/melhores/geral",
            text: "Ver Melhores Produtos",
            iconRight: <ArrowRight className="ml-2 h-4 w-4" />
          },
          {
            href: "/ofertas",
            text: "Ofertas do Dia",
            variant: "outline"
          }
        ]}
      />

      {/* Featured Products Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Produtos em Destaque
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Os produtos mais avaliados e recomendados pela nossa equipe
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full max-w-md"
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Categorias
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Explore nossas categorias e encontre o produto perfeito para você
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link href={category.href}>
                  <Card className="group text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count} produtos
                    </p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Por Que Escolher Nossas Reviews?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Comprometidos com transparência e qualidade em todas as análises
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <feature.icon className="h-8 w-8 text-primary" />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-xl font-semibold mb-3"
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-muted-foreground"
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Pronto para Encontrar o Produto Perfeito?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
          >
            Explore nossas reviews detalhadas e faça compras inteligentes com links de afiliado confiáveis.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/melhores/geral">
                  Ver Todos os Produtos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}