'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Edit, Trash2 } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { getArticleBySlug, deleteArticle } from '@/lib/articleStorage';
import { Article } from '@/types/article';

export default function ArticlePage() {
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const handleEdit = () => {
    if (article) {
      router.push(`/admin/articles/edit/${article.id}`);
    }
  };

  const handleDelete = () => {
    if (article && window.confirm('Tem certeza que deseja excluir este artigo?')) {
      deleteArticle(article.id);
      router.push('/artigos');
    }
  };

  useEffect(() => {
    if (params.slug) {
      const loadedArticle = getArticleBySlug(params.slug as string);
      setArticle(loadedArticle);
      setIsLoading(false);
    }
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Carregando artigo...</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Artigo não encontrado
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                O artigo que você está procurando não existe ou foi removido.
              </p>
              <Link 
                href="/artigos"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Ver todos os artigos
              </Link>
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
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="mb-8 flex justify-between items-center">
                <Link 
                  href="/artigos"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  ← Voltar para artigos
                </Link>
                
                {isAuthenticated && (
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleEdit}
                      className="flex items-center bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
                    >
                      <Edit size={16} className="mr-1" />
                      Editar
                    </button>
                    <button
                      onClick={handleDelete}
                      className="flex items-center bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
                    >
                      <Trash2 size={16} className="mr-1" />
                      Excluir
                    </button>
                  </div>
                )}
              </div>
              
              <header className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {article.title}
                </h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <span>Por: {article.author}</span>
                  <span className="mx-2">•</span>
                  <time dateTime={article.publishedAt}>
                    {new Date(article.publishedAt).toLocaleDateString('pt-BR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                {article.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </header>
              
              <div className="prose max-w-none text-gray-700 leading-relaxed article-content">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>
            </div>
          </div>
          
          {!isAuthenticated && (
            <div className="mt-8 text-center">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Gostou do artigo?
                </h3>
                <p className="text-gray-600 mb-4">
                  Entre em contato para saber mais sobre nossos cursos e consultorias.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/#contact"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Entrar em contato
                  </Link>
                  <Link 
                    href="/artigos"
                    className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                  >
                    Ver mais artigos
                  </Link>
                </div>
              </div>
            </div>
          )}
        </article>
      </div>
      <Footer />
    </div>
  );
}