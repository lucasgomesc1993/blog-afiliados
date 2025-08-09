'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { 
  ExternalLink, 
  ShoppingCart, 
  Percent, 
  Clock, 
  Shield,
  Store,
  Copy,
  CheckCircle
} from 'lucide-react'

interface AffiliateLinkProps {
  href: string
  store: string
  price?: string
  originalPrice?: string
  discount?: number
  discountType?: 'percentage' | 'fixed'
  couponCode?: string
  buttonText?: string
  variant?: 'default' | 'compact' | 'card' | 'button'
  showDisclaimer?: boolean
  className?: string
}

export default function AffiliateLink({
  href,
  store,
  price,
  originalPrice,
  discount,
  discountType = 'percentage',
  couponCode,
  buttonText = 'Ver Melhor Preço',
  variant = 'default',
  showDisclaimer = true,
  className = ''
}: AffiliateLinkProps) {
  const handleCopyCoupon = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      // Aqui você pode adicionar um toast notification
      alert('Cupom copiado!')
    } catch (err) {
      console.error('Failed to copy coupon: ', err)
    }
  }

  const renderDiscountBadge = () => {
    if (!discount) return null
    
    const discountText = discountType === 'percentage' 
      ? `${discount}% OFF` 
      : `R$ ${discount} OFF`
    
    return (
      <Badge variant="destructive" className="text-xs">
        <Percent className="h-3 w-3 mr-1" />
        {discountText}
      </Badge>
    )
  }

  if (variant === 'compact') {
    return (
      <div className={`space-y-2 ${className}`}>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button asChild className="w-full">
            <a href={href} target="_blank" rel="noopener noreferrer">
              <ShoppingCart className="mr-2 h-4 w-4" />
              {buttonText}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
        {showDisclaimer && (
          <p className="text-xs text-muted-foreground text-center">
            Link de afiliado • Preço verificado em {new Date().toLocaleDateString('pt-BR')}
          </p>
        )}
      </div>
    )
  }

  if (variant === 'card') {
    return (
      <Card className={`border-primary/20 hover:border-primary/40 transition-colors ${className}`}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Store className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">{store}</span>
            </div>
            {renderDiscountBadge()}
          </div>
          
          {price && (
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg font-bold text-primary">{price}</span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
              )}
            </div>
          )}
          
          {couponCode && (
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-medium">Cupom:</span>
              <code className="bg-muted px-2 py-1 rounded text-sm">{couponCode}</code>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleCopyCoupon(couponCode)}
                className="h-6 px-2"
              >
                <Copy className="h-3 w-3" />
              </Button>
            </div>
          )}
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button asChild className="w-full">
              <a href={href} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="mr-2 h-4 w-4" />
                {buttonText}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
          
          {showDisclaimer && (
            <p className="text-xs text-muted-foreground mt-2">
              <Shield className="h-3 w-3 inline mr-1" />
              Link de afiliado verificado • Preço sujeito a alteração
            </p>
          )}
        </CardContent>
      </Card>
    )
  }

  if (variant === 'button') {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={className}>
        <Button asChild size="lg" className="group">
          <a href={href} target="_blank" rel="noopener noreferrer">
            <ShoppingCart className="mr-2 h-5 w-5" />
            {buttonText}
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
        {showDisclaimer && (
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Link de afiliado • Comissão suportada pela loja
          </p>
        )}
      </motion.div>
    )
  }

  // Default variant
  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Store className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">{store}</span>
        </div>
        <div className="flex items-center gap-2">
          {renderDiscountBadge()}
          <Badge variant="outline" className="text-xs">
            <Shield className="h-3 w-3 mr-1" />
            Verificado
          </Badge>
        </div>
      </div>
      
      {price && (
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-primary">{price}</span>
          {originalPrice && (
            <span className="text-lg text-muted-foreground line-through">{originalPrice}</span>
          )}
        </div>
      )}
      
      {couponCode && (
        <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
          <span className="text-sm font-medium">Cupom:</span>
          <code className="bg-background px-2 py-1 rounded text-sm font-mono">{couponCode}</code>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleCopyCoupon(couponCode)}
            className="h-7 px-3 text-xs"
          >
            <Copy className="h-3 w-3 mr-1" />
            Copiar
          </Button>
        </div>
      )}
      
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button asChild className="w-full">
          <a href={href} target="_blank" rel="noopener noreferrer">
            <ShoppingCart className="mr-2 h-4 w-4" />
            {buttonText}
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </motion.div>
      
      {showDisclaimer && (
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <CheckCircle className="h-3 w-3 text-green-600" />
          <span>Link de afiliado • Preço verificado em {new Date().toLocaleDateString('pt-BR')} • Sem custo adicional para você</span>
        </div>
      )}
    </div>
  )
}