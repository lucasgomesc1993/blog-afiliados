import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Calendar, User, Clock, TrendingUp, Brain, Target, Zap, ChevronRight } from 'lucide-react'

export default function Blog() {
  const blogPosts = [
    {
      title: 'Ética em IA: Construindo Inteligência Artificial Responsável',
      excerpt: 'Explorando as considerações éticas e melhores práticas para desenvolver sistemas de IA que sejam justos, transparentes e responsáveis.',
      author: 'Dra. Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min de leitura',
      category: 'Ética em IA',
      tags: ['Ética', 'IA Responsável', 'Governança'],
      image: '/api/placeholder/400/250',
      href: '/blog/ai-ethics',
      featured: true
    },
    {
      title: 'O Futuro do Trabalho: Como a IA Está Transformando Indústrias',
      excerpt: 'Uma visão abrangente de como a inteligência artificial está remodelando o local de trabalho e criando novas oportunidades para trabalhadores e empresas.',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '12 min de leitura',
      category: 'Futuro do Trabalho',
      tags: ['Local de Trabalho', 'Automação', 'Transformação Digital'],
      image: '/api/placeholder/400/250',
      href: '/blog/future-of-work'
    },
    {
      title: 'Tendências de Machine Learning para Observar em 2024',
      excerpt: 'Descubra as últimas tendências e inovações em machine learning que estão prestes a transformar negócios e indústrias este ano.',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      readTime: '10 min de leitura',
      category: 'Machine Learning',
      tags: ['Tendências de ML', 'Inovação', 'Tecnologia'],
      image: '/api/placeholder/400/250',
      href: '/blog/machine-learning-trends'
    },
    {
      title: 'Implementando IA na Saúde: Desafios e Oportunidades',
      excerpt: 'Examinando os desafios únicos e as imensas oportunidades de integrar inteligência artificial em sistemas de saúde.',
      author: 'Dr. James Wilson',
      date: '2023-12-28',
      readTime: '15 min de leitura',
      category: 'IA na Saúde',
      tags: ['Saúde', 'IA Médica', 'Cuidado ao Paciente'],
      image: '/api/placeholder/400/250',
      href: '/blog/healthcare-ai'
    },
    {
      title: 'Processamento de Linguagem Natural: Quebrando Barreiras Linguísticas',
      excerpt: 'Como os avanços em NLP estão possibilitando melhor comunicação e compreensão entre línguas e culturas.',
      author: 'Lisa Park',
      date: '2023-12-20',
      readTime: '9 min de leitura',
      category: 'NLP',
      tags: ['NLP', 'Processamento de Linguagem', 'Comunicação'],
      image: '/api/placeholder/400/250',
      href: '/blog/nlp-advances'
    },
    {
      title: 'Visão Computacional no Varejo: Aprimorando a Experiência do Cliente',
      excerpt: 'Explorando como a tecnologia de visão computacional está revolucionando a indústria do varejo e melhorando as experiências de compra.',
      author: 'David Kim',
      date: '2023-12-15',
      readTime: '11 min de leitura',
      category: 'Visão Computacional',
      tags: ['Varejo', 'Visão Computacional', 'Experiência do Cliente'],
      image: '/api/placeholder/400/250',
      href: '/blog/computer-vision-retail'
    }
  ]

  const categories = [
    { name: 'Ética em IA', count: 12, icon: Brain },
    { name: 'Machine Learning', count: 18, icon: Target },
    { name: 'Futuro do Trabalho', count: 15, icon: TrendingUp },
    { name: 'IA na Saúde', count: 8, icon: Zap },
    { name: 'NLP', count: 10, icon: Brain },
    { name: 'Visão Computacional', count: 14, icon: Target }
  ]

  const popularTags = [
    'Inteligência Artificial', 'Machine Learning', 'Deep Learning', 'Redes Neurais',
    'Ciência de Dados', 'Automação', 'Robótica', 'IoT', 'Blockchain', 'Computação em Nuvem'
  ]

  const newsletter = {
    title: 'Mantenha-se Atualizado com Insights de IA',
    description: 'Receba as últimas tendências, insights e notícias da indústria de IA em sua caixa de entrada semanalmente.',
    buttonText: 'Inscreva-se Agora'
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Blog</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Insights e Inovação em IA
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore as últimas tendências, insights e desenvolvimentos em inteligência artificial 
              e machine learning de nossa equipe de especialistas e líderes da indústria.
            </p>
            <Button size="lg" asChild>
              <Link href="/consulting">
                Explore Nossos Serviços
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Artigo em Destaque</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nosso artigo mais popular e perspicaz deste mês.
            </p>
          </div>
          
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8">
                  <Badge variant="outline" className="mb-4">{post.category}</Badge>
                  <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>
                  
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button asChild>
                    <Link href={post.href}>
                      Ler Artigo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="bg-muted flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-full h-48 bg-muted-foreground/20 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-muted-foreground">Article Image</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Artigo em Destaque</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Últimos Artigos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mantenha-se informado com nossos últimos insights sobre inteligência artificial e machine learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <div className="bg-muted h-48 flex items-center justify-center">
                  <span className="text-muted-foreground">Article Image</span>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={post.href}>
                      Ler Mais
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Categorias</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Navegue por nossos artigos por tópico para encontrar conteúdo que mais lhe interessa.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="text-center p-6 group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-0">
                  <category.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} Artigos</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{newsletter.title}</h2>
            <p className="text-xl mb-8 opacity-90">
              {newsletter.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Digite seu email"
                className="flex-1 px-4 py-2 rounded-md bg-background text-foreground placeholder-muted-foreground border border-border"
              />
              <Button size="lg" variant="secondary">
                {newsletter.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tags Populares</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore tópicos em tendência em inteligência artificial e machine learning.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {popularTags.map((tag, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground cursor-pointer">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}