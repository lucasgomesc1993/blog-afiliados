'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, CheckCircle, Users, Target, Zap, Shield } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Envie-nos um Email',
      details: ['contact@z.ai', 'support@z.ai', 'sales@z.ai'],
      description: 'Normalmente respondemos dentro de 24 horas'
    },
    {
      icon: Phone,
      title: 'Ligue para Nós',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      description: 'Segunda - Sexta, 9:00 AM - 6:00 PM PST'
    },
    {
      icon: MapPin,
      title: 'Visite-nos',
      details: ['123 AI Innovation Drive', 'San Francisco, CA 94105'],
      description: 'Apenas mediante agendamento'
    }
  ]

  const departments = [
    {
      name: 'Vendas',
      email: 'sales@z.ai',
      description: 'Novas consultas de negócios e oportunidades de parceria',
      icon: Target
    },
    {
      name: 'Suporte',
      email: 'support@z.ai',
      description: 'Assistência técnica e suporte ao cliente',
      icon: Shield
    },
    {
      name: 'Carreiras',
      email: 'careers@z.ai',
      description: 'Candidaturas a emprego e consultas de recrutamento',
      icon: Users
    },
    {
      name: 'Mídia',
      email: 'media@z.ai',
      description: 'Consultas de imprensa e solicitações de mídia',
      icon: Zap
    }
  ]

  const officeLocations = [
    {
      city: 'San Francisco',
      address: '123 AI Innovation Drive, San Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      isHeadquarters: true
    },
    {
      city: 'New York',
      address: '456 Tech Avenue, New York, NY 10001',
      phone: '+1 (555) 234-5678',
      isHeadquarters: false
    },
    {
      city: 'Austin',
      address: '789 Innovation Blvd, Austin, TX 78701',
      phone: '+1 (555) 345-6789',
      isHeadquarters: false
    },
    {
      city: 'Seattle',
      address: '321 AI Street, Seattle, WA 98101',
      phone: '+1 (555) 456-7890',
      isHeadquarters: false
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Entre em Contato</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Fale Conosco
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Tem perguntas sobre nossas soluções de IA ou está pronto para iniciar seu projeto? 
              Estamos aqui para ajudar você a transformar seu negócio com inteligência artificial de ponta.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm font-medium">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Envie-nos uma Mensagem</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Preencha o formulário abaixo e um de nossos especialistas em IA retornará para você dentro de 24 horas.
              </p>
            </div>
            
            {isSubmitted ? (
              <Card className="text-center p-8">
                <CardContent className="p-0">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">Mensagem Enviada com Sucesso!</h3>
                  <p className="text-muted-foreground mb-6">
                    Obrigado por entrar em contato conosco. Recebemos sua mensagem e retornaremos em breve.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>
                    Enviar Outra Mensagem
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Formulário de Contato</CardTitle>
                  <CardDescription>
                    Por favor, preencha todos os campos obrigatórios marcados com *
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Nome *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Seu nome completo"
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
                          placeholder="seu.email@exemplo.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company">Empresa</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Nome da sua empresa"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Assunto *</Label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="general">Consulta Geral</option>
                        <option value="sales">Vendas & Parceria</option>
                        <option value="support">Suporte Técnico</option>
                        <option value="consulting">Consultoria em IA</option>
                        <option value="careers">Oportunidades de Carreira</option>
                        <option value="media">Mídia & Imprensa</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Conte-nos sobre seu projeto, desafios, ou como podemos ajudar você..."
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          Enviando...
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Enviar Mensagem
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Contate Nossos Departamentos</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Entre em contato com o departamento certo para assistência mais rápida e especializada.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departments.map((dept, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <dept.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {dept.name}
                        </CardTitle>
                        <CardDescription>{dept.email}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{dept.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Escritórios</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Visite-nos em um de nossos locais ou agende uma reunião virtual.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {officeLocations.map((office, index) => (
                <Card key={index} className="relative">
                  {office.isHeadquarters && (
                    <Badge className="absolute top-4 right-4 bg-primary">
                      Sede
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle>{office.city}</CardTitle>
                    <CardDescription>{office.address}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 mr-2" />
                      {office.phone}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Horário Comercial</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Nossa equipe está disponível durante as seguintes horas para ajudar você.
              </p>
            </div>
            
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">Horário de Suporte</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Segunda - Sexta</span>
                        <span>9:00 AM - 6:00 PM PST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábado</span>
                        <span>10:00 AM - 4:00 PM PST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingo</span>
                        <span>Fechado</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-4">Suporte de Emergência</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Disponível 24/7</span>
                        <span>Clientes Enterprise</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tempo de Resposta</span>
                        <span>Dentro de 1 hora</span>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">
                        Para suporte de emergência, por favor ligue para nossa linha direta.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can help you achieve your goals and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/consulting">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="inverse" asChild>
              <Link href="#contact-form">
                Send Message
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}