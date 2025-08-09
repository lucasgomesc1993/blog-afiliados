import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Brain, Users, Target, Zap, Shield, TrendingUp, Cpu, Database, Cloud, BarChart } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: 'Soluções de IA',
      description: 'Soluções personalizadas de inteligência artificial adaptadas às necessidades e desafios específicos do seu negócio.',
      features: [
        'Modelos de Machine Learning',
        'Processamento de Linguagem Natural',
        'Visão Computacional',
        'Análise Preditiva'
      ],
      href: '/ai-solutions',
      popular: true
    },
    {
      icon: Users,
      title: 'Consultoria',
      description: 'Serviços especializados de consultoria em IA para ajudá-lo a navegar pelo complexo cenário da inteligência artificial.',
      features: [
        'Desenvolvimento de Estratégia de IA',
        'Avaliação Tecnológica',
        'Planejamento de Implementação',
        'Gestão de Mudanças'
      ],
      href: '/consulting'
    },
    {
      icon: Target,
      title: 'Estudos de Caso',
      description: 'Exemplos reais de como nossas soluções de IA transformaram negócios em várias indústrias.',
      features: [
        'Soluções Específicas por Indústria',
        'Análise de ROI',
        'Histórias de Sucesso',
        'Melhores Práticas'
      ],
      href: '/case-studies'
    }
  ]

  const additionalServices = [
    {
      icon: Cpu,
      title: 'Desenvolvimento de Machine Learning',
      description: 'Soluções completas de machine learning desde a preparação de dados até a implantação e monitoramento de modelos.',
      features: [
        'Desenvolvimento de Modelos Personalizados',
        'Engenharia de Dados',
        'Treinamento & Otimização de Modelos',
        'MLOps & Implantação'
      ]
    },
    {
      icon: Database,
      title: 'Análise de Dados & Insights',
      description: 'Transforme seus dados em insights acionáveis com ferramentas avançadas de análise e visualização.',
      features: [
        'Processamento de Big Data',
        'Análise em Tempo Real',
        'Visualização de Dados',
        'Inteligência de Negócios'
      ]
    },
    {
      icon: Cloud,
      title: 'Soluções de IA em Nuvem',
      description: 'Soluções de IA escaláveis baseadas em nuvem que crescem com as necessidades do seu negócio.',
      features: [
        'Arquitetura em Nuvem',
        'IA Serverless',
        'Estratégia Multi-nuvem',
        'Otimização de Custos'
      ]
    },
    {
      icon: BarChart,
      title: 'Serviços de Integração de IA',
      description: 'Integre perfeitamente capacidades de IA em seus sistemas e fluxos de trabalho existentes.',
      features: [
        'Desenvolvimento de APIs',
        'Integração de Sistemas',
        'Modernização de Legados',
        'Automação de Fluxos de Trabalho'
      ]
    }
  ]

  const industries = [
    'Saúde',
    'Finanças',
    'Manufatura',
    'Varejo',
    'Tecnologia',
    'Educação'
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Badge variant="secondary" className="mb-4">Nossos Serviços</Badge>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Soluções Abrangentes de IA
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl text-muted-foreground mb-8"
            >
              Da consultoria estratégica ao desenvolvimento de IA de ponta, oferecemos soluções completas 
              para transformar seu negócio com inteligência artificial.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" asChild>
                  <Link href="/consulting">
                    Começar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services */}
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
              Serviços Principais
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Nossa suíte abrangente de serviços de IA projetada para atender às necessidades do seu negócio.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="relative group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    {service.popular && (
                      <Badge className="absolute top-4 right-4 bg-primary">
                        Popular
                      </Badge>
                    )}
                    <CardHeader>
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                      >
                        <service.icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription>
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li 
                            key={featureIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 + featureIndex * 0.1, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                      <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href={service.href}>
                            Saiba Mais
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
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
              Serviços Adicionais
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Expanda suas capacidades de IA com nossos serviços especializados e expertise.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                      >
                        <service.icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription>
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li 
                            key={featureIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 + featureIndex * 0.1, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
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
              Indústrias que Atendemos
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Nossas soluções de IA são adaptadas para atender aos desafios únicos de várias indústrias.
            </motion.p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge variant="outline" className="px-4 py-2 text-sm">
                    {industry}
                  </Badge>
                </motion.div>
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
            Pronto para Transformar seu Negócio?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
          >
            Vamos discutir como nossos serviços de IA podem ajudá-lo a alcançar seus objetivos e impulsionar a inovação.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Agendar uma Consulta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="inverse" asChild>
                <Link href="/case-studies">
                  Ver Estudos de Caso
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}