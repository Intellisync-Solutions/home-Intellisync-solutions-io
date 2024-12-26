import { motion } from 'framer-motion';
import Animation from '../../../features/Animation';
import { StreamingText } from '../../../features/StreamingText';

const HomePageHero = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-purple-50/30 dark:via-blue-950/30 dark:to-purple-950/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-8 pb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Building Personalized Digital Experiences
          </motion.h1>
          
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              <StreamingText 
                text="We build digital dreams." 
                speed={90} 
                delay={500}
                className="block mb-4"
                color="#8B5CF6"
                gradientStart="#3B82F6"
                dynamicColors={['#3B82F6', '#6366F1', '#4299E1', '#8B5CF6', '#6B46C6']}
              />
              <StreamingText 
                text="From Concept to Completion, every step is a Journey toward Innovation." 
                speed={90} 
                delay={1500}
                className="block"
                color="#8B5CF6"
                gradientStart="#3B82F6"
                dynamicColors={['#3B82F6', '#6366F1', '#4299E1', '#8B5CF6', '#6B46C6']}              />
            </p>
          </motion.div>

          <div className="flex justify-center gap-16 mt-16">
            <Animation type="3d-rotate" delay={0.4} duration={0.8}>
              <div className="w-32 h-32 bg-transparent rounded-lg flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">Innovation</span>
                <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">No Exceptions</span>
              </div>
            </Animation>

            <Animation type="3d-rotate" delay={0.6} duration={0.8}>
              <div className="w-32 h-32 bg-transparent rounded-lg flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">Success</span>
                <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">Limitless</span>
              </div>
            </Animation>

            <Animation type="3d-rotate" delay={0.8} duration={0.8}>
              <div className="w-32 h-32 bg-transparent rounded-lg flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">Satisfaction</span>
                <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">Inevitable</span>
              </div>
            </Animation>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePageHero;
