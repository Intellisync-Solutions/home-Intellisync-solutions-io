import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Award, 
  Rocket, 
  Clock, 
  Briefcase, 
  Star, 
  Users,
  MessageCircleMore
} from 'lucide-react';
import { ScrollAnimation } from '../components/features/ScrollAnimation';
import ContactFormModal from '../components/Modals/ContactFormModal';

// Advanced Interactive Button Component
export const AdvancedInteractiveButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  icon?: React.ElementType;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}> = ({ children, onClick, variant = 'primary', icon: Icon, size = 'medium', className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 10 
        }
      }}
      whileTap={{ 
        scale: 0.95,
        rotate: [0, -2, 2, -2, 2, 0],
        transition: {
          duration: 0.4,
          type: "tween"
        }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 10 
      }}
      className={`
        ${variant === 'primary' 
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
          : 'bg-white text-blue-600 border-2 border-blue-600 dark:bg-gray-800 dark:text-white dark:border-white'}
        ${size === 'small' ? 'px-2 py-1 text-sm' 
          : size === 'medium' ? 'px-4 py-2' 
          : 'px-6 py-3 text-lg'}
        rounded-full transition-all duration-300 ease-in-out
        hover:shadow-2xl
        flex items-center justify-center space-x-2
        ${className}
      `}
      onClick={onClick}
    >
      {/* Animated Text */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isHovered 
          ? {
              opacity: 1,
              x: [-2, 2, -2, 2, 0],
              transition: {
                duration: 0.5,
                delay: 0.2,
                x: {
                  duration: 0.4,
                  repeat: Infinity,
                  repeatDelay: 0.1,
                  ease: "easeInOut"
                }
              }
            }
          : { opacity: 1 }
        }
        className="relative z-10 flex items-center justify-center"
      >
        {Icon && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mr-2"
          >
            <Icon size={20} />
          </motion.div>
        )}
        {children}
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/30 origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.span>
    </motion.button>
  );
};

const ContactHero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const connectWords = "Let's Connect & Create".split(' ');

  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 relative px-4"
      >
        {/* Bouncing Message Icon */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            transition: {
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="flex justify-center mb-6"
        >
          <MessageCircleMore 
            size={64} 
            className="text-blue-500 dark:text-blue-400 opacity-80" 
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100"
        >
          <AnimatePresence mode="wait">
            {connectWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2 
                }}
                className={`inline-block mr-2 ${
                  word === "Connect" 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" 
                    : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </AnimatePresence>
        </motion.h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">
          Transform ideas into reality. Reach out and let's spark a conversation that could change everything.
        </p>
        
        <div className="flex justify-center space-x-4">
          <AdvancedInteractiveButton 
            onClick={() => setIsModalOpen(true)} 
            icon={Send}
            size="large"
          >
            Get in Touch
          </AdvancedInteractiveButton>
        </div>
      </motion.div>
      
      {/* Subtle Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-500/10 dark:bg-blue-300/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 dark:bg-purple-300/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -15, 15, 0],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      </div>

      <ContactFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

const ContactCTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ctaWords = "Ready To Explore Possibilities".split(' ');

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100"
          >
            <AnimatePresence mode="wait">
              {ctaWords.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.2 
                  }}
                  className={`inline-block mr-2 ${
                    word === "Possibilities" 
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" 
                      : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </AnimatePresence>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8"
          >
            Your vision, our expertise – let's create something extraordinary together.
          </motion.p>

          <div className="flex justify-center">
            <AdvancedInteractiveButton 
              onClick={() => setIsModalOpen(true)}
              icon={Send}
              size="medium"
            >
              Start Your Project
            </AdvancedInteractiveButton>
          </div>
        </div>
      </div>

      <ContactFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

const StaggeredAsymmetricalLayout: React.FC = () => {
  const whyChooseUsCards = [
    {
      icon: <Award size={48} className="text-blue-500" />,
      title: "Award-Winning Solutions",
      description: "Recognized for innovative design and cutting-edge technology.",
      testimonial: {
        quote: "Their innovative approach completely transformed our digital strategy, setting new industry standards.",
        name: "Sarah Johnson",
        role: "CEO, TechInnovate",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg"
      }
    },
    {
      icon: <Rocket size={48} className="text-purple-500" />,
      title: "Rapid Delivery",
      description: "Efficient project management with quick turnaround times.",
      testimonial: {
        quote: "They delivered our complex SaaS platform ahead of schedule, which was crucial for our product launch.",
        name: "Michael Chen",
        role: "Founder, StartupSync",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      }
    },
    {
      icon: <Clock size={48} className="text-green-500" />,
      title: "24/7 Support",
      description: "Dedicated support team always ready to assist you.",
      testimonial: {
        quote: "Their round-the-clock support has been a game-changer. We always feel supported, no matter the time zone.",
        name: "Emily Rodriguez",
        role: "Marketing Director, GlobalBrand",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
      }
    },
    {
      icon: <Users size={48} className="text-orange-500" />,
      title: "Client-Centric Approach",
      description: "Tailored solutions that align with your unique business goals.",
      testimonial: {
        quote: "They didn't just build a website, they understood our vision and crafted a solution that truly represents our brand.",
        name: "David Kim",
        role: "CTO, InnovationLabs",
        avatar: "https://randomuser.me/api/portraits/men/46.jpg"
      }
    }
  ];

  return (
    <div className="relative py-16 overflow-hidden bg-blue-50/10 dark:bg-gray-950/5 backdrop-blur-sm">
      <div className="container mx-auto px-4 relative">
        <div className="space-y-16 relative">
          {/* Why Choose Us with Paired Testimonials */}
          {whyChooseUsCards.map((item, index) => (
            <div 
              key={index} 
              className={`
                grid grid-cols-1 md:grid-cols-2 gap-8 items-center
                ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
              `}
            >
              {/* Why Choose Us Card */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 0.8 
                }}
                viewport={{ once: true }}
                className={`
                  bg-white dark:bg-gray-900 
                  rounded-3xl 
                  shadow-2xl 
                  hover:shadow-[0_45px_70px_-20px_rgba(0,0,0,0.2)] 
                  dark:hover:shadow-[0_45px_70px_-20px_rgba(255,255,255,0.1)]
                  transition-all duration-300
                  p-8 
                  ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}
                  w-full md:w-11/12 lg:w-10/12 xl:w-9/12
                  z-10 relative
                  transform hover:-translate-y-3 hover:scale-[1.02]
                `}
              >
                <div className="flex items-center mb-4">
                  {item.icon}
                  <h3 className="ml-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {item.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>

              {/* Paired Testimonial */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 0.8,
                  delay: 0.3
                }}
                viewport={{ once: true }}
                className={`
                  bg-white dark:bg-gray-900
                  rounded-3xl 
                  shadow-2xl 
                  hover:shadow-[0_45px_70px_-20px_rgba(0,0,0,0.2)] 
                  dark:hover:shadow-[0_45px_70px_-20px_rgba(255,255,255,0.1)]
                  transition-all duration-300
                  p-8 
                  ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}
                  w-full md:w-11/12 lg:w-10/12 xl:w-9/12
                  relative z-20
                  transform hover:-translate-y-3 hover:scale-[1.02]
                `}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={item.testimonial.avatar} 
                    alt={item.testimonial.name} 
                    className="w-16 h-16 rounded-full mr-4 border-4 border-white dark:border-gray-800 object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                      {item.testimonial.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="italic text-gray-700 dark:text-gray-300 text-xl">
                  "{item.testimonial.quote}"
                </p>
              </motion.div>
            </div>
          ))}

          {/* Project Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.8,
              delay: 0.6 
            }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-3xl shadow-2xl hover:shadow-[0_45px_70px_-20px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_45px_70px_-20px_rgba(255,255,255,0.1)] transition-all duration-300 p-12 mt-8 relative z-30 w-full transform hover:-translate-y-3 hover:scale-[1.02]"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { 
                  icon: <Briefcase size={48} className="text-blue-500 mx-auto mb-4" />, 
                  number: "50+", 
                  label: "Projects Completed" 
                },
                { 
                  icon: <Users size={48} className="text-purple-500 mx-auto mb-4" />, 
                  number: "100+", 
                  label: "Happy Clients" 
                },
                { 
                  icon: <Star size={48} className="text-yellow-500 mx-auto mb-4" />, 
                  number: "4.9", 
                  label: "Average Rating" 
                }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="transform transition-all hover:scale-105 hover:brightness-110"
                >
                  {stat.icon}
                  <h3 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Subtle Decorative Background Elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-50/20 dark:bg-blue-900/5 rounded-full blur-3xl z-0" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-50/20 dark:bg-purple-900/5 rounded-full blur-3xl z-0" />
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <main className="min-h-screen pt-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/10 to-purple-50/10 dark:via-blue-950/10 dark:to-purple-950/10" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
      
      <ScrollAnimation>
        <div className="relative z-10">
          <ContactHero />
          <ContactCTA />
          <StaggeredAsymmetricalLayout />
        </div>
      </ScrollAnimation>
    </main>
  );
};

export default Contact;
