import { motion } from 'framer-motion';
import { ExternalLink, Search, X } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PageDesign {
  id: string;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

const pageDesigns: PageDesign[] = [
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard',
    description: 'A modern and intuitive SaaS dashboard design with beautiful UI components and seamless user experience.',
    image: 'https://placehold.co/600x400/6366f1/ffffff?text=SaaS+Dashboard',
    demoUrl: '/work/pages/saas-dashboard',
    category: 'Dashboard',
    tags: ['SaaS', 'Modern', 'Dashboard'],
    featured: true
  },
  {
    id: 'modern-portfolio',
    title: 'Modern Portfolio',
    description: 'A sleek and modern portfolio design for creative professionals, featuring smooth animations and dynamic content loading.',
    image: 'https://placehold.co/600x400/2563eb/ffffff?text=Portfolio+Design',
    demoUrl: '#',
    category: 'Portfolio',
    tags: ['Creative', 'Modern', 'Personal'],
    featured: true
  },
  {
    id: 'e-commerce-landing',
    title: 'E-commerce Landing',
    description: 'High-converting e-commerce landing page with product showcases and seamless checkout integration.',
    image: 'https://placehold.co/600x400/2563eb/ffffff?text=E-commerce+Design',
    demoUrl: '#',
    category: 'E-commerce',
    tags: ['Shop', 'Business', 'Modern']
  },
  {
    id: 'blog-platform',
    title: 'Blog Platform',
    description: 'Modern blog platform design with rich content editing and social sharing features.',
    image: 'https://placehold.co/600x400/2563eb/ffffff?text=Blog+Design',
    demoUrl: '#',
    category: 'Blog',
    tags: ['Content', 'Social', 'Personal']
  },
  {
    id: 'real-estate-listing',
    title: 'Real Estate Listing',
    description: 'Property listing page with advanced search filters and interactive map integration.',
    image: 'https://placehold.co/600x400/2563eb/ffffff?text=Real+Estate+Design',
    demoUrl: '#',
    category: 'Real Estate',
    tags: ['Business', 'Search', 'Map']
  },
  {
    id: 'restaurant-menu',
    title: 'Restaurant Menu',
    description: 'Digital menu system for restaurants with beautiful food photography and online ordering.',
    image: 'https://placehold.co/600x400/2563eb/ffffff?text=Restaurant+Design',
    demoUrl: '#',
    category: 'Restaurant',
    tags: ['Food', 'Business', 'Menu']
  }
];

const PageShowcase = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = Array.from(new Set(pageDesigns.map(design => design.category)));
  const navigate = useNavigate();

  const filteredDesigns = pageDesigns.filter(design => {
    const matchesSearch = design.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         design.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         design.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = !selectedCategory || design.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const hasDetailPage = (id: string) => {
    return ['modern-portfolio', 'e-commerce-landing', 'saas-dashboard', 'blog-platform'].includes(id);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-200">
          Page Designs
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 text-lg text-center max-w-2xl mx-auto mb-8">
          Explore our collection of modern, responsive page designs crafted for various industries and use cases.
        </p>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search designs..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            )}
          </div>
          <div className="flex gap-2">
            <Button
              variant={!selectedCategory ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Design Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDesigns.map((design) => (
            <motion.div
              key={design.id}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              whileHover={{ y: -5 }}
              layout
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {design.featured && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {design.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {design.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {design.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <Button
                    variant="default"
                    onClick={() => hasDetailPage(design.id) ? navigate(`/work/pages/${design.id}`) : null}
                    disabled={!hasDetailPage(design.id)}
                  >
                    {hasDetailPage(design.id) ? 'View Details' : 'Coming Soon'}
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={() => window.open(design.demoUrl, '_blank')}
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredDesigns.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No designs found matching your criteria.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default PageShowcase;
