import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, ExternalLink, TrendingUp, Award, Users } from 'lucide-react'
import Link from 'next/link'

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: 'Z.ai Capta US$ 50M em Série B para Expandir Plataforma de IA',
      excerpt: 'Líder em IA garante financiamento para acelerar o desenvolvimento de soluções de IA de próxima geração e expandir alcance global.',
      date: '2024-01-15',
      category: 'Financiamento',
      image: '/api/placeholder/400/200',
      readTime: '3 min',
      externalUrl: '#'
    },
    {
      id: 2,
      title: 'Nova Parceria com TechCorp Solutions Anunciada',
      excerpt: 'Colaboração estratégica visa entregar soluções integradas de IA para clientes empresariais em múltiplas indústrias.',
      date: '2024-01-10',
      category: 'Parceria',
      image: '/api/placeholder/400/200',
      readTime: '2 min',
      externalUrl: '#'
    },
    {
      id: 3,
      title: 'Z.ai Nomeada "Líder em Inovação de IA" por Relatório da Indústria',
      excerpt: 'Reconhecida por trabalho inovador em tecnologias de processamento de linguagem natural e visão computacional.',
      date: '2024-01-05',
      category: 'Prêmios',
      image: '/api/placeholder/400/200',
      readTime: '4 min',
      externalUrl: '#'
    },
    {
      id: 4,
      title: 'Lançamento de Plataforma Revolucionária de Analytics Alimentada por IA',
      excerpt: 'Nova plataforma permite que empresas aproveitem capacidades avançadas de IA para tomada de decisão baseada em dados.',
      date: '2023-12-20',
      category: 'Lançamento de Produto',
      image: '/api/placeholder/400/200',
      readTime: '5 min',
      externalUrl: '#'
    },
    {
      id: 5,
      title: 'Z.ai Expande para Mercado Europeu com Novo Escritório em Berlim',
      excerpt: 'Expansão estratégica marca o compromisso da empresa em servir clientes e parceiros europeus.',
      date: '2023-12-15',
      category: 'Expansão',
      image: '/api/placeholder/400/200',
      readTime: '3 min',
      externalUrl: '#'
    },
    {
      id: 6,
      title: 'Equipe de Pesquisa Publica Artigo Inovador sobre IA Ética',
      excerpt: 'Novo framework para desenvolvimento responsável de IA ganha reconhecimento de líderes acadêmicos e da indústria.',
      date: '2023-12-10',
      category: 'Pesquisa',
      image: '/api/placeholder/400/200',
      readTime: '6 min',
      externalUrl: '#'
    }
  ]

  const categories = ['Todas', 'Financiamento', 'Parceria', 'Prêmios', 'Lançamento de Produto', 'Expansão', 'Pesquisa']

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Financiamento':
        return <TrendingUp className="h-4 w-4" />
      case 'Prêmios':
        return <Award className="h-4 w-4" />
      case 'Parceria':
        return <Users className="h-4 w-4" />
      default:
        return <Calendar className="h-4 w-4" />
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Notícias e Atualizações</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Mantenha-se informado sobre nossas últimas conquistas, parcerias e inovações na indústria de IA.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={category === 'Todas' ? 'default' : 'outline'}
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Featured News */}
      <section className="mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative h-96 lg:h-auto">
            <img
              src={newsItems[0].image}
              alt={newsItems[0].title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <Badge variant="secondary" className="mb-2">
                {getCategoryIcon(newsItems[0].category)}
                <span className="ml-1">{newsItems[0].category}</span>
              </Badge>
              <h2 className="text-2xl font-bold mb-2">{newsItems[0].title}</h2>
              <p className="text-white/80 mb-4">{newsItems[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-white/60">
                  <Calendar className="h-4 w-4 mr-1" />
                  {newsItems[0].date}
                </div>
                <Link href={newsItems[0].externalUrl} className="text-white hover:text-white/80">
                  <ExternalLink className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {newsItems.slice(1, 4).map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {getCategoryIcon(item.category)}
                          <span className="ml-1">{item.category}</span>
                        </Badge>
                        <span className="text-xs text-muted-foreground">{item.readTime}</span>
                      </div>
                      <h3 className="font-semibold mb-2 line-clamp-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{item.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {item.date}
                        </div>
                        <Link href={item.externalUrl} className="text-primary hover:text-primary/80">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All News Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Todas as Notícias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="h-full flex flex-col hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">
                    {getCategoryIcon(item.category)}
                    <span className="ml-1">{item.category}</span>
                  </Badge>
                </div>
              </div>
              <CardHeader className="flex-1">
                <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
                <CardDescription className="line-clamp-3">{item.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                  <Link href={item.externalUrl} className="text-primary hover:text-primary/80">
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="mt-12 text-center">
        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Mantenha-se Atualizado</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Assine nossa newsletter para receber as últimas notícias e atualizações diretamente em sua caixa de entrada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Digite seu email"
              className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
              Assinar
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}