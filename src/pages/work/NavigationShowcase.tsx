import { motion } from 'framer-motion';
import { 
  Home,
  User,
  Settings,
  Bell,
  Menu,
  Search,
  ChevronRight,
  ChevronDown,
  X,
  MessageSquare,
  Mail,
  Calendar,
  MoreVertical
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Button } from '../../components/ui/button';

const NavigationShowcase = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuItemClick = (e: React.MouseEvent, action: string) => {
    e.preventDefault();
    // Handle menu item click
    console.log('Menu item clicked:', action);
    setIsDropdownOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          Navigation Components
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 text-lg text-center max-w-2xl mx-auto mb-12">
          Explore our collection of navigation components designed for seamless user experience 
          across different devices and contexts.
        </p>

        <div className="space-y-16">
          {/* Top Navigation Bar */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Top Navigation Bar
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">Logo</span>
                  <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Home</a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">About</a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Services</a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Contact</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                    <Search size={20} />
                  </button>
                  <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                    <Bell size={20} />
                  </button>
                  <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                    <User size={20} />
                  </button>
                  <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <Menu size={20} />
                  </button>
                </div>
              </div>
              {/* Mobile Menu */}
              {isMobileMenuOpen && (
                <div className="md:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-700">Home</a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-700">About</a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-700">Services</a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-700">Contact</a>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Sidebar Navigation */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Sidebar Navigation
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-64">
              <div className="p-4">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">Dashboard</span>
                  <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                    <X size={20} />
                  </button>
                </div>
                <nav className="space-y-2">
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-200">
                    <Home size={20} />
                    <span>Home</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <MessageSquare size={20} />
                    <span>Messages</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Calendar size={20} />
                    <span>Calendar</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Mail size={20} />
                    <span>Mail</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <MoreVertical size={20} />
                    <span>More</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Settings size={20} />
                    <span>Settings</span>
                  </a>
                </nav>
              </div>
            </div>
          </section>

          {/* Breadcrumbs */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Breadcrumbs
            </h2>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                    <Home size={16} className="mr-2" />
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRight size={16} className="text-gray-400" />
                    <a href="#" className="ml-1 md:ml-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                      Products
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRight size={16} className="text-gray-400" />
                    <span className="ml-1 md:ml-2 text-gray-500 dark:text-gray-400">
                      Current Page
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </section>

          {/* Tabs */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Tabs
            </h2>
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('home')}
                  className={`py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm
                    ${activeTab === 'home'
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'
                    }`}
                >
                  <Home size={16} className="mr-2" />
                  Home
                </button>
                <button
                  onClick={() => setActiveTab('messages')}
                  className={`py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm
                    ${activeTab === 'messages'
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'
                    }`}
                >
                  <MessageSquare size={16} className="mr-2" />
                  Messages
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm
                    ${activeTab === 'settings'
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'
                    }`}
                >
                  <Settings size={16} className="mr-2" />
                  Settings
                </button>
              </nav>
            </div>
          </section>

          {/* Dropdown Menu */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Dropdown Menu
            </h2>
            <div className="relative inline-block text-left" ref={dropdownRef}>
              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                >
                  Options
                  <ChevronDown size={16} className="ml-2 -mr-1" />
                </button>
              </div>

              {isDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      role="menuitem"
                      onClick={(e) => handleMenuItemClick(e, 'account')}
                    >
                      Account settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      role="menuitem"
                      onClick={(e) => handleMenuItemClick(e, 'support')}
                    >
                      Support
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      role="menuitem"
                      onClick={(e) => handleMenuItemClick(e, 'license')}
                    >
                      License
                    </a>
                    <form method="POST" action="#">
                      <button
                        type="submit"
                        className="block w-full text-left px-4 py-2 text-sm text-red-700 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                        role="menuitem"
                      >
                        Sign out
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Bottom Navigation */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Bottom Navigation
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="flex justify-around items-center py-3">
                <button className="flex flex-col items-center text-blue-600 dark:text-blue-400">
                  <Home size={24} />
                  <span className="mt-1 text-xs">Home</span>
                </button>
                <button className="flex flex-col items-center text-gray-600 dark:text-gray-400">
                  <MessageSquare size={24} />
                  <span className="mt-1 text-xs">Messages</span>
                </button>
                <button className="flex flex-col items-center text-gray-600 dark:text-gray-400">
                  <Bell size={24} />
                  <span className="mt-1 text-xs">Notifications</span>
                </button>
                <button className="flex flex-col items-center text-gray-600 dark:text-gray-400">
                  <User size={24} />
                  <span className="mt-1 text-xs">Profile</span>
                </button>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Want to Use These Navigation Components?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our navigation components are designed for optimal user experience across all devices. 
              Contact us to learn how we can help implement these and other beautiful 
              components in your project.
            </p>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NavigationShowcase;
