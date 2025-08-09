import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { HelpCircle, MessageCircle, Mail, Phone, Search, Users, Target, Zap, Shield } from 'lucide-react'

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('')

  const faqCategories = [
    {
      name: 'Geral',
      icon: HelpCircle,
      color: 'bg-blue-100 text-blue-800',
      questions: [
        {
          question: 'O que é a Z.ai?',
          answer: 'A Z.ai é uma empresa líder em inteligência artificial que fornece soluções de IA de ponta e serviços de consultoria para empresas em todo o mundo. Especializamo-nos no desenvolvimento de tecnologias de IA centradas no ser humano que ajudam organizações a transformar suas operações e impulsionar a inovação.'
        },
        {
          question: 'Onde a Z.ai está localizada?',
          answer: 'A Z.ai tem sua sede em San Francisco, Califórnia, com escritórios adicionais em Nova York, Austin e Seattle. Também atendemos clientes globalmente através de nossa equipe remota e rede de parcerias.'
        },
        {
          question: 'Quanto tempo a Z.ai está no mercado?',
          answer: 'A Z.ai foi fundada em 2020 e cresceu rapidamente para se tornar uma parceira confiável para empresas que buscam transformação de IA. Concluímos com sucesso mais de 500 projetos para clientes em várias indústrias.'
        },
        {
          question: 'Quais indústrias a Z.ai atende?',
          answer: 'Atendemos uma ampla gama de indústrias incluindo saúde, finanças, manufatura, varejo, tecnologia, educação e mais. Nossas soluções de IA são adaptadas para atender aos desafios e oportunidades únicas de cada indústria.'
        }
      ]
    },
    {
      name: 'Serviços',
      icon: Target,
      color: 'bg-green-100 text-green-800',
      questions: [
        {
          question: 'Quais serviços de IA a Z.ai oferece?',
          answer: 'A Z.ai oferece serviços abrangentes de IA incluindo consultoria em IA, desenvolvimento de machine learning, analytics de dados, visão computacional, processamento de linguagem natural e serviços de integração de IA. Fornecemos soluções completas de ponta a ponta, da estratégia à implementação.'
        },
        {
          question: 'Como funciona o processo de consultoria da Z.ai?',
          answer: 'Nosso processo de consultoria geralmente envolve: 1) Descoberta e avaliação, 2) Desenvolvimento de estratégia, 3) Design de solução, 4) Implementação e 5) Otimização. Trabalhamos em estreita colaboração com os clientes para garantir que as soluções atendam às suas necessidades específicas e entreguem resultados mensuráveis.'
        },
        {
          question: 'A Z.ai pode ajudar com desenvolvimento de IA personalizado?',
          answer: 'Sim, especializamo-nos em desenvolvimento de IA personalizado adaptado aos seus requisitos específicos de negócio. Nossa equipe de especialistas pode construir soluções de IA do zero ou integrar com seus sistemas existentes para abordar seus desafios únicos.'
        },
        {
          question: 'O que diferencia a Z.ai de outras empresas de IA?',
          answer: 'A Z.ai se destaca através de nossa abordagem centrada no ser humano para IA, profundo conhecimento técnico, conhecimento específico da indústria e compromisso com o desenvolvimento ético de IA. Focamos em criar soluções que aumentam as capacidades humanas em vez de substituí-las.'
        }
      ]
    },
    {
      name: 'Tecnologia',
      icon: Zap,
      color: 'bg-purple-100 text-purple-800',
      questions: [
        {
          question: 'Quais tecnologias de IA a Z.ai utiliza?',
          answer: 'Trabalhamos com uma pilha abrangente de tecnologias de IA incluindo machine learning, deep learning, processamento de linguagem natural, visão computacional, analytics preditivos e mais. Utilizamos tanto frameworks de código aberto quanto tecnologias proprietárias para entregar as melhores soluções.'
        },
        {
          question: 'A tecnologia da Z.ai é escalável?',
          answer: 'Sim, nossas soluções de IA são projetadas para escalar com seu negócio. Construímos sistemas que podem lidar com volumes crescentes de dados, bases de usuários e cargas de transação enquanto mantêm desempenho e confiabilidade.'
        },
        {
          question: 'Como a Z.ai garante a segurança dos dados?',
          answer: 'Implementamos medidas de segurança de nível empresarial incluindo criptografia, controles de acesso, auditorias de segurança regulares e conformidade com padrões da indústria como GDPR, CCPA e HIPAA. A segurança de dados é uma prioridade máxima em todas as nossas soluções.'
        },
        {
          question: 'A Z.ai pode integrar com sistemas existentes?',
          answer: 'Absolutamente. Temos ampla experiência na integração de soluções de IA com sistemas empresariais existentes, bancos de dados e fluxos de trabalho. Nossa equipe garante integração perfeita enquanto mantém a estabilidade e desempenho do sistema.'
        }
      ]
    },
    {
      name: 'Suporte',
      icon: Shield,
      color: 'bg-red-100 text-red-800',
      questions: [
        {
          question: 'Que tipo de suporte a Z.ai oferece?',
          answer: 'Oferecemos suporte abrangente incluindo suporte técnico 24/7 para clientes empresariais, manutenção e atualizações regulares, monitoramento de desempenho e otimização contínua. Nossa equipe de suporte está sempre disponível para ajudá-lo a obter o máximo de suas soluções de IA.'
        },
        {
          question: 'Quão rapidamente a Z.ai responde às solicitações de suporte?',
          answer: 'Os tempos de resposta variam por nível de serviço: Clientes empresariais recebem tempo de resposta de 1 hora para questões críticas, clientes padrão recebem tempo de resposta de 24 horas, e todos os clientes têm acesso à nossa base de conhecimento e fóruns da comunidade.'
        },
        {
          question: 'A Z.ai oferece treinamento?',
          answer: 'Sim, oferecemos programas de treinamento abrangentes para sua equipe incluindo treinamento técnico para equipe de TI, treinamento de usuário para usuários finais e briefings executivos para liderança. Garantimos que sua equipe esteja equipada para usar e gerenciar soluções de IA de forma eficaz.'
        },
        {
          question: 'O que acontece se houver um problema com meu sistema de IA?',
          answer: 'No improvável evento de um problema, nossa equipe de suporte segue um processo estruturado de resposta a incidentes. Fornecemos assistência imediata, análise de causa raiz, implementação de resolução e medidas preventivas para evitar problemas futuros.'
        }
      ]
    }
  ]

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Suporte</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Perguntas Frequentes
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Encontre respostas para perguntas comuns sobre a Z.ai, nossos serviços e como podemos ajudar 
              a transformar seu negócio com inteligência artificial.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Pesquisar FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-input bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {filteredCategories.length === 0 ? (
              <Card className="text-center p-8">
                <CardContent className="p-0">
                  <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Nenhum resultado encontrado</h3>
                  <p className="text-muted-foreground">
                    Tente ajustar seus termos de pesquisa ou navegue por todas as categorias abaixo.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-12">
                {filteredCategories.map((category, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                          <category.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{category.name}</CardTitle>
                          <CardDescription>
                            {category.questions.length} {category.questions.length === 1 ? 'pergunta' : 'perguntas'}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((faq, faqIndex) => (
                          <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                            <AccordionTrigger className="text-left">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ainda Tem Perguntas?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Não encontrou a resposta que procura? Nossa equipe de suporte está aqui para ajudar você.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Chat ao Vivo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Converse com nossa equipe de suporte em tempo real para assistência imediata.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    Disponível: Seg-Sex, 9h - 18h PST
                  </div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Suporte por Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Envie-nos um email e responderemos dentro de 24 horas.
                  </p>
                  <div className="text-sm font-medium">
                    support@z.ai
                  </div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Suporte Telefônico</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Fale diretamente com nossa equipe de suporte para assuntos urgentes.
                  </p>
                  <div className="text-sm font-medium">
                    +1 (555) 123-4567
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Links Rápidos</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore estes recursos para mais informações sobre a Z.ai e nossos serviços.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-0">
                  <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Documentação</h3>
                  <p className="text-sm text-muted-foreground">
                    Guias abrangentes e documentação de API
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-0">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Comunidade</h3>
                  <p className="text-sm text-muted-foreground">
                    Junte-se à nossa comunidade de profissionais de IA
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-0">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Estudos de Caso</h3>
                  <p className="text-sm text-muted-foreground">
                    Aprenda com nossas implementações bem-sucedidas
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-0">
                  <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Blog</h3>
                  <p className="text-sm text-muted-foreground">
                    Últimas insights e tendências em IA
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}