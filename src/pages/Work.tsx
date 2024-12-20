import { motion } from 'framer-motion';
import { useState } from 'react';
import { WorkFeatures } from '../components/Modals/WorkFeatures';
import { 
  Users, 
  Star, 
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  HeartHandshake,
  Rocket,
  Shield,
  Trophy,
  Target,
  Clock,
  Sparkles
} from 'lucide-react';
import { Heart, Lightbulb } from 'lucide-react';
import { StreamingText } from '../components/features/StreamingText';
import { ScrollAnimation } from '../components/features/ScrollAnimation';

const Work = () => {
  const [selectedFeature, setSelectedFeature] = useState<'process' | 'commitment' | 'expectations' | null>(null);

  const openModal = (feature: 'process' | 'commitment' | 'expectations') => {
    setSelectedFeature(feature);
  };

  const closeModal = () => {
    setSelectedFeature(null);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <ScrollAnimation>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Approach to Excellence
          </h1>
          <StreamingText
            text="At Intellisync Solutions, we believe that every project is more than just technical requirements—it’s a story waiting to be told. By capturing the emotion and purpose behind your vision, we craft solutions that inspire action and create meaningful connections."
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            speed={50}
          />
        </motion.div>
      </ScrollAnimation>

      {/* Values Section */}
      <ScrollAnimation>
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">What Drives Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
              <Lightbulb className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Innovation with Purpose</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We don't just chase the latest trends – we pursue meaningful innovation that creates real value for our clients.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
              <Users className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Personal Connection</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in building lasting relationships with our clients, understanding their vision and becoming true partners in their success.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
              <Target className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Excellence in Delivery</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're committed to delivering solutions that exceed expectations and create lasting impact.
              </p>
            </div>
          </div>
        </motion.section>
      </ScrollAnimation>

      {/* Personal Story Section */}
      <ScrollAnimation>
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-20 bg-gray-50 dark:bg-gray-900 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Heart className="w-8 h-8 text-red-500" />
            The People Behind Intellisync
          </h2>
          
          <div className="space-y-12">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Chris - Founder & CEO</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    As the founder of Intellisync Solutions, I believe in creating technology that makes a difference. 
                    My journey in tech has taught me that the best solutions come from truly understanding our clients' needs 
                    and building lasting relationships.
                  </p>
                </div>
                <div className="md:w-1/3">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl overflow-hidden shadow-lg border border-blue-200/50 dark:border-blue-700/50">
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Photo
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Aimee - The Foundation</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    Behind every successful venture is a strong support system. My wife Aimee has been instrumental in shaping 
                    Intellisync's values of dedication, perseverance, and genuine care for others. Her influence reminds us daily 
                    that business is about making a positive impact in people's lives.
                  </p>
                </div>
                <div className="md:w-1/3">
                  <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl overflow-hidden shadow-lg border border-purple-200/50 dark:border-purple-700/50">
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Photo
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Our Family Values</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    Our daughters, Courtney and Abbey, inspire us to think about the future - not just in terms of technology, 
                    but in terms of creating a better world. Their perspectives remind us to stay curious, innovative, and focused 
                    on what truly matters: making a positive difference in the world.
                  </p>
                </div>
                <div className="md:w-1/3">
                  <div className="aspect-square bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl overflow-hidden shadow-lg border border-green-200/50 dark:border-green-700/50">
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Photo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </ScrollAnimation>

      {/* How We Work Section */}
      <ScrollAnimation>
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">How We Work</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Our Process Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-750 p-8 rounded-xl shadow-lg border border-blue-100 dark:border-gray-700 transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Our Process</h3>
              </div>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300 mb-6">
                <li className="flex items-start">
                  <MessageCircle className="w-5 h-5 mr-3 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <span>Personal discovery sessions to understand your vision</span>
                </li>
                <li className="flex items-start">
                  <HeartHandshake className="w-5 h-5 mr-3 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <span>Deep collaboration that builds lasting partnerships</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 mr-3 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <span>Continuous dialogue and shared innovation</span>
                </li>
                <li className="flex items-start">
                  <Rocket className="w-5 h-5 mr-3 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <span>Growth-focused development that evolves with you</span>
                </li>
              </ul>
              <button
                onClick={() => openModal('process')}
                className="mt-4 flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Our Commitment Card */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-750 p-8 rounded-xl shadow-lg border border-purple-100 dark:border-gray-700 transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                  <Star className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Our Commitment</h3>
              </div>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300 mb-6">
                <li className="flex items-start">
                  <Trophy className="w-5 h-5 mr-3 text-purple-500 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <span>Unwavering dedication to excellence</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 mr-3 text-purple-500 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <span>Solutions crafted with passion and purpose</span>
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 mr-3 text-purple-500 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <span>Innovation driven by genuine understanding</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 mr-3 text-purple-500 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <span>Relationships built on trust and respect</span>
                </li>
                <li className="flex items-start">
                  <Rocket className="w-5 h-5 mr-3 text-purple-500 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <span>Impact that extends beyond technology</span>
                </li>
              </ul>
              <button
                onClick={() => openModal('commitment')}
                className="mt-4 flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-200 group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Your Expectations Card */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-750 p-8 rounded-xl shadow-lg border border-green-100 dark:border-gray-700 transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Your Expectations</h3>
              </div>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300 mb-6">
                <li className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 text-green-500 dark:text-green-400 flex-shrink-0 mt-1" />
                  <span>Transparent journey with clear milestones</span>
                </li>
                <li className="flex items-start">
                  <MessageCircle className="w-5 h-5 mr-3 text-green-500 dark:text-green-400 flex-shrink-0 mt-1" />
                  <span>Proactive communication that anticipates needs</span>
                </li>
                <li className="flex items-start">
                  <HeartHandshake className="w-5 h-5 mr-3 text-green-500 dark:text-green-400 flex-shrink-0 mt-1" />
                  <span>Dedicated support that goes the extra mile</span>
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 mr-3 text-green-500 dark:text-green-400 flex-shrink-0 mt-1" />
                  <span>Solutions that grow with your vision</span>
                </li>
                <li className="flex items-start">
                  <Trophy className="w-5 h-5 mr-3 text-green-500 dark:text-green-400 flex-shrink-0 mt-1" />
                  <span>Partnership that celebrates your success</span>
                </li>
              </ul>
              <button
                onClick={() => openModal('expectations')}
                className="mt-4 flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200 group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </motion.section>
      </ScrollAnimation>
      {selectedFeature && (
        <WorkFeatures
          isOpen={!!selectedFeature}
          closeModal={closeModal}
          feature={selectedFeature}
        />
      )}
    </div>
  );
};

export default Work;
