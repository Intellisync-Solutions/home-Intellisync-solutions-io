import React, { CSSProperties } from 'react';

interface BorderTrailProps {
  size?: number;
  style?: CSSProperties;
}

export function BorderTrail({ 
  size = 100, 
  style 
}: BorderTrailProps) {
  return (
    <div 
      className="absolute inset-0 z-0 overflow-hidden rounded-md" 
      style={{
        ...style,
        width: `${size}%`,
        height: `${size}%`,
        top: `${(100 - size) / 2}%`,
        left: `${(100 - size) / 2}%`,
      }}
    >
      <div className="absolute inset-0 border-4 border-white/50 opacity-50 animate-border-trail rounded-md"></div>
    </div>
  );
}
