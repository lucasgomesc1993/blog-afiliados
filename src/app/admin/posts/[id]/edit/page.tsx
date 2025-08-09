'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { 
  ArrowLeft, 
  Save, 
  Eye,
  Calendar,
  FileText
} from 'lucide-react'
import Link from 'next/link'
import { useRouter, useParams } from 'next/navigation'

interface PostData {
  title: string
  content: string
  published: boolean
}

interface Post {
  id: string
  title: string
  content: string
  published: boolean
  createdAt: string
  author: {
    id: string
    name: string
    email: string
  }
}

export default function EditPost() {
  const router = useRouter()
  const params = useParams()
  const [post, setPost] = useState<Post | null>(null)
  const [formData, setFormData] = useState<PostData>({
    title: '',
    content: '',
    published: false
  })
  const [loading, setLoading] = useState(false)
  const [preview, setPreview] = useState(false)

  useEffect(() => {
    if (params.id) {
      fetchPost(params.id as string)
    }
  }, [params.id])

  const fetchPost = async (postId: string) => {
    try {
      const response = await fetch(`/api/posts/${postId}`)
      if (response.ok) {
        const postData: Post = await response.json()
        setPost(postData)
        setFormData({
          title: postData.title,
          content: postData.content,
          published: postData.published
        })
      } else {
        router.push('/admin/posts')
      }
    } catch (error) {
      console.error('Error fetching post:', error)
      router.push('/admin/posts')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(`/api/posts/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        const updatedPost = await response.json()
        if (formData.published) {
          router.push(`/post/${updatedPost.id}`)
        } else {
          router.push('/admin/posts')
        }
      } else {
        const error = await response.json()
        alert(error.error || 'Erro ao atualizar post')
      }
    } catch (error) {
      console.error('Error updating post:', error)
      alert('Erro ao atualizar post')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: keyof PostData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const deletePost = async () => {
    if (!confirm('Tem certeza que deseja deletar este post? Esta ação não pode ser desfeita.')) return

    try {
      const response = await fetch(`/api/posts/${params.id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        router.push('/admin/posts')
      } else {
        alert('Erro ao deletar post')
      }
    } catch (error) {
      console.error('Error deleting post:', error)
      alert('Erro ao deletar post')
    }
  }

  const previewContent = preview ? (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Eye className="h-5 w-5" />
          Prévia do Artigo
        </CardTitle>
        <CardDescription>
          Esta é como sua publicação aparecerá para os leitores
        </CardDescription>
      </CardHeader>
      <CardContent>
        <article className="prose prose-gray max-w-none">
          <h1 className="text-3xl font-bold mb-4">{formData.title || 'Título do Artigo'}</h1>
          <div className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {post ? new Date(post.createdAt).toLocaleDateString('pt-BR') : new Date().toLocaleDateString('pt-BR')}
          </div>
          <div className="whitespace-pre-wrap">
            {formData.content || 'Conteúdo do artigo aparecerá aqui...'}
          </div>
        </article>
      </CardContent>
    </Card>
  ) : null

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <Link href="/admin/posts">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Editar Artigo</h1>
            <p className="text-muted-foreground">
              Atualize as informações do seu artigo
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setPreview(!preview)}
          >
            <Eye className="mr-2 h-4 w-4" />
            {preview ? 'Editar' : 'Prévia'}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setFormData({ ...formData, published: false })
              handleSubmit()
            }}
            disabled={loading}
          >
            Salvar Rascunho
          </Button>
          <Button
            type="submit"
            form="post-form"
            disabled={loading || !formData.title.trim() || !formData.content.trim()}
          >
            <Save className="mr-2 h-4 w-4" />
            {formData.published ? 'Atualizar e Publicar' : 'Salvar Alterações'}
          </Button>
          <Button
            type="button"
            variant="destructive"
            onClick={deletePost}
            disabled={loading}
          >
            Deletar
          </Button>
        </div>
      </motion.div>

      {/* Post Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Informações do Artigo
            </CardTitle>
            <CardDescription>
              Informações atuais sobre este artigo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-medium">Criado em:</span>
                <p className="text-muted-foreground">
                  {new Date(post.createdAt).toLocaleDateString('pt-BR')} às {new Date(post.createdAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              <div>
                <span className="font-medium">Status:</span>
                <p className={post.published ? "text-green-600" : "text-yellow-600"}>
                  {post.published ? "Publicado" : "Rascunho"}
                </p>
              </div>
              <div>
                <span className="font-medium">Autor:</span>
                <p className="text-muted-foreground">{post.author.name}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <form id="post-form" onSubmit={handleSubmit} className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Informações do Artigo
              </CardTitle>
              <CardDescription>
                Preencha as informações básicas do seu artigo
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título do Artigo *</Label>
                <Input
                  id="title"
                  placeholder="Digite o título do seu artigo..."
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="text-lg"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="published"
                  checked={formData.published}
                  onCheckedChange={(checked) => handleInputChange('published', checked as boolean)}
                />
                <Label htmlFor="published" className="text-sm">
                  Publicar este artigo
                </Label>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Contúdo do Artigo *</CardTitle>
              <CardDescription>
                Escreva o conteúdo completo do seu artigo. Suporta formatação básica.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                id="content"
                placeholder="Escreva o conteúdo do seu artigo aqui..."
                value={formData.content}
                onChange={(e) => handleInputChange('content', e.target.value)}
                rows={20}
                className="resize-none font-mono"
              />
              <div className="mt-2 text-sm text-muted-foreground">
                {formData.content.length} caracteres
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {previewContent}
      </form>
    </div>
  )
}