import { motion } from 'framer-motion';
import { Users, Target, Heart } from 'lucide-react';
import Card from '../components/Card';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          About Us
        </h1>
        
        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg text-center mb-12">
            We are a passionate team dedicated to creating exceptional digital experiences 
            that help businesses thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card
            title="Our Mission"
            description="To empower businesses with innovative digital solutions that drive growth and success."
            icon={<Target size={24} />}
          />
          <Card
            title="Our Team"
            description="A diverse group of experts committed to delivering excellence in every project."
            icon={<Users size={24} />}
          />
          <Card
            title="Our Values"
            description="Integrity, innovation, and customer satisfaction are at the heart of everything we do."
            icon={<Heart size={24} />}
          />
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Our Story
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Founded in 2024, we've been at the forefront of digital innovation, 
            helping businesses transform their online presence. Our journey began 
            with a simple mission: to make exceptional digital experiences accessible 
            to businesses of all sizes.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Ready to Work Together?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Let's create something amazing together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium"
          >
            Get in Touch
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
