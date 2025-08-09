'use client'

import { useState } from 'react'
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
import { useRouter } from 'next/navigation'

interface PostData {
  title: string
  content: string
  published: boolean
}

export default function NewPost() {
  const router = useRouter()
  const [formData, setFormData] = useState<PostData>({
    title: '',
    content: '',
    published: false
  })
  const [loading, setLoading] = useState(false)
  const [preview, setPreview] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        const post = await response.json()
        if (formData.published) {
          router.push(`/post/${post.id}`)
        } else {
          router.push('/admin/posts')
        }
      } else {
        const error = await response.json()
        alert(error.error || 'Erro ao criar post')
      }
    } catch (error) {
      console.error('Error creating post:', error)
      alert('Erro ao criar post')
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
            {new Date().toLocaleDateString('pt-BR')}
          </div>
          <div className="whitespace-pre-wrap">
            {formData.content || 'Conteúdo do artigo aparecerá aqui...'}
          </div>
        </article>
      </CardContent>
    </Card>
  ) : null

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
            <h1 className="text-3xl font-bold">Novo Artigo</h1>
            <p className="text-muted-foreground">
              Crie um novo artigo para o seu blog
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
            {formData.published ? 'Publicar' : 'Salvar e Publicar'}
          </Button>
        </div>
      </motion.div>

      <form id="post-form" onSubmit={handleSubmit} className="space-y-6">
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
                  Publicar este artigo imediatamente
                </Label>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
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