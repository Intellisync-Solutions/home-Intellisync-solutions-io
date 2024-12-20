import { motion, useScroll } from 'framer-motion';
import { Brain, Cpu, Bot, Sparkles, Code2, Network, MessageSquare, Zap, ArrowRight, Play, ChevronRight, Lightbulb, Shield, Rocket, Star, Quote, Image, Volume2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const AI = () => {
  const navigate = useNavigate();
  const [isTyping, setIsTyping] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [activeSection, setActiveSection] = useState('main');
  
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
      title: "Chatbots & Virtual Assistants",
      description: "Intelligent conversational interfaces for seamless interaction"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Neural Networks",
      description: "Deep learning systems inspired by human brain architecture"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Natural Language Processing",
      description: "Understanding and processing human language naturally"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "AI Development",
      description: "Custom AI solutions tailored to your specific needs"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Automated Systems",
      description: "Smart automation for enhanced efficiency"
    }
  ];

  const showcaseItems = [
    {
      title: "20x Faster Processing",
      description: "Our AI algorithms process data at unprecedented speeds, delivering insights in real-time.",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "99.9% Accuracy",
      description: "Advanced machine learning models ensure exceptional precision in data analysis and predictions.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade encryption and security protocols protect your sensitive data.",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const statistics = [
    { value: '98%', label: 'Accuracy Rate' },
    { value: '2.5x', label: 'Faster Processing' },
    { value: '24/7', label: 'Support Available' },
    { value: '500+', label: 'Active Users' },
  ];

  const testimonials = [
    {
      quote: "The AI solutions have transformed how we handle data analysis. It's been a game-changer for our business.",
      author: "Sarah Chen",
      role: "CTO, TechVision Inc.",
      rating: 5
    },
    {
      quote: "Implementation was smooth, and the results were immediate. Our efficiency improved dramatically.",
      author: "Michael Rodriguez",
      role: "Head of Operations, DataFlow",
      rating: 5
    },
    {
      quote: "The level of accuracy and speed is unprecedented. Highly recommend their solutions.",
      author: "Emma Thompson",
      role: "Data Scientist, AI Labs",
      rating: 5
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
    }, 5000);

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

  const aiModels = [
    { id: 'main', label: 'Overview', icon: Sparkles, path: '/ai' },
    { id: 'language', label: 'Language Model', icon: MessageSquare, path: '/ai/models/language' },
    { id: 'vision', label: 'Vision Model', icon: Image, path: '/ai/models/vision' },
    { id: 'audio', label: 'Audio Model', icon: Volume2, path: '/ai/models/audio' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden"
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
            className="inline-block p-3 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-8 h-8 text-primary" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            {displayText}
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering businesses with cutting-edge AI solutions that drive innovation and transform user experiences.
          </p>

          <motion.div
            className="flex gap-4 justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              Explore Solutions
            </button>
            <button className="px-8 py-3 rounded-full border border-primary/20 hover:bg-primary/10 transition-colors">
              Learn More
            </button>
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
        className="py-16 relative overflow-hidden"
        initial="hidden"
        animate={statisticsInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-7xl mx-auto px-4">
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
        className="py-20 px-4 relative"
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-min"
          variants={containerVariants}
        >
          {features.slice(0, 3).map((feature, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/20 transition-colors group ${
                index === 1 ? 'md:translate-y-12' : ''
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
          {features.slice(3).map((feature, index) => (
            <motion.div
              key={index + 3}
              className={`p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/20 transition-colors group ${
                index === 1 ? 'md:-translate-y-12' : ''
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
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
        className="py-20 px-4 bg-primary/5 relative overflow-hidden"
        initial="hidden"
        animate={showcaseInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="absolute left-0 top-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute right-0 bottom-0 w-72 h-72 bg-primary/5 rounded-full blur-2xl -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-left max-w-2xl mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionize Your Business with AI
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover how our AI solutions are transforming industries and creating new possibilities.
            </p>
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
              
              <motion.div
                className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all group"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {showcaseItems[2].icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{showcaseItems[2].title}</h3>
                <p className="text-muted-foreground">{showcaseItems[2].description}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        ref={testimonialsRef}
        className="py-20 px-4 relative overflow-hidden"
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
        className="py-20 px-4 relative"
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
                <motion.button
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors group"
                  whileHover={{ scale: 1.05 }}
                >
                  <Play className="w-5 h-5" />
                  Launch Demo
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
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
        className="py-20 px-4 bg-primary/5 relative overflow-hidden"
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
                    <div className="w-3/4 h-3/4 bg-primary/5 rounded-full blur-2xl animate-pulse" />
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
                <motion.button
                  className="px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  className="px-8 py-4 rounded-full border border-primary/20 hover:bg-primary/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Schedule a Demo
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Floating Navigation Dots */}
      <motion.div 
        className="fixed right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-4 z-50"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        {aiModels.map((model) => (
          <motion.div
            key={model.id}
            className="group relative"
            whileHover={{ scale: 1.2 }}
          >
            <motion.button
              className={`w-3 h-3 rounded-full border border-primary/20 transition-colors ${
                activeSection === model.id ? 'bg-primary' : 'bg-primary/10'
              }`}
              onClick={() => {
                setActiveSection(model.id);
                if (model.id === 'main') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  navigate(model.path);
                }
              }}
            />
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/20">
                <model.icon className="w-4 h-4 text-primary" />
                <span className="text-sm whitespace-nowrap">{model.label}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default AI;