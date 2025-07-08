'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, Reply, Send } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Comment } from '@/types/article';
import { getArticleComments, addComment, addReply } from '@/lib/ratingsStorage';

interface CommentsSectionProps {
  articleId: string;
}

export default function CommentsSection({ articleId }: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [newComment, setNewComment] = useState({ name: '', email: '', content: '' });
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const loadComments = () => {
      const articleComments = getArticleComments(articleId);
      setComments(articleComments);
      setIsLoading(false);
    };

    loadComments();
    
    const handleStorageChange = () => {
      loadComments();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [articleId]);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.name || !newComment.email || !newComment.content) return;

    setIsSubmitting(true);
    
    addComment(articleId, newComment.name, newComment.email, newComment.content);
    
    setNewComment({ name: '', email: '', content: '' });
    setShowCommentForm(false);
    setIsSubmitting(false);
    
    // Reload comments
    const updatedComments = getArticleComments(articleId);
    setComments(updatedComments);
  };

  const handleSubmitReply = async (commentId: string) => {
    if (!replyContent.trim()) return;

    setIsSubmitting(true);
    
    addReply(commentId, replyContent, 'Luiz Carlos Akira');
    
    setReplyContent('');
    setReplyTo(null);
    setIsSubmitting(false);
    
    // Reload comments
    const updatedComments = getArticleComments(articleId);
    setComments(updatedComments);
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

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="space-y-4">
          <div className="h-20 bg-gray-200 rounded"></div>
          <div className="h-20 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center">
          <MessageCircle className="mr-2" size={24} />
          Comentários ({comments.length})
        </h3>
        
        {!isAuthenticated && (
          <button
            onClick={() => setShowCommentForm(!showCommentForm)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            {showCommentForm ? 'Cancelar' : 'Deixar comentário'}
          </button>
        )}
      </div>

      {/* Comment Form */}
      {showCommentForm && !isAuthenticated && (
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Deixe seu comentário</h4>
          <form onSubmit={handleSubmitComment} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={newComment.name}
                  onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={newComment.email}
                  onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                Comentário *
              </label>
              <textarea
                id="content"
                required
                rows={4}
                value={newComment.content}
                onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Escreva seu comentário..."
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Seu comentário será analisado antes de ser publicado.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors disabled:opacity-50 flex items-center"
              >
                <Send size={16} className="mr-2" />
                {isSubmitting ? 'Enviando...' : 'Enviar comentário'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Comments List */}
      {comments.length === 0 ? (
        <div className="text-center py-8">
          <MessageCircle className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-gray-500">Nenhum comentário ainda. Seja o primeiro a comentar!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900">{comment.name}</h4>
                  <p className="text-sm text-gray-500">{formatDate(comment.timestamp)}</p>
                </div>
                {isAuthenticated && (
                  <button
                    onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                  >
                    <Reply size={16} className="mr-1" />
                    Responder
                  </button>
                )}
              </div>
              
              <p className="text-gray-700 mb-4">{comment.content}</p>

              {/* Admin Reply Form */}
              {isAuthenticated && replyTo === comment.id && (
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <textarea
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    placeholder="Escreva sua resposta..."
                    rows={3}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 mb-3"
                  />
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={() => setReplyTo(null)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800 text-sm"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={() => handleSubmitReply(comment.id)}
                      disabled={!replyContent.trim() || isSubmitting}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? 'Enviando...' : 'Responder'}
                    </button>
                  </div>
                </div>
              )}

              {/* Replies */}
              {comment.replies && comment.replies.length > 0 && (
                <div className="mt-4 space-y-4">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold text-gray-900 text-sm">{reply.author}</h5>
                        <p className="text-xs text-gray-500">{formatDate(reply.timestamp)}</p>
                      </div>
                      <p className="text-gray-700 text-sm">{reply.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}