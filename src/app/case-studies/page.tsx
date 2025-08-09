import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, TrendingUp, Users, Zap, Target, Award, Globe, CheckCircle, BarChart } from 'lucide-react'

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'Projeto Alfa',
      company: 'Serviços Financeiros Globais',
      industry: 'Finanças',
      description: 'Implementamos um sistema de detecção de fraudes com IA que reduziu falsos positivos em 60% enquanto melhorava a precisão da detecção.',
      challenge: 'O cliente enfrentava altas taxas de falsos positivos em seu sistema de detecção de fraudes, levando à insatisfação dos clientes e aumento dos custos operacionais.',
      solution: 'Desenvolvemos um modelo sofisticado de machine learning que analisa padrões de transações em tempo real, incorporando análise comportamental e algoritmos de detecção de anomalias.',
      results: [
        'Redução de 60% em falsos positivos',
        'Melhoria de 95% na precisão da detecção de fraudes',
        'Economia de $2.5 milhões em custos operacionais anualmente',
        'Melhoria de 40% nos índices de satisfação do cliente'
      ],
      technologies: ['Machine Learning', 'Processamento em Tempo Real', 'Análise Comportamental', 'Detecção de Anomalias'],
      image: '/api/placeholder/600/400',
      href: '/case-studies/project-alpha',
      featured: true
    },
    {
      title: 'Projeto Beta',
      company: 'Healthcare Solutions Inc.',
      industry: 'Saúde',
      description: 'Desenvolvemos uma ferramenta de diagnóstico com IA que melhorou a precisão da detecção precoce de doenças em 45%.',
      challenge: 'Os provedores de saúde precisavam de uma forma mais precisa e eficiente de detectar doenças precocemente, particularmente em áreas remotas com acesso limitado a especialistas.',
      solution: 'Criamos uma plataforma de diagnóstico com IA usando visão computacional e machine learning para analisar imagens médicas e dados de pacientes para detecção precoce de doenças.',
      results: [
        'Melhoria de 45% na precisão da detecção precoce',
        'Redução do tempo de diagnóstico de dias para horas',
        'Implantação bem-sucedida em 50+ clínicas remotas',
        'Melhoria de 35% nos resultados dos pacientes'
      ],
      technologies: ['Visão Computacional', 'Deep Learning', 'Imagem Médica', 'Saúde Móvel'],
      image: '/api/placeholder/600/400',
      href: '/case-studies/project-beta'
    },
    {
      title: 'Transformação no Varejo',
      company: 'MegaRetail Corp',
      industry: 'Varejo',
      description: 'Implementamos um sistema de gerenciamento de inventário e personalização com IA que aumentou as vendas em 30%.',
      challenge: 'O varejista enfrentava desafios com otimização de inventário, falta de estoque e fornecimento de experiências de compra personalizadas em escala.',
      solution: 'Desenvolvemos um sistema abrangente de IA para previsão de demanda, otimização de inventário e recomendações de produtos personalizadas.',
      results: [
        'Aumento de 30% nas vendas gerais',
        'Redução de 50% na falta de estoque',
        'Melhoria de 25% na rotatividade de inventário',
        'Aumento de 60% no engajamento do cliente'
      ],
      technologies: ['Análise Preditiva', 'Sistemas de Recomendação', 'Otimização de Inventário', 'Personalização'],
      image: '/api/placeholder/600/400',
      href: '/case-studies/retail-transformation'
    },
    {
      title: 'Excelência na Manufatura',
      company: 'Smart Manufacturing Ltd',
      industry: 'Manufatura',
      description: 'Implantamos um sistema de manutenção preditiva que reduziu o tempo de inatividade em 70% e os custos de manutenção em 40%.',
      challenge: 'A empresa de manufatura experimentava tempo de inatividade não planejado frequente e altos custos de manutenção devido a práticas de manutenção reativas.',
      solution: 'Implementamos um sistema de manutenção preditiva com IA que monitora a saúde do equipamento e prevê falhas antes que ocorram.',
      results: [
        'Redução de 70% no tempo de inatividade não planejado',
        'Diminuição de 40% nos custos de manutenção',
        'Vida útil do equipamento estendida em 25%',
        'Melhoria de 35% na eficácia geral do equipamento'
      ],
      technologies: ['Sensores IoT', 'Manutenção Preditiva', 'Análise de Séries Temporais', 'Monitoramento em Tempo Real'],
      image: '/api/placeholder/600/400',
      href: '/case-studies/manufacturing-excellence'
    }
  ]

  const industries = [
    { name: 'Finanças', count: 12, icon: TrendingUp },
    { name: 'Saúde', count: 8, icon: Users },
    { name: 'Varejo', count: 15, icon: Zap },
    { name: 'Manufatura', count: 10, icon: Target },
    { name: 'Tecnologia', count: 18, icon: Award },
    { name: 'Educação', count: 6, icon: Globe }
  ]

  const stats = [
    { number: '500+', label: 'Projetos Bem-sucedidos' },
    { number: '95%', label: 'Satisfação do Cliente' },
    { number: '50+', label: 'Indústrias Atendidas' },
    { number: '1000+', label: 'Modelos de IA Implantados' }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Estudos de Caso</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Histórias de Sucesso
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Descubra como nossas soluções de IA transformaram negócios em várias indústrias, 
              entregando resultados mensuráveis e impulsionando a inovação.
            </p>
            <Button size="lg" asChild>
              <Link href="/consulting">
                Inicie Seu Projeto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">História de Sucesso em Destaque</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nosso projeto mais impactante que demonstra o poder da transformação com IA.
            </p>
          </div>
          
          {caseStudies.filter(study => study.featured).map((study, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8">
                  <Badge variant="outline" className="mb-4">{study.industry}</Badge>
                  <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                  <p className="text-lg text-muted-foreground mb-4">{study.company}</p>
                  <p className="text-muted-foreground mb-6">{study.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Desafio</h4>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Solução</h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>
                  
                  <Button asChild>
                    <Link href={study.href}>
                      Ler Estudo de Caso Completo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="bg-muted p-8 flex flex-col justify-center">
                  <h4 className="font-semibold mb-4">Principais Resultados</h4>
                  <ul className="space-y-3">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">Tecnologias Utilizadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Todos os Estudos de Caso</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore nosso portfólio completo de implementações de IA bem-sucedidas em várias indústrias.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.filter(study => !study.featured).map((study, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{study.industry}</Badge>
                    <BarChart className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {study.title}
                  </CardTitle>
                  <CardDescription>{study.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-sm">Principais Resultados:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-xs text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-primary mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={study.href}>
                      Ver Detalhes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Indústrias que Transformamos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nossas soluções de IA entregaram resultados excepcionais em diversas indústrias.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center p-6 group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <industry.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground">{industry.count} Projetos</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para Escrever Sua História de Sucesso?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Vamos discutir como nossas soluções de IA podem ajudar você a alcançar resultados semelhantes para seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/consulting">
                Agende uma Consulta
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Entre em Contato
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}