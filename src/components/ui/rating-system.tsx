'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { 
  Star, 
  ThumbsUp, 
  ThumbsDown, 
  User,
  Calendar,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

interface Review {
  id: string
  userName: string
  rating: number
  title: string
  content: string
  date: string
  verified: boolean
  helpful: number
  pros?: string[]
  cons?: string[]
}

interface RatingSystemProps {
  productId: string
  productName: string
  averageRating: number
  totalReviews: number
  reviews: Review[]
  onAddReview?: (review: Omit<Review, 'id' | 'date' | 'helpful'>) => void
  className?: string
}

export default function RatingSystem({
  productId,
  productName,
  averageRating,
  totalReviews,
  reviews,
  onAddReview,
  className = ''
}: RatingSystemProps) {
  const [userRating, setUserRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [reviewTitle, setReviewTitle] = useState('')
  const [reviewContent, setReviewContent] = useState('')
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [helpfulVotes, setHelpfulVotes] = useState<{[key: string]: boolean}>({})

  const handleSubmitReview = () => {
    if (userRating === 0 || !reviewTitle.trim() || !reviewContent.trim()) {
      alert('Por favor, preencha todos os campos')
      return
    }

    if (onAddReview) {
      onAddReview({
        userName: 'Usuário Anônimo',
        rating: userRating,
        title: reviewTitle,
        content: reviewContent,
        verified: false
      })
    }

    // Reset form
    setUserRating(0)
    setReviewTitle('')
    setReviewContent('')
    setShowReviewForm(false)
  }

  const handleHelpfulVote = (reviewId: string) => {
    setHelpfulVotes(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }))
  }

  const renderStars = (rating: number, interactive = false, size = 'normal') => {
    const starSize = size === 'small' ? 'h-4 w-4' : 'h-5 w-5'
    
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${starSize} ${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            } ${
              interactive
                ? 'cursor-pointer hover:scale-110 transition-transform'
                : ''
            }`}
            onClick={() => interactive && setUserRating(star)}
            onMouseEnter={() => interactive && setHoverRating(star)}
            onMouseLeave={() => interactive && setHoverRating(0)}
          />
        ))}
        {interactive && (
          <span className="text-sm text-muted-foreground ml-2">
            {hoverRating > 0 ? hoverRating : userRating > 0 ? userRating : ''}/5
          </span>
        )}
      </div>
    )
  }

  const getRatingDistribution = () => {
    const distribution = [0, 0, 0, 0, 0]
    reviews.forEach(review => {
      distribution[5 - review.rating]++
    })
    return distribution.map(count => (count / totalReviews) * 100)
  }

  const ratingDistribution = getRatingDistribution()

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Rating Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-400" />
            Avaliações dos Usuários
          </CardTitle>
          <CardDescription>
            {totalReviews} avaliações para {productName}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Average Rating */}
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">
                {averageRating.toFixed(1)}
              </div>
              {renderStars(Math.round(averageRating))}
              <div className="text-sm text-muted-foreground mt-1">
                Baseado em {totalReviews} avaliações
              </div>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating, index) => (
                <div key={rating} className="flex items-center gap-2">
                  <span className="text-sm w-4">{rating}</span>
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${ratingDistribution[index]}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-12 text-right">
                    {Math.round(ratingDistribution[index])}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Add Review Button */}
          <div className="mt-6 text-center">
            <Button onClick={() => setShowReviewForm(!showReviewForm)}>
              Avaliar Produto
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Review Form */}
      {showReviewForm && (
        <Card>
          <CardHeader>
            <CardTitle>Escreva sua Avaliação</CardTitle>
            <CardDescription>
              Compartilhe sua experiência com {productName}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Sua Avaliação *
              </label>
              {renderStars(userRating, true)}
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Título da Avaliação *
              </label>
              <input
                type="text"
                value={reviewTitle}
                onChange={(e) => setReviewTitle(e.target.value)}
                placeholder="Resuma sua experiência"
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Sua Avaliação *
              </label>
              <Textarea
                value={reviewContent}
                onChange={(e) => setReviewContent(e.target.value)}
                placeholder="Conte detalhes sobre sua experiência com o produto..."
                rows={4}
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={handleSubmitReview}>
                Enviar Avaliação
              </Button>
              <Button variant="outline" onClick={() => setShowReviewForm(false)}>
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{review.userName}</h4>
                      {review.verified && (
                        <Badge variant="outline" className="text-xs">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Verificado
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>
                {renderStars(review.rating)}
              </div>

              <h3 className="font-semibold mb-2">{review.title}</h3>
              <p className="text-muted-foreground mb-4">{review.content}</p>

              {(review.pros || review.cons) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {review.pros && review.pros.length > 0 && (
                    <div>
                      <h5 className="font-medium text-green-600 mb-2">Prós:</h5>
                      <ul className="text-sm space-y-1">
                        {review.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <ThumbsUp className="h-3 w-3 text-green-600" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {review.cons && review.cons.length > 0 && (
                    <div>
                      <h5 className="font-medium text-red-600 mb-2">Contras:</h5>
                      <ul className="text-sm space-y-1">
                        {review.cons.map((con, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <ThumbsDown className="h-3 w-3 text-red-600" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Esta avaliação foi útil?</span>
                  <Button
                    size="sm"
                    variant={helpfulVotes[review.id] ? 'default' : 'outline'}
                    onClick={() => handleHelpfulVote(review.id)}
                    className="h-7 px-3 text-xs"
                  >
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    Sim ({review.helpful + (helpfulVotes[review.id] ? 1 : 0)})
                  </Button>
                </div>
                <Button size="sm" variant="ghost" className="h-7 px-3 text-xs">
                  Reportar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {reviews.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Nenhuma avaliação ainda</h3>
            <p className="text-muted-foreground mb-4">
              Seja o primeiro a avaliar {productName}
            </p>
            <Button onClick={() => setShowReviewForm(true)}>
              Escrever Avaliação
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}