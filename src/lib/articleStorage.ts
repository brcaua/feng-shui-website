import { Article } from '@/types/article';

const STORAGE_KEY = 'articles';

export function getArticles(): Article[] {
  if (typeof window === 'undefined') return [];
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function saveArticle(article: Article): void {
  const articles = getArticles();
  const existingIndex = articles.findIndex(a => a.id === article.id);
  
  if (existingIndex >= 0) {
    articles[existingIndex] = article;
  } else {
    articles.push(article);
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
}

export function deleteArticle(id: string): void {
  const articles = getArticles();
  const filtered = articles.filter(a => a.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

export function getArticleById(id: string): Article | null {
  const articles = getArticles();
  return articles.find(a => a.id === id) || null;
}

export function getArticleBySlug(slug: string): Article | null {
  const articles = getArticles();
  return articles.find(a => a.slug === slug) || null;
}

export function getPublishedArticles(): Article[] {
  return getArticles().filter(article => article.isPublished);
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export function incrementArticleViews(slug: string): void {
  const articles = getArticles();
  const articleIndex = articles.findIndex(a => a.slug === slug);
  
  if (articleIndex >= 0) {
    articles[articleIndex].views = (articles[articleIndex].views || 0) + 1;
    articles[articleIndex].lastViewedAt = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  }
}

export function getArticleViews(slug: string): number {
  const article = getArticleBySlug(slug);
  return article?.views || 0;
}

export function getArticleAnalytics(): { totalViews: number; articlesWithViews: number; topArticles: Array<{title: string; slug: string; views: number}> } {
  const articles = getArticles();
  const totalViews = articles.reduce((sum, article) => sum + (article.views || 0), 0);
  const articlesWithViews = articles.filter(article => (article.views || 0) > 0).length;
  
  const topArticles = articles
    .filter(article => article.views && article.views > 0)
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 5)
    .map(article => ({
      title: article.title,
      slug: article.slug,
      views: article.views || 0
    }));
  
  return {
    totalViews,
    articlesWithViews,
    topArticles
  };
}