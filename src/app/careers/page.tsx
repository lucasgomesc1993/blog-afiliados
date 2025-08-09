import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, MapPin, DollarSign, Clock, Users, Brain, Target, Zap, Shield, Globe, Briefcase, Award } from 'lucide-react'

export default function Careers() {
  const jobOpenings = [
    {
      title: 'Engenheiro Sênior de Machine Learning',
      department: 'Engenharia',
      location: 'San Francisco, CA',
      type: 'Tempo Integral',
      salary: '$150,000 - $200,000',
      experience: '5+ anos',
      description: 'Estamos procurando um Engenheiro de Machine Learning experiente para se juntar à nossa equipe e ajudar a construir soluções de IA de ponta.',
      requirements: [
        'PhD ou Mestrado em Ciência da Computação, Machine Learning ou área relacionada',
        '5+ anos de experiência em machine learning e deep learning',
        'Fortes habilidades de programação em Python e familiaridade com frameworks de ML',
        'Experiência com plataformas de nuvem e computação distribuída',
        'Excelentes habilidades de resolução de problemas e comunicação'
      ],
      responsibilities: [
        'Projetar e implementar modelos e sistemas de machine learning',
        'Colaborar com equipes multifuncionais para definir soluções de IA',
        'Otimizar modelos para desempenho e escalabilidade',
        'Manter-se atualizado com as últimas pesquisas e tecnologias de ML',
        'Mentorar engenheiros juniores e contribuir para o crescimento da equipe'
      ],
      benefits: [
        'Salário competitivo e pacote de ações',
        'Seguro saúde completo, odontológico e oftalmológico',
        'Arranjos de trabalho flexíveis e opções remotas',
        'Orçamento para desenvolvimento profissional',
        'Tecnologia e ferramentas de ponta'
      ],
      featured: true,
      posted: '2024-01-15'
    },
    {
      title: 'Cientista de Pesquisa em IA',
      department: 'Pesquisa',
      location: 'Remoto',
      type: 'Tempo Integral',
      salary: '$140,000 - $180,000',
      experience: '3+ anos',
      description: 'Junte-se à nossa equipe de pesquisa para expandir os limites da inteligência artificial e desenvolver soluções inovadoras.',
      requirements: [
        'PhD em Ciência da Computação, IA, Machine Learning ou área relacionada',
        'Forte histórico de publicações em conferências e periódicos de IA de ponta',
        'Especialização em deep learning, processamento de linguagem natural ou visão computacional',
        'Experiência com frameworks e ferramentas de pesquisa',
        'Fortes habilidades analíticas e de resolução de problemas'
      ],
      responsibilities: [
        'Realizar pesquisa de ponta em inteligência artificial',
        'Publicar descobertas em conferências e periódicos de primeiro nível',
        'Colaborar com equipes de engenharia para implementar descobertas de pesquisa',
        'Contribuir para o portfólio de propriedade intelectual da empresa',
        'Apresentar pesquisas em conferências e para stakeholders'
      ],
      benefits: [
        'Salário competitivo e pacote de ações',
        'Oportunidade de trabalhar em pesquisa de IA inovadora',
        'Orçamento para conferências e viagens',
        'Ambiente de trabalho colaborativo e inovador',
        'Arranjos de trabalho flexíveis'
      ],
      posted: '2024-01-12'
    },
    {
      title: 'Gerente de Produto - Soluções de IA',
      department: 'Produto',
      location: 'Nova York, NY',
      type: 'Tempo Integral',
      salary: '$130,000 - $170,000',
      experience: '4+ anos',
      description: 'Estamos procurando um Gerente de Produto para liderar o desenvolvimento de nossos produtos e soluções com IA.',
      requirements: [
        'Bacharel em Administração, Engenharia ou área relacionada',
        '4+ anos de experiência em gestão de produtos, preferencialmente em IA/ML',
        'Forte compreensão de tecnologias de IA e suas aplicações',
        'Experiência com metodologias de desenvolvimento ágil',
        'Excelentes habilidades de comunicação e liderança'
      ],
      responsibilities: [
        'Definir visão e estratégia de produto para soluções de IA',
        'Trabalhar em estreita colaboração com equipes de engenharia e pesquisa',
        'Realizar pesquisa de mercado e análise competitiva',
        'Gerenciar roadmap de produto e priorização',
        'Colaborar com equipes de vendas e marketing'
      ],
      benefits: [
        'Salário competitivo e pacote de ações',
        'Oportunidade de moldar o futuro dos produtos de IA',
        'Oportunidades de desenvolvimento e crescimento profissional',
        'Ambiente de trabalho colaborativo e dinâmico',
        'Pacote de benefícios completo'
      ],
      posted: '2024-01-10'
    },
    {
      title: 'Cientista de Dados',
      department: 'Ciência de Dados',
      location: 'Austin, TX',
      type: 'Tempo Integral',
      salary: '$120,000 - $160,000',
      experience: '3+ anos',
      description: 'Junte-se à nossa equipe de ciência de dados para extrair insights de conjuntos de dados complexos e construir modelos preditivos.',
      requirements: [
        'Mestrado em Estatística, Matemática, Ciência da Computação ou área relacionada',
        '3+ anos de experiência em ciência de dados ou análise',
        'Fortes habilidades de programação em Python e R',
        'Experiência com análise estatística e machine learning',
        'Conhecimento de ferramentas e técnicas de visualização de dados'
      ],
      responsibilities: [
        'Analisar conjuntos de dados complexos para extrair insights acionáveis',
        'Construir e implantar modelos preditivos',
        'Criar visualizações de dados e relatórios',
        'Colaborar com stakeholders para definir requisitos de dados',
        'Manter-se atualizado com as últimas técnicas e ferramentas de ciência de dados'
      ],
      benefits: [
        'Salário competitivo e pacote de ações',
        'Oportunidade de trabalhar com tecnologias de dados de ponta',
        'Desenvolvimento profissional e treinamento',
        'Ambiente de equipe colaborativo',
        'Arranjos de trabalho flexíveis'
      ],
      posted: '2024-01-08'
    },
    {
      title: 'Especialista em Ética de IA',
      department: 'Ética e Governança',
      location: 'Remoto',
      type: 'Tempo Integral',
      salary: '$110,000 - $150,000',
      experience: '2+ anos',
      description: 'Estamos procurando um Especialista em Ética de IA para garantir que nossos sistemas de IA sejam desenvolvidos e implantados de forma responsável.',
      requirements: [
        'Bacharel em Ética, Filosofia, Direito ou área relacionada',
        '2+ anos de experiência em ética de IA ou ética tecnológica',
        'Forte compreensão de tecnologias de IA e suas implicações éticas',
        'Experiência com frameworks éticos e avaliação de riscos',
        'Excelentes habilidades de pesquisa e análise'
      ],
      responsibilities: [
        'Desenvolver e implementar frameworks e diretrizes de ética de IA',
        'Realizar avaliações éticas de sistemas de IA',
        'Colaborar com equipes de desenvolvimento em design ético',
        'Monitorar desenvolvimentos regulatórios em governança de IA',
        'Educar equipes sobre práticas éticas de IA'
      ],
      benefits: [
        'Salário competitivo e pacote de ações',
        'Oportunidade de moldar o desenvolvimento ético de IA',
        'Desenvolvimento profissional em ética e governança',
        'Flexibilidade de trabalho remoto',
        'Impacto significativo na responsabilidade de IA'
      ],
      posted: '2024-01-05'
    },
    {
      title: 'Desenvolvedor Frontend - Ferramentas de IA',
      department: 'Engenharia',
      location: 'Seattle, WA',
      type: 'Tempo Integral',
      salary: '$100,000 - $140,000',
      experience: '3+ anos',
      description: 'Junte-se à nossa equipe de frontend para construir interfaces intuitivas para ferramentas e aplicativos com IA.',
      requirements: [
        'Bacharel em Ciência da Computação ou área relacionada',
        '3+ anos de experiência em desenvolvimento frontend',
        'Fortes habilidades em React, TypeScript e JavaScript moderno',
        'Experiência com princípios de design UI/UX',
        'Familiaridade com conceitos de IA/ML é um diferencial'
      ],
      responsibilities: [
        'Desenvolver interfaces amigáveis para ferramentas de IA',
        'Colaborar com designers UX e engenheiros backend',
        'Otimizar aplicativos para desempenho e experiência do usuário',
        'Implementar design responsivo e recursos de acessibilidade',
        'Manter-se atualizado com tecnologias e melhores práticas frontend'
      ],
      benefits: [
        'Salário competitivo e pacote de ações',
        'Oportunidade de trabalhar em produtos de IA inovadores',
        'Ferramentas e tecnologias de desenvolvimento modernas',
        'Ambiente de trabalho colaborativo e criativo',
        'Oportunidades de crescimento profissional'
      ],
      posted: '2024-01-03'
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: 'Remuneração Competitiva',
      description: 'Salários e pacotes de ações líderes da indústria para atrair e reter os melhores talentos.'
    },
    {
      icon: Shield,
      title: 'Benefícios de Saúde Completos',
      description: 'Cobertura médica, odontológica e oftalmológica completa para você e sua família.'
    },
    {
      icon: Clock,
      title: 'Arranjos de Trabalho Flexíveis',
      description: 'Opções de trabalho remoto e horários flexíveis para apoiar o equilíbrio vida-trabalho.'
    },
    {
      icon: Brain,
      title: 'Desenvolvimento Profissional',
      description: 'Orçamento generoso para conferências, cursos e aprendizado contínuo.'
    },
    {
      icon: Users,
      title: 'Cultura Colaborativa',
      description: 'Trabalhe com profissionais apaixonados e talentosos em um ambiente de apoio.'
    },
    {
      icon: Award,
      title: 'Tempo de Inovação',
      description: 'Tempo dedicado para projetos pessoais e exploração de novas tecnologias.'
    }
  ]

  const cultureValues = [
    {
      title: 'Inovação',
      description: 'Encorajamos a criatividade e expandimos os limites do que é possível com IA.',
      icon: Brain
    },
    {
      title: 'Colaboração',
      description: 'Acreditamos que grandes coisas acontecem quando mentes diversas trabalham juntas.',
      icon: Users
    },
    {
      title: 'Excelência',
      description: 'Buscamos a excelência em tudo o que fazemos, do código ao atendimento ao cliente.',
      icon: Target
    },
    {
      title: 'Integridade',
      description: 'Operamos com transparência, honestidade e responsabilidade ética.',
      icon: Shield
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Carreiras</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Junte-se à Nossa Equipe
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Faça parte de uma equipe que está moldando o futuro da inteligência artificial. 
              Estamos procurando indivíduos apaixonados que querem fazer um impacto real 
              no mundo da IA e tecnologia.
            </p>
            <Button size="lg" asChild>
              <Link href="#openings">
                Ver Vagas Abertas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que Juntar-se à Z.ai?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubra o que torna a Z.ai um lugar excepcional para construir sua carreira e fazer impacto.
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

      {/* Our Culture */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Cultura</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nossos valores guiam tudo o que fazemos e criam um ambiente onde todos podem prosperar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vagas Abertas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos sempre procurando indivíduos talentosos para se juntar à nossa equipe. 
              Confira nossas vagas atuais abaixo.
            </p>
          </div>
          
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <Card key={index} className={`hover:shadow-lg transition-all duration-300 ${job.featured ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        {job.featured && <Badge className="bg-primary">Destaque</Badge>}
                      </div>
                      <CardDescription className="text-base mb-3">{job.description}</CardDescription>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-2" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-2" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Requisitos</h4>
                      <ul className="space-y-1">
                        {job.requirements.slice(0, 3).map((req, reqIndex) => (
                          <li key={reqIndex} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                        {job.requirements.length > 3 && (
                          <li className="text-sm text-muted-foreground">
                            +{job.requirements.length - 3} mais requisitos
                          </li>
                        )}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Principais Benefícios</h4>
                      <ul className="space-y-1">
                        {job.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                        {job.benefits.length > 3 && (
                          <li className="text-sm text-muted-foreground">
                            +{job.benefits.length - 3} mais benefícios
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6">
                    <div className="text-sm text-muted-foreground">
                      Publicado: {job.posted} • Experiência: {job.experience}
                    </div>
                    <Button>
                      Candidatar-se Agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Candidatura */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Processo de Candidatura</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Nosso processo de contratação simplificado garante que encontremos os melhores talentos enquanto proporcionamos uma excelente experiência ao candidato.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Candidatar-se</h3>
                <p className="text-sm text-muted-foreground">Envie sua candidatura e currículo através do nosso portal</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Triagem</h3>
                <p className="text-sm text-muted-foreground">Análise inicial pela nossa equipe de recrutamento</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Entrevistas</h3>
                <p className="text-sm text-muted-foreground">Entrevistas técnicas e de adequação cultural</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold mb-2">Oferta</h3>
                <p className="text-sm text-muted-foreground">Receba e aceite sua oferta para juntar-se à Z.ai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para Moldar o Futuro da IA?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Junte-se a nós em nossa missão de criar inteligência artificial centrada no ser humano que faça um impacto positivo no mundo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#openings">
                Navegar por Vagas Abertas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Contatar Recrutamento
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}