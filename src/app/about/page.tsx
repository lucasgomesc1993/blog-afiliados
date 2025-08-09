import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, Target, Users, Award, Globe, Lightbulb } from 'lucide-react'

export default function About() {
  const timeline = [
    {
      year: '2020',
      title: 'Fundação',
      description: 'A Z.ai foi fundada com a visão de tornar a inteligência artificial acessível e centrada no ser humano.'
    },
    {
      year: '2021',
      title: 'Primeira Solução de IA',
      description: 'Lançamos nossa primeira solução alimentada por IA para clientes empresariais, alcançando 95% de satisfação do cliente.'
    },
    {
      year: '2022',
      title: 'Expansão Global',
      description: 'Expandimos operações para 5 países e atendemos mais de 100 clientes empresariais em todo o mundo.'
    },
    {
      year: '2023',
      title: 'Laboratório de Inovação',
      description: 'Estabelecemos nosso laboratório de inovação para pioneirizar tecnologias e soluções de IA de próxima geração.'
    },
    {
      year: '2024',
      title: 'IA Sustentável',
      description: 'Comprometidos com o desenvolvimento sustentável de IA com foco em práticas éticas e responsabilidade ambiental.'
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Centrado no Ser Humano',
      description: 'Acreditamos que a tecnologia deve servir à humanidade, não o contrário.'
    },
    {
      icon: Target,
      title: 'Excelência',
      description: 'Buscamos a excelência em tudo o que fazemos, do código ao atendimento ao cliente.'
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Grandes coisas acontecem quando mentes diversas trabalham juntas em direção a um objetivo comum.'
    },
    {
      icon: Award,
      title: 'Integridade',
      description: 'Operamos com transparência, honestidade e responsabilidade ética em todos os nossos empreendimentos.'
    },
    {
      icon: Globe,
      title: 'Inovação',
      description: 'Continuamente ultrapassamos limites e exploramos novas fronteiras na tecnologia de IA.'
    },
    {
      icon: Lightbulb,
      title: 'Sustentabilidade',
      description: 'Desenvolvemos soluções de IA que são ambientalmente responsáveis e socialmente benéficas.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Clientes Satisfeitos' },
    { number: '50+', label: 'Especialistas em IA' },
    { number: '1000+', label: 'Projetos Concluídos' },
    { number: '15+', label: 'Países Atendidos' }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Badge variant="secondary" className="mb-4">Sobre a Z.ai</Badge>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Pioneirizando Soluções de IA Centradas no Ser Humano
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl text-muted-foreground mb-8"
            >
              Somos uma equipe de especialistas apaixonados por IA, engenheiros e visionários dedicados a criar 
              inteligência artificial que potencializa as capacidades humanas e impulsiona progresso significativo.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-3xl font-bold mb-6"
              >
                Nossa Missão
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-lg text-muted-foreground mb-6"
              >
                Democratizar a inteligência artificial desenvolvendo soluções acessíveis, éticas e centradas no ser humano 
                que capacitem empresas e indivíduos a alcançar seu pleno potencial.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-lg text-muted-foreground"
              >
                Acreditamos que a IA deve ser uma força para o bem, aumentando as capacidades humanas em vez de 
                substituí-las, e criando oportunidades para inovação e crescimento em todos os setores da sociedade.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-3xl font-bold mb-6"
              >
                Nossa Visão
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-lg text-muted-foreground mb-6"
              >
                Um mundo onde a inteligência artificial e a inteligência humana trabalham em harmonia para resolver 
                os maiores desafios da humanidade e criar um futuro mais equitativo, sustentável e próspero.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-lg text-muted-foreground"
              >
                Nós imaginamos um futuro onde a tecnologia de IA seja acessível a todos, transparente em suas operações, 
                e alinhada com valores humanos e princípios éticos.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center"
              >
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-4xl md:text-5xl font-bold text-primary mb-2"
                >
                  {stat.number}
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-lg text-muted-foreground"
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Nossa Jornada
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Desde nossos humildes começos até nos tornarmos líderes em soluções de IA, aqui está nossa história de crescimento e inovação.
            </motion.p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <motion.div 
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border origin-top"
              />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2 pr-8">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="p-6">
                        <CardContent className="p-0">
                          <Badge variant="outline" className="mb-2">{item.year}</Badge>
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"
                  />
                  
                  <div className="w-1/2 pl-8"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Nossos Valores Essenciais
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Estes princípios guiam cada decisão que tomamos e cada solução que criamos.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="text-center p-6 h-full">
                    <CardContent className="p-0">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <value.icon className="h-8 w-8 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}