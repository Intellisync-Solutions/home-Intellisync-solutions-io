import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative lg:sticky bottom-0 z-40 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-wrap justify-between items-start gap-4 text-sm">
          <div className="flex-shrink-0">
            <span className="font-semibold text-gray-800 dark:text-gray-200">Intellisync Solutions</span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-gray-600 dark:text-gray-400">Creating amazing digital experiences</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Home</Link>
              <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">About</Link>
              <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Services</Link>
              <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Contact</Link>
            </div>
            
            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                <Github size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                <Twitter size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center text-xs text-gray-600 dark:text-gray-400">
          <p>{new Date().getFullYear()} Intellisync Solutions. All rights reserved.</p>
          <a 
            href="https://intellisync.solutions" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Powered by Intellisync Solutions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
