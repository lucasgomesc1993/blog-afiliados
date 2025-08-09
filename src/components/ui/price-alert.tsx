'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Bell, CheckCircle, Mail, Target, TrendingDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PriceAlertProps {
  productName: string
  currentPrice: string
  productId: string
  className?: string
}

export function PriceAlert({ productName, currentPrice, productId, className }: PriceAlertProps) {
  const [email, setEmail] = useState('')
  const [targetPrice, setTargetPrice] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [alertType, setAlertType] = useState<'below' | 'any'>('below')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubscribed(true)
    setEmail('')
    setTargetPrice('')
  }

  const formatPriceForInput = (price: string) => {
    return price.replace('R$ ', '').replace('.', '').replace(',', '.')
  }

  if (isSubscribed) {
    return (
      <Card className={cn('bg-green-50 border-green-200', className)}>
        <CardContent className="p-6">
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              Alerta de Preço Configurado!
            </h3>
            <p className="text-green-700 mb-4">
              Você receberá um email assim que o preço de {productName} atingir o valor desejado.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setIsSubscribed(false)}
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              Configurar Novo Alerta
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={cn('', className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Alerta de Preço
        </CardTitle>
        <CardDescription>
          Receba uma notificação quando o preço de {productName} cair
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Current Price Display */}
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Preço Atual</span>
              <span className="text-lg font-semibold text-primary">{currentPrice}</span>
            </div>
          </div>

          {/* Alert Type Selection */}
          <div>
            <label className="text-sm font-medium mb-2 block">Tipo de Alerta</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setAlertType('below')}
                className={cn(
                  'p-3 rounded-lg border text-sm font-medium transition-all',
                  alertType === 'below'
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background border-border hover:bg-muted'
                )}
              >
                <TrendingDown className="h-4 w-4 mx-auto mb-1" />
                Quando cair abaixo de
              </button>
              <button
                type="button"
                onClick={() => setAlertType('any')}
                className={cn(
                  'p-3 rounded-lg border text-sm font-medium transition-all',
                  alertType === 'any'
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background border-border hover:bg-muted'
                )}
              >
                <Target className="h-4 w-4 mx-auto mb-1" />
                Qualquer redução
              </button>
            </div>
          </div>

          {/* Target Price (only for below type) */}
          {alertType === 'below' && (
            <div>
              <label htmlFor="targetPrice" className="text-sm font-medium mb-2 block">
                Preço Desejado
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                  R$
                </span>
                <Input
                  id="targetPrice"
                  type="number"
                  step="0.01"
                  min="0"
                  value={targetPrice}
                  onChange={(e) => setTargetPrice(e.target.value)}
                  placeholder="0,00"
                  className="pl-8"
                  required
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Digite o preço máximo que você gostaria de pagar
              </p>
            </div>
          )}

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="text-sm font-medium mb-2 block">
              Seu Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="pl-10"
                required
              />
            </div>
          </div>

          {/* Price Suggestions */}
          <div>
            <p className="text-sm font-medium mb-2">Sugestões de preço:</p>
            <div className="flex gap-2 flex-wrap">
              {[
                { percentage: 5, label: '-5%' },
                { percentage: 10, label: '-10%' },
                { percentage: 15, label: '-15%' },
                { percentage: 20, label: '-20%' }
              ].map((suggestion) => {
              const currentPriceNum = parseFloat(formatPriceForInput(currentPrice))
              const suggestedPrice = currentPriceNum * (1 - suggestion.percentage / 100)
              
              return (
                <button
                  key={suggestion.percentage}
                  type="button"
                  onClick={() => {
                    setAlertType('below')
                    setTargetPrice(suggestedPrice.toFixed(2))
                  }}
                  className="px-3 py-1 bg-muted hover:bg-muted/80 rounded-md text-sm transition-colors"
                >
                  {suggestion.label} (R${suggestedPrice.toFixed(2)})
                </button>
              )
            })}
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Bell className="mr-2 h-4 w-4 animate-spin" />
                Configurando alerta...
              </>
            ) : (
              <>
                <Bell className="mr-2 h-4 w-4" />
                Criar Alerta de Preço
              </>
            )}
          </Button>

          {/* Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-sm text-blue-700">
              <strong>Como funciona:</strong> Você receberá um email assim que o preço do produto 
              atingir o valor desejado. O alerta permanecerá ativo por 30 dias ou até ser acionado.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}