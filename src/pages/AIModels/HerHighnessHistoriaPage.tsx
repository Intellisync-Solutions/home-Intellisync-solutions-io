import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, BookOpen, Clock, Loader2 } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { TextShimmerWave } from '../../components/features/TextWave'  

const HerHighnessHistoriaPage: React.FC = () => {
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  const features = [
    {
      icon: Globe,
      title: 'Cultural Exploration',
      description: 'Deep-dive insights into global historical contexts and cultural narratives.'
    },
    {
      icon: BookOpen,
      title: 'Living History',
      description: 'Contextualizing current events through rich historical perspectives.'
    },
    {
      icon: Clock,
      title: 'Temporal Storytelling',
      description: 'Interactive timelines and narrative-driven historical explanations.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Her Highness Historia - Intellisync AI" 
        description="Your regal guide through the intricate tapestry of human history" 
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="flex flex-col items-center">
          <img 
            src="/images/HerHighness.webp" 
            alt="Her Highness Historia" 
            className="mx-auto w-48 h-48 object-contain mb-6 rounded-full" 
          />
          <TextShimmerWave
            as="h1"
            className="text-4xl font-bold mb-4 text-white"
            duration={1.5}
            spread={1.2}
          >
            Her Highness Historia
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
        <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Her Highness Historia?</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            More than a historical database, Her Highness Historia is a storyteller who breathes life 
            into historical narratives. With a regal tone and encyclopedic knowledge, she transforms 
            historical facts into engaging stories that connect past, present, and future.
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
              src="https://intellisyncsolutions.io/chat/VamKkqiZ5DOEiXaYvP3d"
              className="w-full h-full border-0"
              onLoad={() => setIsIframeLoading(false)}
              onError={() => {
                setIframeError(true);
                setIsIframeLoading(false);
              }}
              title="Her Highness Historia Chat Interface"
            />
          )}
        </div>
      </motion.div>

       
    </div>
  );
};

export default HerHighnessHistoriaPage;
