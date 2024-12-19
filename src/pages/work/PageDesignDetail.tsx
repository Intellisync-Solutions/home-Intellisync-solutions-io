import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { StreamingText } from '../../components/features/StreamingText';

interface PageDesign {
  id: string;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  category: string;
  tags: string[];
  featured?: boolean;
  fullDescription?: string;
  features?: string[];
  technologies?: string[];
  screenshots?: { url: string; caption: string }[];
}

const pageDesigns: Record<string, PageDesign> = {
  'modern-portfolio': {
    id: 'modern-portfolio',
    title: 'Modern Portfolio',
    description: 'A sleek and modern portfolio design for creative professionals, featuring smooth animations and dynamic content loading.',
    image: 'https://placehold.co/1200x600/2563eb/ffffff?text=Portfolio+Design',
    demoUrl: '#',
    category: 'Portfolio',
    tags: ['Creative', 'Modern', 'Personal'],
    featured: true,
    fullDescription: 'This modern portfolio template is designed for creative professionals who want to showcase their work in a clean, sophisticated manner. The design emphasizes visual hierarchy and smooth transitions to create an engaging user experience.',
    features: [
      'Responsive grid layout for project showcases',
      'Smooth page transitions and animations',
      'Dark/Light mode support',
      'Contact form with validation',
      'Blog section with categories',
      'Filterable project gallery'
    ],
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Framer Motion',
      'TypeScript',
      'Next.js'
    ],
    screenshots: [
      {
        url: 'https://placehold.co/800x600/2563eb/ffffff?text=Homepage',
        caption: 'Homepage with hero section'
      },
      {
        url: 'https://placehold.co/800x600/2563eb/ffffff?text=Projects',
        caption: 'Projects grid layout'
      },
      {
        url: 'https://placehold.co/800x600/2563eb/ffffff?text=Blog',
        caption: 'Blog section'
      }
    ]
  },
  'ecommerce-landing': {
    id: 'ecommerce-landing',
    title: 'E-commerce Landing',
    description: 'High-converting e-commerce landing page with product showcases and seamless checkout integration.',
    image: 'https://placehold.co/1200x600/2563eb/ffffff?text=E-commerce+Design',
    demoUrl: '#',
    category: 'E-commerce',
    tags: ['Shop', 'Business', 'Modern'],
    fullDescription: 'A conversion-optimized e-commerce landing page template designed to showcase products effectively and guide users through a seamless shopping experience.',
    features: [
      'Product quick-view modals',
      'Advanced filtering and sorting',
      'Shopping cart with animations',
      'Wishlist functionality',
      'Size and color selectors',
      'Related products section'
    ],
    technologies: [
      'React.js',
      'Redux Toolkit',
      'Tailwind CSS',
      'Stripe Integration',
      'Firebase'
    ],
    screenshots: [
      {
        url: 'https://placehold.co/800x600/2563eb/ffffff?text=Products',
        caption: 'Product listing page'
      },
      {
        url: 'https://placehold.co/800x600/2563eb/ffffff?text=Cart',
        caption: 'Shopping cart'
      },
      {
        url: 'https://placehold.co/800x600/2563eb/ffffff?text=Checkout',
        caption: 'Checkout process'
      }
    ]
  },
  'saas-dashboard': {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard',
    description: 'Clean and intuitive dashboard interface for SaaS applications with real-time data visualization.',
    image: 'https://placehold.co/1200x600/2563eb/ffffff?text=Dashboard+Design',
    demoUrl: '#',
    category: 'Dashboard',
    tags: ['Admin', 'Analytics', 'Business'],
    featured: true,
    fullDescription: 'A comprehensive dashboard template designed for modern SaaS applications. This dashboard provides a clean and intuitive interface for data visualization, user management, and system monitoring. Built with performance and scalability in mind, it includes real-time updates and interactive charts.',
    features: [
      'Real-time data visualization with interactive charts',
      'Customizable widgets and layout system',
      'User management and role-based access control',
      'Activity monitoring and audit logs',
      'System health monitoring',
      'Automated reporting and export functionality',
      'Dark/Light mode support',
      'Responsive design for all devices'
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'D3.js',
      'Socket.IO',
      'Redux Toolkit',
      'Tailwind CSS',
      'React Query'
    ],
    screenshots: [
      {
        url: 'https://placehold.co/800x600/2563eb/ffffff?text=Dashboard+Overview',
        caption: 'Main dashboard overview with key metrics'
      },
      {
        url: 'https://placehold.co/800x600/2563eb/ffffff?text=Analytics',
        caption: 'Advanced analytics with interactive charts'
      },
      {
        url: 'https://placehold.co/800x600/2563eb/ffffff?text=User+Management',
        caption: 'User management interface'
      },
      {
        url: 'https://placehold.co/800x600/2563eb/ffffff?text=Settings',
        caption: 'System settings and configuration'
      }
    ]
  },
  'blog-platform': {
    id: 'blog-platform',
    title: 'Blog Platform',
    description: 'Modern blog platform design with rich content editing and social sharing features.',
    image: 'https://placehold.co/1200x600/2563eb/ffffff?text=Blog+Design',
    demoUrl: '#',
    category: 'Blog',
    tags: ['Content', 'Social', 'Personal'],
    fullDescription: 'A modern, feature-rich blog platform designed for content creators and publishers. This platform combines beautiful typography with powerful content management features, making it perfect for both personal blogs and professional publications. The design emphasizes readability and engagement while providing robust tools for content creation and management.',
    features: [
      'Rich text editor with markdown support',
      'Custom theming and layout options',
      'SEO optimization tools',
      'Social media integration',
      'Newsletter subscription system',
      'Comment system with moderation',
      'Content categorization and tagging',
      'Reading time estimation',
      'Related posts suggestions',
      'Analytics dashboard for authors'
    ],
    technologies: [
      'React.js',
      'Next.js',
      'MDX',
      'Prisma',
      'PostgreSQL',
      'Tailwind CSS',
      'Vercel'
    ],
    screenshots: [
      {
        url: 'https://placehold.co/800x600/2563eb/ffffff?text=Blog+Home',
        caption: 'Homepage with featured articles'
      },
      {
        url: 'https://placehold.co/800x600/2563eb/ffffff?text=Article',
        caption: 'Article page with rich content'
      },
      {
        url: 'https://placehold.co/800x600/2563eb/ffffff?text=Editor',
        caption: 'Rich text editor interface'
      },
      {
        url: 'https://placehold.co/800x600/2563eb/ffffff?text=Author+Dashboard',
        caption: 'Author dashboard with analytics'
      }
    ]
  },
  // Add more designs here...
};

const PageDesignDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  
  const design = id ? pageDesigns[id] : null;

  if (!design) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            <StreamingText 
              text="Yikes, How did you get here? 🤔" 
              speed={40}
            />
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            <StreamingText 
              text="This design seems to have wandered off into the digital void."
              speed={30}
              delay={1500}
            />
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            <StreamingText 
              text="✨ That was a neat animation effect"
              speed={40}
              delay={3000}
            />
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 0.5 }}
          >
            <Button 
              onClick={() => navigate('/work/pages')}
              className="text-lg px-6 py-3"
            >
              Take Me Back to Safety
            </Button>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          variant="ghost"
          className="mb-6 flex items-center gap-2"
          onClick={() => navigate('/work/pages')}
        >
          <ArrowLeft size={16} />
          Back to Designs
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              {design.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {design.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              {design.fullDescription || design.description}
            </p>

            {design.features && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Features
                </h2>
                <ul className="space-y-2">
                  {design.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {design.technologies && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {design.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <Button
              className="flex items-center gap-2"
              onClick={() => window.open(design.demoUrl, '_blank')}
            >
              View Live Demo
              <ExternalLink size={16} />
            </Button>
          </div>

          <div>
            {design.screenshots && (
              <div className="space-y-6">
                <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={design.screenshots[activeImage].url}
                    alt={design.screenshots[activeImage].caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {design.screenshots.map((screenshot, index) => (
                    <button
                      key={index}
                      className={`relative aspect-video rounded-lg overflow-hidden ${
                        index === activeImage ? 'ring-2 ring-blue-500' : ''
                      }`}
                      onClick={() => setActiveImage(index)}
                    >
                      <img
                        src={screenshot.url}
                        alt={screenshot.caption}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  {design.screenshots[activeImage].caption}
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PageDesignDetail;
