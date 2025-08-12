'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Search, Menu, User, Heart, ShoppingBag, ChevronDown } from 'lucide-react'

const produtos = [
  { 
    title: 'Smartphones', 
    href: '/categoria/smartphones',
    description: 'Melhores smartphones e análises completas.'
  },
  { 
    title: 'Notebooks', 
    href: '/categoria/notebooks',
    description: 'Notebooks para trabalho e jogos.'
  },
  { 
    title: 'Áudio', 
    href: '/categoria/audio',
    description: 'Fones de ouvido e sistemas de som.'
  },
  { 
    title: 'TVs', 
    href: '/categoria/tvs',
    description: 'Televisores smart e 4K.'
  },
]

const categorias = [
  { 
    title: 'Eletrônicos', 
    href: '/categoria/eletronicos',
    description: 'Produtos eletrônicos em geral.'
  },
  { 
    title: 'Casa e Cozinha', 
    href: '/categoria/casa-e-cozinha',
    description: 'Eletrodomésticos e utensílios.'
  },
  { 
    title: 'Beleza e Saúde', 
    href: '/categoria/beleza-e-saude',
    description: 'Produtos de beleza e bem-estar.'
  },
  { 
    title: 'Esportes', 
    href: '/categoria/esportes',
    description: 'Equipamentos esportivos e fitness.'
  },
]

const ofertas = [
  { 
    title: 'Black Friday', 
    href: '/ofertas',
    description: 'Melhores ofertas da Black Friday.'
  },
  { 
    title: 'Promoções', 
    href: '/ofertas',
    description: 'Promoções especiais todos os dias.'
  },
  { 
    title: 'Lançamentos', 
    href: '/ofertas',
    description: 'Novos produtos com desconto.'
  },
  { 
    title: 'Cashback', 
    href: '/ofertas',
    description: 'Ofertas com cashback garantido.'
  },
]

const products = [
  { name: 'Laptops', href: '/categoria/laptops' },
  { name: 'Smartphones', href: '/categoria/smartphones' },
  { name: 'Headphones', href: '/categoria/headphones' },
  { name: 'Cameras', href: '/categoria/cameras' },
]

const categories = [
  { name: 'Eletrônicos', href: '/categoria/eletronicos' },
  { name: 'Casa e Cozinha', href: '/categoria/casa-e-cozinha' },
  { name: 'Beleza e Saúde', href: '/categoria/beleza-e-saude' },
  { name: 'Esportes', href: '/categoria/esportes' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/98 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-8 h-8">
                <img
                  src="/logo.svg"
                  alt="Z.ai Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold">Z.ai</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Produtos</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {produtos.map((produto) => (
                        <ListItem
                          key={produto.title}
                          title={produto.title}
                          href={produto.href}
                        >
                          {produto.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {categorias.map((categoria) => (
                        <ListItem
                          key={categoria.title}
                          title={categoria.title}
                          href={categoria.href}
                        >
                          {categoria.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Ofertas</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {ofertas.map((oferta) => (
                        <ListItem
                          key={oferta.title}
                          title={oferta.title}
                          href={oferta.href}
                        >
                          {oferta.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Search and User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Buscar produtos..."
                className="pl-10 w-64"
              />
            </div>
            
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Categorias" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.name} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Minha Conta</DropdownMenuItem>
                <DropdownMenuItem>Meus Pedidos</DropdownMenuItem>
                <DropdownMenuItem>Lista de Desejos</DropdownMenuItem>
                <DropdownMenuItem>Sair</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Buscar produtos..."
                      className="pl-10"
                    />
                  </div>
                  
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Categorias" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.name} value={category.name}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div className="space-y-2">
                    <h4 className="font-medium">Produtos</h4>
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="block py-2 text-sm hover:text-primary"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Categorias</h4>
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="block py-2 text-sm hover:text-primary"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4 pt-4 border-t">
                    <Button variant="ghost" size="icon">
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <ShoppingBag className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'