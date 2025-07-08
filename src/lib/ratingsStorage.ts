import { Rating, Comment, Reply } from '@/types/article';

const RATINGS_KEY = 'article_ratings';
const COMMENTS_KEY = 'article_comments';

// Simple fingerprinting for users (not for security, just to prevent duplicates)
function getUserFingerprint(): string {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx!.textBaseline = 'top';
  ctx!.font = '14px Arial';
  ctx!.fillText('User fingerprint', 2, 2);
  
  const fingerprint = canvas.toDataURL() + 
    navigator.userAgent + 
    navigator.language + 
    screen.width + 
    screen.height + 
    new Date().getTimezoneOffset();
  
  // Simple hash
  let hash = 0;
  for (let i = 0; i < fingerprint.length; i++) {
    const char = fingerprint.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  return Math.abs(hash).toString(36);
}

// Rating functions
export function getRatings(): Rating[] {
  if (typeof window === 'undefined') return [];
  
  const stored = localStorage.getItem(RATINGS_KEY);
  if (!stored) return [];
  
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function addRating(articleId: string, rating: number): boolean {
  const ratings = getRatings();
  const userFingerprint = getUserFingerprint();
  
  // Check if user already rated this article
  const existingRating = ratings.find(r => r.articleId === articleId && r.userFingerprint === userFingerprint);
  if (existingRating) {
    return false; // User already rated
  }
  
  const newRating: Rating = {
    id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    articleId,
    rating,
    timestamp: new Date().toISOString(),
    userFingerprint
  };
  
  ratings.push(newRating);
  localStorage.setItem(RATINGS_KEY, JSON.stringify(ratings));
  return true;
}

export function getArticleRatings(articleId: string): { average: number; total: number; userRating?: number } {
  const ratings = getRatings().filter(r => r.articleId === articleId);
  const userFingerprint = getUserFingerprint();
  
  if (ratings.length === 0) {
    return { average: 0, total: 0 };
  }
  
  const total = ratings.length;
  const sum = ratings.reduce((acc, rating) => acc + rating.rating, 0);
  const average = Math.round((sum / total) * 10) / 10; // Round to 1 decimal
  
  const userRating = ratings.find(r => r.userFingerprint === userFingerprint)?.rating;
  
  return { average, total, userRating };
}

// Comment functions
export function getComments(): Comment[] {
  if (typeof window === 'undefined') return [];
  
  const stored = localStorage.getItem(COMMENTS_KEY);
  if (!stored) return [];
  
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function addComment(articleId: string, name: string, email: string, content: string): void {
  const comments = getComments();
  
  const newComment: Comment = {
    id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    articleId,
    name,
    email,
    content,
    timestamp: new Date().toISOString(),
    isApproved: false, // Comments need admin approval
    replies: []
  };
  
  comments.push(newComment);
  localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments));
}

export function getArticleComments(articleId: string): Comment[] {
  return getComments().filter(c => c.articleId === articleId && c.isApproved);
}

export function getAllComments(): Comment[] {
  return getComments().sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
}

export function approveComment(commentId: string): void {
  const comments = getComments();
  const commentIndex = comments.findIndex(c => c.id === commentId);
  
  if (commentIndex >= 0) {
    comments[commentIndex].isApproved = true;
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments));
  }
}

export function deleteComment(commentId: string): void {
  const comments = getComments();
  const filtered = comments.filter(c => c.id !== commentId);
  localStorage.setItem(COMMENTS_KEY, JSON.stringify(filtered));
}

export function addReply(commentId: string, content: string, author: string): void {
  const comments = getComments();
  const commentIndex = comments.findIndex(c => c.id === commentId);
  
  if (commentIndex >= 0) {
    const newReply: Reply = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      content,
      author,
      timestamp: new Date().toISOString()
    };
    
    comments[commentIndex].replies.push(newReply);
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments));
  }
}

export function getPendingCommentsCount(): number {
  return getComments().filter(c => !c.isApproved).length;
}