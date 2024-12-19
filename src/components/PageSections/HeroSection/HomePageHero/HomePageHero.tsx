import { motion } from 'framer-motion';
import { StreamingText } from '../../../features/StreamingText';
import { Button } from '../../../ui/button';
import { ArrowRight } from 'lucide-react';

const HomePageHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(66,108,245,0.1),rgba(66,108,245,0))]" />
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight lg:leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Transform Your Digital Presence
              </span>
            </h1>
          </motion.div>

          {/* Subheading with StreamingText */}
          <div className="mb-8">
            <StreamingText
              text="We create modern, responsive, and user-friendly digital experiences that help you stand out."
              speed={50}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed"
            />
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button
              variant="default"
              size="lg"
              className="group"
              onClick={() => window.location.href = '/contact'}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/work'}
            >
              View Our Work
            </Button>
          </motion.div>

          {/* Stats or Trust Indicators */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">100+</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-400">95%</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Client Satisfaction</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">24/7</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Support Available</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
