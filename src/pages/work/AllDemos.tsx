import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button/button';
import { CodeIcon, LayoutGridIcon, FormInputIcon, NavigationIcon } from 'lucide-react';

const demoCategories = [
  {
    title: 'Button Demos',
    description: 'Interactive and stylish button components',
    path: '/work/button-showcases',
    icon: CodeIcon,
  },
  {
    title: 'Card Demos',
    description: 'Versatile and beautiful card layouts',
    path: '/work/card-showcase',
    icon: LayoutGridIcon,
  },
  {
    title: 'Form Demos',
    description: 'Advanced form input components',
    path: '/work/form-showcase',
    icon: FormInputIcon,
  },
  {
    title: 'Navigation Demos',
    description: 'Modern navigation component designs',
    path: '/work/navigation-showcase',
    icon: NavigationIcon,
  }
];

const AllDemos: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <SEO 
        title="IntelliSync - All Component Demos" 
        description="Explore our comprehensive collection of UI component demos" 
      />
      
      <div className="container mx-auto max-w-6xl">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
        >
          Component Showcase
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {demoCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
              className="bg-card border border-border/20 rounded-xl p-6 hover:shadow-xl transition-all group"
            >
              <div className="flex items-center mb-4">
                <category.icon 
                  className="w-10 h-10 text-primary mr-4 group-hover:rotate-6 transition-transform" 
                />
                <h2 className="text-2xl font-semibold text-foreground">
                  {category.title}
                </h2>
              </div>
              
              <p className="text-muted-foreground mb-6">
                {category.description}
              </p>
              
              <Link to={category.path}>
                <Button variant="outline" className="w-full">
                  Explore {category.title}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllDemos;
