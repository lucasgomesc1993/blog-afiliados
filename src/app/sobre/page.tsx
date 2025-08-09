import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Star, 
  Shield, 
  Users, 
  Award, 
  Target,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Heart,
  Eye,
  Scale
} from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'João Silva',
      role: 'Fundador & Editor-Chefe',
      bio: 'Especialista em tecnologia com mais de 10 anos de experiência em análise de produtos.',
      avatar: '/placeholder-avatar.jpg'
    },
    {
      name: 'Maria Santos',
      role: 'Especialista em Smartphones',
      bio: 'Analista de dispositivos móveis com foco em câmera e performance.',
      avatar: '/placeholder-avatar.jpg'
    },
    {
      name: 'Pedro Oliveira',
      role: 'Especialista em Notebooks',
      bio: 'Engenheiro de software especializado em hardware e performance.',
      avatar: '/placeholder-avatar.jpg'
    },
    {
      name: 'Ana Costa',
      role: 'Especialista em Áudio',
      bio: 'Audiófila profissional com experiência em análise de equipamentos de som.',
      avatar: '/placeholder-avatar.jpg'
    }
  ]

  const values = [
    {
      icon: Eye,
      title: 'Transparência Total',
      description: 'Sempre revelamos nossos parceiros de afiliado e como ganhamos comissões.'
    },
    {
      icon: Scale,
      title: 'Imparcialidade',
      description: 'Nossas análises são 100% independentes e baseadas em testes reais.'
    },
    {
      icon: Target,
      title: 'Foco no Usuário',
      description: 'Nosso objetivo é ajudar você a fazer a melhor escolha possível.'
    },
    {
      icon: Shield,
      title: 'Qualidade Garantida',
      description: 'Todos os produtos são testados exaustivamente antes da análise.'
    }
  ]

  const stats = [
    { label: 'Produtos Analisados', value: '500+', icon: '📱' },
    { label: 'Reviews Publicadas', value: '1.2K+', icon: '📝' },
    { label: 'Usuários Satisfeitos', value: '50K+', icon: '😊' },
    { label: 'Parceiros Afiliados', value: '25+', icon: '🤝' }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="h-8 w-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">Sobre Nós</h1>
              <Star className="h-8 w-8 text-primary" />
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Somos uma equipe de especialistas apaixonados por tecnologia, dedicados a fornecer 
              análises imparciais e detalhadas para ajudar você a fazer as melhores escolhas de compra.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/melhores/geral">
                  Ver Melhores Produtos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/politica-de-afiliados">
                  Política de Afiliados
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Acreditamos que todos merecem ter acesso a informações transparentes e detalhadas 
                  antes de fazer uma compra. Com a quantidade crescente de produtos no mercado, 
                  tornou-se cada vez mais difícil para os consumidores tomarem decisões informadas.
                </p>
                <p>
                  Nossa missão é simplificar esse processo, fornecendo análises completas, 
                  comparações detalhadas e recomendações honestas baseadas em testes exaustivos 
                  e experiência real com os produtos.
                </p>
                <p>
                  Trabalhamos incansavelmente para testar cada produto em condições reais de uso, 
                  avaliando não apenas as especificações técnicas, mas também a experiência 
                  do usuário no dia a dia.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-2 gap-6"
            >
              <Card className="text-center">
                <CardContent className="p-6">
                  <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Paixão</h3>
                  <p className="text-sm text-muted-foreground">
                    Amamos o que fazemos e isso se reflete na qualidade do nosso trabalho
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Qualidade</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprometidos com a excelência em todas as nossas análises
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Comunidade</h3>
                  <p className="text-sm text-muted-foreground">
                    Construímos uma comunidade de consumidores informados
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Expertise</h3>
                  <p className="text-sm text-muted-foreground">
                    Anos de experiência em análise de produtos tecnológicos
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho e garantem a qualidade do nosso conteúdo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossa Equipe</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça os especialistas por trás das nossas análises detalhadas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <Card className="text-center h-full">
                  <CardHeader className="pb-4">
                    <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl">👤</span>
                    </div>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-bold mb-6">Nossa Metodologia</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Pesquisa e Seleção</h3>
                    <p className="text-muted-foreground">
                      Identificamos os produtos mais relevantes do mercado baseados em demanda, 
                      inovação e popularidade.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Testes Práticos</h3>
                    <p className="text-muted-foreground">
                      Cada produto é testado por pelo menos 2 semanas em condições reais de uso.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Análise Comparativa</h3>
                    <p className="text-muted-foreground">
                      Comparamos com produtos similares para avaliar custo-benefício e diferenciais.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Publicação Transparente</h3>
                    <p className="text-muted-foreground">
                      Compartilhamos todos os detalhes, incluindo pontos positivos e negativos.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Critérios de Avaliação</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Qualidade e Performance</span>
                      <Badge>40%</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Custo-Benefício</span>
                      <Badge>25%</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Design e Usabilidade</span>
                      <Badge>15%</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Suporte e Garantia</span>
                      <Badge>10%</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Inovação e Recursos</span>
                      <Badge>10%</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Pronto para Fazer Compras Inteligentes?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Explore nossas análises, compare produtos e encontre as melhores ofertas 
              com a confiança de quem testa e avalia cada produto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/melhores/geral">
                  Ver Melhores Produtos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link href="/ofertas">
                  Ver Ofertas do Dia
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}