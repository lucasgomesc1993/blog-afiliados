import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Shield, 
  CheckCircle, 
  Eye, 
  DollarSign, 
  Link as LinkIcon,
  ArrowRight,
  ExternalLink,
  Info,
  AlertTriangle,
  Users,
  Scale
} from 'lucide-react'
import Link from 'next/link'

export default function AffiliatePolicyPage() {
  const affiliatePartners = [
    { name: 'Amazon', logo: '🛒', description: 'Maior marketplace do mundo' },
    { name: 'Magazine Luiza', logo: '🛍️', description: 'Varejista brasileira líder' },
    { name: 'Americanas', logo: '🏪', description: 'Loja de departamentos tradicional' },
    { name: 'Casas Bahia', logo: '🏬', description: 'Varejo de eletrodomésticos' },
    { name: 'Fast Shop', logo: '⚡', description: 'Especialista em eletrônicos' }
  ]

  const faqItems = [
    {
      question: 'O que são links de afiliado?',
      answer: 'Links de afiliado são URLs especiais que nos permitem rastrear quando um usuário faz uma compra após clicar em um de nossos links. Quando isso acontece, recebemos uma pequena comissão do vendedor, sem custo adicional para você.'
    },
    {
      question: 'Isso afeta o preço que eu pago?',
      answer: 'Não! O preço que você paga é exatamente o mesmo que pagaria se acessasse a loja diretamente. Na verdade, muitas vezes conseguimos oferecer cupons de desconto exclusivos que podem até reduzir o preço final.'
    },
    {
      question: 'Como vocês escolhem os produtos para analisar?',
      answer: 'Nossa seleção é baseada em popularidade, inovação, demanda do mercado e relevância para nossos leitores. Não aceitamos pagamento para analisar ou promover produtos específicos.'
    },
    {
      question: 'Vocês aceitam patrocínios?',
      answer: 'Não aceitamos patrocínios que influenciem nossas análises. Todos os produtos são avaliados com base em seus méritos reais, e qualquer patrocínio é claramente identificado como tal.'
    },
    {
      question: 'Como garantem a imparcialidade?',
      answer: 'Nossa equipe segue um rigoroso código de ética. Testamos todos os produtos pessoalmente, avaliamos prós e contras de forma equilibrada, e nossas recomendações são baseadas apenas na qualidade e experiência do usuário.'
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="h-8 w-8" />
              <h1 className="text-4xl md:text-5xl font-bold">Política de Afiliados</h1>
              <Shield className="h-8 w-8" />
            </div>
            <p className="text-xl mb-8 opacity-90">
              Transparência total sobre como monetizamos nosso conteúdo e como isso 
              beneficia você, nosso leitor. Entenda nosso compromisso com a honestidade.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/melhores/geral">
                  Ver Melhores Produtos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="/sobre">
                  Sobre Nós
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What are Affiliate Links */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <LinkIcon className="h-8 w-8 text-primary" />
                O Que São Links de Afiliado?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Links de afiliado são uma forma de monetização que nos permite continuar 
                  oferecendo conteúdo gratuito e de qualidade para você. Quando você clica 
                  em um de nossos links e faz uma compra na loja parceira, recebemos uma 
                  pequena comissão.
                </p>
                <p>
                  <strong className="text-foreground">Importante:</strong> Isso não custa nada 
                  a mais para você! O preço final é exatamente o mesmo que você pagaria se 
                  acessasse a loja diretamente. Em muitos casos, conseguimos negociar cupons 
                  de desconto exclusivos que podem até economizar seu dinheiro.
                </p>
                <p>
                  Esta prática é comum e amplamente aceita no mundo digital, permitindo que 
                  criadores de conteúdo sejam recompensados pelo trabalho de pesquisa, 
                  teste e análise que realizam.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-500" />
                    Como Funciona
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Você clica no link</h4>
                      <p className="text-sm text-muted-foreground">
                        Clica em um de nossos links de afiliado para ver o produto
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Cookie é armazenado</h4>
                      <p className="text-sm text-muted-foreground">
                        Um cookie rastreia que veio do nosso site (geralmente 24-30 dias)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Você faz a compra</h4>
                      <p className="text-sm text-muted-foreground">
                        Compra normalmente na loja parceira
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Recebemos comissão</h4>
                      <p className="text-sm text-muted-foreground">
                        Ganhamos uma pequena porcentagem da venda
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nosso Compromisso com Você</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Prometemos manter a transparência e integridade em tudo o que fazemos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <Eye className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle>Transparência Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sempre identificamos claramente quais links são de afiliado. 
                    Nada é escondido ou disfarçado.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <Scale className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <CardTitle>Imparcialidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Nossas análises não são influenciadas por comissões. 
                    Recomendamos apenas o que realmente vale a pena.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <CheckCircle className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                  <CardTitle>Qualidade Garantida</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Testamos pessoalmente todos os produtos antes de recomendar. 
                    Sua confiança é nossa prioridade.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Affiliate Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossos Parceiros Afiliados</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trabalhamos apenas com lojas confiáveis e respeitadas no mercado
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {affiliatePartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{partner.logo}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{partner.name}</h3>
                        <p className="text-sm text-muted-foreground">{partner.description}</p>
                      </div>
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tire suas dúvidas sobre nosso programa de afiliados
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-start gap-3">
                      <Info className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-800">
                  <AlertTriangle className="h-5 w-5" />
                  Aviso Importante
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-orange-700">
                <p>
                  <strong>Divulgação de Afiliados:</strong> Devemos informar que alguns dos links 
                  em nosso site são links de afiliados. Isso significa que, sem custo adicional 
                  para você, podemos ganhar uma comissão se você clicar em um link e fazer uma compra.
                </p>
                <p>
                  <strong>Seleção de Produtos:</strong> Nossa recomendação de produtos é baseada 
                  em nossa pesquisa e teste pessoal. Não aceitamos pagamento para análise ou 
                  promoção de produtos específicos.
                </p>
                <p>
                  <strong>Preços e Disponibilidade:</strong> Os preços e disponibilidade dos 
                  produtos podem mudar sem aviso prévio. Sempre verifique o preço final na loja 
                  parceira antes de finalizar sua compra.
                </p>
                <p>
                  <strong>Opiniões Próprias:</strong> Todas as opiniões expressas em nosso site 
                  são nossas próprias e não foram influenciadas por parceiros ou pagamentos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Users className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Ainda Tem Dúvidas?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Estamos aqui para ajudar! Se tiver alguma dúvida sobre nossa política 
              de afiliados ou como funcionamos, não hesite em entrar em contato.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contato">
                Entre em Contato
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}