import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Play, Calendar, Clock, User, Search, Filter } from 'lucide-react'
import Link from 'next/link'

export default function WebinarsPage() {
  const upcomingWebinars = [
    {
      id: 1,
      title: 'Workshop de Transformação de IA',
      description: 'Aprenda como liderar iniciativas bem-sucedidas de transformação de IA em sua organização.',
      presenter: 'Dra. Sarah Johnson',
      date: '2024-02-15',
      time: '14:00 EST',
      duration: '60 min',
      registerUrl: '#',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'IA Generativa em Empresas',
      description: 'Descubra como implementar soluções de IA generativa em grandes organizações.',
      presenter: 'Michael Chen',
      date: '2024-02-22',
      time: '15:00 EST',
      duration: '45 min',
      registerUrl: '#',
      status: 'upcoming'
    }
  ]

  const recordedWebinars = [
    {
      id: 3,
      title: 'Machine Learning em Produção',
      description: 'Insights práticos sobre implantação e manutenção de modelos de ML em ambientes de produção.',
      presenter: 'Michael Chen',
      date: '2024-01-20',
      duration: '45 min',
      watchUrl: '#',
      status: 'recorded',
      views: 1250
    },
    {
      id: 4,
      title: 'Ética e Governança de IA',
      description: 'Compreendendo o framework para desenvolvimento e implantação ética de IA.',
      presenter: 'Prof. Emily Rodriguez',
      date: '2024-01-10',
      duration: '50 min',
      watchUrl: '#',
      status: 'recorded',
      views: 980
    },
    {
      id: 5,
      title: 'Melhores Práticas de Ciência de Dados',
      description: 'Práticas essenciais para construir pipelines robustos de ciência de dados.',
      presenter: 'Dr. James Wilson',
      date: '2023-12-15',
      duration: '55 min',
      watchUrl: '#',
      status: 'recorded',
      views: 1450
    },
    {
      id: 6,
      title: 'IA em Serviços Financeiros',
      description: 'Como a IA está revolucionando bancos, seguros e gestão de investimentos.',
      presenter: 'Sarah Thompson',
      date: '2023-12-05',
      duration: '40 min',
      watchUrl: '#',
      status: 'recorded',
      views: 1100
    }
  ]

  const categories = ['Todas', 'Estratégia de IA', 'Técnico', 'Ética', 'Machine Learning', 'IA Generativa']

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Webinars</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Participe de nossos webinars liderados por especialistas para aprender sobre as últimas tendências de IA, 
          melhores práticas e estratégias de implementação.
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
          <li className="text-sm font-medium text-primary">Webinars</li>
        </ol>
      </nav>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="text"
            placeholder="Pesquisar webinars..."
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

      {/* Upcoming Webinars */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Calendar className="h-6 w-6 mr-2 text-primary" />
          Próximos Webinars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingWebinars.map((webinar) => (
            <Card key={webinar.id} className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="default">Em Breve</Badge>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{webinar.duration}</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{webinar.title}</CardTitle>
                <CardDescription>{webinar.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="h-4 w-4 mr-2" />
                    Apresentador: {webinar.presenter}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {webinar.date} às {webinar.time}
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href={webinar.registerUrl}>
                    Inscrever-se Agora
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recorded Webinars */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Play className="h-6 w-6 mr-2 text-primary" />
          Webinars Gravados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recordedWebinars.map((webinar) => (
            <Card key={webinar.id} className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Gravado</Badge>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{webinar.duration}</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{webinar.title}</CardTitle>
                <CardDescription>{webinar.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="h-4 w-4 mr-2" />
                    Apresentador: {webinar.presenter}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    Gravado: {webinar.date}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Visualizações: {webinar.views.toLocaleString()}
                  </div>
                </div>
                <Button asChild className="w-full" variant="outline">
                  <Link href={webinar.watchUrl}>
                    <Play className="h-4 w-4 mr-2" />
                    Assistir Gravação
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
          <h2 className="text-2xl font-bold mb-4">Quer Apresentar um Webinar?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Estamos sempre procurando especialistas da indústria para compartilhar seu conhecimento. 
            Entre em contato para propor um tópico de webinar.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Entre em Contato</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}