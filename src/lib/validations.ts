import { z } from 'zod'

// Validação de Categoria
export const categorySchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório').max(100, 'Máximo 100 caracteres'),
  description: z.string().optional().max(500, 'Máximo 500 caracteres'),
  icon: z.string().optional().max(10, 'Máximo 10 caracteres'),
  slug: z.string().min(1, 'Slug é obrigatório').max(100, 'Máximo 100 caracteres').regex(/^[a-z0-9-]+$/, 'Slug deve conter apenas letras, números e hífenes')
})

// Validação de Produto
export const productSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório').max(200, 'Máximo 200 caracteres'),
  description: z.string().optional().max(2000, 'Máximo 2000 caracteres'),
  price: z.string().min(1, 'Preço é obrigatório').regex(/^\d+([.,]\d{2})?$/, 'Preço inválido'),
  originalPrice: z.string().optional().regex(/^\d+([.,]\d{2})?$/, 'Preço inválido').or(z.literal('')),
  rating: z.number().min(0).max(5, 'Avaliação deve ser entre 0 e 5'),
  imageUrl: z.string().url('URL inválida').optional().or(z.literal('')),
  affiliateLink: z.string().url('URL inválida').optional().or(z.literal('')),
  categoryId: z.string().min(1, 'Categoria é obrigatória'),
  pros: z.array(z.string()).default([]),
  cons: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  published: z.boolean().default(false)
})

// Validação de Review
export const reviewSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório').max(100, 'Máximo 100 caracteres'),
  content: z.string().min(10, 'Mínimo 10 caracteres').max(2000, 'Máximo 2000 caracteres'),
  rating: z.number().min(1, 'Avaliação mínima é 1').max(5, 'Avaliação máxima é 5'),
  productId: z.string().min(1, 'Produto é obrigatório')
})

// Validação de Busca
export const searchSchema = z.object({
  query: z.string().min(1, 'Termo de busca é obrigatório').max(100, 'Máximo 100 caracteres'),
  category: z.string().optional(),
  sortBy: z.enum(['rating', 'price-low', 'price-high', 'name', 'newest']).default('rating'),
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(12)
})

// Tipos derivados dos schemas
export type CategoryInput = z.infer<typeof categorySchema>
export type ProductInput = z.infer<typeof productSchema>
export type ReviewInput = z.infer<typeof reviewSchema>
export type SearchInput = z.infer<typeof searchSchema>