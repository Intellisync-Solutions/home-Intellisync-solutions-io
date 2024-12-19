import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, ChevronDown, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            YourBrand
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
              About
            </Link>
            <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
              Services
            </Link>
            
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                onClick={() => setIsWorkDropdownOpen(!isWorkDropdownOpen)}
                onMouseEnter={() => setIsWorkDropdownOpen(true)}
              >
                <span>Our Work</span>
                <ChevronDown size={16} />
              </button>
              
              <div 
                className={`absolute top-full left-0 mt-0 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50 transition-opacity duration-150 ${
                  isWorkDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseLeave={() => setIsWorkDropdownOpen(false)}
              >
                <Link 
                  to="/work" 
                  className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsWorkDropdownOpen(false)}
                >
                  All Projects
                </Link>
                <Link 
                  to="/work/pages" 
                  className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsWorkDropdownOpen(false)}
                >
                  Page Designs
                </Link>
                <Link 
                  to="/work/buttons" 
                  className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsWorkDropdownOpen(false)}
                >
                  Button Designs
                </Link>
                <Link 
                  to="/work/cards" 
                  className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsWorkDropdownOpen(false)}
                >
                  Card Designs
                </Link>
                <Link 
                  to="/work/forms" 
                  className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsWorkDropdownOpen(false)}
                >
                  Form Elements
                </Link>
                <Link 
                  to="/work/navigation" 
                  className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsWorkDropdownOpen(false)}
                >
                  Navigation
                </Link>
              </div>
            </div>

            <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed left-0 right-0 top-[73px] bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 backdrop-blur-md h-[calc(100vh-73px)] overflow-y-auto transition-all duration-300 ease-in-out">
            <div className="container mx-auto px-4 py-6 space-y-6">
              <Link 
                to="/"
                className="block text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              >
                Home
              </Link>
              <Link 
                to="/about"
                className="block text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              >
                About
              </Link>
              <Link 
                to="/services"
                className="block text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              >
                Services
              </Link>
              
              {/* Mobile Work Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() => setIsWorkDropdownOpen(!isWorkDropdownOpen)}
                  className="flex items-center justify-between w-full text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  <span>Our Work</span>
                  <ChevronDown size={16} className={`transform transition-transform ${isWorkDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isWorkDropdownOpen && (
                  <div className="pl-4 space-y-2">
                    <Link 
                      to="/work"
                      className="block text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    >
                      All Projects
                    </Link>
                    <Link 
                      to="/work/pages"
                      className="block text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    >
                      Page Designs
                    </Link>
                    <Link 
                      to="/work/buttons"
                      className="block text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    >
                      Button Designs
                    </Link>
                    <Link 
                      to="/work/cards"
                      className="block text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    >
                      Card Designs
                    </Link>
                    <Link 
                      to="/work/forms"
                      className="block text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    >
                      Form Elements
                    </Link>
                    <Link 
                      to="/work/navigation"
                      className="block text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    >
                      Navigation
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/contact"
                className="block text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
