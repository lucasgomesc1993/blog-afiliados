'use client'

import { useState, useEffect } from 'react'

interface Favorite {
  id: string
  name: string
  price: string
  imageUrl?: string
  category: string
  addedAt: Date
}

const FAVORITES_KEY = 'blog_afiliados_favorites'

export function useFavorites() {
  const [favorites, setFavorites] = useState<Favorite[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadFavorites()
  }, [])

  const loadFavorites = () => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        // Convert timestamps back to Date objects
        const favoritesWithDates = parsed.map((fav: any) => ({
          ...fav,
          addedAt: new Date(fav.addedAt)
        }))
        setFavorites(favoritesWithDates)
      }
    } catch (error) {
      console.error('Error loading favorites:', error)
    } finally {
      setLoading(false)
    }
  }

  const addFavorite = (product: any) => {
    const newFavorite: Favorite = {
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      category: product.category.name,
      addedAt: new Date()
    }

    setFavorites(prev => {
      const exists = prev.some(fav => fav.id === product.id)
      if (exists) return prev
      
      const updated = [...prev, newFavorite]
      saveToFavorites(updated)
      return updated
    })
  }

  const removeFavorite = (productId: string) => {
    setFavorites(prev => {
      const updated = prev.filter(fav => fav.id !== productId)
      saveToFavorites(updated)
      return updated
    })
  }

  const toggleFavorite = (product: any) => {
    const exists = favorites.some(fav => fav.id === product.id)
    if (exists) {
      removeFavorite(product.id)
    } else {
      addFavorite(product)
    }
  }

  const isFavorite = (productId: string) => {
    return favorites.some(fav => fav.id === productId)
  }

  const clearFavorites = () => {
    setFavorites([])
    localStorage.removeItem(FAVORITES_KEY)
  }

  const saveToFavorites = (favoritesToSave: Favorite[]) => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoritesToSave))
    } catch (error) {
      console.error('Error saving favorites:', error)
    }
  }

  return {
    favorites,
    loading,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    clearFavorites
  }
}