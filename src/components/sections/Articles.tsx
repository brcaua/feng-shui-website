'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { getPublishedArticles } from '@/lib/articleStorage';
import { getArticleRatings } from '@/lib/ratingsStorage';
import { Article } from '@/types/article';

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadArticles = () => {
      const publishedArticles = getPublishedArticles();
      // Add ratings to articles
      const articlesWithRatings = publishedArticles.map(article => {
        const ratings = getArticleRatings(article.id);
        return {
          ...article,
          averageRating: ratings.average,
          totalRatings: ratings.total
        };
      });
      setArticles(articlesWithRatings.slice(0, 3));
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Carregando artigos...</p>
          </div>
        </div>
      </section>
    );
  }

  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Últimos Artigos
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Insights sobre Feng Shui, Astrologia Chinesa e Metafísica Oriental
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm text-gray-500">
                    {new Date(article.publishedAt).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  <Link href={`/artigos/${article.slug}`} className="hover:text-blue-600 transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                {/* Rating Display */}
                {article.totalRatings && article.totalRatings > 0 && (
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium text-gray-700">{article.averageRating}</span>
                      <span className="ml-1 text-sm text-gray-500">({article.totalRatings} avaliações)</span>
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/artigos/${article.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Ler mais →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {articles.length >= 3 && (
          <div className="text-center mt-12">
            <Link 
              href="/artigos"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Ver todos os artigos
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}