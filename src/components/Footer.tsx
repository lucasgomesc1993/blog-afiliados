import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    services: [
      { name: 'Soluções de IA', href: '/ai-solutions' },
      { name: 'Consultoria', href: '/consulting' },
      { name: 'Estudos de Caso', href: '/case-studies' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Recursos', href: '/resources' },
      { name: 'Whitepapers', href: '/resources/whitepapers' },
      { name: 'Webinars', href: '/resources/webinars' },
    ],
    company: [
      { name: 'Sobre Nós', href: '/about' },
      { name: 'Equipe', href: '/team' },
      { name: 'Carreiras', href: '/careers' },
      { name: 'Parceiros', href: '/partners' },
      { name: 'Notícias', href: '/news' },
      { name: 'Eventos', href: '/events' },
    ],
    support: [
      { name: 'Contato', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Suporte', href: '/support' },
      { name: 'Política de Privacidade', href: '/privacy-policy' },
      { name: 'Termos de Serviço', href: '/terms-of-service' },
    ],
  }

  return (
    <motion.footer 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-muted/50 border-t"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-8 h-8"
              >
                <img
                  src="/logo.svg"
                  alt="Z.ai Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="text-xl font-bold"
              >
                Z.ai
              </motion.span>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm text-muted-foreground mb-6"
            >
              Liderando o futuro da inteligência artificial com soluções inovadoras e design centrado no ser humano.
            </motion.p>
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Github, href: "#" }
              ].map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={social.href} 
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-foreground mb-4"
            >
              Serviços
            </motion.h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-foreground mb-4"
            >
              Recursos
            </motion.h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-foreground mb-4"
            >
              Empresa
            </motion.h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-foreground mb-4"
            >
              Contato
            </motion.h3>
            <ul className="space-y-2">
              {[
                { icon: Mail, text: "contact@z.ai" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: MapPin, text: "San Francisco, CA" }
              ].map((contact, index) => (
                <motion.li 
                  key={contact.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2"
                >
                  <contact.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{contact.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
              className="text-sm text-muted-foreground mb-4 md:mb-0"
            >
              © 2024 Z.ai. Todos os direitos reservados.
            </motion.p>
            <div className="flex space-x-6">
              {[
                { href: "/privacy-policy", text: "Política de Privacidade" },
                { href: "/terms-of-service", text: "Termos de Serviço" }
              ].map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.text}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}