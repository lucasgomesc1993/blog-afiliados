import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, Lock, Eye, Database, Globe, Mail, Phone, Calendar } from 'lucide-react'

export default function PrivacyPolicy() {
  const sections = [
    {
      title: 'Informações que Coletamos',
      icon: Database,
      content: [
        {
          subtitle: 'Informações Pessoais',
          text: 'Coletamos informações pessoais que você voluntariamente nos fornece quando se registra em nosso site, faz uma compra ou nos contata para suporte. Isso pode incluir seu nome, endereço de email, número de telefone, nome da empresa e cargo.'
        },
        {
          subtitle: 'Dados de Uso',
          text: 'Coletamos automaticamente informações sobre sua interação com nosso site e serviços, incluindo seu endereço IP, tipo de navegador, informações do dispositivo, páginas visitadas e a data e hora de suas visitas.'
        },
        {
          subtitle: 'Cookies e Tecnologias de Rastreamento',
          text: 'Usamos cookies e tecnologias de rastreamento semelhantes para aprimorar sua experiência em nosso site, analisar o tráfego do site e entender como nossos serviços são usados.'
        }
      ]
    },
    {
      title: 'Como Usamos Suas Informações',
      icon: Eye,
      content: [
        {
          subtitle: 'Prestação de Serviços',
          text: 'Usamos suas informações para fornecer, manter e melhorar nossos serviços, processar transações e comunicar com você sobre sua conta.'
        },
        {
          subtitle: 'Comunicação',
          text: 'Podemos usar suas informações de contato para enviar-lhe avisos importantes, newsletters, comunicações de marketing e outras informações relacionadas aos nossos serviços.'
        },
        {
          subtitle: 'Análise e Melhoria',
          text: 'Analisamos dados de uso para entender como nossos serviços são usados, melhorar nossas ofertas e desenvolver novos recursos e serviços.'
        }
      ]
    },
    {
      title: 'Compartilhamento e Divulgação de Dados',
      icon: Globe,
      content: [
        {
          subtitle: 'Provedores de Serviços Terceirizados',
          text: 'Podemos compartilhar suas informações com provedores de serviços terceirizados que realizam serviços em nosso nome, como processamento de pagamentos, análise de dados e entrega de emails.'
        },
        {
          subtitle: 'Requisitos Legais',
          text: 'Podemos divulgar suas informações se exigido por lei ou em resposta a solicitações válidas de autoridades públicas.'
        },
        {
          subtitle: 'Transferências de Negócios',
          text: 'No caso de uma fusão, aquisição ou venda de todos ou parte de nossos ativos, suas informações podem ser transferidas como parte dessa transação.'
        }
      ]
    },
    {
      title: 'Segurança de Dados',
      icon: Lock,
      content: [
        {
          subtitle: 'Medidas de Segurança',
          text: 'Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.'
        },
        {
          subtitle: 'Criptografia',
          text: 'Usamos criptografia padrão da indústria para proteger dados sensíveis transmitidos entre seu dispositivo e nossos servidores.'
        },
        {
          subtitle: 'Controles de Acesso',
          text: 'Restringimos o acesso às suas informações pessoais a funcionários, contratados e agentes que precisam conhecer essas informações para processá-las para nós.'
        }
      ]
    },
    {
      title: 'Seus Direitos e Escolhas',
      icon: Shield,
      content: [
        {
          subtitle: 'Acesso e Atualização',
          text: 'Você tem o direito de acessar, atualizar ou corrigir suas informações pessoais. Você pode fazer isso fazendo login em sua conta ou entrando em contato conosco diretamente.'
        },
        {
          subtitle: 'Portabilidade de Dados',
          text: 'Você tem o direito de receber uma cópia de suas informações pessoais em um formato estruturado, comumente usado e legível por máquina.'
        },
        {
          subtitle: 'Opt-out',
          text: 'Você pode optar por não receber comunicações de marketing de nós seguindo as instruções de cancelamento em nossos emails ou entrando em contato conosco diretamente.'
        }
      ]
    }
  ]

  const lastUpdated = '15 de Janeiro de 2024'

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Legal</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Política de Privacidade
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Na Z.ai, estamos comprometidos em proteger sua privacidade e garantir a segurança de suas informações pessoais. 
              Esta Política de Privacidade explica como coletamos, usamos e protegemos seus dados quando você usa nossos serviços.
            </p>
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              Última atualização: {lastUpdated}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Nosso Compromisso com a Privacidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Z.ai ("nós", "nosso" ou "nossa") respeita sua privacidade e está comprometida em proteger seus dados pessoais. 
                  Esta Política de Privacidade se aplica ao nosso site, serviços e produtos (coletivamente, os "Serviços").
                </p>
                <p className="text-muted-foreground mb-4">
                  Ao usar nossos Serviços, você concorda com a coleta e uso de informações de acordo com esta política. 
                  Implementamos medidas de segurança apropriadas para proteger suas informações pessoais contra acesso não autorizado, 
                  alteração, divulgação ou destruição.
                </p>
                <p className="text-muted-foreground">
                  Esta Política de Privacidade foi projetada para ajudar você a entender quais informações coletamos, por que as coletamos, 
                  e como usamos e protegemos. Se você tiver alguma dúvida sobre esta política, por favor entre em contato conosco.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <section.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          <h3 className="text-lg font-semibold mb-2">{item.subtitle}</h3>
                          <p className="text-muted-foreground">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* International Data Transfers */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Transferências Internacionais de Dados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Nossos serviços podem envolver a transferência de suas informações pessoais para países fora de seu país de residência. 
                  Esses países podem ter leis de proteção de dados que são diferentes das leis em seu país.
                </p>
                <p className="text-muted-foreground mb-4">
                  Quando transferimos suas informações pessoais internacionalmente, garantimos que salvaguardas apropriadas estejam em vigor 
                  para proteger seus direitos de privacidade. Essas salvaguardas podem incluir cláusulas contratuais padrão aprovadas por 
                  autoridades de proteção de dados relevantes ou outros mecanismos legalmente reconhecidos.
                </p>
                <p className="text-muted-foreground">
                  Tomamos medidas razoáveis para garantir que suas informações pessoais recebam um nível adequado de proteção 
                  nas jurisdições em que as processamos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Privacidade Infantil</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Nossos Serviços não são destinados a indivíduos menores de 13 anos. Não coletamos conscientemente informações 
                  pessoais de crianças menores de 13 anos. Se tomarmos conhecimento de que coletamos informações pessoais de 
                  uma criança menor de 13 anos, tomaremos medidas para excluir tais informações.
                </p>
                <p className="text-muted-foreground">
                  Se você é um pai ou responsável e acredita que seu filho nos forneceu informações pessoais, 
                  por favor entre em contato conosco para que possamos tomar as medidas apropriadas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Changes to This Policy */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Alterações nesta Política</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Podemos atualizar esta Política de Privacidade de tempos em tempos para refletir mudanças em nossas práticas, serviços, 
                  ou por razões operacionais, legais ou regulatórias.
                </p>
                <p className="text-muted-foreground mb-4">
                  Quando fazemos alterações nesta política, atualizaremos a data "Última Atualização" no topo desta página 
                  e notificaremos você através de nosso site ou outros canais de comunicação.
                </p>
                <p className="text-muted-foreground">
                  Encorajamos você a revisar esta Política de Privacidade periodicamente para manter-se informado sobre como estamos 
                  protegendo suas informações pessoais.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Entre em Contato</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Se você tiver alguma dúvida sobre esta Política de Privacidade ou nossas práticas de privacidade, por favor entre em contato conosco:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>privacy@z.ai</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-muted-foreground">
                    Z.ai<br />
                    123 AI Innovation Drive<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}