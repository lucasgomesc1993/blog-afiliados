'use client'

import { useState } from 'react'
import { HeartIcon, Star, ShoppingCart } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardDescription, CardTitle, CardFooter, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface ProductCardProps {
  id: number
  name: string
  category: string
  rating: number
  price: string
  image?: string
  affiliateLink: string
  pros: string[]
  cons: string[]
  className?: string
}

export default function ProductCard({
  id,
  name,
  category,
  rating,
  price,
  image = '/api/placeholder/300/200',
  affiliateLink,
  pros,
  cons,
  className
}: ProductCardProps) {
  const [liked, setLiked] = useState<boolean>(false)

  return (
    <div className={cn('relative max-w-md rounded-xl bg-gradient-to-r from-zinc-600 to-violet-300 pt-0 shadow-lg', className)}>
      <div className='flex h-60 items-center justify-center'>
        <img
          src={image}
          alt={name}
          className='w-75 object-contain'
        />
      </div>
      <Button
        size='icon'
        onClick={() => setLiked(!liked)}
        className='bg-primary/10 hover:bg-primary/20 absolute end-4 top-4 rounded-full'
      >
        <HeartIcon className={cn('size-4', liked ? 'fill-destructive stroke-destructive' : 'stroke-white')} />
        <span className='sr-only'>Like</span>
      </Button>
      <Card className='border-none'>
        <CardHeader>
          <CardTitle className='text-lg'>{name}</CardTitle>
          <CardDescription className='flex items-center gap-2'>
            <Badge variant='outline'>{category}</Badge>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs">{rating}</span>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-3'>
          <div className="space-y-2">
            <div className="text-sm">
              <span className="font-medium text-green-600">Prós:</span> {pros.slice(0, 2).join(', ')}
              {pros.length > 2 && '...'}
            </div>
            <div className="text-sm">
              <span className="font-medium text-red-600">Contras:</span> {cons.slice(0, 1).join(', ')}
              {cons.length > 1 && '...'}
            </div>
          </div>
        </CardContent>
        <CardFooter className='justify-between gap-3 max-sm:flex-col max-sm:items-stretch'>
          <div className='flex flex-col'>
            <span className='text-sm font-medium uppercase'>Preço</span>
            <span className='text-xl font-semibold text-primary'>{price}</span>
          </div>
          <div className='flex gap-2'>
            <Button size='sm' asChild className='flex-1'>
              <a href={affiliateLink} target='_blank' rel='noopener noreferrer'>
                <ShoppingCart className='mr-2 h-4 w-4' />
                Ver Preço
              </a>
            </Button>
            <Button size='sm' variant='outline' asChild>
              <Link href={`/review/${id}`}>
                Review
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}