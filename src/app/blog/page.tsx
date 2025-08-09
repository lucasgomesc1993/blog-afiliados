import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Search, 
  Calendar, 
  User, 
  Eye, 
  Clock,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Star,
  Filter
} from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
  views: number
  featured: boolean
  image: string
  relatedProducts?: Array<{
    id: number
    name: string
    price: string
  }>
}

const blogPosts: BlogPost[] = [
  {
    id: 'ai-ethics',
    title: 'AI Ethics: Building Responsible Artificial Intelligence',
    excerpt: 'Exploring the ethical considerations and best practices for developing AI systems that are fair, transparent, and accountable.',
    content: 'Conteúdo completo do artigo...',
    author: 'Dr. Sarah Johnson',
    date: '15 de janeiro de 2024',
    readTime: '8 min',
    category: 'IA Ética',
    tags: ['ética', 'IA', 'responsabilidade', 'transparência'],
    views: 2341,
    featured: true,
    image: '/images/blog/ai-ethics.jpg'
  },
  {
    id: 'future-of-work',
    title: 'The Future of Work: How AI is Transforming Industries',
    excerpt: 'A comprehensive look at how artificial intelligence is reshaping the workplace.',
    content: 'Conteúdo completo do artigo...',
    author: 'Carlos Silva',
    date: '12 de janeiro de 2024',
    readTime: '12 min',
    category: 'Futuro do Trabalho',
    tags: ['futuro', 'trabalho', 'IA', 'transformação'],
    views: 1876,
    featured: true,
    image: '/images/blog/future-of-work.jpg'
  },
  {
    id: 'machine-learning-trends',
    title: 'Machine Learning Trends to Watch in 2024',
    excerpt: 'Discover the latest trends and innovations in machine learning.',
    content: 'Conteúdo completo do artigo...',
    author: 'Ana Santos',
    date: '10 de janeiro de 2024',
    readTime: '6 min',
    category: 'Machine Learning',
    tags: ['machine learning', 'tendências', '2024', 'inovação'],
    views: 1543,
    featured: false,
    image: '/images/blog/machine-learning-trends.jpg'
  },
  {
    id: 'guia-comprar-smartphone',
    title: 'Guia Definitivo: Como Escolher o Smartphone Perfeito em 2024',
    excerpt: 'Descubra tudo o que você precisa saber antes de comprar seu próximo smartphone, desde especificações técnicas até dicas práticas.',
    content: 'Conteúdo completo do artigo...',
    author: 'Carlos Silva',
    date: '15 de março de 2024',
    readTime: '8 min',
    category: 'Guias',
    tags: ['smartphone', 'guia', 'dicas', 'tecnologia'],
    views: 2341,
    featured: true,
    image: '/images/blog/smartphone-guide.jpg',
    relatedProducts: [
      { id: 1, name: 'Galaxy Pro Max', price: 'R$ 3.999' },
      { id: 2, name: 'iPhone 15 Pro', price: 'R$ 4.299' }
    ]
  },
  {
    id: 'melhores-fones-2024',
    title: 'Os 10 Melhores Fones de Ouvido de 2024: Análise Completa',
    excerpt: 'Testamos e comparamos os melhores fones de ouvido do mercado, desde modelos com fio até os mais avançados sem fio.',
    content: 'Conteúdo completo do artigo...',
    author: 'Ana Santos',
    date: '12 de março de 2024',
    readTime: '12 min',
    category: 'Reviews',
    tags: ['fones', 'áudio', 'review', 'comparação'],
    views: 1876,
    featured: true,
    image: '/placeholder-headphones-review.jpg',
    relatedProducts: [
      { id: 3, name: 'Fones Wireless X', price: 'R$ 899' }
    ]
  },
  {
    id: 'tendencias-tecnologia-2024',
    title: 'Tendências de Tecnologia para 2024: O Que Esperar',
    excerpt: 'Uma análise completa das principais tendências tecnológicas que dominarão o mercado em 2024.',
    content: 'Conteúdo completo do artigo...',
    author: 'Pedro Oliveira',
    date: '10 de março de 2024',
    readTime: '6 min',
    category: 'Tecnologia',
    tags: ['tendências', 'tecnologia', '2024', 'inovação'],
    views: 1543,
    featured: false,
    image: '/placeholder-tech-trends.jpg'
  },
  {
    id: 'dicas-economizar-compras',
    title: '10 Dicas para Economizar nas Compras de Tecnologia',
    excerpt: 'Aprenda estratégias inteligentes para economizar dinheiro na hora de comprar produtos tecnológicos.',
    content: 'Conteúdo completo do artigo...',
    author: 'Mariana Costa',
    date: '08 de março de 2024',
    readTime: '7 min',
    category: 'Dicas',
    tags: ['economia', 'dicas', 'compras', 'tecnologia'],
    views: 987,
    featured: false,
    image: '/placeholder-money-saving.jpg'
  },
  {
    id: 'casa-inteligente-iniciantes',
    title: 'Casa Inteligente para Iniciantes: Por Onde Começar',
    excerpt: 'Guia completo para quem quer transformar sua casa em um ambiente inteligente sem complicação.',
    content: 'Conteúdo completo do artigo...',
    author: 'Carlos Silva',
    date: '05 de março de 2024',
    readTime: '10 min',
    category: 'Guias',
    tags: ['casa inteligente', 'iot', 'iniciantes', 'guia'],
    views: 1432,
    featured: false,
    image: '/placeholder-smart-home.jpg'
  },
  {
    id: 'melhores-notebooks-2024',
    title: 'Os Melhores Notebooks de 2024: Para Trabalho, Estudos e Entretenimento',
    excerpt: 'Análise detalhada dos melhores notebooks do ano, separados por categoria e faixa de preço.',
    content: 'Conteúdo completo do artigo...',
    author: 'Ana Santos',
    date: '03 de março de 2024',
    readTime: '15 min',
    category: 'Reviews',
    tags: ['notebooks', 'review', 'comparação', '2024'],
    views: 2109,
    featured: true,
    image: '/placeholder-laptops-2024.jpg',
    relatedProducts: [
      { id: 4, name: 'UltraBook Pro', price: 'R$ 5.499' },
      { id: 5, name: 'MacBook Air M2', price: 'R$ 7.999' }
    ]
  }
]

const categories = ['Todas', 'IA Ética', 'Futuro do Trabalho', 'Machine Learning', 'Guias', 'Reviews', 'Tecnologia', 'Dicas']

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const [sortBy, setSortBy] = useState('recentes')

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'Todas' || post.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'populares':
        return b.views - a.views
      case 'antigos':
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      default: // recentes
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
  })

  const featuredPosts = blogPosts.filter(post => post.featured)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <BookOpen className="h-8 w-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Artigos, guias e análises para ajudar você a fazer as melhores escolhas de tecnologia
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-sm">
                <Star className="h-4 w-4 mr-1" />
                Reviews Detalhadas
              </Badge>
              <Badge variant="outline" className="text-sm">
                <TrendingUp className="h-4 w-4 mr-1" />
                Guias Completos
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Eye className="h-4 w-4 mr-1" />
                Dicas Exclusivas
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Artigos em Destaque</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nossos conteúdos mais populares e recomendados
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <div className="text-6xl">📝</div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <Badge className="bg-yellow-500 text-white">
                          <Star className="h-3 w-3 mr-1" />
                          Destaque
                        </Badge>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                      
                      {post.relatedProducts && post.relatedProducts.length > 0 && (
                        <div>
                          <h4 className="text-sm font-medium mb-2">Produtos mencionados:</h4>
                          <div className="flex flex-wrap gap-2">
                            {post.relatedProducts.map(product => (
                              <Badge key={product.id} variant="outline" className="text-xs">
                                {product.name} - {product.price}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <Button asChild className="w-full">
                        <Link href={`/blog/${post.id}`}>
                          Ler Artigo
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar artigos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recentes">Mais Recentes</SelectItem>
                <SelectItem value="populares">Mais Populares</SelectItem>
                <SelectItem value="antigos">Mais Antigos</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Todos os Artigos</h2>
              <p className="text-muted-foreground">
                {sortedPosts.length} artigo{sortedPosts.length !== 1 ? 's' : ''} encontrado{sortedPosts.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      {post.featured && (
                        <Badge className="bg-yellow-500 text-white">
                          <Star className="h-3 w-3 mr-1" />
                          Destaque
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    {post.relatedProducts && post.relatedProducts.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium mb-1">Produtos:</h4>
                        <div className="text-xs text-muted-foreground">
                          {post.relatedProducts.map(p => p.name).join(', ')}
                        </div>
                      </div>
                    )}
                    
                    <Button variant="outline" asChild className="w-full">
                      <Link href={`/blog/${post.id}`}>
                        Ler Mais
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {sortedPosts.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Nenhum artigo encontrado</h3>
                <p className="text-muted-foreground mb-6">
                  Tente ajustar sua busca ou filtros
                </p>
                <Button onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('Todas')
                }}>
                  Limpar Filtros
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Load More */}
          {sortedPosts.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Carregar Mais Artigos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fique por Dentro das Novidades
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Receba nossos melhores artigos, guias exclusivos e ofertas especiais diretamente no seu email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Seu melhor email" 
              className="bg-white/10 border-white/20 text-white placeholder-white/70"
            />
            <Button size="lg" variant="secondary">
              Inscrever-se
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Adicionar o hook useState manualmente já que estamos em um componente client
function useState<T>(initial: T): [T, (value: T) => void] {
  return [initial, () => {}] as [T, (value: T) => void]
}