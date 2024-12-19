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
            Building Digital Excellence
          </motion.h1>
          
          <div className="mb-8">
            <StreamingText
              text="We build digital dreams. From Ideas to Concept each step is a Journey toward Innovation."
              speed={50}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            />
          </div>

          <div className="flex justify-center gap-16 mt-16">
            <Animation type="3d-rotate" delay={0.4} duration={0.8}>
              <div className="w-32 h-32 bg-transparent rounded-lg flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">100+</span>
                <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">Projects</span>
              </div>
            </Animation>

            <Animation type="3d-rotate" delay={0.6} duration={0.8}>
              <div className="w-32 h-32 bg-transparent rounded-lg flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">100%</span>
                <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">Success</span>
              </div>
            </Animation>

            <Animation type="3d-rotate" delay={0.8} duration={0.8}>
              <div className="w-32 h-32 bg-transparent rounded-lg flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">100%</span>
                <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">Support</span>
              </div>
            </Animation>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePageHero;
