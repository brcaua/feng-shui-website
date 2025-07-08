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