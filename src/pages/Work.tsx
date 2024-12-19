import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and AI-powered product recommendations.',
    image: '/projects/ecommerce.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'AI'],
    link: '#'
  },
  {
    title: 'Healthcare Dashboard',
    description: 'An intuitive dashboard for healthcare professionals to monitor patient data and manage appointments efficiently.',
    image: '/projects/healthcare.jpg',
    tags: ['Vue.js', 'Python', 'D3.js', 'AWS'],
    link: '#'
  },
  {
    title: 'Mobile Banking App',
    description: 'A secure and user-friendly mobile banking application with features like biometric authentication and instant transfers.',
    image: '/projects/banking.jpg',
    tags: ['React Native', 'TypeScript', 'Firebase'],
    link: '#'
  },
  {
    title: 'Real Estate Platform',
    description: 'A comprehensive real estate platform with virtual tours, automated valuations, and advanced property search.',
    image: '/projects/realestate.jpg',
    tags: ['Next.js', 'Three.js', 'PostgreSQL'],
    link: '#'
  },
  {
    title: 'Social Media Analytics',
    description: 'Advanced analytics dashboard for social media managers with AI-powered sentiment analysis and trend prediction.',
    image: '/projects/analytics.jpg',
    tags: ['Angular', 'Python', 'TensorFlow'],
    link: '#'
  },
  {
    title: 'Educational Platform',
    description: 'An interactive learning platform with live collaboration, video courses, and progress tracking.',
    image: '/projects/education.jpg',
    tags: ['React', 'WebRTC', 'Node.js'],
    link: '#'
  }
];

const Work = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          Our Work
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 text-lg text-center max-w-2xl mx-auto mb-12">
          Explore our portfolio of successful projects that showcase our expertise 
          in creating innovative digital solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden rounded-xl aspect-video mb-4">
                  <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="text-white" size={24} />
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
              
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Let's discuss how we can help bring your ideas to life.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium"
          >
            Start a Project
            <ExternalLink size={20} />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
