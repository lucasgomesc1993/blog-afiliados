'use client'

import { motion } from 'framer-motion'
import { Button, ButtonProps } from '@/components/ui/button'
import { ShoppingCart, ExternalLink, Badge } from '@/components/ui/badge'
import { ShoppingCart as ShoppingCartIcon, ExternalLink as ExternalLinkIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface AffiliateButtonProps extends ButtonProps {
  href: string
  price?: string
  discount?: number
  showPrice?: boolean
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'affiliate'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
  children?: React.ReactNode
}

export function AffiliateButton({
  href,
  price,
  discount,
  showPrice = false,
  variant = 'affiliate',
  size = 'default',
  className,
  children,
  ...props
}: AffiliateButtonProps) {
  const isAffiliateVariant = variant === 'affiliate'

  const buttonContent = (
    <>
      {isAffiliateVariant && <ShoppingCartIcon className="mr-2 h-4 w-4" />}
      {children || (showPrice && price ? `Ver Preço - ${price}` : 'Ver Preço')}
      {isAffiliateVariant && <ExternalLinkIcon className="ml-2 h-4 w-4" />}
    </>
  )

  const buttonClasses = cn(
    'group relative overflow-hidden',
    isAffiliateVariant && 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105',
    className
  )

  if (isAffiliateVariant) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block"
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
            size === 'default' && 'h-10 px-4 py-2',
            size === 'sm' && 'h-9 rounded-md px-3',
            size === 'lg' && 'h-11 rounded-md px-8',
            size === 'icon' && 'h-10 w-10',
            buttonClasses
          )}
          {...props}
        >
          {buttonContent}
          {discount && (
            <Badge className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full animate-pulse">
              -{discount}%
            </Badge>
          )}
        </a>
      </motion.div>
    )
  }

  return (
    <Button
      variant={variant}
      size={size}
      asChild
      className={className}
      {...props}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    </Button>
  )
}

interface AffiliateCardProps {
  product: {
    id: number
    name: string
    brand: string
    price: string
    originalPrice?: string
    discount?: number
    rating: number
    affiliateLink: string
    image: string
    description?: string
    pros?: string[]
    cons?: string[]
  }
  showProsCons?: boolean
  className?: string
}

export function AffiliateCard({ product, showProsCons = false, className }: AffiliateCardProps) {
  const discountPercentage = product.originalPrice && product.price
    ? Math.round(
        (1 - 
          parseFloat(product.price.replace('R$ ', '').replace('.', '').replace(',', '.')) / 
          parseFloat(product.originalPrice.replace('R$ ', '').replace('.', '').replace(',', '.'))
        ) * 100
      )
    : product.discount

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={cn('group h-full', className)}
    >
      <div className="bg-background border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        {/* Image and Discount Badge */}
        <div className="relative">
          <div className="aspect-square bg-muted overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          {discountPercentage && (
            <Badge className="absolute top-3 left-3 bg-red-600 text-white">
              -{discountPercentage}%
            </Badge>
          )}
          {product.originalPrice && (
            <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
              OFERTA
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Brand and Rating */}
          <div className="flex justify-between items-start mb-3">
            <Badge variant="secondary">{product.brand}</Badge>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-sm font-medium ml-1">{product.rating}</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Description */}
          {product.description && (
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {product.description}
            </p>
          )}

          {/* Price */}
          <div className="mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-primary">{product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>
            {discountPercentage && (
              <div className="text-sm text-green-600 font-medium">
                Você economiza {discountPercentage}%
              </div>
            )}
          </div>

          {/* Pros and Cons */}
          {showProsCons && product.pros && product.cons && (
            <div className="mb-4 space-y-2">
              <div className="text-sm">
                <span className="font-medium text-green-600">Prós:</span>{' '}
                <span className="text-muted-foreground">
                  {product.pros.slice(0, 2).join(', ')}
                  {product.pros.length > 2 && '...'}
                </span>
              </div>
              <div className="text-sm">
                <span className="font-medium text-red-600">Contras:</span>{' '}
                <span className="text-muted-foreground">
                  {product.cons.slice(0, 2).join(', ')}
                  {product.cons.length > 2 && '...'}
                </span>
              </div>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="mt-auto space-y-2 pt-4">
            <AffiliateButton
              href={product.affiliateLink}
              price={product.price}
              discount={discountPercentage}
              showPrice={false}
              className="w-full"
            >
              Ver Preço
            </AffiliateButton>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

interface AffiliateLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  showDisclosure?: boolean
}

export function AffiliateLink({ href, children, className, showDisclosure = true }: AffiliateLinkProps) {
  return (
    <div className={cn('inline-block', className)}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="text-primary hover:underline underline-offset-4"
      >
        {children}
      </a>
      {showDisclosure && (
        <span className="text-xs text-muted-foreground ml-1">
          (link de afiliado)
        </span>
      )}
    </div>
  )
}