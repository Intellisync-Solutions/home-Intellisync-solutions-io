import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Dumbbell, Mic2 } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { TextShimmerWave } from '../../components/features/TextWave';

const CourtsideClaraPage: React.FC = () => {
  const features = [
    {
      icon: Trophy,
      image: "/images/PerformanceAnalytics.webp",
      title: 'Performance Analytics',
      description: 'Advanced statistical analysis and performance tracking for athletes and teams.'
    },
    {
      icon: Dumbbell,
      image: "/images/FitnessCoaching.webp",
      title: 'Fitness Coaching',
      description: 'Personalized training strategies and adaptive workout recommendations.'
    },
    {
      icon: Mic2,
      image: "/images/SportsCommentary.webp",
      title: 'Sports Commentary',
      description: 'Real-time game insights, strategic breakdowns, and engaging sports narratives.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="CourtSide Clara - Intellisync AI" 
        description="Your dynamic sports analyst and fitness companion" 
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="flex flex-col items-center">
          <img 
            src="/images/CourtsideSarah.webp" 
            alt="Courtside Clara" 
            className="mx-auto w-48 h-48 object-contain mb-6 rounded-full" 
          />
          <TextShimmerWave
            as="h1"
            className="text-4xl font-bold mb-4 text-white"
          >
            Courtside Clara
          </TextShimmerWave>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            className="bg-card border border-border/20 rounded-xl p-6 text-center"
          >
            <img 
              src={feature.image} 
              alt={feature.title} 
              className="mx-auto w-24 h-24 object-cover mb-4 rounded-full" 
            />
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 bg-muted/10 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Why Choose CourtSide Clara?</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            CourtSide Clara isn't just another sports AI—she's your personal sports ecosystem. 
            From live game commentary to personalized fitness strategies, Clara brings the energy 
            of a top-tier sports commentator combined with the precision of a professional trainer.
          </p>
        </div>
      </div>

      <div className="mt-12 w-full max-w-4xl mx-auto">
        <iframe 
          src="https://intellisyncsolutions.io/chat/gatRXMV8grGFLKYwoKDs"
          className="w-full h-[600px] rounded-xl border border-border/20 shadow-lg"
          title="CourtSide Clara Chat"
          allowFullScreen
        />
      </div>

      <div className="text-center mt-12">
        <a 
          href="/chat/courtside-clara"
          className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
        >
          Start Your Sports Journey with Clara
        </a>
      </div>
    </div>
  );
};

export default CourtsideClaraPage;
