import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/Button/button';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, ChevronDown, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(var(--background-rgb), 0)", "rgba(var(--background-rgb), 0.9)"]
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY ? "down" : "up";
    if (latest > 100 && direction === "down") {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
    setLastScrollY(latest);
  });

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header 
      style={{ backgroundColor: headerBackground }}
      animate={{ y: isHeaderVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-border/40"
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="relative z-10"
          >
            <motion.div
              className="flex items-center space-x-2 text-xl font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                Chris
              </motion.span>
              <motion.span 
                className="text-muted-foreground"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                June
              </motion.span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            
            {/* Work Dropdown */}
            <div className="relative group">
              <motion.button 
                className="flex items-center space-x-1 px-4 py-2 rounded-md transition-colors hover:bg-accent relative overflow-hidden group"
                onClick={() => setIsWorkDropdownOpen(!isWorkDropdownOpen)}
                onMouseEnter={() => setIsWorkDropdownOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Our Work</span>
                <motion.div
                  animate={{ rotate: isWorkDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <ChevronDown size={16} />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="navHover"
                />
              </motion.button>
              
              <AnimatePresence>
                {isWorkDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-48 bg-popover/95 backdrop-blur-sm rounded-md shadow-lg overflow-hidden"
                    onMouseLeave={() => setIsWorkDropdownOpen(false)}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                      <WorkDropdownLink to="/work">All Projects</WorkDropdownLink>
                      <WorkDropdownLink to="/work/pages">Page Designs</WorkDropdownLink>
                      <WorkDropdownLink to="/work/buttons">Button Designs</WorkDropdownLink>
                      <WorkDropdownLink to="/work/cards">Card Designs</WorkDropdownLink>
                      <WorkDropdownLink to="/work/forms">Form Elements</WorkDropdownLink>
                      <WorkDropdownLink to="/work/navigation">Navigation</WorkDropdownLink>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full relative overflow-hidden group"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: theme === 'dark' ? 360 : 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="relative z-10"
                >
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="buttonHover"
                />
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden rounded-full relative overflow-hidden group"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMobileMenuOpen ? 'close' : 'menu'}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.div>
                </AnimatePresence>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="buttonHover"
                />
              </Button>
            </motion.div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <motion.div 
                className="py-4 space-y-2 relative"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05
                    }
                  }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-sm pointer-events-none" />
                <MobileNavLink to="/">Home</MobileNavLink>
                <MobileNavLink to="/about">About</MobileNavLink>
                <MobileNavLink to="/services">Services</MobileNavLink>
                <MobileNavLink to="/work">All Projects</MobileNavLink>
                <MobileNavLink to="/work/pages">Page Designs</MobileNavLink>
                <MobileNavLink to="/work/buttons">Button Designs</MobileNavLink>
                <MobileNavLink to="/work/cards">Card Designs</MobileNavLink>
                <MobileNavLink to="/work/forms">Form Elements</MobileNavLink>
                <MobileNavLink to="/work/navigation">Navigation</MobileNavLink>
                <MobileNavLink to="/contact">Contact</MobileNavLink>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

// Helper Components
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "px-4 py-2 rounded-md transition-colors relative overflow-hidden group",
        isActive ? "text-primary" : "text-foreground"
      )}
    >
      <span className="relative z-10">{children}</span>
      {isActive ? (
        <motion.div
          layoutId="activeIndicator"
          className="absolute inset-0 bg-primary/10 rounded-md"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      ) : (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"
          layoutId="navHover"
        />
      )}
    </Link>
  );
};

const WorkDropdownLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "block px-4 py-2 text-sm transition-colors relative overflow-hidden group",
        isActive
          ? "text-primary bg-primary/10"
          : "text-foreground hover:text-primary"
      )}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"
        layoutId="dropdownHover"
      />
    </Link>
  );
};

const MobileNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
      }}
    >
      <Link
        to={to}
        className={cn(
          "block px-4 py-2 text-base transition-colors relative overflow-hidden group",
          isActive
            ? "text-primary bg-primary/10"
            : "text-foreground hover:text-primary"
        )}
      >
        <span className="relative z-10">{children}</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"
          layoutId="mobileHover"
        />
      </Link>
    </motion.div>
  );
};

export default Header;
