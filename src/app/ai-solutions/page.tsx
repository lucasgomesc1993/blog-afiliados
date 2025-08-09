import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowRight, Brain, Cpu, Database, BarChart, Zap, Shield, Users, Target, Globe, Lightbulb, TrendingUp } from 'lucide-react'

export default function AISolutions() {
  const solutions = [
    {
      category: 'Machine Learning',
      icon: Brain,
      items: [
        {
          title: 'Análise Preditiva',
          description: 'Aproveite dados históricos para prever tendências futuras e tomar decisões baseadas em dados.',
          features: ['Análise de Séries Temporais', 'Modelos de Regressão', 'Algoritmos de Classificação', 'Detecção de Anomalias'],
          useCase: 'Previsão de vendas no varejo, previsão de manutenção de equipamentos, análise de rotatividade de clientes'
        },
        {
          title: 'Processamento de Linguagem Natural',
          description: 'Transforme dados de texto em insights acionáveis com técnicas avançadas de PLN.',
          features: ['Análise de Sentimento', 'Classificação de Texto', 'Reconhecimento de Entidades Nomeadas', 'Tradução de Idiomas'],
          useCase: 'Análise de feedback de clientes, moderação de conteúdo, processamento automatizado de documentos'
        },
        {
          title: 'Visão Computacional',
          description: 'Extraia informações significativas de imagens e vídeos usando deep learning.',
          features: ['Detecção de Objetos', 'Classificação de Imagens', 'Reconhecimento Facial', 'Reconhecimento Óptico de Caracteres'],
          useCase: 'Controle de qualidade na manufatura, vigilância de segurança, análise de imagens médicas'
        }
      ]
    },
    {
      category: 'Inteligência de Dados',
      icon: Database,
      items: [
        {
          title: 'Processamento de Big Data',
          description: 'Processe e analise conjuntos de dados massivos de forma eficiente com soluções escaláveis.',
          features: ['Computação Distribuída', 'Processamento em Tempo Real', 'Arquitetura de Pipeline de Dados', 'Automação ETL'],
          useCase: 'Processamento de dados IoT, análise de logs, mineração de dados de mídias sociais'
        },
        {
          title: 'Inteligência de Negócios',
          description: 'Transforme dados brutos em insights de negócios acionáveis e visualizações.',
          features: ['Dashboards Interativos', 'Relatórios Personalizados', 'Rastreamento de KPIs', 'Narrativa de Dados'],
          useCase: 'Dashboards executivos, análises de vendas, monitoramento operacional'
        }
      ]
    },
    {
      category: 'Automação',
      icon: Zap,
      items: [
        {
          title: 'Automação Inteligente de Processos',
          description: 'Automatize processos de negócios complexos com tomada de decisão alimentada por IA.',
          features: ['Automação de Fluxos de Trabalho', 'Árvores de Decisão', 'Sistemas Baseados em Regras', 'Otimização de Processos'],
          useCase: 'Processamento de faturas, automação de atendimento ao cliente, otimização da cadeia de suprimentos'
        },
        {
          title: 'IA Conversacional',
          description: 'Crie chatbots inteligentes e assistentes virtuais para experiência aprimorada do cliente.',
          features: ['Desenvolvimento de Chatbots', 'Assistentes de Voz', 'Suporte a Múltiplos Idiomas', 'Consciência de Contexto'],
          useCase: 'Suporte ao cliente, assistentes virtuais, agentes de vendas automatizados'
        }
      ]
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Eficiência Aumentada',
      description: 'Automatize tarefas repetitivas e otimize fluxos de trabalho para aumentar a produtividade em até 80%.'
    },
    {
      icon: Target,
      title: 'Melhor Tomada de Decisão',
      description: 'Aproveite insights baseados em dados para tomar decisões informadas e reduzir incertezas.'
    },
    {
      icon: Users,
      title: 'Experiência do Cliente Aprimorada',
      description: 'Personalize interações e forneça suporte 24/7 com soluções alimentadas por IA.'
    },
    {
      icon: Shield,
      title: 'Redução de Riscos',
      description: 'Identifique e mitigue potenciais riscos antes que eles impactem suas operações de negócio.'
    },
    {
      icon: Globe,
      title: 'Escalabilidade',
      description: 'Construa soluções que crescem com seu negócio e lidam com demandas crescentes.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Mantenha-se à frente da concorrência com tecnologias e metodologias de IA de ponta.'
    }
  ]

  const industries = [
    {
      name: 'Saúde',
      description: 'Melhore o atendimento ao paciente, otimize operações e acelere pesquisas médicas.',
      solutions: ['Análise de Imagens Médicas', 'Descoberta de Medicamentos', 'Avaliação de Risco do Paciente', 'Automação Administrativa']
    },
    {
      name: 'Finanças',
      description: 'Aprimore a segurança, otimize negociações e personalize serviços financeiros.',
      solutions: ['Detecção de Fraude', 'Negociação Algorítmica', 'Avaliação de Risco', 'Banca Personalizada']
    },
    {
      name: 'Manufatura',
      description: 'Otimize a produção, melhore o controle de qualidade e preveja necessidades de manutenção.',
      solutions: ['Manutenção Preditiva', 'Controle de Qualidade', 'Otimização da Cadeia de Suprimentos', 'Planejamento da Produção']
    },
    {
      name: 'Varejo',
      description: 'Personalize experiências de compra, otimize estoque e preveja demanda.',
      solutions: ['Sistemas de Recomendação', 'Previsão de Demanda', 'Gestão de Estoque', 'Análise de Clientes']
    }
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
              <Badge variant="secondary" className="mb-4">Soluções de IA</Badge>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Soluções de IA de Ponta
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl text-muted-foreground mb-8"
            >
              Aproveite o poder da inteligência artificial para transformar suas operações de negócio, 
              aprimorar a tomada de decisão e impulsionar a inovação em todos os aspectos da sua organização.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" asChild>
                  <Link href="/consulting">
                    Explorar Soluções
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossas Soluções de IA</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções de IA abrangentes projetadas para abordar seus desafios e oportunidades de negócio específicos.
            </p>
          </div>

          <Tabs defaultValue="Machine Learning" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {solutions.map((solution, index) => (
                <TabsTrigger key={index} value={solution.category} className="flex items-center gap-2">
                  <solution.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{solution.category}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {solutions.map((solution, index) => (
              <TabsContent key={index} value={solution.category} className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {solution.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Principais Recursos:</h4>
                            <ul className="space-y-1">
                              {item.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Casos de Uso:</h4>
                            <p className="text-sm text-muted-foreground">{item.useCase}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que Escolher Nossas Soluções de IA?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubra os benefícios transformadores de implementar IA em suas operações de negócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Aplicações por Indústria</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nossas soluções de IA são adaptadas para atender aos desafios únicos de várias indústrias.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {industry.name}
                  </CardTitle>
                  <CardDescription>
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold mb-3">Principais Soluções:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <Badge key={solutionIndex} variant="outline">
                          {solution}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para Transformar com IA?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Vamos discutir como nossas soluções de IA podem abordar seus desafios de negócio específicos e impulsionar o crescimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Agendar uma Consulta
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/case-studies">
                Ver Histórias de Sucesso
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}