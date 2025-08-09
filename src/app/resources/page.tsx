import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Download, Play, FileText, Video } from 'lucide-react'
import Link from 'next/link'

export default function ResourcesPage() {
  const whitepapers = [
    {
      id: 1,
      title: 'O Futuro da IA nos Negócios',
      description: 'Explore como a inteligência artificial está transformando indústrias e criando novas oportunidades de crescimento.',
      category: 'Estratégia de IA',
      date: '2024-01-15',
      downloadUrl: '#',
      readTime: '15 min'
    },
    {
      id: 2,
      title: 'Melhores Práticas de Machine Learning',
      description: 'Guia abrangente para implementar soluções de machine learning de forma eficaz em sua organização.',
      category: 'Técnico',
      date: '2024-01-10',
      downloadUrl: '#',
      readTime: '20 min'
    },
    {
      id: 3,
      title: 'Implementação Ética de IA',
      description: 'Compreendendo as considerações éticas e melhores práticas para implantação responsável de IA.',
      category: 'Ética',
      date: '2024-01-05',
      downloadUrl: '#',
      readTime: '12 min'
    }
  ]

  const webinars = [
    {
      id: 1,
      title: 'Workshop de Transformação de IA',
      description: 'Aprenda como liderar iniciativas bem-sucedidas de transformação de IA em sua organização.',
      presenter: 'Dra. Sarah Johnson',
      date: '2024-02-15',
      duration: '60 min',
      registerUrl: '#',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Machine Learning em Produção',
      description: 'Insights práticos sobre implantação e manutenção de modelos de ML em ambientes de produção.',
      presenter: 'Michael Chen',
      date: '2024-01-20',
      duration: '45 min',
      watchUrl: '#',
      status: 'recorded'
    },
    {
      id: 3,
      title: 'Ética e Governança de IA',
      description: 'Compreendendo o framework para desenvolvimento e implantação ética de IA.',
      presenter: 'Prof. Emily Rodriguez',
      date: '2024-01-10',
      duration: '50 min',
      watchUrl: '#',
      status: 'recorded'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Recursos</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Acesse nossa coleção abrangente de whitepapers, webinars e guias para manter-se à frente na revolução da IA.
        </p>
      </div>

      {/* Whitepapers Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Whitepapers</h2>
          </div>
          <Button asChild variant="outline">
            <Link href="/resources/whitepapers">Ver Todos os Whitepapers</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whitepapers.map((whitepaper) => (
            <Card key={whitepaper.id} className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{whitepaper.category}</Badge>
                  <span className="text-sm text-muted-foreground">{whitepaper.readTime}</span>
                </div>
                <CardTitle className="text-lg">{whitepaper.title}</CardTitle>
                <CardDescription>{whitepaper.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="text-sm text-muted-foreground mb-4">
                  Publicado: {whitepaper.date}
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
      </section>

      {/* Webinars Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Video className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Webinars</h2>
          </div>
          <Button asChild variant="outline">
            <Link href="/resources/webinars">Ver Todos os Webinars</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webinars.map((webinar) => (
            <Card key={webinar.id} className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={webinar.status === 'upcoming' ? 'default' : 'secondary'}>
                    {webinar.status === 'upcoming' ? 'Em Breve' : 'Gravado'}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{webinar.duration}</span>
                </div>
                <CardTitle className="text-lg">{webinar.title}</CardTitle>
                <CardDescription>{webinar.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-muted-foreground">
                    Apresentador: {webinar.presenter}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Data: {webinar.date}
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href={webinar.status === 'upcoming' ? webinar.registerUrl : webinar.watchUrl}>
                    <Play className="h-4 w-4 mr-2" />
                    {webinar.status === 'upcoming' ? 'Inscrever-se Agora' : 'Assistir Gravação'}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-12 text-center">
        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Mantenha-se Atualizado</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Assine nossa newsletter para receber os últimos whitepapers, convites para webinars e insights de IA.
          </p>
          <Button size="lg">
            Assinar Newsletter
          </Button>
        </div>
      </section>
    </div>
  )
}