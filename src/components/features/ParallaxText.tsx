import React from 'react';
import { motion } from 'framer-motion';

interface ParallaxTextProps {
  children: React.ReactNode;
  baseVelocity?: number;
  className?: string;
}

export const ParallaxText: React.FC<ParallaxTextProps> = ({ 
  children, 
  baseVelocity = 100, 
  className = '' 
}) => {
  const baseX = motion.useTransform(
    motion.useMotionValue(0), 
    [0, 1], 
    [0, baseVelocity]
  );

  return (
    <motion.div 
      style={{ x: baseX }}
      className={`parallax-text ${className}`}
    >
      {children}
    </motion.div>
  );
};
