import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/Button/button';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, ChevronDown, Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { TextShimmerWave } from './features/TextWave';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);
  const [isGPTStoreDropdownOpen, setIsGPTStoreDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownCloseTimer = useRef<NodeJS.Timeout>();
  const gptStoreDropdownCloseTimer = useRef<NodeJS.Timeout>();

  const handleDropdownClose = () => {
    dropdownCloseTimer.current = setTimeout(() => {
      setIsWorkDropdownOpen(false);
    }, 100);
  };

  const handleGPTStoreDropdownClose = () => {
    gptStoreDropdownCloseTimer.current = setTimeout(() => {
      setIsGPTStoreDropdownOpen(false);
    }, 100);
  };

  const handleDropdownOpen = () => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
    }
    setIsWorkDropdownOpen(true);
  };

  const handleGPTStoreDropdownOpen = () => {
    if (gptStoreDropdownCloseTimer.current) {
      clearTimeout(gptStoreDropdownCloseTimer.current);
    }
    setIsGPTStoreDropdownOpen(true);
  };

  useEffect(() => {
    return () => {
      if (dropdownCloseTimer.current) {
        clearTimeout(dropdownCloseTimer.current);
      }
      if (gptStoreDropdownCloseTimer.current) {
        clearTimeout(gptStoreDropdownCloseTimer.current);
      }
    };
  }, []);

  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 12]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY ? "down" : "up";
    if (latest > 100 && direction === "down") {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
    setLastScrollY(latest);
  });

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleGPTStoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/ai-models', { replace: true });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header 
      style={{ 
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur}px)`
      }}
      animate={{ y: isHeaderVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/10 bg-background/60"
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="relative z-10 group">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <img 
                  src="/images/logo.png" 
                  alt="IntelliSync Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <motion.span 
                  className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80"
                >
                  IntelliSync
                </motion.span>
                <span className="text-xs text-muted-foreground">Solutions</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/ai">AI</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            
            {/* Work Dropdown */}
            <div className="relative group">
              <motion.button 
                className="flex items-center space-x-1 px-3 py-1.5 rounded-md transition-colors hover:bg-accent/50 relative"
                onClick={() => setIsWorkDropdownOpen(!isWorkDropdownOpen)}
                onMouseEnter={handleDropdownOpen}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-sm font-medium">Our Work</span>
                <motion.div
                  animate={{ rotate: isWorkDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={14} className="text-muted-foreground" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {isWorkDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-1 w-56 bg-background/95 backdrop-blur-md shadow-lg ring-1 ring-black/5 p-2"
                    onMouseLeave={handleDropdownClose}
                    onMouseEnter={handleDropdownOpen}
                  >
                    <div className="space-y-4">
                      <div>
                        <WorkDropdownLink 
                          to="/work" 
                          className="block w-full px-2 py-2 text-sm font-medium text-primary border-b border-border mb-2"
                          onClick={() => {
                            navigate('/work');
                            setIsWorkDropdownOpen(false);
                          }}
                        >
                          View All Work
                        </WorkDropdownLink>
                      </div>
                      <div>
                        <h4 className="px-2 text-xs font-medium text-muted-foreground mb-1">UI Components</h4>
                        <WorkDropdownLink 
                          to="/work/buttons" 
                          onClick={() => {
                            navigate('/work/buttons');
                            setIsWorkDropdownOpen(false);
                          }}
                        >
                          Button Showcase
                        </WorkDropdownLink>
                        <WorkDropdownLink 
                          to="/work/cards" 
                          onClick={() => {
                            navigate('/work/cards');
                            setIsWorkDropdownOpen(false);
                          }}
                        >
                          Card Showcase
                        </WorkDropdownLink>
                        <WorkDropdownLink 
                          to="/work/forms" 
                          onClick={() => {
                            navigate('/work/forms');
                            setIsWorkDropdownOpen(false);
                          }}
                        >
                          Form Showcase
                        </WorkDropdownLink>
                      </div>

                      <div>
                        <h4 className="px-2 text-xs font-medium text-muted-foreground mb-1">Design & Navigation</h4>
                        <WorkDropdownLink 
                          to="/work/navigation" 
                          onClick={() => {
                            navigate('/work/navigation');
                            setIsWorkDropdownOpen(false);
                          }}
                        >
                          Navigation Showcase
                        </WorkDropdownLink>
                        <WorkDropdownLink 
                          to="/work/pages" 
                          onClick={() => {
                            navigate('/work/pages');
                            setIsWorkDropdownOpen(false);
                          }}
                        >
                          Page Design Showcase
                        </WorkDropdownLink>
                      </div>

                      <div className="pt-2 border-t border-border">
                        <WorkDropdownLink 
                          to="/work/demos" 
                          className="font-medium text-primary"
                          onClick={() => {
                            navigate('/work/demos');
                            setIsWorkDropdownOpen(false);
                          }}
                        >
                          All Demos
                        </WorkDropdownLink>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/gpt-builder">GPT Builder</NavLink>

          

            <div className="relative group">
              <motion.button 
                className="flex items-center space-x-1 px-3 py-1.5 rounded-md transition-colors hover:bg-accent/50 relative"
                onClick={() => {
                  navigate('/ai-models', { replace: true });
                  setIsGPTStoreDropdownOpen(!isGPTStoreDropdownOpen);
                }}
                onMouseEnter={handleGPTStoreDropdownOpen}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <TextShimmerWave 
                  className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-500" 
                  duration={2} 
                  spread={1.2}
                >
                  AI Models
                </TextShimmerWave>
                <motion.div
                  animate={{ rotate: isGPTStoreDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={14} className="text-muted-foreground ml-1" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {isGPTStoreDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-1 w-56 bg-background/95 backdrop-blur-md shadow-lg ring-1 ring-black/5 p-2"
                    onMouseLeave={handleGPTStoreDropdownClose}
                    onMouseEnter={handleGPTStoreDropdownOpen}
                  >
                    <div className="space-y-4">
                      <div>
                        <WorkDropdownLink 
                          to="/ai-models" 
                          className="block w-full px-2 py-2 text-sm font-medium text-primary border-b border-border mb-2"
                          onClick={() => {
                            navigate('/ai-models');
                            setIsGPTStoreDropdownOpen(false);
                          }}
                        >
                          View All AI Models
                        </WorkDropdownLink>
                      </div>
                      <div>
                        <h4 className="px-2 text-xs font-medium text-muted-foreground mb-1">Our AI Assistants</h4>
                        {[
                          { name: 'Byte Guru', path: 'byte-guru' },
                          { name: 'Courtside Clara', path: 'courtside-clara' },
                          { name: 'Professor Pixel', path: 'professor-pixel' },
                          { name: 'Trendy Tina', path: 'trendy-tina' },
                          { name: 'Script Sage', path: 'script-sage' }
                        ].map(({ name, path }) => (
                          <WorkDropdownLink 
                            key={path} 
                            to={`/ai-models/${path}`}
                            onClick={() => {
                              navigate(`/ai-models/${path}`);
                              setIsGPTStoreDropdownOpen(false);
                            }}
                          >
                            {name}
                          </WorkDropdownLink>
                        ))}
                      </div>
                      <div>
                        <h4 className="px-2 text-xs font-medium text-muted-foreground mb-1">Specialized Assistants</h4>
                        {[
                          { name: 'Chef Byte', path: 'chef-byte' },
                          { name: 'Coach Calm', path: 'coach-calm' },
                          { name: 'Dr. Data', path: 'dr-data' },
                          { name: 'Her Highness Historia', path: 'her-highness-historia' }
                        ].map(({ name, path }) => (
                          <WorkDropdownLink 
                            key={path} 
                            to={`/ai-models/${path}`}
                            onClick={() => {
                              navigate(`/ai-models/${path}`);
                              setIsGPTStoreDropdownOpen(false);
                            }}
                          >
                            {name}
                          </WorkDropdownLink>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            
            
            <NavLink 
              href="https://intellisync-solutions-promo.netlify.app/" 
              isExternal={true}
              className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-500 font-semibold"
            >
              <TextShimmerWave 
                className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-500" 
                duration={2} 
                spread={1.2}
              >
                Promotion
              </TextShimmerWave>
            </NavLink>

            <NavLink to="/contact">Contact</NavLink>
            
            {/* Theme Toggle */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="w-9 h-9 rounded-lg relative"
              >
                <motion.div
                  initial={false}
                  animate={{ 
                    rotate: theme === 'dark' ? 360 : 0,
                    scale: theme === 'dark' ? 1 : 0.8
                  }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                </motion.div>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-9 h-9 rounded-lg relative"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMobileMenuOpen ? 'close' : 'menu'}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden border-t border-border/10"
              >
                <div className="py-4 space-y-1">
                  <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
                    Home
                  </MobileNavLink>
                  <MobileNavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                    About
                  </MobileNavLink>
                  <MobileNavLink to="/services" onClick={() => setIsMobileMenuOpen(false)}>
                    Services
                  </MobileNavLink>
                  <MobileNavLink to="/ai" onClick={() => setIsMobileMenuOpen(false)}>
                    AI
                  </MobileNavLink>
                  <MobileNavLink to="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                    Blog
                  </MobileNavLink>
                  <MobileNavLink to="/work" onClick={() => setIsMobileMenuOpen(false)}>
                    Our Work
                  </MobileNavLink>
                  <MobileNavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Contact
                  </MobileNavLink>
                  <MobileNavLink to="https://intellisync-solutions-promo.netlify.app/" target="_blank" onClick={() => setIsMobileMenuOpen(false)}>
                    Promotions
                  </MobileNavLink>
                  <MobileNavLink to="/gpt-builder" onClick={() => setIsMobileMenuOpen(false)}>
                    GPT Builder
                  </MobileNavLink>
                  <MobileNavLink to="/ai-models" onClick={handleGPTStoreClick} className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent/80 py-1.5 px-3 rounded-md transition-colors hover:bg-accent/50">
                    AI Models
                  </MobileNavLink>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  );
};

// Helper Components
interface ExternalLinkProps {
  href: string;
  isExternal: true;
  children: React.ReactNode;
  target?: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

interface InternalLinkProps {
  to: string;
  isExternal?: false;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

type NavLinkProps = ExternalLinkProps | InternalLinkProps;

const NavLink = (props: NavLinkProps) => {
  const className = props.className || "text-foreground hover:text-primary transition-colors duration-200 ease-in-out";

  if (props.isExternal) {
    return (
      <a 
        href={props.href} 
        target={props.target || '_blank'} 
        rel="noopener noreferrer"
        className={className}
        onClick={props.onClick}
      >
        {props.children}
      </a>
    );
  }

  return (
    <Link 
      to={props.to} 
      className={className}
      onClick={props.onClick}
    >
      {props.children}
    </Link>
  );
};

const WorkDropdownLink = ({ to, children, className, onClick }: { 
  to: string; 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={`block w-full px-2 py-1.5 text-sm rounded-md transition-colors ${isActive ? 'bg-accent text-accent-foreground' : ''} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, children, target, className, onClick }: { 
  to: string; 
  children: React.ReactNode; 
  target?: string; 
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}) => {
  const isExternal = to.startsWith('http') || to.startsWith('https');
  const LinkComponent = isExternal ? 'a' : Link;

  return (
    <LinkComponent 
      to={to} 
      href={isExternal ? to : undefined}
      target={target}
      className={className || "block py-2 text-lg hover:text-primary transition-colors"}
      onClick={onClick}
    >
      {children}
    </LinkComponent>
  );
};

export default Header;
