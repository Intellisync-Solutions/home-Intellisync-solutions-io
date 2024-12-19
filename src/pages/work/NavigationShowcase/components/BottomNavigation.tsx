import { Home, MessageSquare, Bell, User } from 'lucide-react';

const BottomNavigation = () => {
  return (
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
  );
};

export default BottomNavigation;
