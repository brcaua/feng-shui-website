export interface Rating {
  id: string;
  articleId: string;
  rating: number; // 1-5
  timestamp: string;
  userFingerprint: string; // Simple fingerprint to prevent duplicate ratings
}

export interface Comment {
  id: string;
  articleId: string;
  name: string;
  email: string;
  content: string;
  timestamp: string;
  isApproved: boolean;
  replies: Reply[];
}

export interface Reply {
  id: string;
  content: string;
  author: string; // Admin name
  timestamp: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  isPublished: boolean;
  tags: string[];
  slug: string;
  views?: number;
  lastViewedAt?: string;
  averageRating?: number;
  totalRatings?: number;
}