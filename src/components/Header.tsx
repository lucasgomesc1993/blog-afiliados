'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    { name: 'Soluções de IA', href: '/ai-solutions' },
    { name: 'Consultoria', href: '/consulting' },
    { name: 'Estudos de Caso', href: '/case-studies' },
  ]

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Recursos', href: '/resources' },
    { name: 'Whitepapers', href: '/resources/whitepapers' },
    { name: 'Webinars', href: '/resources/webinars' },
  ]

  const company = [
    { name: 'Sobre', href: '/about' },
    { name: 'Equipe', href: '/team' },
    { name: 'Carreiras', href: '/careers' },
    { name: 'Parceiros', href: '/partners' },
    { name: 'Notícias', href: '/news' },
    { name: 'Eventos', href: '/events' },
  ]

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-2">
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
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/services" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        Serviços
                      </NavigationMenuLink>
                    </Link>
                  </motion.div>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Soluções de IA</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      {services.map((service, index) => (
                        <motion.li 
                          key={service.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {service.name}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </motion.li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Recursos</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      {resources.map((resource, index) => (
                        <motion.li 
                          key={resource.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <NavigationMenuLink asChild>
                            <Link
                              href={resource.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {resource.name}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </motion.li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Empresa</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      {company.map((item, index) => (
                        <motion.li 
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {item.name}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </motion.li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        Contato
                      </NavigationMenuLink>
                    </Link>
                  </motion.div>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:flex items-center space-x-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild>
                <Link href="/consulting">Começar</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:hidden"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.div>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden"
            >
              <nav className="px-2 pt-2 pb-3 space-y-1">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/services"
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Serviços
                  </Link>
                </motion.div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground">
                      Soluções de IA
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {services.map((service, index) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                      >
                        <DropdownMenuItem asChild>
                          <Link
                            href={service.href}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        </DropdownMenuItem>
                      </motion.div>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground">
                      Recursos
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {resources.map((resource, index) => (
                      <motion.div
                        key={resource.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                      >
                        <DropdownMenuItem asChild>
                          <Link
                            href={resource.href}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {resource.name}
                          </Link>
                        </DropdownMenuItem>
                      </motion.div>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground">
                      Empresa
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {company.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                      >
                        <DropdownMenuItem asChild>
                          <Link
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </DropdownMenuItem>
                      </motion.div>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/contact"
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contato
                  </Link>
                </motion.div>

                <div className="px-3 py-2">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button asChild className="w-full">
                      <Link href="/consulting" onClick={() => setIsMenuOpen(false)}>
                        Começar
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}