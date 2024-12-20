import { motion } from 'framer-motion';
import { Sparkles, MessageSquare, Image, Volume2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const aiModels = [
  { id: 'main', label: 'Overview', icon: Sparkles, path: '/ai' },
  { id: 'language', label: 'Language Model', icon: MessageSquare, path: '/ai/models/language' },
  { id: 'vision', label: 'Vision Model', icon: Image, path: '/ai/models/vision' },
  { id: 'audio', label: 'Audio Model', icon: Volume2, path: '/ai/models/audio' }
];

const AIModelNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 space-y-4">
      {aiModels.map((model) => (
        <div
          key={model.id}
          className="group relative flex items-center"
          onMouseEnter={() => {
            const tooltip = document.getElementById(`tooltip-${model.id}`);
            if (tooltip) tooltip.style.opacity = '1';
          }}
          onMouseLeave={() => {
            const tooltip = document.getElementById(`tooltip-${model.id}`);
            if (tooltip) tooltip.style.opacity = '0';
          }}
        >
          <motion.button
            className={`w-3 h-3 rounded-full border border-primary/20 transition-colors ${
              currentPath === model.path ? 'bg-primary' : 'bg-primary/10'
            }`}
            onClick={() => {
              if (model.id === 'main') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
              navigate(model.path);
            }}
          />
          <div
            id={`tooltip-${model.id}`}
            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 transition-opacity"
          >
            <div className="flex items-center gap-2 rounded-lg bg-background/80 backdrop-blur-sm px-3 py-2 shadow-lg border border-border">
              <model.icon className="w-4 h-4 text-primary" />
              <span className="text-sm whitespace-nowrap">{model.label}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AIModelNav;
