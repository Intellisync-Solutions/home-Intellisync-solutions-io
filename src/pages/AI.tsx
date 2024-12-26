import { motion, useScroll } from 'framer-motion';
import { Brain, Cpu, Bot, Sparkles, Code2, Network, MessageSquare, Zap, ArrowRight, Play, ChevronRight, Lightbulb, Shield,  Star, Quote, Users} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState, useMemo } from 'react';
import AIModelNav from '../components/AIModelNav';
import { AdvancedInteractiveButton } from './Contact';
import { Link } from 'react-router-dom';
import { StreamingText } from "../components/features/StreamingText"; // Corrected import path

const AI = () => {
  const [isTyping, setIsTyping] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  
  const { scrollYProgress } = useScroll();

  const heroTexts = useMemo(() => [
    "Transforming Ideas into Intelligence",
    "Building Tomorrow's Solutions Today",
    "Where Innovation Meets AI"
  ], []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Advanced algorithms that learn and adapt from data patterns"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Chat Interfaces & Virtual Assistants",
      description: "Intelligent interfaces for seamless interactions"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Integrated Services",
      description: "Platform designs for end-to-end AI solutions that grow with you & your business"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Natural Language Processing",
      description: "Natural Language Processing for deep understanding of human language"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "AI Development",
      description: "Custom AI solutions tailored to your specific needs"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "GPT Builder Platform",
      description: "IntelliSync Solutions' GPT Builder Platform for advanced No-Code AI development & deployment"
    }
  ];

  const showcaseItems = [
    {
      title: "Automatic Web-Scraping",
      description: "Extract knowledge data from your website effortlessly by drag and drop functionality with AI-powered web-scraping.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "Vector Data Base Storage",
      description: "Encryption and security protocols built-in to protect your sensitive data.",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const statistics = [
    { value: '98%', label: 'Model Response Accuracy Rate' },
    { value: '20x', label: 'Faster Decision Processing' },
    { value: '24/7', label: 'Performance Efficiency' },
    { value: '2x', label: 'Return on Investment' },
  ];

  const testimonials = [
    {
      quote: "The AI solutions have transformed how we handle data analysis. It's been a game-changer for our business.",
      author: "",
      role: "",
      rating: 4
    },
    {
      quote: "Implementation was smooth, and the results were immediate. Our efficiency improved dramatically.",
      author: "",
      role: "",
      rating: 4
    },
    {
      quote: "The level of accuracy and speed is unprecedented. Highly recommend their solutions.",
      author: "",
      role: "",
      rating: 4
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
      setIsTyping(true);
      setDisplayText('');
    }, 10000);

    return () => clearInterval(interval);
  }, [heroTexts.length]);

  useEffect(() => {
    if (isTyping) {
      const text = heroTexts[currentTextIndex];
      if (displayText.length < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    }
  }, [isTyping, displayText, currentTextIndex, heroTexts]);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showcaseRef, showcaseInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [demoRef, demoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statisticsRef, statisticsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <AIModelNav />
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden py-32"
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <motion.div
          className="relative z-10 text-center space-y-8 px-4"
          variants={itemVariants}
        >
          <motion.div 
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0], // Bounce effect
            }}
            transition={{ 
              duration: 1, 
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <Sparkles className="w-8 h-8 text-primary" />
          </motion.div>
          
          <motion.div 
            className="relative h-32 mb-4"
            variants={itemVariants}
          >
            <motion.h1 
              key={currentTextIndex}
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 py-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {heroTexts[currentTextIndex]}
            </motion.h1>
          </motion.div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-2">
            Empowering you with cutting-edge AI solutions that drive innovation and transform user experiences.
          </p>

          <motion.div
            className="flex gap-4 justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/contact">
              <AdvancedInteractiveButton 
                variant="primary" 
                size="large" 
                className="flex items-center"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </AdvancedInteractiveButton>
            </Link>

            {/* <AdvancedInteractiveButton 
              variant="secondary" 
              size="large"
            >
              Learn More
            </AdvancedInteractiveButton> */}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Zap className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section
        ref={statisticsRef}
        className="py-16 relative overflow-hidden bg-background/50"
        initial="hidden"
        animate={statisticsInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Grid */}
      <motion.section
        ref={featuresRef}
        className="py-20 px-4 relative bg-background/50"
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-min"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/20 transition-colors group ${
                index === 1 ? 'md:translate-y-12' : ''
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Showcase Section */}
      <motion.section
        ref={showcaseRef}
        className="py-20 px-4 bg-background/50 relative overflow-hidden"
        initial="hidden"
        animate={showcaseInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="absolute left-0 top-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute right-0 bottom-0 w-72 h-72 bg-primary/5 rounded-full blur-2xl -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-left max-w-2xl mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <StreamingText 
                text="Revolutionize" 
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 block"
                speed={100}
              /> Your Business with AI
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Discover how our AI solutions are transforming industries and creating new possibilities.
            </p>
            <motion.div
              className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/20 transition-colors group"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Cpu className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">20x Faster Processing</h3>
                  <p className="text-muted-foreground mb-6">AI algorithms process data at unprecedented speeds, delivering insights in real-time.</p>
                </div>
              </div>
              <div className="relative w-full h-32 mt-4 z-10">
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 300 100" 
                  className="w-full h-full"
                >
                  <motion.path
                    d="M0 80 
                       L60 60 
                       L120 40 
                       L180 45 
                       L240 25 
                       L300 20"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ 
                      duration: 2, 
                      ease: "easeInOut" 
                    }}
                  />
                  {[60, 120, 180, 240, 300].map((x, index) => (
                    <motion.circle 
                      key={x} 
                      cx={x} 
                      cy={[60, 40, 45, 25, 20][index]} 
                      r="3" 
                      fill="hsl(var(--primary))"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        transition: { 
                          delay: index * 0.3,
                          duration: 0.5 
                        }
                      }}
                    />
                  ))}
                </motion.svg>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-12 gap-8"
            variants={containerVariants}
          >
            <motion.div
              className="md:col-span-7 p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all group"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {showcaseItems[0].icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{showcaseItems[0].title}</h3>
              <p className="text-muted-foreground">{showcaseItems[0].description}</p>
            </motion.div>
            
            <motion.div
              className="md:col-span-5 md:translate-y-12"
              variants={containerVariants}
            >
              <motion.div
                className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all group mb-8"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {showcaseItems[1].icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{showcaseItems[1].title}</h3>
                <p className="text-muted-foreground">{showcaseItems[1].description}</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <motion.div
              className="p-6 rounded-2xl bg-card backdrop-blur-sm border border-border hover:border-primary/20 transition-colors group row-span-2 flex flex-col"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Shield className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">No-Code Solutions  </h3>
                  <p className="text-muted-foreground mb-6">Unlocking the power of AI without coding. Copy/Paste IntelliSync generated embed snippets to any website or intranet for both Personal or Business use cases. </p>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <motion.div 
                  className="text-8xl font-black text-primary tracking-tighter text-center w-full bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20 
                  }}
                >
                  
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/20 transition-colors group"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Users className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Enhanced Knowledge Base</h3>
                  <p className="text-muted-foreground mb-6">URL, Domain and Sitemap indexing for enhanced knowledge base. PDF file upload for data ingestion. Text Editor for deeper knowledge base customization </p>
                </div>
              </div>
              <div className="relative w-full h-32 mt-4 z-10">
                <motion.div 
                  className="flex items-center justify-center gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"
                      initial={{ scale: 0, x: -20 }}
                      animate={{ scale: 1, x: 0 }}
                      transition={{ 
                        delay: i * 0.1,
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                      }}
                    >
                      <Users className="w-4 h-4 text-primary" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        ref={testimonialsRef}
        className="py-20 px-4 relative overflow-hidden bg-background/50"
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from the companies that have transformed their operations with our AI solutions.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all group"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <Quote className="w-10 h-10 text-primary/40 mb-4" />
                <p className="text-lg mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Interactive Demo Section */}
      <motion.section
        ref={demoRef}
        className="py-20 px-4 relative bg-background/50"
        initial="hidden"
        animate={demoInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="absolute left-1/4 top-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 transform -translate-y-1/2" />
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border border-primary/20 overflow-hidden"
            variants={itemVariants}
          >
            <div className="grid md:grid-cols-12 items-center">
              <div className="md:col-span-5 p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Experience AI in Action
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Try our interactive demo and witness the power of AI firsthand. See how our technology can transform your data into actionable insights.
                </p>
                <AdvancedInteractiveButton 
                  variant="primary"
                  size="large"
                  className="flex items-center gap-2"
                  onClick={() => {/* Add demo launch logic here */}}
                >
                  <Play className="w-5 h-5" />
                  Launch Demo
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </AdvancedInteractiveButton>
              </div>
              <div className="md:col-span-7 aspect-[4/3] md:aspect-auto md:h-full bg-card/50 backdrop-blur-sm flex items-center justify-center p-8 md:p-12">
                <div className="w-full h-full rounded-xl border border-border bg-background/50 flex items-center justify-center">
                  <p className="text-muted-foreground">Interactive Demo Placeholder</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        ref={ctaRef}
        className="py-20 px-4 bg-background/50 relative overflow-hidden"
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="absolute right-0 top-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 transform -translate-y-1/2" />
        <div className="absolute left-0 bottom-0 w-72 h-72 bg-primary/5 rounded-full blur-2xl -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Image Placeholder */}
            <motion.div 
              className="md:col-span-5 relative"
              variants={itemVariants}
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-1">
                <div className="w-full h-full rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-primary/5 rounded-full blur-2xl" />
                  </div>
                  <div className="relative h-full flex items-center justify-center">
                    <Bot className="w-24 h-24 text-primary/40 group-hover:text-primary/60 transition-colors" />
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </motion.div>

            {/* Content */}
            <motion.div 
              className="md:col-span-7 text-right"
              variants={itemVariants}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Transform<br />Your Future?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl ml-auto">
                Join the AI revolution today. Our team of experts is ready to help you implement cutting-edge AI solutions tailored to your needs.
              </p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-end"
                variants={itemVariants}
              >
                <Link to="/contact">
                  <AdvancedInteractiveButton 
                    variant="primary" 
                    size="large" 
                    className="flex items-center"
                  >
                    Get Started Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </AdvancedInteractiveButton>
                </Link>
                
                {/* <AdvancedInteractiveButton 
                  variant="secondary" 
                  size="large"
                >
                  Schedule a Demo
                </AdvancedInteractiveButton> */}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default AI;