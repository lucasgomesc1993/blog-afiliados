'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { ArrowRight, Users, Target, Zap, Shield, TrendingUp, CheckCircle, Mail, Phone, MapPin, Calendar } from 'lucide-react'

export default function Consulting() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  const services = [
    {
      icon: Target,
      title: 'Desenvolvimento de Estratégia de IA',
      description: 'Desenvolva uma estratégia abrangente de IA alinhada com seus objetivos de negócio.',
      features: [
        'Avaliação de Negócios',
        'Análise de Oportunidades de IA',
        'Desenvolvimento de Roadmap',
        'Projeções de ROI'
      ],
      duration: '2-4 semanas'
    },
    {
      icon: Users,
      title: 'Avaliação Tecnológica',
      description: 'Avalie seu stack tecnológico atual e identifique oportunidades de integração de IA.',
      features: [
        'Revisão de Infraestrutura',
        'Avaliação de Prontidão de Dados',
        'Análise de Lacunas',
        'Recomendações Tecnológicas'
      ],
      duration: '1-2 semanas'
    },
    {
      icon: Zap,
      title: 'Planejamento de Implementação',
      description: 'Crie planos de implementação detalhados para implantação bem-sucedida de soluções de IA.',
      features: [
        'Planejamento de Projeto',
        'Alocação de Recursos',
        'Avaliação de Riscos',
        'Desenvolvimento de Cronograma'
      ],
      duration: '2-3 semanas'
    },
    {
      icon: Shield,
      title: 'Gestão de Mudanças',
      description: 'Garanta a adoção suave de soluções de IA em toda sua organização.',
      features: [
        'Análise de Stakeholders',
        'Programas de Treinamento',
        'Estratégia de Comunicação',
        'Monitoramento de Desempenho'
      ],
      duration: '4-6 semanas'
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Descoberta',
      description: 'Começamos entendendo seus desafios de negócio, objetivos e cenário tecnológico atual.'
    },
    {
      step: '2',
      title: 'Avaliação',
      description: 'Nossos especialistas realizam uma análise completa da sua prontidão para IA e identificam oportunidades.'
    },
    {
      step: '3',
      title: 'Estratégia',
      description: 'Desenvolvemos uma estratégia de IA personalizada e roadmap adaptado às suas necessidades específicas.'
    },
    {
      step: '4',
      title: 'Implementação',
      description: 'Nossa equipe trabalha junto com a sua para implementar soluções de IA e garantir adoção bem-sucedida.'
    },
    {
      step: '5',
      title: 'Otimização',
      description: 'Monitoramos e otimizamos continuamente suas soluções de IA para máximo impacto e ROI.'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Consultoria de IA</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Serviços Especializados de Consultoria de IA
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transforme seu negócio com orientação estratégica de IA de nossa equipe de especialistas. 
              Ajudamos você a navegar pelo complexo cenário da inteligência artificial e implementar 
              soluções que geram valor real de negócio.
            </p>
            <Button size="lg" asChild>
              <Link href="#contact-form">
                Agendar uma Consulta
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços de Consultoria</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Serviços abrangentes de consultoria para guiar sua jornada de transformação de IA.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Principais Recursos:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-primary mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      Duração: {service.duration}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nosso Processo de Consultoria</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma abordagem estruturada para garantir transformação de IA bem-sucedida para seu negócio.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-border"></div>
              
              {process.map((item, index) => (
                <div key={index} className="relative flex items-start mb-12">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg z-10">
                    {item.step}
                  </div>
                  <div className="ml-8 flex-1">
                    <Card className="p-6">
                      <CardContent className="p-0">
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comece sua Jornada de IA</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Pronto para explorar como a IA pode transformar seu negócio? Entre em contato com nossos especialistas hoje.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Agendar uma Consulta</CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo e um de nossos especialistas em IA entrará em contato com você em 24 horas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Empresa</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="service">Interesse em Serviço</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="strategy">Desenvolvimento de Estratégia de IA</option>
                        <option value="assessment">Avaliação Tecnológica</option>
                        <option value="implementation">Planejamento de Implementação</option>
                        <option value="change">Gestão de Mudanças</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Conte-nos sobre suas necessidades e objetivos de IA..."
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Enviar Mensagem
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              {/* Contact Info */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Entre em Contato</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>consulting@z.ai</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>San Francisco, CA</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Por que Escolher a Z.ai?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span className="text-sm">Proven track record with 500+ successful AI implementations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span className="text-sm">Team of 50+ AI experts and industry specialists</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span className="text-sm">Customized solutions tailored to your business needs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span className="text-sm">End-to-end support from strategy to implementation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}