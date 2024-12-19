import { Home, MessageSquare, Calendar, Mail, MoreVertical, Settings, X } from 'lucide-react';

const SideNavigation = () => {
  return (
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
  );
};

export default SideNavigation;
