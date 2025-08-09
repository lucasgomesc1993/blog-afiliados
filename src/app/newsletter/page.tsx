'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Mail, Send, CheckCircle, Bell, Gift, Star, ArrowRight, Shield } from 'lucide-react'
import Link from 'next/link'

export default function NewsletterPage() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [name, setName] = useState('')

  const benefits = [
    {
      icon: Star,
      title: 'Reviews Exclusivas',
      description: 'Acesso antecipado às novas análises de produtos'
    },
    {
      icon: Gift,
      title: 'Ofertas Especiais',
      description: 'Descontos exclusivos apenas para assinantes'
    },
    {
      icon: Bell,
      title: 'Alertas de Preço',
      description: 'Notificações quando produtos entram em promoção'
    },
    {
      icon: Shield,
      title: 'Sem Spam',
      description: 'Prometemos enviar apenas conteúdo relevante'
    }
  ]

  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'Assinante há 6 meses',
      comment: 'As reviews da newsletter me ajudaram a escolher o melhor smartphone para minhas necessidades. Recomendo!',
      rating: 5
    },
    {
      name: 'Ana Santos',
      role: 'Assinante há 1 ano',
      comment: 'Adoro receber as ofertas exclusivas. Já economizei muito em várias compras graças às dicas da equipe.',
      rating: 5
    },
    {
      name: 'Pedro Oliveira',
      role: 'Assinante há 3 meses',
      comment: 'O conteúdo é sempre relevante e bem pesquisado. Melhor newsletter de tecnologia que já assinei.',
      rating: 5
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubscribed(true)
    setEmail('')
    setName('')
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Newsletter ReviewsPro
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Receba as melhores análises, ofertas exclusivas e dicas de compras diretamente no seu email
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Por que Assinar Nossa Newsletter?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Junte-se a milhares de leitores que já transformaram suas compras com nossas dicas exclusivas
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <benefit.icon className="h-8 w-8 text-primary" />
                      </motion.div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Inscrição Confirmada!</h3>
                    <p className="text-green-700 mb-4">
                      Obrigado por assinar nossa newsletter! Você receberá um email de confirmação em breve.
                    </p>
                    <p className="text-green-700 mb-6">
                      Fique atento para as próximas edições com conteúdo exclusivo e ofertas especiais!
                    </p>
                    <Button onClick={() => setIsSubscribed(false)} variant="outline">
                      Inscrever Outro Email
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl">Assine Gratuitamente</CardTitle>
                    <CardDescription className="text-lg">
                      Junte-se a +50,000 assinantes e receba o melhor conteúdo sobre tecnologia
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Seu Nome (opcional)
                        </label>
                        <Input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Como prefere ser chamado?"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="seu@email.com"
                        />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <p>
                          Ao assinar, você concorda em receber nossos emails e concorda com nossa{' '}
                          <Link href="/politica-de-privacidade" className="text-primary underline">
                            Política de Privacidade
                          </Link>
                          . Você pode cancelar a qualquer momento.
                        </p>
                      </div>
                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Mail className="mr-2 h-5 w-5 animate-spin" />
                            Processando...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Assinar Newsletter
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">O Que Nossos Assinantes Dizem</h2>
              <p className="text-lg text-muted-foreground">
                Depoimentos de quem já transforma suas compras com nossas dicas
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        {renderStars(testimonial.rating)}
                      </div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground italic">
                        "{testimonial.comment}"
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Content */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">O Que Você Vai Receber</h2>
              <p className="text-lg text-muted-foreground">
                Conteúdo selecionado para ajudar você a fazer as melhores escolhas
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  title: 'Semanal: Top 5 Ofertas',
                  description: 'As melhores promoções da semana selecionadas pela nossa equipe',
                  frequency: 'Toda segunda-feira'
                },
                {
                  title: 'Mensal: Reviews em Destaque',
                  description: 'As análises mais completas e interessantes do mês',
                  frequency: 'Primeira sexta-feira do mês'
                },
                {
                  title: 'Alertas: Oportunidades Únicas',
                  description: 'Notificações imediatas quando encontramos ofertas imperdíveis',
                  frequency: 'Apenas quando necessário'
                },
                {
                  title: 'Exclusivo: Conteúdo Premium',
                  description: 'Guias detalhados e análises aprofundadas apenas para assinantes',
                  frequency: 'Mensalmente'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-1">{item.description}</p>
                    <Badge variant="outline">{item.frequency}</Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Assurance */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center"
            >
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-8">
                  <Shield className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Sua Privacidade é Nossa Prioridade</h3>
                  <p className="text-green-700 mb-4">
                    Nunca compartilhamos seu email com terceiros. Você pode cancelar sua inscrição a qualquer momento com apenas um clique.
                  </p>
                  <p className="text-green-700">
                    Prometemos enviar apenas conteúdo relevante e valioso. Sem spam, sem compartilhamento de dados, sem complicações.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50K+', label: 'Assinantes' },
              { number: '4.8/5', label: 'Avaliação' },
              { number: '98%', label: 'Taxa de Abertura' },
              { number: '0%', label: 'Spam' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold mb-4"
          >
            Pronto para Transformar Suas Compras?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
          >
            Junte-se a milhares de pessoas que já fazem compras mais inteligentes com nossas dicas exclusivas
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Button size="lg" variant="secondary" asChild>
              <Link href="#newsletter-form">
                <ArrowRight className="mr-2 h-5 w-5" />
                Assinar Agora
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}