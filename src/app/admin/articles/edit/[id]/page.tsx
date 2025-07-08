'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import ProtectedRoute from '@/components/ProtectedRoute';
import RichTextEditor from '@/components/RichTextEditor';
import { getArticleById, saveArticle, generateSlug } from '@/lib/articleStorage';
import { Article } from '@/types/article';

export default function EditArticlePage() {
  const [article, setArticle] = useState<Article | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [tags, setTags] = useState('');
  const [isPublished, setIsPublished] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      const loadedArticle = getArticleById(params.id as string);
      if (loadedArticle) {
        setArticle(loadedArticle);
        setTitle(loadedArticle.title);
        setContent(loadedArticle.content);
        setExcerpt(loadedArticle.excerpt);
        setTags(loadedArticle.tags.join(', '));
        setIsPublished(loadedArticle.isPublished);
      } else {
        router.push('/admin/articles');
      }
      setIsLoading(false);
    }
  }, [params.id, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!article) return;

    setIsSaving(true);

    const updatedArticle: Article = {
      ...article,
      title,
      content,
      excerpt: excerpt || content.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
      updatedAt: new Date().toISOString(),
      isPublished,
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
      slug: generateSlug(title),
    };

    saveArticle(updatedArticle);
    setIsSaving(false);
    router.push('/admin/articles');
  };

  const handleBack = () => {
    router.push('/admin/articles');
  };

  if (isLoading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Carregando artigo...</p>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  if (!article) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artigo não encontrado</h2>
            <button
              onClick={handleBack}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Voltar para Artigos
            </button>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <button
                  onClick={handleBack}
                  className="text-gray-500 hover:text-gray-700 mr-4"
                >
                  ← Voltar
                </button>
                <h1 className="text-xl font-semibold text-gray-900">
                  Editar Artigo
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  {showPreview ? 'Editar' : 'Visualizar'}
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {showPreview ? (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                <div className="text-gray-600 mb-6">
                  <p>Por: {article.author}</p>
                  <p>Publicado em: {new Date(article.publishedAt).toLocaleDateString('pt-BR')}</p>
                  <p>Atualizado em: {new Date().toLocaleDateString('pt-BR')}</p>
                  {tags && (
                    <div className="mt-2">
                      <span className="text-sm">Tags: </span>
                      {tags.split(',').map((tag, index) => (
                        <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="prose max-w-none article-content">
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Título do Artigo
                      </label>
                      <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">
                        Resumo (Opcional)
                      </label>
                      <textarea
                        id="excerpt"
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        rows={3}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                        Conteúdo do Artigo
                      </label>
                      <RichTextEditor
                        content={content}
                        onChange={setContent}
                        placeholder="Digite o conteúdo do artigo usando as ferramentas de formatação..."
                      />
                    </div>

                    <div>
                      <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                        Tags (separadas por vírgula)
                      </label>
                      <input
                        type="text"
                        id="tags"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="isPublished"
                        checked={isPublished}
                        onChange={(e) => setIsPublished(e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="isPublished" className="ml-2 block text-sm text-gray-900">
                        Artigo publicado
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-md text-sm font-medium"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium disabled:opacity-50"
                  >
                    {isSaving ? 'Salvando...' : 'Salvar Alterações'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}