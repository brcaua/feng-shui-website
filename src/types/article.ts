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
}