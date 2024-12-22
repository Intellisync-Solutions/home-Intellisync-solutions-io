import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Rocket, Users } from 'lucide-react';
import { AdvancedInteractiveButton } from '../../../pages/Contact';
import { Link } from 'react-router-dom';

export const IntellisyncStory = () => {
  const storyPoints = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Our Vision",
      content: "Revolutionizing digital experiences through innovative AI solutions",
      year: "2020",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "The Journey",
      content: "From startup to industry leader in AI-powered development tools",
      year: "2021",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Growing Community",
      content: "Building a thriving ecosystem of developers and enterprises",
      year: "2022",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-purple-50/30 dark:via-blue-950/30 dark:to-purple-950/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left column - Main content */}
          <div className="lg:w-1/2 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100"
            >
              The Intellisync Story
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 text-lg mb-8"
            >
              From a bold ideas to a global movement, our journey has always been about re-defining what’s possible. We don’t just create tools; we build digital experiences. At Intellisync Solutions, we believe in empowering users to unleash the full potential of A.I. and shape the future through integrated intelligent solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/contact">
                <AdvancedInteractiveButton 
                  variant="primary" 
                  size="large" 
                  className="flex items-center"
                >
                  Join Our Journey
                  <ArrowRight className="w-4 h-4 ml-2" />
                </AdvancedInteractiveButton>
              </Link>
            </motion.div>
          </div>

          {/* Right column - Timeline */}
          <div className="lg:w-1/2 relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
            
            {storyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-12 mb-12 last:mb-0"
              >
                <div className="absolute left-0 w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center">
                  {point.icon}
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">{point.year}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{point.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{point.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
