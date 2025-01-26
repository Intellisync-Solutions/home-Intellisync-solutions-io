import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Rocket, Layers, TrendingUp } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { TextShimmerWave } from '../../components/features/TextWave';

const TrendyTinaPage: React.FC = () => {
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  const features: Array<{
    icon: React.ComponentType<{ className?: string }>;
    image: string;
    title: string;
    description: string;
  }> = [
    {
      icon: Rocket,
      image: "/images/ContentOptimization.webp",
      title: 'Content Optimization',
      description: 'AI-driven content strategies that maximize engagement and viral potential.'
    },
    {
      icon: Layers,
      image: "/images/AudienceInsights.webp",
      title: 'Audience Insights',
      description: 'Deep analytics to understand audience behavior and preferences.'
    },
    {
      icon: TrendingUp,
      image: "/images/StrategicMarkets.webp",
      title: 'Strategic Markets',
      description: 'Predictive trend analysis for identifying emerging market opportunities.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Trendy Tina - Intellisync AI" 
        description="Your digital marketing maven navigating the ever-changing social landscape" 
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="flex flex-col items-center">
          <img 
            src="/images/TrendyTina.webp" 
            alt="Trendy Tina" 
            className="mx-auto w-48 h-48 object-contain mb-6 rounded-full" 
          />
          <TextShimmerWave
            as="h1"
            className="text-4xl font-bold mb-4 text-white"
            duration={1.5}
            spread={1.2}
          >
            Trendy Tina
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
        <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Trendy Tina?</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            Trendy Tina is more than a marketing tool—she's a digital zeitgeist interpreter. 
            Blending algorithmic precision with creative intuition, Tina helps brands navigate 
            the complex, ever-shifting landscape of social media and digital marketing.
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
              src="https://intellisyncsolutions.io/chat/eF6QKuUuUjfwCOuyf9R0"
              className="w-full h-full border-0"
              onLoad={() => setIsIframeLoading(false)}
              onError={() => {
                setIframeError(true);
                setIsIframeLoading(false);
              }}
              title="Trendy Tina Chat Interface"
            />
          )}
        </div>
      </motion.div>

    </div>
  );
};

export default TrendyTinaPage;
