'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '@/components/ProtectedRoute';
import { getArticles, deleteArticle } from '@/lib/articleStorage';
import { Article } from '@/types/article';

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadArticles = () => {
      const loadedArticles = getArticles();
      setArticles(loadedArticles);
      setIsLoading(false);
    };

    loadArticles();
    
    const handleStorageChange = () => {
      loadArticles();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleDelete = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este artigo?')) {
      deleteArticle(id);
      setArticles(articles.filter(article => article.id !== id));
    }
  };

  const handleEdit = (id: string) => {
    router.push(`/admin/articles/edit/${id}`);
  };

  const handleBack = () => {
    router.push('/admin/dashboard');
  };

  if (isLoading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Carregando artigos...</p>
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
                  Gerenciar Artigos
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => router.push('/')}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Ver Site
                </button>
                <button
                  onClick={() => router.push('/admin/articles/new')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Novo Artigo
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {articles.length === 0 ? (
              <div className="text-center py-12">
                <div className="bg-white rounded-lg shadow p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Nenhum artigo encontrado
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Você ainda não criou nenhum artigo. Comece criando seu primeiro artigo!
                  </p>
                  <button
                    onClick={() => router.push('/admin/articles/new')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm font-medium"
                  >
                    Criar Primeiro Artigo
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {articles.map((article) => (
                    <li key={article.id}>
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-medium text-gray-900 truncate">
                                {article.title}
                              </h3>
                              <div className="flex items-center space-x-2">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  article.isPublished 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {article.isPublished ? 'Publicado' : 'Rascunho'}
                                </span>
                              </div>
                            </div>
                            <div className="mt-2">
                              <p className="text-sm text-gray-600">
                                {article.excerpt}
                              </p>
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500 space-x-4">
                              <span>Por: {article.author}</span>
                              <span>•</span>
                              <span>
                                Criado em: {new Date(article.publishedAt).toLocaleDateString('pt-BR')}
                              </span>
                              {article.tags.length > 0 && (
                                <>
                                  <span>•</span>
                                  <div className="flex flex-wrap gap-1">
                                    {article.tags.map((tag, index) => (
                                      <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 ml-4">
                            <button
                              onClick={() => handleEdit(article.id)}
                              className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm font-medium"
                            >
                              Editar
                            </button>
                            <button
                              onClick={() => handleDelete(article.id)}
                              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm font-medium"
                            >
                              Excluir
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}