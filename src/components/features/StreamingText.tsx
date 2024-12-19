import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StreamingTextProps {
  text: string;
  speed?: number; // milliseconds per character
  className?: string;
  onComplete?: () => void;
  cursor?: boolean;
  delay?: number; // initial delay before starting
}

const StreamingText = ({
  text,
  speed = 900,
  className = '',
  onComplete,
  cursor = true,
  delay = 500
}: StreamingTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;

    // Reset state when text changes
    setDisplayedText('');
    setIsComplete(false);
    currentIndex = 0;

    // Initial delay before starting
    timeout = setTimeout(() => {
      const streamText = () => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;

          if (currentIndex <= text.length) {
            timeout = setTimeout(streamText, speed);
          } else {
            setIsComplete(true);
            onComplete?.();
          }
        }
      };

      streamText();
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay, onComplete]);

  return (
    <span className={`inline-block ${className}`}>
      {displayedText}
      <AnimatePresence>
        {cursor && !isComplete && (
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            className="inline-block w-[2px] h-[1.2em] bg-current ml-[2px] align-middle"
          />
        )}
      </AnimatePresence>
    </span>
  );
};

export { StreamingText };
