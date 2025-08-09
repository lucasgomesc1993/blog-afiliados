import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, TrendingUp, Users, ArrowLeft, CheckCircle, Award, Globe, BarChart, Target, Zap } from 'lucide-react'

export default function ProjectAlpha() {
  const project = {
    title: 'Projeto Alpha',
    company: 'Serviços Financeiros Globais',
    industry: 'Finanças',
    duration: '6 meses',
    teamSize: '12 especialistas',
    description: 'Implementamos sistema de detecção de fraude alimentado por IA que reduziu falsos positivos em 60% enquanto melhorava a precisão de detecção.',
    overview: 'Serviços Financeiros Globais, um banco multinacional líder, estava enfrentando problemas com seu sistema legado de detecção de fraude que gerava excessivos falsos positivos, causando atrito ao cliente e altos custos operacionais. Eles precisavam de uma solução mais sofisticada que pudesse identificar com precisão transações fraudulentas enquanto minimizava alarmes falsos.',
    challenge: 'O cliente enfrentou vários desafios críticos:\n\n• Altas taxas de falsos positivos (até 85%) levando à insatisfação do cliente\n• Padrões de fraude cada vez mais sofisticados que sistemas baseados em regras não conseguiam detectar\n• Requisitos de processamento em tempo real para aprovação de transações\n• Necessidade de IA explicável para atender requisitos regulatórios\n• Integração com infraestrutura bancária existente',
    solution: 'Desenvolvemos um sistema abrangente de detecção de fraude alimentado por IA que aproveita técnicas avançadas de machine learning:\n\n• Implementamos aprendizado ensemble combinando múltiplos modelos de ML para precisão melhorada\n• Desenvolvemos sistema de pontuação de transações em tempo real com tempo de processamento sub-100ms\n• Criamos motor de análise comportamental para estabelecer padrões de gastos do cliente\n• Construímos framework de IA explicável para conformidade regulatória\n• Integramos com infraestrutura bancária existente através de APIs seguras\n• Implementamos sistema de aprendizado contínuo para adaptar-se a novos padrões de fraude',
    implementation: 'O projeto foi executado em fases:\n\n1. **Descoberta & Análise** (2 semanas): Analisamos sistema existente, identificamos pontos problemáticos e definimos métricas de sucesso\n2. **Preparação de Dados** (4 semanas): Coletamos e processamos dados históricos de transações, engenhamos características relevantes\n3. **Desenvolvimento de Modelo** (8 semanas): Desenvolvemos e treinamos múltiplos modelos de ML, criamos sistema ensemble\n4. **Testes & Validação** (4 semanas): Testes rigorosos com dados históricos e teste piloto ao vivo\n5. **Implantação** (2 semanas): Implantação faseada começando com transações de baixo risco\n6. **Otimização** (4 semanas): Monitoramento contínuo e refinamento do modelo',
    results: [
      {
        metric: 'Redução de Falsos Positivos',
        value: '60%',
        description: 'Redução significativa em falsos positivos, melhorando a experiência do cliente'
      },
      {
        metric: 'Precisão de Detecção',
        value: '95%',
        description: 'Precisão melhorada de detecção de fraude mantendo baixa taxa de falsos positivos'
      },
      {
        metric: 'Economia de Custos',
        value: '$2.5M',
        description: 'Economia anual em custos operacionais e perdas por fraude'
      },
      {
        metric: 'Tempo de Processamento',
        value: '<100ms',
        description: 'Processamento de transações em tempo real com latência mínima'
      },
      {
        metric: 'Satisfação do Cliente',
        value: '+40%',
        description: 'Pontuações de satisfação do cliente melhoradas devido a menos recusas falsas'
      }
    ],
    technologies: [
      'Machine Learning (XGBoost, Random Forest, Redes Neurais)',
      'Processamento em Tempo Real (Apache Kafka, Spark Streaming)',
      'Análise Comportamental',
      'Detecção de Anomalias',
      'IA Explicável (SHAP, LIME)',
      'Infraestrutura em Nuvem (AWS)',
      'Integração de API',
      'Monitoramento & Alertas'
    ],
    testimonials: [
      {
        quote: 'O sistema de detecção de fraude alimentado por IA transformou nossas operações. Vimos uma redução dramática em falsos positivos enquanto detectamos mais transações fraudulentas. Nossos clientes estão mais felizes, e estamos economizando milhões.',
        author: 'Sarah Chen',
        role: 'Diretora de Risco',
        company: 'Serviços Financeiros Globais'
      },
      {
        quote: 'O nível de expertise e profissionalismo mostrado pela equipe da Z.ai foi excepcional. Eles entenderam nossos requisitos complexos e entregaram uma solução que excedeu nossas expectativas.',
        author: 'Michael Rodriguez',
        role: 'Chefe de Tecnologia',
        company: 'Serviços Financeiros Globais'
      }
    ],
    lessons: [
      'A importância da IA explicável em indústrias regulamentadas não pode ser exagerada',
      'Requisitos de processamento em tempo real impactam significativamente as decisões de arquitetura',
      'Sistemas de aprendizado contínuo são essenciais para adaptar-se a padrões de fraude em evolução',
      'Colaboração multifuncional entre cientistas de dados e especialistas de domínio é crucial',
      'Abordagem de implantação faseada minimiza riscos e permite melhoria iterativa'
    ]
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/case-studies" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para Estudos de Caso
            </Link>
            
            <Badge variant="secondary" className="mb-4">{project.industry}</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {project.description}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{project.duration}</div>
                <div className="text-sm text-muted-foreground">Duração</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{project.teamSize}</div>
                <div className="text-sm text-muted-foreground">Tamanho da Equipe</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{project.industry}</div>
                <div className="text-sm text-muted-foreground">Indústria</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{project.company}</div>
                <div className="text-sm text-muted-foreground">Cliente</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Visão Geral do Projeto</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {project.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">O Desafio</h2>
            <div className="bg-background p-8 rounded-lg">
              <p className="text-muted-foreground whitespace-pre-line">{project.challenge}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Nossa Solução</h2>
            <div className="bg-background p-8 rounded-lg">
              <p className="text-muted-foreground whitespace-pre-line mb-8">{project.solution}</p>
              
              <h3 className="text-xl font-semibold mb-4">Abordagem de Implementação</h3>
              <p className="text-muted-foreground whitespace-pre-line">{project.implementation}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Resultados & Impacto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.results.map((result, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">{result.value}</CardTitle>
                    <CardDescription>{result.metric}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{result.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Tecnologias Utilizadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.technologies.map((tech, index) => (
                <div key={index} className="flex items-center p-3 bg-muted rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span className="text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Depoimentos de Clientes</h2>
            <div className="space-y-8">
              {project.testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-8">
                    <blockquote className="text-lg text-muted-foreground mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Lições Aprendidas Principais</h2>
            <div className="space-y-4">
              {project.lessons.map((lesson, index) => (
                <div key={index} className="flex items-start p-4 bg-muted rounded-lg">
                  <Award className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <span className="text-sm">{lesson}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para Alcançar Resultados Similares?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Vamos discutir como nossas soluções de IA podem ajudar você a superar seus desafios e alcançar seus objetivos de negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/consulting">
                Agendar uma Consulta
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/case-studies">
                Ver Mais Estudos de Caso
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}