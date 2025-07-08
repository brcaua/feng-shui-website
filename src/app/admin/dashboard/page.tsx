'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { Eye, TrendingUp, FileText, MessageCircle, Star, Check, Trash2 } from 'lucide-react';
import ProtectedRoute from '@/components/ProtectedRoute';
import { getArticleAnalytics, getArticles } from '@/lib/articleStorage';
import { getAllComments, approveComment, deleteComment, getRatings, getPendingCommentsCount } from '@/lib/ratingsStorage';
import { Comment } from '@/types/article';

export default function AdminDashboard() {
  const { logout } = useAuth();
  const router = useRouter();
  const [analytics, setAnalytics] = useState<{ totalViews: number; articlesWithViews: number; topArticles: Array<{title: string; slug: string; views: number}> }>({ totalViews: 0, articlesWithViews: 0, topArticles: [] });
  const [totalArticles, setTotalArticles] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);
  const [pendingCommentsCount, setPendingCommentsCount] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'comments' | 'ratings'>('overview');

  useEffect(() => {
    const loadAnalytics = () => {
      const analyticsData = getArticleAnalytics();
      const articles = getArticles();
      const allComments = getAllComments();
      const allRatings = getRatings();
      const pendingCount = getPendingCommentsCount();
      
      setAnalytics(analyticsData);
      setTotalArticles(articles.length);
      setComments(allComments);
      setTotalRatings(allRatings.length);
      setPendingCommentsCount(pendingCount);
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

  const handleApproveComment = (commentId: string) => {
    approveComment(commentId);
    const allComments = getAllComments();
    const pendingCount = getPendingCommentsCount();
    setComments(allComments);
    setPendingCommentsCount(pendingCount);
  };

  const handleDeleteComment = (commentId: string) => {
    if (window.confirm('Tem certeza que deseja excluir este comentário?')) {
      deleteComment(commentId);
      const allComments = getAllComments();
      const pendingCount = getPendingCommentsCount();
      setComments(allComments);
      setPendingCommentsCount(pendingCount);
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
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
            {/* Navigation Tabs */}
            <div className="mb-8">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'overview'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <FileText className="inline w-4 h-4 mr-2" />
                  Visão Geral
                </button>
                <button
                  onClick={() => setActiveTab('comments')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'comments'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <MessageCircle className="inline w-4 h-4 mr-2" />
                  Comentários {pendingCommentsCount > 0 && `(${pendingCommentsCount})`}
                </button>
                <button
                  onClick={() => setActiveTab('ratings')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'ratings'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Star className="inline w-4 h-4 mr-2" />
                  Avaliações
                </button>
              </nav>
            </div>

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <>
                {/* Analytics Overview */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Estatísticas dos Artigos</h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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

                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <MessageCircle className="h-8 w-8 text-orange-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Total de Comentários</dt>
                        <dd className="text-2xl font-bold text-gray-900">{comments.length}</dd>
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
              </>
            )}

            {/* Comments Tab */}
            {activeTab === 'comments' && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Gerenciar Comentários</h2>
                {comments.length === 0 ? (
                  <div className="text-center py-8">
                    <MessageCircle className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-500">Nenhum comentário ainda.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {comments.map((comment) => (
                      <div key={comment.id} className="bg-white border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-gray-900">{comment.name}</h4>
                              {!comment.isApproved && (
                                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                                  Pendente
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-500">{comment.email}</p>
                            <p className="text-sm text-gray-500">{formatDate(comment.timestamp)}</p>
                            <p className="text-sm text-blue-600">Artigo: {comment.articleId}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            {!comment.isApproved && (
                              <button
                                onClick={() => handleApproveComment(comment.id)}
                                className="text-green-600 hover:text-green-800 text-sm font-medium flex items-center"
                                title="Aprovar comentário"
                              >
                                <Check size={16} className="mr-1" />
                                Aprovar
                              </button>
                            )}
                            <button
                              onClick={() => handleDeleteComment(comment.id)}
                              className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center"
                              title="Excluir comentário"
                            >
                              <Trash2 size={16} className="mr-1" />
                              Excluir
                            </button>
                          </div>
                        </div>
                        <p className="text-gray-700">{comment.content}</p>
                        {comment.replies && comment.replies.length > 0 && (
                          <div className="mt-4 pl-4 border-l-2 border-blue-200">
                            <h5 className="font-medium text-gray-900 mb-2">Respostas:</h5>
                            {comment.replies.map((reply) => (
                              <div key={reply.id} className="bg-blue-50 p-3 rounded mb-2">
                                <div className="flex justify-between items-start mb-1">
                                  <span className="font-medium text-blue-900">{reply.author}</span>
                                  <span className="text-xs text-blue-600">{formatDate(reply.timestamp)}</span>
                                </div>
                                <p className="text-blue-800">{reply.content}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Ratings Tab */}
            {activeTab === 'ratings' && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Avaliações dos Artigos</h2>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">{totalRatings}</div>
                      <div className="text-sm text-gray-500">Total de Avaliações</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">
                        {totalRatings > 0 ? (getRatings().reduce((acc, r) => acc + r.rating, 0) / totalRatings).toFixed(1) : '0'}
                      </div>
                      <div className="text-sm text-gray-500">Média Geral</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">
                        {new Set(getRatings().map(r => r.articleId)).size}
                      </div>
                      <div className="text-sm text-gray-500">Artigos Avaliados</div>
                    </div>
                  </div>
                  
                  {totalRatings === 0 ? (
                    <div className="text-center py-8">
                      <Star className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <p className="text-gray-500">Nenhuma avaliação ainda.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Avaliações Recentes</h3>
                      {getRatings().slice(0, 10).map((rating) => (
                        <div key={rating.id} className="border-b border-gray-200 pb-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className={`w-4 h-4 ${
                                      star <= rating.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                                <span className="ml-2 text-sm font-medium">{rating.rating}/5</span>
                              </div>
                              <p className="text-sm text-gray-500">Artigo: {rating.articleId}</p>
                            </div>
                            <p className="text-sm text-gray-500">{formatDate(rating.timestamp)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}