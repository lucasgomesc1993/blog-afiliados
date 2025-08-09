import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Eye, Lock, ArrowRight, Info } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
  const privacySections = [
    {
      title: 'Informações que Coletamos',
      content: [
        'Informações pessoais: nome, email (quando você se inscreve na newsletter)',
        'Dados de uso: páginas visitadas, tempo no site, links clicados',
        'Informações técnicas: navegador, dispositivo, endereço IP',
        'Cookies: para melhorar sua experiência no site'
      ]
    },
    {
      title: 'Como Usamos suas Informações',
      content: [
        'Para fornecer e manter nosso serviço',
        'Para melhorar, personalizar e expandir nosso serviço',
        'Para entender e analisar como você usa nosso site',
        'Para enviar newsletters e atualizações (com seu consentimento)',
        'Para monitorar o uso do site e detectar problemas técnicos'
      ]
    },
    {
      title: 'Compartilhamento de Informações',
      content: [
        'Não vendemos suas informações pessoais para terceiros',
        'Compartilhamos dados apenas com parceiros de afiliado quando necessário',
        'Podemos divulgar informações quando exigido por lei',
        'Dados agregados e anônimos podem ser compartilhados para análise'
      ]
    },
    {
      title: 'Seus Direitos',
      content: [
        'Acessar suas informações pessoais que mantemos',
        'Corrigir informações imprecisas sobre você',
        'Excluir suas informações pessoais (quando aplicável)',
        'Optar por não receber comunicações de marketing',
        'Exportar seus dados em formato portátil'
      ]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Política de Privacidade
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Como protegemos suas informações e garantimos sua privacidade ao usar nosso site
            </motion.p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Na ReviewsPro, levamos sua privacidade muito a sério. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas informações quando você visita nosso site.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ao usar nosso site, você concorda com as práticas descritas nesta política. Se você tiver alguma dúvida sobre como lidamos com suas informações, não hesite em nos contatar.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {privacySections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2">
                        {index === 0 && <Eye className="h-5 w-5 text-primary" />}
                        {index === 1 && <Shield className="h-5 w-5 text-primary" />}
                        {index === 2 && <Lock className="h-5 w-5 text-primary" />}
                        {index === 3 && <Info className="h-5 w-5 text-primary" />}
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cookies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-6">Cookies e Tecnologias Similares</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Usamos cookies e outras tecnologias de rastreamento para melhorar sua experiência em nosso site. Cookies são pequenos arquivos de texto armazenados em seu dispositivo que nos ajudam a:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Lembrar suas preferências e configurações</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Entender como você usa nosso site</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Melhorar nosso conteúdo e serviços</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Personalizar sua experiência</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Você pode configurar seu navegador para recusar cookies ou para alertá-lo quando cookies estão sendo enviados. No entanto, algumas partes do nosso site podem não funcionar corretamente sem cookies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-6">Segurança dos Dados</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Implementamos medidas técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Isso inclui, mas não se limita a:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Criptografia de dados sensíveis</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Controle de acesso restrito</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Monitoramento de segurança contínuo</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Treinamento regular da equipe</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No entanto, nenhum sistema de segurança é 100% seguro. Não podemos garantir a segurança absoluta de suas informações, mas nos comprometemos a manter os mais altos padrões de segurança.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-6">Privacidade de Crianças</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Nosso site não se destina a menores de 13 anos. Não coletamos intencionalmente informações pessoais de crianças menores de 13 anos.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Se soubermos que coletamos informações pessoais de uma criança menor de 13 anos, tomaremos medidas para remover essas informações de nossos servidores. Se você é pai ou responsável e acredita que seu filho nos forneceu informações pessoais, entre em contato conosco.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Changes to Policy */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-6">Alterações nesta Política</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou por motivos operacionais, legais ou regulatórios.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A data efetiva desta política será indicada no topo desta página. Recomendamos que você revise esta política regularmente para se manter informado sobre como protegemos suas informações.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Se você tiver alguma dúvida sobre esta Política de Privacidade ou sobre como lidamos com suas informações, não hesite em nos contatar:
              </p>
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="text-muted-foreground mb-2">
                  <strong>Email:</strong> privacidade@reviewspro.com
                </p>
                <p className="text-muted-foreground">
                  <strong>Resposta:</strong> Tentaremos responder à sua solicitação dentro de 30 dias úteis.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold mb-4"
          >
            Sua Privacidade é Importante
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
          >
            Comprometemo-nos a proteger suas informações e garantir uma experiência segura em nosso site
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Button size="lg" variant="secondary" asChild>
              <Link href="/sobre">
                <ArrowRight className="mr-2 h-5 w-5" />
                Saiba Mais Sobre Nós
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}