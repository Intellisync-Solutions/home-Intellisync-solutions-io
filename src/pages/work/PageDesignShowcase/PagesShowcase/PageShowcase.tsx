import { ExternalLink } from 'lucide-react';
import { Button } from '../../../../components/ui/button';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '../../../../components/ui/badge';
import MenuBar from '../../../../components/Navigation/MenuBar';
import Animation from '../../../../components/features/Animation';

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
    tags: ['Content', 'Social', 'Personal'],
    featured: true
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
  },
  {
    id: 'business-one',
    title: 'Intellisync Solutions - BusinessOne',
    description: 'A comprehensive suite of tools and calculators designed to assist entrepreneurs and seasoned business professionals in making data-driven decisions.',
    image: '/projects/business-one.png',
    demoUrl: '/work/business-one',
    category: 'Business',
    tags: ['React', 'TypeScript', 'Firebase'],
    featured: true
  },
  {
    id: 'serenity',
    title: 'Serenity',
    description: 'An interactive mental health and wellness platform featuring mood tracking, daily affirmations, journaling, guided meditation, and sleep tracking.',
    image: '/projects/serenity.png',
    demoUrl: '/work/serenity',
    category: 'Health & Wellness',
    tags: ['React', 'TypeScript', 'Node.js', 'Firebase'],
    featured: true
  },
  {
    id: 'teen-minds-matter',
    title: 'Teen Minds Matter',
    description: 'A social networking platform for youth mental health, featuring community groups, peer-led tutoring, and gamified interactions for ages 10-18.',
    image: '/projects/teen-minds.png',
    demoUrl: '/work/teen-minds-matter',
    category: 'Social',
    tags: ['React', 'TypeScript', 'Supabase', 'Node.js'],
    featured: true
  },
  {
    id: 'education-one',
    title: 'Intellisync Solutions - EducationOne',
    description: 'A comprehensive AI-powered educational platform featuring expert AI tutors across multiple subjects, with specialized dashboards for students, parents, teachers, and administrators.',
    image: '/projects/education-one.png',
    demoUrl: '/work/education-one',
    category: 'Education',
    tags: ['React', 'TypeScript', 'Node.js', 'Firebase', 'OpenAI'],
    featured: true
  },
  {
    id: 'time-capsule',
    title: 'Intellisync Solutions - TimeCapsule',
    description: 'AI-enhanced photo sharing platform with smart albums, family sharing, and interactive AI storytelling for preserving and sharing memories.',
    image: '/projects/time-capsule.png',
    demoUrl: '/work/time-capsule',
    category: 'Media',
    tags: ['React', 'TypeScript', 'Node.js', 'Firebase', 'OpenAI'],
    featured: true
  },
  {
    id: 'personal-one',
    title: 'Intellisync Solutions - PersonalOne',
    description: 'A comprehensive personal finance platform offering advanced tools for wealth management, investment planning, tax projections, and retirement planning.',
    image: '/projects/personal-one.png',
    demoUrl: '/work/personal-one',
    category: 'Finance',
    tags: ['React', 'TypeScript', 'Node.js', 'Firebase', 'OpenAI'],
    featured: true
  }
];

const PageShowcase = () => {
  const navigate = useNavigate();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter designs based on selected filters and search
  const filteredDesigns = useMemo(() => {
    return pageDesigns.filter(design => {
      // Filter by search query
      const matchesSearch = searchQuery === '' || 
        design.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        design.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        design.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // Filter by selected filters
      const matchesFilters = selectedFilters.length === 0 || 
        selectedFilters.some(filter => 
          design.category.toLowerCase() === filter.toLowerCase() ||
          design.tags.some(tag => tag.toLowerCase() === filter.toLowerCase())
        );

      return matchesSearch && matchesFilters;
    });
  }, [selectedFilters, searchQuery]);

  const hasDetailPage = (id: string) => {
    return [
      'modern-portfolio',
      'saas-dashboard',
      'blog-platform',
      'business-one',
      'serenity',
      'teen-minds-matter',
      'education-one',
      'time-capsule',
      'personal-one'
    ].includes(id);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container mx-auto">
          <MenuBar
            onFilterChange={setSelectedFilters}
            searchValue={searchQuery}
            onSearch={setSearchQuery}
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredDesigns.length} of {pageDesigns.length} designs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDesigns.map((design) => (
            <div
              key={design.id}
              className="group relative bg-card rounded-lg overflow-visible border shadow-sm hover:shadow-md transition-shadow"
            >
              {design.featured && (
                <div className="absolute -top-3 inset-x-0 flex justify-center" style={{ zIndex: 50 }}>
                  <Animation type="pulse" delay={0.1}>
                    <div className="rounded-full px-4 py-1.5 text-xs font-semibold bg-gradient-to-r from-primary/90 to-primary text-primary-foreground border-2 border-background shadow-lg shadow-primary/20 animate-glow">
                      ✨ Featured
                    </div>
                  </Animation>
                </div>
              )}
              {!hasDetailPage(design.id) && (
                <div className="absolute -top-3 right-3" style={{ zIndex: 50 }}>
                  <Animation type="fade" delay={0.2}>
                    <div className="rounded-full px-4 py-1 text-xs font-medium bg-muted text-muted-foreground border border-background">
                      Coming Soon
                    </div>
                  </Animation>
                </div>
              )}
              <div className="overflow-hidden rounded-lg">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    {hasDetailPage(design.id) ? (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => navigate(`/work/pages/${design.id}`)}
                      >
                        View Details
                      </Button>
                    ) : null}
                    {design.demoUrl && (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => window.open(design.demoUrl, '_blank')}
                      >
                        Live Demo <ExternalLink className="w-4 h-4 ml-1" />
                      </Button>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{design.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {design.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{design.category}</Badge>
                    {design.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDesigns.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No designs found matching your criteria.
            </p>
            <Button
              variant="link"
              onClick={() => {
                setSearchQuery('');
                setSelectedFilters([]);
              }}
              className="mt-2"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageShowcase;
