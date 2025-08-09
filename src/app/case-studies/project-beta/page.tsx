import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Users, ArrowLeft, CheckCircle, Award, Globe, BarChart, Target, Zap } from 'lucide-react'

export default function ProjectBeta() {
  const project = {
    title: 'Projeto Beta',
    company: 'Healthcare Solutions Inc.',
    industry: 'Saúde',
    duration: '8 meses',
    teamSize: '15 especialistas',
    description: 'Desenvolvemos ferramenta de diagnóstico alimentada por IA que melhorou a precisão de detecção precoce de doenças em 45%.',
    overview: 'Healthcare Solutions Inc., um provedor líder de tecnologia de saúde, precisava melhorar as capacidades de detecção precoce de doenças, particularmente em áreas remotas e carentes com acesso limitado a médicos especialistas. O objetivo era criar uma ferramenta de diagnóstico alimentada por IA que pudesse analisar dados médicos e fornecer diagnósticos preliminares precisos.',
    challenge: 'O cliente enfrentou vários desafios críticos:\n\n• Acesso limitado a médicos especialistas em áreas remotas\n• Alta taxa de diagnósticos perdidos levando a resultados ruins para pacientes\n• Necessidade de capacidades de diagnóstico rápido em situações de emergência\n• Requisito de alta precisão para garantir a segurança do paciente\n• Integração com sistemas hospitalares existentes e fluxos de trabalho\n• Requisitos de conformidade e validação regulatória',
    solution: 'Desenvolvemos uma plataforma de diagnóstico abrangente alimentada por IA com os seguintes componentes:\n\n• Sistema de visão computacional para analisar imagens médicas (raios-X, MRIs, tomografias)\n• Modelos de machine learning para processar dados do paciente e sintomas\n• Processamento de linguagem natural para analisar prontuários médicos e notas\n• Assistência de diagnóstico em tempo real com pontuação de confiança\n• Interface amigável para dispositivos móveis para uso em locais remotos\n• Integração com sistemas de informação hospitalar\n• Sistema de aprendizado contínuo para melhorar precisão ao longo do tempo\n• Recursos de IA explicável para ajudar médicos a entender recomendações',
    implementation: 'O projeto foi executado em fases:\n\n1. **Análise de Requisitos** (3 semanas): Trabalhamos com profissionais médicos para definir requisitos e métricas de sucesso\n2. **Coleta & Preparação de Dados** (6 semanas): Coletamos e anonimizamos dados médicos, estabelecemos pipelines de dados\n3. **Desenvolvimento de Modelo** (12 semanas): Desenvolvemos e treinamos múltiplos modelos de IA para diferentes tarefas de diagnóstico\n4. **Validação Clínica** (4 semanas): Conduzimos testes clínicos e validação com profissionais médicos\n5. **Integração de Sistema** (3 semanas): Integramos com sistemas hospitalares existentes\n6. **Implantação Piloto** (4 semanas): Implantamos em 5 locais piloto para teste no mundo real\n7. **Implantação Completa** (2 semanas): Implantamos em mais de 50 clínicas remotas',
    results: [
      {
        metric: 'Precisão de Detecção',
        value: '45%',
        description: 'Melhoria na precisão de detecção precoce de doenças comparado a métodos tradicionais'
      },
      {
        metric: 'Tempo de Diagnóstico',
        value: 'Horas',
        description: 'Reduzimos o tempo de diagnóstico de dias para horas, possibilitando tratamento mais rápido'
      },
      {
        metric: 'Clínicas Remotas',
        value: '50+',
        description: 'Implantado com sucesso em mais de 50 clínicas remotas mundialmente'
      },
      {
        metric: 'Resultados dos Pacientes',
        value: '+35%',
        description: 'Resultados dos pacientes melhorados através de detecção e tratamento precoces'
      },
      {
        metric: 'Eficiência dos Médicos',
        value: '+60%',
        description: 'Eficiência dos médicos aumentada com diagnóstico assistido por IA'
      }
    ],
    technologies: [
      'Visão Computacional (CNN, ResNet, Vision Transformers)',
      'Machine Learning (Random Forest, Gradient Boosting, Redes Neurais)',
      'Processamento de Linguagem Natural (BERT, NLP Médico)',
      'Frameworks de Deep Learning (TensorFlow, PyTorch)',
      'Processamento de Imagens Médicas',
      'Desenvolvimento Mobile (React Native)',
      'Infraestrutura em Nuvem (AWS HealthLake)',
      'Integração de API',
      'Segurança & Conformidade (HIPAA)'
    ],
    testimonials: [
      {
        quote: 'Esta ferramenta de diagnóstico alimentada por IA revolucionou como fornecemos saúde em áreas remotas. Agora somos capazes de detectar doenças mais cedo e fornecer melhor atendimento a pacientes que anteriormente tinham acesso limitado a especialistas.',
        author: 'Dra. Emily Watson',
        role: 'Diretora Médica',
        company: 'Healthcare Solutions Inc.'
      },
      {
        quote: 'A precisão e confiabilidade do sistema de IA excederam nossas expectativas. Tornou-se uma ferramenta inestimável para nossos provedores de saúde, ajudando-os a tomar melhores decisões de diagnóstico mais rapidamente.',
        author: 'Dr. James Chen',
        role: 'Diretor de Inovação Clínica',
        company: 'Healthcare Solutions Inc.'
      }
    ],
    lessons: [
      'Colaboração com profissionais médicos é essencial durante todo o processo de desenvolvimento',
      'Qualidade e diversidade de dados são críticas para treinar modelos médicos de IA precisos',
      'Recursos de IA explicável são cruciais para adoção em ambientes de saúde',
      'Validação clínica rigorosa é necessária antes da implantação',
      'Design mobile-first é importante para alcançar provedores de saúde remotos',
      'Monitoramento e melhoria contínuos são essenciais para manter precisão'
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transformar a Saúde com IA?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Vamos discutir como nossas soluções de IA podem ajudar você a melhorar o atendimento ao paciente e eficiência operacional.
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