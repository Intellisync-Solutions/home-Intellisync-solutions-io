import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Lightbulb, Target, Loader2 } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { TextShimmerWave } from '../../components/features/TextWave';

const ProfessorPixel: React.FC = () => {
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  const features: Array<{
    icon: React.ComponentType<{ className?: string }>;
    image: string;
    title: string;
    description: string;
  }> = [
    {
      icon: Brain,
      image: "/images/AdaptiveLearning.webp",
      title: 'Adaptive Learning',
      description: 'Personalized educational content that adapts to each student\'s learning pace and style.'
    },
    {
      icon: Lightbulb,
      image: "/images/InteractiveExplainations.webp",
      title: 'Interactive Explanations',
      description: 'Complex concepts broken down into engaging, easy-to-understand visual narratives.'
    },
    {
      icon: Target,
      image: "/images/Skilldevelopment.webp",
      title: 'Targeted Skill Development',
      description: 'Focused learning modules that help students master specific educational objectives.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Professor Pixel - Intellisync AI" 
        description="Your AI-powered educational companion transforming learning experiences" 
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="flex flex-col items-center">
          <img 
            src="/images/ProfessorPixel.webp" 
            alt="Professor Pixel" 
            className="mx-auto w-48 h-48 object-contain mb-6 rounded-full" 
          />
          <TextShimmerWave 
            as="h1" 
            className="text-4xl font-bold mb-4 text-white"
            duration={1.5}
            spread={1.2}
          >
            Professor Pixel
          </TextShimmerWave>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The Edutainment Wizard transforming complex topics into engaging, pixel-perfect learning experiences
        </p>
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
        <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Professor Pixel?</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            Professor Pixel isn't just another educational tool—it's a personalized learning companion 
            that understands the unique challenges of modern education. By combining adaptive learning 
            technologies with an engaging, witty personality, Professor Pixel makes learning not just 
            accessible, but genuinely enjoyable.
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
              src="https://intellisyncsolutions.io/chat/oxfPz2wqYGVmzzNoqv9u"
              className="w-full h-full border-0"
              onLoad={() => setIsIframeLoading(false)}
              onError={() => {
                setIframeError(true);
                setIsIframeLoading(false);
              }}
              title="Professor Pixel Chat Interface"
            />
          )}
        </div>
      </motion.div>

      
    </div>
  );
};

export default ProfessorPixel;
