import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Building2, Globe, Award, Users, Handshake } from 'lucide-react'
import Link from 'next/link'

export default function PartnersPage() {
  const partners = [
    {
      id: 1,
      name: 'TechCorp Solutions',
      type: 'Parceiro Tecnológico',
      description: 'Principal provedor de infraestrutura em nuvem e plataformas de implantação de IA.',
      logo: '/api/placeholder/200/100',
      website: '#',
      partnershipLevel: 'Estratégico',
      since: '2022'
    },
    {
      id: 2,
      name: 'DataFlow Analytics',
      type: 'Parceiro de Dados',
      description: 'Especializado em processamento de big data e soluções de analytics em tempo real.',
      logo: '/api/placeholder/200/100',
      website: '#',
      partnershipLevel: 'Premium',
      since: '2021'
    },
    {
      id: 3,
      name: 'InnovateLab',
      type: 'Parceiro de Pesquisa',
      description: 'Instituição de pesquisa de IA de ponta focada em algoritmos de próxima geração.',
      logo: '/api/placeholder/200/100',
      website: '#',
      partnershipLevel: 'Estratégico',
      since: '2023'
    },
    {
      id: 4,
      name: 'SecureNet Systems',
      type: 'Parceiro de Segurança',
      description: 'Soluções de cibersegurança de nível empresarial para sistemas de IA e proteção de dados.',
      logo: '/api/placeholder/200/100',
      website: '#',
      partnershipLevel: 'Certificado',
      since: '2022'
    },
    {
      id: 5,
      name: 'GlobalFin Services',
      type: 'Parceiro da Indústria',
      description: 'Líder de serviços financeiros implementando IA em setores bancários e de investimento.',
      logo: '/api/placeholder/200/100',
      website: '#',
      partnershipLevel: 'Estratégico',
      since: '2021'
    },
    {
      id: 6,
      name: 'HealthTech Plus',
      type: 'Parceiro de Saúde',
      description: 'Empresa de tecnologia de saúde focada em soluções de diagnóstico alimentadas por IA.',
      logo: '/api/placeholder/200/100',
      website: '#',
      partnershipLevel: 'Premium',
      since: '2023'
    }
  ]

  const partnershipLevels = {
    'Estratégico': { color: 'bg-blue-100 text-blue-800', description: 'Integração profunda e visão compartilhada' },
    'Premium': { color: 'bg-purple-100 text-purple-800', description: 'Colaboração aprimorada e suporte' },
    'Certificado': { color: 'bg-green-100 text-green-800', description: 'Qualidade e confiabilidade verificadas' }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nossos Parceiros</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Colaboramos com líderes da indústria para entregar soluções de IA de ponta e impulsionar a inovação para frente.
        </p>
      </div>

      {/* Partnership Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Por que Parceria Conosco</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Acesso ao Mercado</h3>
              <p className="text-sm text-muted-foreground">
                Acesso a mercados globais e clientes empresariais em várias indústrias.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Integração Tecnológica</h3>
              <p className="text-sm text-muted-foreground">
                Integração perfeita com nossa plataforma de IA e ferramentas de desenvolvimento.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Co-marketing</h3>
              <p className="text-sm text-muted-foreground">
                Iniciativas de marketing conjunto e oportunidades de exposição da marca.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Suporte Especializado</h3>
              <p className="text-sm text-muted-foreground">
                Suporte dedicado e acesso à nossa equipe de pesquisa de IA.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Partnership Levels */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Níveis de Parceria</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(partnershipLevels).map(([level, details]) => (
            <Card key={level}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {level}
                  <Badge className={details.color}>{level}</Badge>
                </CardTitle>
                <CardDescription>{details.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Partners Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Nossa Rede de Parceiros</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <Card key={partner.id} className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">{partner.type}</Badge>
                  <Badge className={partnershipLevels[partner.partnershipLevel].color}>
                    {partner.partnershipLevel}
                  </Badge>
                </div>
                <div className="mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 w-auto mx-auto object-contain"
                  />
                </div>
                <CardTitle className="text-lg text-center">{partner.name}</CardTitle>
                <CardDescription className="text-center">{partner.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="text-sm text-muted-foreground mb-4">
                  Parceiro desde: {partner.since}
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link href={partner.website}>
                    <Globe className="h-4 w-4 mr-2" />
                    Visitar Website
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <div className="bg-muted/50 rounded-lg p-8">
          <Handshake className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Torne-se um Parceiro</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Interessado em juntar-se à nossa rede de parceiros? Estamos sempre procurando empresas inovadoras para colaborar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Entre em Contato</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/resources/whitepapers">Baixar Kit de Parceiro</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}