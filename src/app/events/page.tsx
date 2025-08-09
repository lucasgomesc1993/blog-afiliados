import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Clock, Users, ExternalLink, Plus } from 'lucide-react'
import Link from 'next/link'

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Cúpula de IA 2024',
      description: 'Junte-se a líderes da indústria para a principal conferência de IA com palestras principais, workshops e oportunidades de networking.',
      date: '2024-03-15',
      time: '09:00 - 18:00',
      location: 'San Francisco, CA',
      type: 'Conferência',
      image: '/api/placeholder/400/200',
      registrationUrl: '#',
      price: '$299',
      capacity: 500,
      registered: 342
    },
    {
      id: 2,
      title: 'Workshop de Machine Learning',
      description: 'Workshop prático cobrindo técnicas de implementação prática de ML e melhores práticas.',
      date: '2024-02-28',
      time: '14:00 - 17:00',
      location: 'Evento Virtual',
      type: 'Workshop',
      image: '/api/placeholder/400/200',
      registrationUrl: '#',
      price: 'Gratuito',
      capacity: 100,
      registered: 87
    },
    {
      id: 3,
      title: 'Simpósio de IA na Saúde',
      description: 'Explorando a interseção da inteligência artificial e práticas modernas de saúde.',
      date: '2024-04-10',
      time: '10:00 - 16:00',
      location: 'Boston, MA',
      type: 'Simpósio',
      image: '/api/placeholder/400/200',
      registrationUrl: '#',
      price: '$199',
      capacity: 200,
      registered: 156
    }
  ]

  const pastEvents = [
    {
      id: 4,
      title: 'Conferência de IA Ética 2023',
      description: 'Discussões sobre desenvolvimento de IA responsável e implementação em várias indústrias.',
      date: '2023-12-05',
      location: 'Nova York, NY',
      type: 'Conferência',
      image: '/api/placeholder/400/200',
      attendees: 350,
      recordingUrl: '#'
    },
    {
      id: 5,
      title: 'Showcase de Startups de IA',
      description: 'Apresentação de startups inovadoras de IA e suas soluções revolucionárias.',
      date: '2023-11-20',
      location: 'Austin, TX',
      type: 'Showcase',
      image: '/api/placeholder/400/200',
      attendees: 200,
      recordingUrl: '#'
    },
    {
      id: 6,
      title: 'Meetup de Ciência de Dados',
      description: 'Encontro mensal de profissionais de ciência de dados compartilhando insights e experiências.',
      date: '2023-11-15',
      location: 'Seattle, WA',
      type: 'Meetup',
      image: '/api/placeholder/400/200',
      attendees: 75,
      recordingUrl: '#'
    }
  ]

  const eventTypes = ['Todas', 'Conferência', 'Workshop', 'Simpósio', 'Showcase', 'Meetup']

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'Conferência':
        return 'bg-blue-100 text-blue-800'
      case 'Workshop':
        return 'bg-green-100 text-green-800'
      case 'Simpósio':
        return 'bg-purple-100 text-purple-800'
      case 'Showcase':
        return 'bg-orange-100 text-orange-800'
      case 'Meetup':
        return 'bg-pink-100 text-pink-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Eventos</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Junte-se a nós em conferências, workshops e meetups para explorar o mais recente em tecnologia de IA e networking com especialistas da indústria.
        </p>
      </div>

      {/* Event Type Filters */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {eventTypes.map((type) => (
          <Badge
            key={type}
            variant={type === 'Todas' ? 'default' : 'outline'}
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
          >
            {type}
          </Badge>
        ))}
      </div>

      {/* Upcoming Events */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Calendar className="h-6 w-6 mr-2 text-primary" />
          Próximos Eventos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="h-full flex flex-col hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getEventTypeColor(event.type)}>
                    {event.type}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{event.price}</Badge>
                </div>
              </div>
              <CardHeader className="flex-1">
                <CardTitle className="text-lg">{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {event.registered}/{event.capacity} inscritos
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href={event.registrationUrl}>
                    Inscrever-se Agora
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Clock className="h-6 w-6 mr-2 text-primary" />
          Eventos Passados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event) => (
            <Card key={event.id} className="h-full flex flex-col hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover rounded-t-lg grayscale"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="outline" className={getEventTypeColor(event.type)}>
                    {event.type}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-black/20 rounded-t-lg" />
              </div>
              <CardHeader className="flex-1">
                <CardTitle className="text-lg">{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {event.attendees} participantes
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link href={event.recordingUrl}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver Gravação
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Host Event CTA */}
      <section className="mt-12 text-center">
        <div className="bg-muted/50 rounded-lg p-8">
          <Plus className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Hospede um Evento Conosco</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Interessado em hospedar um evento, workshop ou meetup de IA? Fornecemos local, promoção e suporte organizacional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Entre em Contato</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/resources/whitepapers">Baixar Guia de Eventos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}