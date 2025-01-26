import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Moon, Wind, Loader2 } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { TextShimmerWave } from '../../components/features/TextWave';

const CoachCalmPage: React.FC = () => {
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  const features = [
    {
      icon: Wind,
      title: 'Mindfulness Guidance',
      description: 'Personalized meditation and breathing exercises tailored to your stress levels.'
    },
    {
      icon: Zap,
      title: 'Energy Management',
      description: 'Strategies for maintaining work-life balance and preventing burnout.'
    },
    {
      icon: Moon,
      title: 'Emotional Wellness',
      description: 'Supportive check-ins and adaptive mental health resources.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Coach Calm - Intellisync AI" 
        description="Your serene guide to mindfulness, wellness, and inner peace" 
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="flex flex-col items-center">
          <img 
            src="/images/CoachCalm.webp" 
            alt="Coach Calm" 
            className="mx-auto w-48 h-48 object-contain mb-6 rounded-full" 
          />
          <TextShimmerWave
            as="h1"
            className="text-4xl font-bold mb-4 text-white"
            duration={1.5}
            spread={1.2}
          >
            Coach Calm
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
            <feature.icon className="mx-auto w-16 h-16 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 bg-muted/10 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Coach Calm?</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            Coach Calm is more than a wellness tool—it's a compassionate digital companion 
            that understands the complexities of mental health. With gentle guidance and 
            scientifically-backed strategies, Coach Calm helps you navigate life's challenges 
            with grace, resilience, and self-compassion.
          </p>
        </div>
      </div>

      {/* Chat Interface */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-12 relative"
      >
        <div className="w-full h-[600px] bg-card border border-border/20 rounded-xl overflow-hidden relative">
          {isIframeLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-card">
              <Loader2 className="w-8 h-8 text-accent animate-spin" />
            </div>
          )}
          {iframeError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-card">
              <div className="text-center">
                <p className="text-red-500 mb-2">Failed to load chat interface</p>
                <button 
                  onClick={() => {
                    setIframeError(false);
                    setIsIframeLoading(true);
                  }}
                  className="text-accent hover:underline"
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : (
            <iframe
              src="https://intellisyncsolutions.io/chat/rzk6oTD9cdueoNNGqjSS"
              className="w-full h-full border-0"
              onLoad={() => setIsIframeLoading(false)}
              onError={() => {
                setIframeError(true);
                setIsIframeLoading(false);
              }}
              title="Coach Calm Chat Interface"
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CoachCalmPage;
