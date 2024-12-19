import { Home, MessageSquare, Settings } from 'lucide-react';
import { useState } from 'react';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
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
  );
};

export default TabNavigation;
