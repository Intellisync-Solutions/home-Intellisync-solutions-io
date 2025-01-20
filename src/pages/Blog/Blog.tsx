import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Pagination from '../../components/ui/Pagination';
import BlogModal, { BlogPostContent } from '../../components/Modals/BlogModal';
import { TextShimmerWave } from '../../components/features/TextWave';

// Define blog post type
type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  tags: string[];
  imageUrl?: string;
  content: string[];
  author?: {
    name: string;
    avatar?: string;
  };
};

// Mock blog posts data (replace with actual data source later)
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Exploring AI Innovations in 2025',
    excerpt: 'A deep dive into the latest breakthroughs in artificial intelligence and machine learning.',
    date: 'July 15, 2025',
    readTime: 5,
    tags: ['AI', 'Technology', 'Innovation'],
    imageUrl: '/images/blog/ai-innovation.jpg',
    content: [
      'Artificial Intelligence continues to push the boundaries of what\'s possible in technology. In 2025, we\'re witnessing unprecedented advancements that are transforming industries across the globe.',
      'Machine learning algorithms have become increasingly sophisticated, enabling more nuanced and context-aware solutions. From predictive analytics to natural language processing, AI is no longer just a tool but a collaborative partner in problem-solving.',
      'The ethical considerations surrounding AI development have also taken center stage, with researchers and policymakers working together to ensure responsible innovation.'
    ],
    author: {
      name: 'Dr. Elena Rodriguez',
      avatar: '/images/authors/elena-rodriguez.jpg'
    }
  },
  {
    id: 2,
    title: 'The Future of Web Development',
    excerpt: 'Insights into emerging web technologies and their impact on modern software engineering.',
    date: 'August 3, 2025',
    readTime: 4,
    tags: ['Web Development', 'Frontend', 'Trends'],
    imageUrl: '/images/blog/web-dev-future.jpg',
    content: [
      'The web development landscape is constantly evolving, with new technologies and frameworks emerging every year.',
      'In this article, we\'ll explore the latest trends and innovations in web development, from serverless architecture to progressive web apps.',
      'We\'ll also examine the impact of these trends on modern software engineering and what they mean for developers.'
    ]
  },
  {
    id: 3,
    title: 'Machine Learning Breakthroughs',
    excerpt: 'Exploring the latest advancements in machine learning algorithms.',
    date: 'September 12, 2025',
    readTime: 6,
    tags: ['AI', 'Machine Learning', 'Technology'],
    imageUrl: '/images/blog/ml-breakthroughs.jpg',
    content: [
      'Machine learning has made tremendous progress in recent years, with significant advancements in areas like deep learning and natural language processing.',
      'In this article, we\'ll delve into the latest breakthroughs in machine learning, including the development of more efficient algorithms and the application of machine learning in various industries.',
      'We\'ll also discuss the potential impact of these breakthroughs on the future of AI and machine learning.'
    ]
  },
  {
    id: 4,
    title: 'Cybersecurity in the Digital Age',
    excerpt: 'Understanding the evolving landscape of digital security and protection.',
    date: 'October 5, 2025',
    readTime: 5,
    tags: ['Cybersecurity', 'Technology', 'Innovation'],
    imageUrl: '/images/blog/cybersecurity.jpg',
    content: [
      'As technology advances, cybersecurity threats are becoming increasingly sophisticated, making it essential for individuals and organizations to stay vigilant.',
      'In this article, we\'ll explore the evolving landscape of digital security and protection, including the latest threats and trends.',
      'We\'ll also discuss strategies for protecting against cyber threats and the importance of cybersecurity awareness.'
    ]
  },
  {
    id: 5,
    title: 'Cloud Computing Trends',
    excerpt: 'Analyzing the latest trends and technologies in cloud computing.',
    date: 'November 20, 2025',
    readTime: 4,
    tags: ['Cloud', 'Technology', 'Infrastructure'],
    imageUrl: '/images/blog/cloud-trends.jpg',
    content: [
      'Cloud computing has revolutionized the way we store, manage, and process data, and it continues to evolve with new trends and technologies emerging.',
      'In this article, we\'ll examine the latest trends in cloud computing, including the growth of serverless architecture and the increasing adoption of cloud-native applications.',
      'We\'ll also discuss the benefits and challenges of cloud computing and what they mean for businesses.'
    ]
  },
  {
    id: 6,
    title: 'Blockchain Beyond Cryptocurrency',
    excerpt: 'Exploring blockchain applications beyond digital currencies.',
    date: 'December 8, 2025',
    readTime: 5,
    tags: ['Blockchain', 'Technology', 'Innovation'],
    imageUrl: '/images/blog/blockchain.jpg',
    content: [
      'Blockchain technology has far-reaching potential beyond its association with cryptocurrency, and it\'s being explored in various industries.',
      'In this article, we\'ll delve into the world of blockchain beyond cryptocurrency, including its applications in supply chain management, healthcare, and voting systems.',
      'We\'ll also discuss the benefits and challenges of implementing blockchain technology in different sectors.'
    ]
  },
  {
    id: 7,
    title: 'The Rise of Edge Computing',
    excerpt: 'How edge computing is transforming data processing and IoT applications.',
    date: 'January 14, 2026',
    readTime: 5,
    tags: ['Edge Computing', 'IoT', 'Technology'],
    imageUrl: '/images/blog/edge-computing.jpg',
    content: [
      'Edge computing is a rapidly growing field that\'s transforming the way we process data and interact with IoT devices.',
      'In this article, we\'ll explore the rise of edge computing, including its benefits, challenges, and applications in various industries.',
      'We\'ll also discuss the potential impact of edge computing on the future of data processing and IoT applications.'
    ]
  },
  {
    id: 8,
    title: 'UX/UI Trends for 2026',
    excerpt: 'Exploring the newest design trends shaping user experiences.',
    date: 'February 2, 2026',
    readTime: 4,
    tags: ['UX/UI', 'Design', 'Trends'],
    imageUrl: '/images/blog/ux-trends.jpg',
    content: [
      'User experience and user interface design are constantly evolving, with new trends and technologies emerging every year.',
      'In this article, we\'ll examine the latest UX/UI trends for 2026, including the growth of voice UI, the increasing importance of accessibility, and the impact of AI on design.',
      'We\'ll also discuss the benefits and challenges of implementing these trends in design projects.'
    ]
  },
  {
    id: 9,
    title: 'Harnessing AI for Climate Change',
    excerpt: 'Innovative ways artificial intelligence is helping to combat climate change.',
    date: 'March 10, 2026',
    readTime: 6,
    tags: ['AI', 'Sustainability', 'Innovation'],
    imageUrl: '/images/blog/ai-climate.jpg',
    content: [
      'Artificial intelligence is being increasingly used to combat climate change, from predicting weather patterns to optimizing renewable energy sources.',
      'In this article, we\'ll explore the innovative ways AI is being used to address climate change, including its applications in sustainable infrastructure, climate modeling, and eco-friendly technologies.',
      'We\'ll also discuss the potential impact of AI on the future of climate change mitigation and sustainability.'
    ]
  },
  {
    id: 10,
    title: 'Navigating the Metaverse',
    excerpt: 'A beginner’s guide to understanding and engaging with the metaverse.',
    date: 'April 22, 2026',
    readTime: 5,
    tags: ['Metaverse', 'Technology', 'Trends'],
    imageUrl: '/images/blog/metaverse.jpg',
    content: [
      'The metaverse is a rapidly evolving concept that\'s changing the way we interact with technology and each other.',
      'In this article, we\'ll provide a beginner’s guide to understanding and engaging with the metaverse, including its definition, history, and current state.',
      'We\'ll also discuss the potential applications and implications of the metaverse on various industries and aspects of our lives.'
    ]
  },
  {
    id: 11,
    title: 'The Role of AI in Healthcare',
    excerpt: 'Exploring how AI is revolutionizing healthcare delivery and research.',
    date: 'May 18, 2026',
    readTime: 6,
    tags: ['AI', 'Healthcare', 'Innovation'],
    imageUrl: '/images/blog/ai-healthcare.jpg',
    content: [
      'Artificial intelligence is transforming the healthcare industry, from medical diagnosis to personalized treatment plans.',
      'In this article, we\'ll explore the role of AI in healthcare, including its applications in medical imaging, patient data analysis, and clinical decision support systems.',
      'We\'ll also discuss the benefits and challenges of implementing AI in healthcare and its potential impact on the future of medical research and treatment.'
    ]
  },
  {
    id: 12,
    title: 'Ethics in AI Development',
    excerpt: 'Understanding the moral implications of creating intelligent systems.',
    date: 'June 5, 2026',
    readTime: 5,
    tags: ['AI', 'Ethics', 'Technology'],
    imageUrl: '/images/blog/ai-ethics.jpg',
    content: [
      'As AI systems become increasingly sophisticated, the need for ethical considerations in their development grows.',
      'In this article, we\'ll examine the moral implications of creating intelligent systems, including issues related to bias, transparency, and accountability.',
      'We\'ll also discuss the importance of ethics in AI development and the potential consequences of neglecting these considerations.'
    ]
  },
  {
    id: 13,
    title: 'Top Programming Languages for 2026',
    excerpt: 'An overview of the programming languages dominating the tech industry.',
    date: 'July 1, 2026',
    readTime: 4,
    tags: ['Programming', 'Tech', 'Trends'],
    imageUrl: '/images/blog/programming-languages.jpg',
    content: [
      'The programming landscape is constantly evolving, with new languages and technologies emerging every year.',
      'In this article, we\'ll provide an overview of the top programming languages dominating the tech industry in 2026, including their applications, advantages, and disadvantages.',
      'We\'ll also discuss the skills and knowledge required to work with these languages and the potential career paths for developers.'
    ]
  },
  {
    id: 14,
    title: '5G Technology: Transforming Connectivity',
    excerpt: 'Examining the impact of 5G on industries and daily life.',
    date: 'August 19, 2026',
    readTime: 5,
    tags: ['5G', 'Connectivity', 'Technology'],
    imageUrl: '/images/blog/5g-technology.jpg',
    content: [
      'The advent of 5G technology is transforming the way we connect and interact with each other and the world around us.',
      'In this article, we\'ll examine the impact of 5G on various industries, including healthcare, finance, and education.',
      'We\'ll also discuss the benefits and challenges of 5G adoption and its potential impact on daily life.'
    ]
  },
  {
    id: 15,
    title: 'AI-Powered Creativity in 2026',
    excerpt: 'How AI is enabling new forms of artistic expression and creativity.',
    date: 'September 9, 2026',
    readTime: 6,
    tags: ['AI', 'Creativity', 'Innovation'],
    imageUrl: '/images/blog/ai-creativity.jpg',
    content: [
      'Artificial intelligence is revolutionizing the creative industries, from music and art to writing and design.',
      'In this article, we\'ll explore the ways AI is enabling new forms of artistic expression and creativity, including its applications in generative art, music composition, and creative writing.',
      'We\'ll also discuss the potential impact of AI on the future of creativity and the role of human artists in the age of AI.'
    ]
  }
];

const Blog: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState<BlogPostContent | null>(null);
  const postsPerPage = 6; // Number of posts to display per page

  // Get unique tags from blog posts
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  // Filter posts by tag
  const filteredPosts = useMemo(() => 
    selectedTag 
      ? blogPosts.filter(post => post.tags.includes(selectedTag))
      : blogPosts
  , [selectedTag]);

  // Paginate filtered posts
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return filteredPosts.slice(startIndex, endIndex);
  }, [filteredPosts, currentPage]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Reset current page when tag changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTag]);

  // Handle opening blog post modal
  const handleOpenPost = (post: BlogPost) => {
    setSelectedPost(post);
  };

  // Handle closing blog post modal
  const handleClosePost = () => {
    setSelectedPost(null);
  };

  return (
    <>
      <Helmet>
        <title>IntelliSync Blog | Tech Insights and Innovations</title>
        <meta 
          name="description" 
          content="Explore cutting-edge insights, technology trends, and innovative perspectives from IntelliSync's expert team." 
        />
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <TextShimmerWave 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 py-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
          >
            IntelliSync Blog
          </TextShimmerWave>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the latest insights, trends, and innovations in technology, AI, and digital transformation.
          </p>
        </motion.div>

        {/* Tag Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <motion.button
            key="all"
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedTag === null 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Posts
          </motion.button>
          {allTags.map(tag => (
            <motion.button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedTag === tag 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedPosts.map(post => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => handleOpenPost(post)}
              className="bg-background border border-border/20 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              {post.imageUrl && (
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <span className="text-xs text-muted-foreground">
                    {post.readTime} min read
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
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
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No blog posts found for the selected tag.
          </div>
        )}

        {/* Pagination */}
        {filteredPosts.length > postsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <BlogModal
          isOpen={!!selectedPost}
          onClose={handleClosePost}
          post={selectedPost}
        />
      )}
    </>
  );
};

export default Blog;