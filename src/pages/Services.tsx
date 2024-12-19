import { motion } from 'framer-motion';
import { Code, Paintbrush, Smartphone, Globe, Database, LineChart } from 'lucide-react';
import Card from '../components/Card';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      icon: <Code size={24} />
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that enhance user experience.',
      icon: <Paintbrush size={24} />
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: <Smartphone size={24} />
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your online visibility and reach more customers.',
      icon: <Globe size={24} />
    },
    {
      title: 'Database Design',
      description: 'Efficient and scalable database solutions for your business needs.',
      icon: <Database size={24} />
    },
    {
      title: 'Analytics',
      description: 'Data-driven insights to help you make informed decisions.',
      icon: <LineChart size={24} />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          Our Services
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 text-lg text-center max-w-2xl mx-auto mb-12">
          We offer a comprehensive range of digital services to help your business 
          succeed in the modern digital landscape.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We can create a tailored solution to meet your specific needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium"
          >
            Contact Us
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
