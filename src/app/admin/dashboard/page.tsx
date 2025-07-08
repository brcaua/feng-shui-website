'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { Eye, TrendingUp, FileText } from 'lucide-react';
import ProtectedRoute from '@/components/ProtectedRoute';
import { getArticleAnalytics, getArticles } from '@/lib/articleStorage';

export default function AdminDashboard() {
  const { logout } = useAuth();
  const router = useRouter();
  const [analytics, setAnalytics] = useState<{ totalViews: number; articlesWithViews: number; topArticles: Array<{title: string; slug: string; views: number}> }>({ totalViews: 0, articlesWithViews: 0, topArticles: [] });
  const [totalArticles, setTotalArticles] = useState(0);

  useEffect(() => {
    const loadAnalytics = () => {
      const analyticsData = getArticleAnalytics();
      const articles = getArticles();
      setAnalytics(analyticsData);
      setTotalArticles(articles.length);
    };

    loadAnalytics();
    
    // Update analytics when storage changes
    const handleStorageChange = () => {
      loadAnalytics();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/admin/login');
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-semibold text-gray-900">
                  Painel Administrativo
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Sair
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {/* Analytics Overview */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Estatísticas dos Artigos</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <FileText className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Total de Artigos</dt>
                        <dd className="text-2xl font-bold text-gray-900">{totalArticles}</dd>
                      </dl>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Eye className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Total de Visualizações</dt>
                        <dd className="text-2xl font-bold text-gray-900">{analytics.totalViews}</dd>
                      </dl>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <TrendingUp className="h-8 w-8 text-purple-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Artigos com Visualizações</dt>
                        <dd className="text-2xl font-bold text-gray-900">{analytics.articlesWithViews}</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Articles */}
            {analytics.topArticles.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Artigos Mais Visualizados</h3>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <ul className="divide-y divide-gray-200">
                    {analytics.topArticles.map((article, index) => (
                      <li key={article.slug} className="px-6 py-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                              {index + 1}
                            </span>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-900">{article.title}</p>
                              <p className="text-sm text-gray-500">/{article.slug}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm font-medium text-gray-900">{article.views}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Artigos
                </h3>
                <p className="text-gray-600 mb-4">
                  Crie, edite e gerencie seus artigos
                </p>
                <button
                  onClick={() => router.push('/admin/articles')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Gerenciar Artigos
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Novo Artigo
                </h3>
                <p className="text-gray-600 mb-4">
                  Criar um novo artigo
                </p>
                <button
                  onClick={() => router.push('/admin/articles/new')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Criar Artigo
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}