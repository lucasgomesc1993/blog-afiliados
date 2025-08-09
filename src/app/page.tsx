import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Brain, Users, Target, Zap, Shield, TrendingUp } from 'lucide-react'
import Hero from '@/components/Hero'

export default function Home() {
  const services = [
    {
      icon: Brain,
      title: 'Soluções de IA',
      description: 'Soluções de inteligência artificial de ponta adaptadas às necessidades do seu negócio.',
      href: '/ai-solutions'
    },
    {
      icon: Users,
      title: 'Consultoria',
      description: 'Orientação especializada para transformar seu negócio com IA e automação.',
      href: '/consulting'
    },
    {
      icon: Target,
      title: 'Estudos de Caso',
      description: 'Descubra como ajudamos empresas a alcançar seus objetivos.',
      href: '/case-studies'
    }
  ]

  const features = [
    {
      icon: Zap,
      title: 'Rapidez Extrema',
      description: 'Nossas soluções de IA entregam resultados em tempo recorde, acelerando o crescimento do seu negócio.'
    },
    {
      icon: Shield,
      title: 'Seguro e Confiável',
      description: 'Segurança de nível empresarial com garantia de 99,9% de tempo de atividade para sua tranquilidade.'
    },
    {
      icon: TrendingUp,
      title: 'Crescimento Escalável',
      description: 'Nossas soluções crescem com seu negócio, garantindo sucesso a longo prazo.'
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero
        title="Soluções de IA Centradas no Ser Humano"
        description="Transforme seu negócio com inteligência artificial de ponta que coloca as pessoas em primeiro lugar."
        badge={false}
        buttons={[
          {
            href: "/consulting",
            text: "Começar",
            iconRight: <ArrowRight className="ml-2 h-4 w-4" />
          },
          {
            href: "/services",
            text: "Explorar Serviços",
            variant: "outline"
          }
        ]}
      />

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Nossos Serviços
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Soluções de IA abrangentes projetadas para impulsionar inovação e crescimento para seu negócio.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                    >
                      <service.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription>
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="ghost" className="p-0 h-auto" asChild>
                        <Link href={service.href} className="flex items-center text-primary">
                          Saiba mais
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Por que Escolher a Z.ai?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Combinamos tecnologia de ponta com experiência humana para entregar resultados excepcionais.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <feature.icon className="h-8 w-8 text-primary" />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-xl font-semibold mb-3"
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-muted-foreground"
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Pronto para Transformar seu Negócio?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
          >
            Vamos discutir como nossas soluções de IA podem ajudá-lo a alcançar seus objetivos e impulsionar a inovação.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Agendar uma Consulta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}