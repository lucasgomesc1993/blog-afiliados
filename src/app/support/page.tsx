import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  BookOpen, 
  Video, 
  Download,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import Link from 'next/link'

export default function SupportPage() {
  const supportOptions = [
    {
      id: 1,
      title: 'Documentação',
      description: 'Guias abrangentes, referências de API e tutoriais',
      icon: BookOpen,
      link: '/docs',
      color: 'text-blue-600'
    },
    {
      id: 2,
      title: 'Tutoriais em Vídeo',
      description: 'Guias passo a passo em vídeo para tarefas comuns',
      icon: Video,
      link: '/tutorials',
      color: 'text-purple-600'
    },
    {
      id: 3,
      title: 'Fórum da Comunidade',
      description: 'Obtenha ajuda de nossa comunidade de especialistas',
      icon: MessageCircle,
      link: '/community',
      color: 'text-green-600'
    },
    {
      id: 4,
      title: 'Contato de Suporte',
      description: 'Suporte direto de nossa equipe técnica',
      icon: HelpCircle,
      link: '/contact',
      color: 'text-orange-600'
    }
  ]

  const faqItems = [
    {
      question: 'Como começo a usar a Z.ai?',
      answer: 'Você pode começar criando uma conta gratuita em nossa plataforma. Confira nosso guia de primeiros passos para instruções detalhadas.',
      category: 'Primeiros Passos'
    },
    {
      question: 'Quais planos de preços vocês oferecem?',
      answer: 'Oferecemos planos de preços flexíveis que variam desde nível gratuito para pequenos projetos até soluções empresariais para grandes organizações.',
      category: 'Preços'
    },
    {
      question: 'Como posso integrar a Z.ai com meus sistemas existentes?',
      answer: 'A Z.ai fornece APIs REST e SDKs para linguagens de programação populares. Nossa documentação inclui exemplos de integração.',
      category: 'Integração'
    },
    {
      question: 'Meus dados são seguros com a Z.ai?',
      answer: 'Sim, levamos a segurança de dados a sério. Todos os dados são criptografados em trânsito e em repouso, e cumprimos com padrões da indústria.',
      category: 'Segurança'
    }
  ]

  const systemStatus = [
    { service: 'Serviços de API', status: 'operational', uptime: '99.9%' },
    { service: 'Painel Web', status: 'operational', uptime: '99.8%' },
    { service: 'Banco de Dados', status: 'operational', uptime: '99.9%' },
    { service: 'Processamento de IA', status: 'degraded', uptime: '98.5%' }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case 'degraded':
        return <AlertCircle className="h-5 w-5 text-yellow-600" />
      case 'outage':
        return <AlertCircle className="h-5 w-5 text-red-600" />
      default:
        return <Clock className="h-5 w-5 text-gray-600" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational':
        return 'bg-green-100 text-green-800'
      case 'degraded':
        return 'bg-yellow-100 text-yellow-800'
      case 'outage':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'operational':
        return 'Operacional'
      case 'degraded':
        return 'Degradado'
      case 'outage':
        return 'Fora do Ar'
      default:
        return 'Desconhecido'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Centro de Suporte</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Estamos aqui para ajudar você a ter sucesso com a Z.ai. Encontre respostas, conecte-se com especialistas 
          e obtenha o suporte necessário.
        </p>
      </div>

      {/* Quick Support Options */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Como Podemos Ajudar?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportOptions.map((option) => (
            <Card key={option.id} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <option.icon className={`h-12 w-12 ${option.color} mx-auto mb-4`} />
                <h3 className="font-semibold mb-2">{option.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href={option.link}>Saiba Mais</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* FAQ Section */}
        <div className="lg:col-span-2">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                    <CardDescription>{faq.answer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline">{faq.category}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline" asChild>
                <Link href="/faq">Ver Todas as FAQs</Link>
              </Button>
            </div>
          </section>

          {/* Contact Methods */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Contate-nos Diretamente</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="h-6 w-6 text-primary mr-3" />
                    <h3 className="font-semibold">Suporte por Email</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Obtenha ajuda via email para questões técnicas e inquiries gerais.
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Tempo de resposta: 24-48 horas
                  </p>
                  <Button asChild className="w-full">
                    <Link href="mailto:support@z.ai">Envie um Email</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="h-6 w-6 text-primary mr-3" />
                    <h3 className="font-semibold">Suporte Telefônico</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Fale diretamente com nossa equipe de suporte para questões urgentes.
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Disponível: Seg-Sex, 9h - 18h EST
                  </p>
                  <Button asChild className="w-full">
                    <Link href="tel:+15551234567">Ligue para Nós</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        {/* System Status */}
        <div>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Status do Sistema</h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Status Atual
                  <Badge className="bg-green-100 text-green-800">Principalmente Operacional</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemStatus.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(item.status)}
                        <span className="font-medium">{item.service}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(item.status)}>
                          {getStatusText(item.status)}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{item.uptime}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    Última atualização: Agora mesmo
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Resources */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Recursos</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Download className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Guia do Usuário</h4>
                      <p className="text-sm text-muted-foreground">Manual completo do usuário</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Documentação da API</h4>
                      <p className="text-sm text-muted-foreground">Documentação técnica</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Video className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Biblioteca de Vídeos</h4>
                      <p className="text-sm text-muted-foreground">Vídeos tutoriais</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}