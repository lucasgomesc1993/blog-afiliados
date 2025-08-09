'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { ArrowRight, Star, TrendingUp, ShoppingCart, Zap, Shield, Award } from 'lucide-react'
import Link from 'next/link'

interface HeroButtonProps {
  href: string
  text: string
  variant?: 'default' | 'outline' | 'secondary'
  icon?: React.ReactNode
  iconRight?: React.ReactNode
}

interface HeroProps {
  title?: string
  description?: string
  badge?: React.ReactNode | false
  buttons?: HeroButtonProps[] | false
  className?: string
}

export default function Hero({
  title = "Encontre os Melhores Produtos com Reviews Imparciais",
  description = "Análises detalhadas, comparações e links de afiliado confiáveis para você fazer compras inteligentes.",
  badge = (
    <Badge variant="outline" className="animate-pulse">
      <span className="text-muted-foreground">
        Novas reviews adicionadas semanalmente!
      </span>
    </Badge>
  ),
  buttons = [
    {
      href: "/melhores/geral",
      text: "Ver Melhores Produtos",
      iconRight: <ArrowRight className="ml-2 h-4 w-4" />
    },
    {
      href: "/ofertas",
      text: "Ofertas do Dia",
      variant: "outline"
    }
  ],
  className
}: HeroProps) {
  return (
    <section className={`relative overflow-hidden py-20 md:py-32 ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/20" />
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Badge */}
          {badge !== false && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              {badge}
            </motion.div>
          )}

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Buttons */}
          {buttons !== false && buttons.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "default"}
                  size="lg"
                  asChild
                  className="group"
                >
                  <Link href={button.href} className="inline-flex items-center gap-2">
                    {button.icon}
                    {button.text}
                    {button.iconRight && (
                      <motion.div
                        animate={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        {button.iconRight}
                      </motion.div>
                    )}
                  </Link>
                </Button>
              ))}
            </motion.div>
          )}

          {/* Features Icons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center gap-8 mt-16"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <span>Reviews Imparciais</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-5 w-5 text-green-500" />
              <span>Links Verificados</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              <span>Preços Atualizados</span>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-r from-primary/20 to-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="absolute -top-10 right-1/4 w-24 h-24 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full blur-2xl"
        />
      </div>
    </section>
  )
}