import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Puzzle, Star, Smile } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { TextShimmerWave } from '../../components/features/TextWave' from '../../components/SEO';

const PlayGroundPage: React.FC = () => {
  const features = [
    {
      icon: Puzzle,
      title: 'Interactive Learning',
      description: 'Gamified educational experiences that make learning fun and engaging.'
    },
    {
      icon: Star,
      title: 'Creative Challenges',
      description: 'Adaptive puzzles and activities that spark imagination and problem-solving skills.'
    },
    {
      icon: Smile,
      title: 'Emotional Intelligence',
      description: 'Playful scenarios that develop social and emotional learning for children.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="PlayGround - Intellisync AI" 
        description="Your child's digital playground for learning, creativity, and fun" 
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="flex flex-col items-center">
          <Gamepad2 className="mx-auto w-24 h-24 text-white mb-6" />
          <TextShimmerWave
            as="h1"
            className="text-4xl font-bold mb-4 text-white"
            duration={1.5}
            spread={1.2}
          >
            Play Ground
          </TextShimmerWave>
        </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            className="bg-card border border-border/20 rounded-xl p-6 text-center"
          >
            <feature.icon className="mx-auto w-16 h-16 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 bg-muted/10 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Why Choose PlayGround?</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            PlayGround is more than an educational tool—it's a magical realm where learning 
            meets play. By combining adaptive AI technologies with child-friendly interfaces, 
            PlayGround creates immersive experiences that nurture curiosity, creativity, and 
            emotional intelligence.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <a 
          href="/chat/playground"
          className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
        >
          Start Your Learning Adventure
        </a>
      </div>
    </div>
  );
};

export default PlayGroundPage;
