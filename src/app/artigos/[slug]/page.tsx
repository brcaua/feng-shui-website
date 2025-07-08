'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Edit, Trash2, Save, X, Star } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import RichTextEditor from '@/components/RichTextEditor';
import StarRating from '@/components/StarRating';
import CommentsSection from '@/components/CommentsSection';
import { useAuth } from '@/contexts/AuthContext';
import { getArticleBySlug, deleteArticle, saveArticle, generateSlug, incrementArticleViews } from '@/lib/articleStorage';
import { getArticleRatings, addRating } from '@/lib/ratingsStorage';
import { Article } from '@/types/article';

export default function ArticlePage() {
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [editExcerpt, setEditExcerpt] = useState('');
  const [editTags, setEditTags] = useState('');
  const [editIsPublished, setEditIsPublished] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [ratings, setRatings] = useState<{ average: number; total: number; userRating?: number }>({ average: 0, total: 0 });
  const params = useParams();
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const handleEdit = () => {
    if (article) {
      setEditTitle(article.title);
      setEditContent(article.content);
      setEditExcerpt(article.excerpt);
      setEditTags(article.tags.join(', '));
      setEditIsPublished(article.isPublished);
      setIsEditing(true);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditTitle('');
    setEditContent('');
    setEditExcerpt('');
    setEditTags('');
    setEditIsPublished(false);
  };

  const handleSave = async () => {
    if (!article) return;
    
    setIsSaving(true);
    
    const updatedArticle: Article = {
      ...article,
      title: editTitle,
      content: editContent,
      excerpt: editExcerpt || editContent.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
      tags: editTags.split(',').map(tag => tag.trim()).filter(Boolean),
      isPublished: editIsPublished,
      updatedAt: new Date().toISOString(),
      slug: generateSlug(editTitle),
    };
    
    saveArticle(updatedArticle);
    setArticle(updatedArticle);
    setIsEditing(false);
    setIsSaving(false);
    
    // If slug changed, redirect to new URL
    if (updatedArticle.slug !== article.slug) {
      router.push(`/artigos/${updatedArticle.slug}`);
    }
  };

  const handleDelete = () => {
    if (article && window.confirm('Tem certeza que deseja excluir este artigo?')) {
      deleteArticle(article.id);
      router.push('/artigos');
    }
  };

  const handleRating = (rating: number) => {
    if (article && !isAuthenticated) {
      const success = addRating(article.id, rating);
      if (success) {
        // Reload ratings
        const updatedRatings = getArticleRatings(article.id);
        setRatings(updatedRatings);
      }
    }
  };

  useEffect(() => {
    if (params.slug) {
      const loadedArticle = getArticleBySlug(params.slug as string);
      setArticle(loadedArticle);
      setIsLoading(false);
      
      if (loadedArticle) {
        // Load ratings
        const articleRatings = getArticleRatings(loadedArticle.id);
        setRatings(articleRatings);
        
        // Increment view count only for non-admin users
        if (!isAuthenticated) {
          incrementArticleViews(params.slug as string);
        }
      }
    }
  }, [params.slug, isAuthenticated]);

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
                    {isEditing ? (
                      <>
                        <button
                          onClick={handleSave}
                          disabled={isSaving}
                          className="flex items-center bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors disabled:opacity-50"
                        >
                          <Save size={16} className="mr-1" />
                          {isSaving ? 'Salvando...' : 'Salvar'}
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="flex items-center bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
                        >
                          <X size={16} className="mr-1" />
                          Cancelar
                        </button>
                      </>
                    ) : (
                      <>
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
                      </>
                    )}
                  </div>
                )}
              </div>
              
              {isEditing ? (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="edit-title" className="block text-sm font-medium text-gray-700 mb-2">
                      Título do Artigo
                    </label>
                    <input
                      id="edit-title"
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Digite o título do artigo"
                    />
                  </div>

                  <div>
                    <label htmlFor="edit-excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                      Resumo (Opcional)
                    </label>
                    <textarea
                      id="edit-excerpt"
                      value={editExcerpt}
                      onChange={(e) => setEditExcerpt(e.target.value)}
                      rows={3}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Digite um resumo do artigo"
                    />
                  </div>

                  <div>
                    <label htmlFor="edit-content" className="block text-sm font-medium text-gray-700 mb-2">
                      Conteúdo do Artigo
                    </label>
                    <RichTextEditor
                      content={editContent}
                      onChange={setEditContent}
                      placeholder="Digite o conteúdo do artigo usando as ferramentas de formatação..."
                    />
                  </div>

                  <div>
                    <label htmlFor="edit-tags" className="block text-sm font-medium text-gray-700 mb-2">
                      Tags (separadas por vírgula)
                    </label>
                    <input
                      id="edit-tags"
                      type="text"
                      value={editTags}
                      onChange={(e) => setEditTags(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="feng shui, astrologia, consulta"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      id="edit-published"
                      type="checkbox"
                      checked={editIsPublished}
                      onChange={(e) => setEditIsPublished(e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="edit-published" className="ml-2 block text-sm text-gray-900">
                      Artigo publicado
                    </label>
                  </div>
                </div>
              ) : (
                <>
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
                      {isAuthenticated && (
                        <>
                          <span className="mx-2">•</span>
                          <span className="text-blue-600 font-medium">
                            {article.views || 0} visualizações
                          </span>
                        </>
                      )}
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
                </>
              )}
            </div>
          </div>
          
          {!isAuthenticated && (
            <>
              {/* Rating Section */}
              <div className="mt-8">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Avalie este artigo
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <StarRating 
                        rating={ratings.userRating || 0}
                        onRatingChange={handleRating}
                        size="large"
                      />
                      {ratings.userRating ? (
                        <span className="text-green-600 font-medium">
                          Obrigado pela sua avaliação!
                        </span>
                      ) : (
                        <span className="text-gray-600">
                          Clique nas estrelas para avaliar
                        </span>
                      )}
                    </div>
                    {ratings.total > 0 && (
                      <div className="text-right">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          <span className="font-semibold">{ratings.average}</span>
                          <span className="text-gray-500 ml-1">({ratings.total} avaliações)</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-8">
                <div className="bg-white rounded-lg shadow p-6">
                  <CommentsSection articleId={article.id} />
                </div>
              </div>

              {/* Contact Section */}
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
            </>
          )}
        </article>
      </div>
      <Footer />
    </div>
  );
}