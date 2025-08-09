'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Package, 
  Users, 
  Star, 
  TrendingUp, 
  Eye,
  Plus,
  BarChart3,
  FolderOpen,
  FileText,
  Calendar
} from 'lucide-react'
import Link from 'next/link'

interface DashboardStats {
  totalProducts: number
  totalCategories: number
  totalReviews: number
  totalUsers: number
  featuredProducts: number
  recentReviews: number
  avgRating: number
  totalPosts: number
  publishedPosts: number
  recentPosts: any[]
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalProducts: 0,
    totalCategories: 0,
    totalReviews: 0,
    totalUsers: 0,
    featuredProducts: 0,
    recentReviews: 0,
    avgRating: 0,
    totalPosts: 0,
    publishedPosts: 0,
    recentPosts: []
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      // Buscar estatísticas
      const [productsRes, categoriesRes, reviewsRes, postsRes] = await Promise.all([
        fetch('/api/products?limit=1'),
        fetch('/api/categories'),
        fetch('/api/reviews?limit=1'),
        fetch('/api/posts?limit=1')
      ])

      const productsData = await productsRes.json()
      const categoriesData = await categoriesRes.json()
      const reviewsData = await reviewsRes.json()
      const postsData = await postsRes.json()

      // Calcular estatísticas
      const featuredCount = productsData.products.filter((p: any) => p.featured).length
      const totalReviews = productsData.products.reduce((sum: number, p: any) => sum + p.reviewCount, 0)
      const avgRating = productsData.products.reduce((sum: number, p: any) => sum + p.rating, 0) / productsData.products.length
      const publishedPosts = postsData.posts.filter((p: any) => p.published).length
      const recentPosts = postsData.posts.slice(0, 5)

      setStats({
        totalProducts: productsData.pagination.total,
        totalCategories: categoriesData.length,
        totalReviews,
        totalUsers: 42, // Mock - implementar quando tiver sistema de usuários
        featuredProducts: featuredCount,
        recentReviews: reviewsData.pagination.total,
        avgRating: avgRating || 0,
        totalPosts: postsData.pagination.total,
        publishedPosts,
        recentPosts
      })
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  const statCards = [
    {
      title: 'Total de Produtos',
      value: stats.totalProducts,
      description: '+12% este mês',
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      link: '/admin/products'
    },
    {
      title: 'Categorias',
      value: stats.totalCategories,
      description: 'Ativas',
      icon: FolderOpen,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      link: '/admin/categories'
    },
    {
      title: 'Artigos',
      value: stats.totalPosts,
      description: `${stats.publishedPosts} publicados`,
      icon: FileText,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      link: '/admin/posts'
    },
    {
      title: 'Reviews',
      value: stats.totalReviews,
      description: 'Avaliações recebidas',
      icon: Star,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      link: '/admin/reviews'
    },
    {
      title: 'Usuários',
      value: stats.totalUsers,
      description: 'Ativos',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      link: '/admin/users'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Visão geral do seu blog de afiliados</p>
        </div>
        <div className="flex gap-2">
          <Link href="/admin/products">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Novo Produto
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
      >
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index }}
          >
            <Link href={stat.link}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Featured Products */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              Destaques
            </CardTitle>
            <CardDescription>
              Produtos em destaque
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{stats.featuredProducts}</span>
                <Badge variant="secondary">Ativos</Badge>
              </div>
              <Link href="/admin/products?featured=true">
                <Button variant="outline" size="sm" className="w-full">
                  Gerenciar Destaques
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Performance
            </CardTitle>
            <CardDescription>
              Métricas gerais
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Avaliação Média</span>
                <span className="font-semibold">{stats.avgRating.toFixed(1)}⭐</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Reviews Recentes</span>
                <span className="font-semibold">{stats.recentReviews}</span>
              </div>
              <Link href="/admin/analytics">
                <Button variant="outline" size="sm" className="w-full">
                  Ver Estatísticas
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5 text-blue-500" />
              Ações Rápidas
            </CardTitle>
            <CardDescription>
              Acesso rápido às funções
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Link href="/admin/products/new">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar Produto
                </Button>
              </Link>
              <Link href="/admin/posts/new">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Novo Artigo
                </Button>
              </Link>
              <Link href="/admin/categories/new">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <FolderOpen className="mr-2 h-4 w-4" />
                  Nova Categoria
                </Button>
              </Link>
              <Link href="/admin/reviews">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Star className="mr-2 h-4 w-4" />
                  Reviews Pendentes
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Recent Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Posts Recentes
            </CardTitle>
            <CardDescription>
              Últimos artigos publicados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentPosts.length > 0 ? (
                stats.recentPosts.map((post, index) => (
                  <div key={post.id} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{post.title}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{post.published ? 'Publicado' : 'Rascunho'}</span>
                        <span>•</span>
                        <span>{new Date(post.createdAt).toLocaleDateString('pt-BR')}</span>
                      </div>
                    </div>
                    <Link href={`/admin/posts/${post.id}/edit`}>
                      <Button variant="outline" size="sm">
                        Editar
                      </Button>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Nenhum post encontrado</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Atividade Recente
            </CardTitle>
            <CardDescription>
              Últimas ações no sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Novo produto adicionado</p>
                  <p className="text-xs text-muted-foreground">Há 2 minutos</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Review recebida</p>
                  <p className="text-xs text-muted-foreground">Há 15 minutos</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Produto atualizado</p>
                  <p className="text-xs text-muted-foreground">Há 1 hora</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}