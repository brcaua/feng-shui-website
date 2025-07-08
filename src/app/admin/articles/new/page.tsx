'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '@/components/ProtectedRoute';
import RichTextEditor from '@/components/RichTextEditor';
import { saveArticle, generateId, generateSlug } from '@/lib/articleStorage';
import { Article } from '@/types/article';

export default function NewArticlePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [tags, setTags] = useState('');
  const [isPublished, setIsPublished] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const article: Article = {
      id: generateId(),
      title,
      content,
      excerpt: excerpt || content.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
      author: 'Luiz Carlos Akira',
      publishedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isPublished,
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
      slug: generateSlug(title),
    };

    saveArticle(article);
    setIsLoading(false);
    router.push('/admin/articles');
  };

  const handleBack = () => {
    router.push('/admin/dashboard');
  };

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
                  Novo Artigo
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{title || 'Título do Artigo'}</h2>
                <div className="text-gray-600 mb-6">
                  <p>Por: Luiz Carlos Akira</p>
                  <p>Publicado em: {new Date().toLocaleDateString('pt-BR')}</p>
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
                        placeholder="Digite o título do artigo"
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
                        placeholder="Digite um resumo do artigo (se não preenchido, será gerado automaticamente)"
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
                        placeholder="feng shui, astrologia, consulta"
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
                        Publicar artigo imediatamente
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
                    disabled={isLoading}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium disabled:opacity-50"
                  >
                    {isLoading ? 'Salvando...' : 'Salvar Artigo'}
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