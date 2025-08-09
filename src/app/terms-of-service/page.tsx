import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, Shield, Globe, Users, DollarSign, Clock, Mail, Phone } from 'lucide-react'

export default function TermsOfService() {
  const sections = [
    {
      title: 'Aceitação dos Termos',
      icon: FileText,
      content: [
        {
          subtitle: 'Acordo com os Termos',
          text: 'Ao acessar e usar o site, serviços e produtos da Z.ai (coletivamente, os "Serviços"), você aceita e concorda em ser vinculado pelos termos e disposições deste acordo.'
        },
        {
          subtitle: 'Uso dos Serviços',
          text: 'Se você não concordar em cumprir o acima, por favor não use nossos Serviços. Estes Termos de Serviço aplicam-se a todos os usuários dos Serviços.'
        },
        {
          subtitle: 'Modificações',
          text: 'Reservamo-nos o direito de revisar estes termos a qualquer momento. Ao continuar a usar nossos Serviços após as alterações se tornarem eficazes, você concorda em ser vinculado pelos termos revisados.'
        }
      ]
    },
    {
      title: 'Licença de Uso',
      icon: Globe,
      content: [
        {
          subtitle: 'Permissão para Usar',
          text: 'É concedida permissão para baixar temporariamente uma cópia dos materiais no site da Z.ai para visualização pessoal, não comercial transitória apenas. Esta é a concessão de uma licença, não uma transferência de título.'
        },
        {
          subtitle: 'Restrições',
          text: 'Você não pode modificar ou copiar os materiais, usar os materiais para qualquer finalidade comercial, ou para qualquer exibição pública, engenharia reversa, ou usar os materiais para qualquer finalidade que não seja seu uso pretendido.'
        },
        {
          subtitle: 'Término',
          text: 'Esta licença será automaticamente encerrada se você violar qualquer uma destas restrições e pode ser encerrada pela Z.ai a qualquer momento.'
        }
      ]
    },
    {
      title: 'Responsabilidades do Usuário',
      icon: Users,
      content: [
        {
          subtitle: 'Segurança da Conta',
          text: 'Você é responsável por manter a confidencialidade de sua conta e senha e por restringir o acesso ao seu computador. Você concorda em aceitar responsabilidade por todas as atividades que ocorrem sob sua conta ou senha.'
        },
        {
          subtitle: 'Atividades Proibidas',
          text: 'Você não pode usar nossos Serviços para qualquer finalidade ilegal ou não autorizada. Você está proibido de usar os Serviços para prejudicar menores ou transmitir qualquer material que seja ilegal, difamatório, ou invasor da privacidade.'
        },
        {
          subtitle: 'Conformidade',
          text: 'Você deve cumprir todas as leis aplicáveis ao usar nossos Serviços, incluindo aquelas relacionadas à privacidade de dados, comunicações internacionais e exportação de dados técnicos.'
        }
      ]
    },
    {
      title: 'Termos de Pagamento',
      icon: DollarSign,
      content: [
        {
          subtitle: 'Taxas de Assinatura',
          text: 'Certos Serviços podem exigir pagamento de taxas de assinatura. Você concorda em fornecer informações de compra e conta atuais, completas e precisas para todas as compras feitas através de nossos Serviços.'
        },
        {
          subtitle: 'Ciclo de Cobrança',
          text: 'As taxas de assinatura serão cobradas em base recorrente de acordo com o ciclo de cobrança selecionado no momento da compra. Você nos autoriza a cobrar seu método de pagamento por essas taxas.'
        },
        {
          subtitle: 'Reembolsos',
          text: 'Reembolsos estão sujeitos à nossa política de reembolso, que pode ser atualizada de tempos em tempos. Por favor, revise nossa política de reembolso atual para informações detalhadas.'
        }
      ]
    },
    {
      title: 'Propriedade Intelectual',
      icon: Shield,
      content: [
        {
          subtitle: 'Propriedade',
          text: 'Todos os materiais e conteúdo disponíveis através de nossos Serviços são propriedade da Z.ai ou seus licenciadores e são protegidos por leis de propriedade intelectual.'
        },
        {
          subtitle: 'Conteúdo do Usuário',
          text: 'Você retém todos os direitos sobre qualquer conteúdo que você enviar, postar ou exibir em ou através de nossos Serviços. Ao enviar conteúdo, você concede à Z.ai uma licença mundial, não exclusiva, isenta de royalties para usar, reproduzir e exibir tal conteúdo.'
        },
        {
          subtitle: 'Marcas Registradas',
          text: 'O nome Z.ai, logo e todos os nomes, logos, nomes de produtos e serviços relacionados, designs e slogans relacionados são marcas registradas da Z.ai ou suas afiliadas.'
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
              Termos de Serviço
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Bem-vindo à Z.ai! Estes Termos de Serviço regem seu uso de nosso site, serviços e produtos. 
              Por favor, leia estes termos cuidadosamente antes de usar nossos Serviços.
            </p>
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-2" />
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
                <CardTitle>Bem-vindo à Z.ai</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Obrigado por escolher a Z.ai! Estes Termos de Serviço ("Termos") regem seu uso de nosso site, 
                  serviços e produtos (coletivamente, os "Serviços"). Ao acessar ou usar nossos Serviços, 
                  você concorda em ser vinculado por estes Termos.
                </p>
                <p className="text-muted-foreground mb-4">
                  A Z.ai fornece soluções de inteligência artificial e serviços de consultoria para empresas e 
                  organizações em todo o mundo. Estes Termos aplicam-se a todos os usuários de nossos Serviços, 
                  incluindo visitantes, clientes e parceiros.
                </p>
                <p className="text-muted-foreground">
                  Se você não concordar com estes Termos, por favor não use nossos Serviços. Reservamo-nos o direito de 
                  atualizar ou modificar estes Termos a qualquer momento sem aviso prévio.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
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

      {/* Disclaimer of Warranties */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Isenção de Garantias</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Os Serviços são fornecidos "como estão" e "conforme disponíveis". A Z.ai não faz representações 
                  ou garantias de qualquer tipo, expressas ou implícitas, quanto à operação dos Serviços ou as 
                  informações, conteúdo, materiais ou produtos incluídos nos Serviços.
                </p>
                <p className="text-muted-foreground mb-4">
                  Você expressamente concorda que seu uso dos Serviços é por seu próprio risco. Na máxima extensão 
                  permitida pela lei aplicável, a Z.ai isenta todas as garantias, expressas ou implícitas, incluindo, 
                  mas não se limitando a, garantias implícitas de comercialização e adequação a um propósito específico.
                </p>
                <p className="text-muted-foreground">
                  A Z.ai não garante que os Serviços serão ininterruptos ou livres de erros, que defeitos 
                  serão corrigidos, ou que os Serviços ou o servidor que os disponibiliza estão livres 
                  de vírus ou outros componentes prejudiciais.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Limitação de Responsabilidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Em nenhum caso a Z.ai, seus diretores, funcionários, parceiros, fornecedores ou provedores de conteúdo 
                  serão responsáveis por quaisquer danos, incluindo, sem limitação, danos por perda de dados, lucro, 
                  ou outras perdas intangíveis, decorrentes ou relacionadas ao uso ou incapacidade 
                  de usar os Serviços.
                </p>
                <p className="text-muted-foreground mb-4">
                  Não obstante qualquer coisa em contrário contida aqui, a responsabilidade da Z.ai para com você por qualquer 
                  causa qualquer e independentemente da forma de ação, será em todos os momentos limitada ao 
                  valor pago, se houver, por você à Z.ai durante o período de seis (6) meses anterior a qualquer 
                  causa de ação surgida.
                </p>
                <p className="text-muted-foreground">
                  Algumas jurisdições não permitem a exclusão de certas garantias ou a limitação ou 
                  exclusão de responsabilidade por danos consequenciais ou incidentais, então as limitações acima 
                  podem não se aplicar a você.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Indemnification */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Indenização</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Você concorda em indenizar, defender e isentar de responsabilidade a Z.ai, seus funcionários, diretores, 
                  agentes, licenciadores e fornecedores de e contra todas as perdas, despesas, danos e custos, 
                  incluindo honorários advocatícios razoáveis, resultantes de qualquer violação destes Termos ou qualquer 
                  atividade relacionada à sua conta.
                </p>
                <p className="text-muted-foreground mb-4">
                  Isso inclui, mas não se limita a, qualquer reclamação de que o conteúdo que você envia ou disponibiliza 
                  através dos Serviços infringe os direitos de propriedade intelectual de terceiros, ou que tal 
                  conteúdo viola a lei aplicável.
                </p>
                <p className="text-muted-foreground">
                  A Z.ai reserva-se o direito, por sua própria conta, de assumir a defesa exclusiva e controle de 
                  qualquer assunto para o qual você seja obrigado a nos indenizar, e você concorda em cooperar com nossa 
                  defesa de tais reclamações.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Lei Aplicável</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Estes Termos e quaisquer acordos separados pelos quais fornecemos Serviços a você serão regidos 
                  e interpretados de acordo com as leis do Estado da Califórnia, Estados Unidos, 
                  sem considerar seus princípios de conflito de leis.
                </p>
                <p className="text-muted-foreground mb-4">
                  Qualquer ação legal de qualquer natureza movida por você ou pela Z.ai (coletivamente, as "Partes" 
                  e individualmente, uma "Parte") será iniciada ou processada nos tribunais estaduais e federais 
                  localizados no Condado de São Francisco, Califórnia, e as Partes pelo presente consentem e renunciam 
                  a todas as defesas de falta de jurisdição pessoal e forum non conveniens com relação ao local 
                  e jurisdição em tais tribunais.
                </p>
                <p className="text-muted-foreground">
                  A aplicação da Convenção das Nações Unidas sobre Contratos para Venda Internacional de Mercadorias 
                  e da Lei Uniforme de Transações de Computador (UCITA) é expressamente excluída.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Se você tiver alguma dúvida sobre estes Termos de Serviço, por favor entre em contato conosco:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>legal@z.ai</span>
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