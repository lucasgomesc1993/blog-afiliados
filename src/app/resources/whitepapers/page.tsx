import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Download, FileText, Search, Filter } from 'lucide-react'
import Link from 'next/link'

export default function WhitepapersPage() {
  const whitepapers = [
    {
      id: 1,
      title: 'O Futuro da IA nos Negócios',
      description: 'Explore como a inteligência artificial está transformando indústrias e criando novas oportunidades de crescimento.',
      category: 'Estratégia de IA',
      date: '2024-01-15',
      downloadUrl: '#',
      readTime: '15 min',
      size: '2.4 MB'
    },
    {
      id: 2,
      title: 'Melhores Práticas de Machine Learning',
      description: 'Guia abrangente para implementar soluções de machine learning de forma eficaz em sua organização.',
      category: 'Técnico',
      date: '2024-01-10',
      downloadUrl: '#',
      readTime: '20 min',
      size: '3.1 MB'
    },
    {
      id: 3,
      title: 'Implementação Ética de IA',
      description: 'Compreendendo as considerações éticas e melhores práticas para implantação responsável de IA.',
      category: 'Ética',
      date: '2024-01-05',
      downloadUrl: '#',
      readTime: '12 min',
      size: '1.8 MB'
    },
    {
      id: 4,
      title: 'IA na Saúde: Transformando o Cuidado ao Paciente',
      description: 'Como a IA está revolucionando a entrega de saúde, diagnóstico e planejamento de tratamento.',
      category: 'Saúde',
      date: '2023-12-20',
      downloadUrl: '#',
      readTime: '18 min',
      size: '2.7 MB'
    },
    {
      id: 5,
      title: 'Processamento de Linguagem Natural para Negócios',
      description: 'Aproveitando tecnologias de PLN para melhorar o atendimento ao cliente e eficiência operacional.',
      category: 'PLN',
      date: '2023-12-15',
      downloadUrl: '#',
      readTime: '16 min',
      size: '2.2 MB'
    },
    {
      id: 6,
      title: 'Aplicações de Visão Computacional',
      description: 'Explorando aplicações do mundo real de visão computacional em várias indústrias.',
      category: 'Visão Computacional',
      date: '2023-12-10',
      downloadUrl: '#',
      readTime: '14 min',
      size: '3.5 MB'
    }
  ]

  const categories = ['Todas', 'Estratégia de IA', 'Técnico', 'Ética', 'Saúde', 'PLN', 'Visão Computacional']

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Whitepapers</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Baixe nossos artigos de pesquisa aprofundados e insights sobre inteligência artificial e machine learning.
        </p>
      </div>

      {/* Breadcrumb */}
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Início
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="text-sm text-muted-foreground">/</span>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <Link href="/resources" className="text-sm font-medium text-muted-foreground hover:text-primary">
                Recursos
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <span className="text-sm text-muted-foreground">/</span>
            </div>
          </li>
          <li className="text-sm font-medium text-primary">Whitepapers</li>
        </ol>
      </nav>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="text"
            placeholder="Pesquisar whitepapers..."
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === 'Todas' ? 'default' : 'outline'}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Whitepapers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {whitepapers.map((whitepaper) => (
          <Card key={whitepaper.id} className="h-full flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{whitepaper.category}</Badge>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  <span>{whitepaper.size}</span>
                </div>
              </div>
              <CardTitle className="text-lg">{whitepaper.title}</CardTitle>
              <CardDescription>{whitepaper.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div className="space-y-2 mb-4">
                <div className="text-sm text-muted-foreground">
                  Tempo de Leitura: {whitepaper.readTime}
                </div>
                <div className="text-sm text-muted-foreground">
                  Publicado: {whitepaper.date}
                </div>
              </div>
              <Button asChild className="w-full">
                <Link href={whitepaper.downloadUrl}>
                  <Download className="h-4 w-4 mr-2" />
                  Baixar PDF
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <section className="mt-12 text-center">
        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Procurando Algo Específico?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Não encontrou o que procura? Nossa equipe de especialistas pode ajudar com pesquisa personalizada e insights.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Entre em Contato</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}