import { motion } from 'framer-motion';
import BasicCards from './components/BasicCards';
import InteractiveCards from './components/InteractiveCards';
import MediaCards from './components/MediaCards';
import LayoutCards from './components/LayoutCards';

const CardShowcase = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          Card Designs
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 text-lg text-center max-w-2xl mx-auto mb-12">
          Explore our collection of versatile and beautiful card components designed 
          for various use cases and content types.
        </p>

        <div className="space-y-16">
          <BasicCards />
          <InteractiveCards />
          <MediaCards />
          <LayoutCards />
        </div>
      </motion.div>
    </div>
  );
};

export default CardShowcase;
