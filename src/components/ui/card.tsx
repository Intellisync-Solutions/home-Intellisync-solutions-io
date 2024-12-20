import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardRootProps {
  className?: string;
  children?: ReactNode;
}

interface CardHeaderProps {
  className?: string;
  children?: ReactNode;
}

interface CardTitleProps {
  className?: string;
  children?: ReactNode;
}

interface CardContentProps {
  className?: string;
  children?: ReactNode;
}

const CardRoot = ({ className = '', children }: CardRootProps) => {
  return (
    <motion.div
      className={`p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

const CardHeader = ({ className = '', children }: CardHeaderProps) => {
  return <div className={`space-y-1.5 ${className}`}>{children}</div>;
};

const CardTitle = ({ className = '', children }: CardTitleProps) => {
  return <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>{children}</h3>;
};

const CardContent = ({ className = '', children }: CardContentProps) => {
  return <div className={`mt-4 ${className}`}>{children}</div>;
};

const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Content: CardContent,
});

export default Card;
