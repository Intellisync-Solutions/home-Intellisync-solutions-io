import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CpuIcon, MonitorIcon, Loader2Icon } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { TextShimmerWave } from '../../components/features/TextWave';

const ByteGuruPage: React.FC = () => {
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  const features: Array<{
    icon: React.ComponentType<{ className?: string }>;
    image: string;
    title: string;
    description: string;
  }> = [
    {
      icon: CpuIcon,
      image: "/images/CodingCompanion.webp",
      title: 'Coding Companion',
      description: 'Instant debugging, code optimization, and programming language tutorials.'
    },
    {
      icon: MonitorIcon,
      image: "/images/LearningHub.webp",
      title: 'Learning Hub',
      description: 'Interactive coding courses, project-based learning, and skill development resources.'
    },
    {
      icon: Loader2Icon,
      image: "/images/TechInsights.webp",
      title: 'Tech Insights',
      description: 'Latest programming trends, technology updates, and industry insights.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="ByteGuru - Intellisync AI" 
        description="Your tech-savvy companion for coding, gadgets, and digital innovation" 
      />
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="flex flex-col items-center">
          <img 
            src="/images/ByteGuru.webp" 
            alt="Byte Guru" 
            className="mx-auto w-48 h-48 object-contain mb-6 rounded-full" 
          />
          <TextShimmerWave 
            as="h1"
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent/80"
            duration={1.5}
            spread={1.2}
          >
            ByteGuru
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
        <h2 className="text-2xl font-bold mb-4 text-center">Why Choose ByteGuru?</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            ByteGuru isn't just another tech assistant—it's your personal gateway to the digital universe. 
            With a perfect blend of technical expertise and nerdy humor, ByteGuru transforms complex 
            technological concepts into engaging, understandable content for tech enthusiasts and novices alike.
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
              <Loader2Icon className="w-8 h-8 text-accent animate-spin" />
            </div>
          )}
          {iframeError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-card">
              <p className="text-red-500 mb-2">Failed to load chat interface</p>
            </div>
          ) : (
            <iframe
              src="https://intellisyncsolutions.io/chat/l0zS6vrIPdnd7hkPOQFV"
              className="w-full h-full border-0"
              onLoad={() => setIsIframeLoading(false)}
              onError={() => {
                setIframeError(true);
                setIsIframeLoading(false);
              }}
              title="ByteGuru Chat Interface"
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ByteGuruPage;
