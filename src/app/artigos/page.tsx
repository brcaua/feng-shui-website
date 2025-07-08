'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Edit, Trash2, Plus } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { getPublishedArticles, deleteArticle } from '@/lib/articleStorage';
import { Article } from '@/types/article';

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const handleEdit = (slug: string) => {
    router.push(`/artigos/${slug}`);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este artigo?')) {
      deleteArticle(id);
      setArticles(articles.filter(article => article.id !== id));
    }
  };

  useEffect(() => {
    const loadArticles = () => {
      const publishedArticles = getPublishedArticles();
      setArticles(publishedArticles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()));
      setIsLoading(false);
    };

    loadArticles();
    
    const handleStorageChange = () => {
      loadArticles();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Carregando artigos...</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="flex justify-between items-start mb-6">
              <div></div>
              {isAuthenticated && (
                <Link
                  href="/admin/articles/new"
                  className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <Plus size={16} className="mr-2" />
                  Novo Artigo
                </Link>
              )}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Artigos
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Insights sobre Feng Shui, Astrologia Chinesa e Metafísica Oriental
            </p>
          </div>

          {articles.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-white rounded-lg shadow p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Nenhum artigo publicado ainda
                </h2>
                <p className="text-gray-600 mb-6">
                  Os artigos estarão disponíveis em breve. Acompanhe nossas redes sociais para saber quando novos conteúdos forem publicados.
                </p>
                <Link 
                  href="/"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Voltar ao início
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">
                        {new Date(article.publishedAt).toLocaleDateString('pt-BR')}
                      </span>
                      {isAuthenticated && (
                        <span className="text-sm text-blue-600 font-medium">
                          {article.views || 0} visualizações
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                      <Link href={`/artigos/${article.slug}`} className="hover:text-blue-600 transition-colors">
                        {article.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center space-x-2">
                        {isAuthenticated && (
                          <>
                            <button
                              onClick={() => handleEdit(article.slug)}
                              className="text-yellow-600 hover:text-yellow-800 p-1"
                              title="Editar artigo"
                            >
                              <Edit size={16} />
                            </button>
                            <button
                              onClick={() => handleDelete(article.id)}
                              className="text-red-600 hover:text-red-800 p-1"
                              title="Excluir artigo"
                            >
                              <Trash2 size={16} />
                            </button>
                          </>
                        )}
                        <Link 
                          href={`/artigos/${article.slug}`}
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                        >
                          Ler mais →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}