import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Tag } from 'lucide-react';
import { TextShimmerWave } from '../features/TextWave';

// Define the type for blog post content
export interface BlogPostContent {
  id: number;
  title: string;
  date: string;
  readTime: number;
  tags: string[];
  imageUrl?: string;
  excerpt: string;
  content: string[];
  author?: {
    name: string;
    avatar?: string;
  };
}

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: BlogPostContent;
}

const BlogModal: React.FC<BlogModalProps> = ({ 
  isOpen, 
  onClose, 
  post 
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative w-full max-w-4xl bg-background rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors"
            >
              <X size={24} className="text-foreground" />
            </button>

            {/* Blog Post Header */}
            <div className="relative">
              {post.imageUrl && (
                <div className="w-full h-[400px] overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              )}
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <TextShimmerWave 
                  className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg"
                >
                  {post.title}
                </TextShimmerWave>
                
                {/* Post Metadata */}
                <div className="flex items-center space-x-4 text-white/80">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span className="text-sm">{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span className="text-sm">{post.readTime} min read</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div className="p-8 pt-4 prose dark:prose-invert max-w-none">
              {/* Excerpt */}
              <p className="text-xl text-muted-foreground italic mb-6 border-l-4 border-primary pl-4">
                {post.excerpt}
              </p>

              {/* Main Content */}
              {post.content.map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}

              {/* Tags */}
              <div className="flex items-center space-x-2 mt-6">
                <Tag size={16} className="text-muted-foreground" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-2 py-0.5 bg-secondary/20 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Section (if available) */}
              {post.author && (
                <div className="mt-8 pt-6 border-t border-border/20 flex items-center space-x-4">
                  {post.author.avatar && (
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="font-semibold">{post.author.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Author at IntelliSync
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BlogModal;