import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Linkedin, Twitter, Mail } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function TeamPage() {
  const leadership = [
    {
      id: 1,
      name: 'Dra. Sarah Johnson',
      position: 'Diretora Executiva (CEO)',
      bio: 'Líder visionária com mais de 15 anos de experiência em IA e machine learning. Ex-chefe de pesquisa de IA no Google.',
      image: '/images/team/sarah-johnson-ceo.jpg',
      linkedin: '#',
      twitter: '#',
      email: 'sarah.johnson@z.ai'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Diretor de Tecnologia (CTO)',
      bio: 'Especialista em sistemas de IA escaláveis e computação distribuída. Liderou infraestrutura de IA na Amazon Web Services.',
      image: '/images/team/michael-chen-cto.jpg',
      linkedin: '#',
      twitter: '#',
      email: 'michael.chen@z.ai'
    },
    {
      id: 3,
      name: 'Prof. Emily Rodriguez',
      position: 'Diretora Científica (CSO)',
      bio: 'Pesquisadora renomada em processamento de linguagem natural e visão computacional. PhD pelo MIT.',
      image: '/images/team/emily-rodriguez-cso.jpg',
      linkedin: '#',
      twitter: '#',
      email: 'emily.rodriguez@z.ai'
    }
  ]

  const teamMembers = [
    {
      id: 4,
      name: 'Dr. James Wilson',
      position: 'Cientista de Dados Principal',
      bio: 'Especialista em deep learning e redes neurais. Autor publicado em principais conferências de IA.',
      image: '/images/team/james-wilson-data-scientist.jpg',
      linkedin: '#',
      twitter: '#',
      email: 'james.wilson@z.ai'
    },
    {
      id: 5,
      name: 'Sarah Thompson',
      position: 'Chefe de Estratégia de IA',
      bio: 'Ex-consultora da McKinsey especializada em transformação de IA e estratégia digital.',
      image: '/images/team/sarah-thompson-strategy.jpg',
      linkedin: '#',
      twitter: '#',
      email: 'sarah.thompson@z.ai'
    },
    {
      id: 6,
      name: 'David Kim',
      position: 'Engenheiro Líder de Machine Learning',
      bio: 'Especialista em MLOps e sistemas de ML em produção. Construiu plataformas de IA na Netflix.',
      image: '/images/team/professional-team-member.jpg',
      linkedin: '#',
      twitter: '#',
      email: 'david.kim@z.ai'
    },
    {
      id: 7,
      name: 'Lisa Anderson',
      position: 'Pesquisadora Sênior de IA',
      bio: 'Foco em IA ética e desenvolvimento responsável de IA. Candidata a PhD pela Stanford.',
      image: '/images/team/professional-team-member.jpg',
      linkedin: '#',
      twitter: '#',
      email: 'lisa.anderson@z.ai'
    },
    {
      id: 8,
      name: 'Robert Martinez',
      position: 'Gerente de Produto, Soluções de IA',
      bio: 'Líder de produto com experiência em produtos SaaS alimentados por IA. Ex-PM na Salesforce.',
      image: '/images/team/professional-team-member.jpg',
      linkedin: '#',
      twitter: '#',
      email: 'robert.martinez@z.ai'
    },
    {
      id: 9,
      name: 'Jennifer Lee',
      position: 'Designer de UX, Produtos de IA',
      bio: 'Especialista em interação humano-IA e design de experiência do usuário para aplicações de IA.',
      image: '/images/team/professional-team-member.jpg',
      linkedin: '#',
      twitter: '#',
      email: 'jennifer.lee@z.ai'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nossa Equipe</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Conheça os especialistas apaixonados que estão moldando o futuro da inteligência artificial.
        </p>
      </div>

      {/* Leadership Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Equipe de Liderança</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((member) => (
            <Card key={member.id} className="text-center">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <Badge variant="secondary" className="mb-3">{member.position}</Badge>
                <p className="text-muted-foreground mb-4 text-sm">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <Link href={member.linkedin} className="text-muted-foreground hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href={member.twitter} className="text-muted-foreground hover:text-primary">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary">
                    <Mail className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Members Section */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-center">Nossos Especialistas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.id} className="text-center">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{member.position}</p>
                <p className="text-muted-foreground mb-4 text-xs">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <Link href={member.linkedin} className="text-muted-foreground hover:text-primary">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                  <Link href={member.twitter} className="text-muted-foreground hover:text-primary">
                    <Twitter className="h-4 w-4" />
                  </Link>
                  <Link href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary">
                    <Mail className="h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="mt-16">
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Junte-se à Nossa Equipe</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Estamos sempre procurando talentosos indivíduos que são apaixonados por IA e querem fazer a diferença. 
            Confira nossas vagas abertas e torne-se parte da nossa jornada.
          </p>
          <Button size="lg" asChild>
            <Link href="/careers">Ver Vagas Abertas</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}