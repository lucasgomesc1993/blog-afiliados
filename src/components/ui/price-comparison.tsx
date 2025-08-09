'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AffiliateButton } from './affiliate-button'
import { Store, TrendingDown, TrendingUp, Minus, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StoreOffer {
  store: {
    name: string
    logo?: string
    website: string
    reliability: 'excelente' | 'boa' | 'regular'
  }
  price: string
  originalPrice?: string
  discount?: number
  inStock: boolean
  shipping?: string
  affiliateLink: string
  lastUpdated: string
}

interface PriceComparisonProps {
  productName: string
  offers: StoreOffer[]
  className?: string
}

export function PriceComparison({ productName, offers, className }: PriceComparisonProps) {
  const getReliabilityColor = (reliability: string) => {
    switch (reliability) {
      case 'excelente':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'boa':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'regular':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getReliabilityIcon = (reliability: string) => {
    switch (reliability) {
      case 'excelente':
        return <TrendingUp className="h-4 w-4" />
      case 'boa':
        return <Minus className="h-4 w-4" />
      case 'regular':
        return <TrendingDown className="h-4 w-4" />
      default:
        return <Minus className="h-4 w-4" />
    }
  }

  const sortedOffers = [...offers].sort((a, b) => {
    const priceA = parseFloat(a.price.replace('R$ ', '').replace('.', '').replace(',', '.'))
    const priceB = parseFloat(b.price.replace('R$ ', '').replace('.', '').replace(',', '.'))
    return priceA - priceB
  })

  const bestPrice = sortedOffers[0]
  const worstPrice = sortedOffers[sortedOffers.length - 1]

  const formatPrice = (price: string) => {
    return parseFloat(price.replace('R$ ', '').replace('.', '').replace(',', '.')).toFixed(2)
  }

  return (
    <div className={cn('w-full', className)}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Store className="h-5 w-5" />
            Comparar Preços - {productName}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Best Deal Banner */}
            {bestPrice && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-green-600 text-white">Melhor Preço</Badge>
                      {bestPrice.discount && (
                        <Badge variant="outline" className="border-green-600 text-green-600">
                          -{bestPrice.discount}%
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-green-700">
                      Economize até {worstPrice && (
                        <>
                          R${(
                            parseFloat(formatPrice(worstPrice.price)) - 
                            parseFloat(formatPrice(bestPrice.price))
                          ).toFixed(2)}
                        </>
                      )} na {bestPrice.store.name}
                    </p>
                  </div>
                  <AffiliateButton
                    href={bestPrice.affiliateLink}
                    size="sm"
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Comprar
                  </AffiliateButton>
                </div>
              </div>
            )}

            {/* Store Offers */}
            <div className="space-y-3">
              {sortedOffers.map((offer, index) => {
                const isBestPrice = index === 0
                const savings = worstPrice && isBestPrice
                  ? parseFloat(formatPrice(worstPrice.price)) - parseFloat(formatPrice(offer.price))
                  : 0

                return (
                  <motion.div
                    key={offer.store.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={cn(
                      'flex items-center justify-between p-4 rounded-lg border transition-all duration-200',
                      isBestPrice && 'bg-green-50 border-green-200 shadow-sm'
                    )}
                  >
                    {/* Store Info */}
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                        {offer.store.logo ? (
                          <img
                            src={offer.store.logo}
                            alt={offer.store.name}
                            className="w-8 h-8 object-contain"
                          />
                        ) : (
                          <Store className="h-6 w-6 text-muted-foreground" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{offer.store.name}</h3>
                          <Badge
                            variant="outline"
                            className={cn('text-xs', getReliabilityColor(offer.store.reliability))}
                          >
                            {getReliabilityIcon(offer.store.reliability)}
                            {offer.store.reliability}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>Atualizado: {offer.lastUpdated}</span>
                          {offer.shipping && (
                            <span>Frete: {offer.shipping}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Price and Actions */}
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <span className={cn(
                            'text-xl font-bold',
                            isBestPrice && 'text-green-600'
                          )}>
                            {offer.price}
                          </span>
                          {isBestPrice && (
                            <Badge className="bg-green-600 text-white text-xs">
                              MELHOR PREÇO
                            </Badge>
                          )}
                        </div>
                        {offer.originalPrice && (
                          <div className="text-sm text-muted-foreground line-through">
                            {offer.originalPrice}
                          </div>
                        )}
                        {savings > 0 && isBestPrice && (
                          <div className="text-sm text-green-600 font-medium">
                            Economize R${savings.toFixed(2)}
                          </div>
                        )}
                        {!offer.inStock && (
                          <div className="text-sm text-red-600 font-medium">
                            Fora de estoque
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <AffiliateButton
                          href={offer.affiliateLink}
                          size="sm"
                          disabled={!offer.inStock}
                        >
                          {offer.inStock ? 'Ver Preço' : 'Indisponível'}
                        </AffiliateButton>
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                        >
                          <a
                            href={offer.store.website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Price History Note */}
            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="font-medium mb-2">Sobre os Preços</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Os preços são atualizados diariamente, mas podem sofrer alterações sem aviso prévio</li>
                <li>• Os preços incluem impostos aplicáveis, mas não incluem custos de envio</li>
                <li>• Algumas ofertas podem ter duração limitada ou estar sujeitas a condições</li>
                <li>• Clique em "Ver Preço" para confirmar o preço atual na loja</li>
              </ul>
            </div>

            {/* Affiliate Disclosure */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-800 mb-2">Transparência</h4>
              <p className="text-sm text-blue-700">
                Este site participa do programa de afiliados de algumas lojas listadas. 
                Ao comprar através de nossos links, podemos receber uma pequena comissão sem 
                custo adicional para você. Isso nos ajuda a manter o site gratuito e continuar 
                trazendo as melhores análises.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}