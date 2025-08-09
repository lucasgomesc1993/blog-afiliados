import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, CheckCircle, AlertCircle, ArrowRight, Info } from 'lucide-react'
import Link from 'next/link'

export default function TermsOfUsePage() {
  const termsSections = [
    {
      title: 'Aceitação dos Termos',
      content: [
        'Ao acessar e usar este site, você aceita e concorda com estes Termos de Uso',
        'Se você não concordar com estes termos, não use nosso site',
        'Reservamo-nos o direito de modificar estes termos a qualquer momento',
        'O uso continuado do site após modificações constitui aceitação'
      ]
    },
    {
      title: 'Uso do Site',
      content: [
        'Você deve ter pelo menos 18 anos para usar este site',
        'Você é responsável por manter a confidencialidade de sua conta',
        'Não é permitido usar o site para fins ilegais ou não autorizados',
        'Você concorda em não violar quaisquer leis aplicáveis'
      ]
    },
    {
      title: 'Propriedade Intelectual',
      content: [
        'Todo o conteúdo deste site é propriedade da ReviewsPro ou de nossos licenciadores',
        'É proibido copiar, reproduzir ou distribuir nosso conteúdo sem permissão',
        'Marcas registradas e logotipos são propriedade de seus respectivos donos',
        'O uso não autorizado pode violar leis de direitos autorais e outras leis'
      ]
    },
    {
      title: 'Limitação de Responsabilidade',
      content: [
        'O site é fornecido "como está" sem garantias de qualquer tipo',
        'Não somos responsáveis por danos diretos, indiretos, incidentais ou consequentes',
        'Não garantimos que o site estará sempre disponível ou livre de erros',
        'Não somos responsáveis pelo conteúdo de sites de terceiros vinculados'
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
              Termos de Uso
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Os termos e condições que regem o uso do nosso site e serviços
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
                Bem-vindo à ReviewsPro. Estes Termos de Uso constituem um acordo legal entre você e a ReviewsPro. Ao acessar e usar nosso site, você concorda em cumprir e estar vinculado por estes termos.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Leia atentamente estes termos antes de usar nosso site. Se você tiver alguma dúvida sobre estes termos, entre em contato conosco.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {termsSections.map((section, index) => (
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
                        {index === 0 && <CheckCircle className="h-5 w-5 text-primary" />}
                        {index === 1 && <Shield className="h-5 w-5 text-primary" />}
                        {index === 2 && <Info className="h-5 w-5 text-primary" />}
                        {index === 3 && <AlertCircle className="h-5 w-5 text-primary" />}
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

      {/* User Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-6">Conteúdo do Usuário</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Nosso site pode permitir que você poste comentários, avaliações ou outros conteúdos. Ao postar conteúdo em nosso site, você concorda com o seguinte:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Você é o único responsável pelo conteúdo que posta</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Você concede à ReviewsPro uma licença mundial, não exclusiva, transferível e sublicenciável para usar, reproduzir, modificar, adaptar, publicar e distribuir seu conteúdo</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Você declara e garante que possui todos os direitos necessários sobre o conteúdo que posta</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Você concorda em não postar conteúdo que seja ilegal, ofensivo, difamatório, obsceno, ou que viole direitos de terceiros</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Reservamo-nos o direito de remover qualquer conteúdo que consideremos inadequado, violador destes termos ou da lei.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Affiliate Links */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-6">Links de Afiliado</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Nosso site pode conter links de afiliado para produtos e serviços de terceiros. Quando você clica nesses links e faz uma compra, podemos receber uma comissão sem custo adicional para você.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                O uso de links de afiliado nos permite manter nosso site gratuito e continuar fornecendo conteúdo de qualidade. Nossas análises e recomendações são sempre imparciais e baseadas em nossa opinião honesta.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Para mais informações sobre como funcionam nossos links de afiliado, consulte nossa <Link href="/politica-de-afiliados" className="text-primary underline">Política de Afiliados</Link>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-6">Atividades Proibidas</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Você concorda em não se envolver em nenhuma das seguintes atividades ao usar nosso site:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Usar o site para qualquer propósito ilegal ou não autorizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Tentar obter acesso não autorizado a nossos sistemas ou redes</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Interferir ou interromper o funcionamento do site</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Postar ou transmitir qualquer conteúdo que contenha vírus ou código malicioso</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Coletar ou armazenar informações pessoais de outros usuários</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Impersonar qualquer pessoa ou entidade</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Reservamo-nos o direito de suspender ou encerrar sua conta se violarmos estes termos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-6">Isenção de Responsabilidade</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                As informações fornecidas neste site são apenas para fins informativos e educacionais. Não garantimos a precisão, integridade ou utilidade de qualquer informação em nosso site.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                As análises e recomendações são baseadas em nossa opinião pessoal e experiência. O desempenho real dos produtos pode variar dependendo do uso individual e outras circunstâncias.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Não somos responsáveis por quaisquer decisões ou ações tomadas com base nas informações fornecidas em nosso site. Sempre faça sua própria pesquisa antes de fazer uma compra.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-6">Lei Aplicável</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil, sem considerar seus conflitos de princípios legais.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Qualquer disputa decorrente destes termos será resolvida nos tribunais competentes do Brasil.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Se alguma parte destes termos for considerada inválida ou inexequível, as partes restantes permanecerão em pleno vigor e efeito.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-muted/30">
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
                Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco:
              </p>
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="text-muted-foreground mb-2">
                  <strong>Email:</strong> termos@reviewspro.com
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
            Obrigado por Confiar em Nós
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
            >
            Estamos comprometidos em fornecer o melhor conteúdo e experiência para nossos usuários
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Button size="lg" variant="secondary" asChild>
              <Link href="/melhores/geral">
                <ArrowRight className="mr-2 h-5 w-5" />
                Explorar Conteúdo
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}