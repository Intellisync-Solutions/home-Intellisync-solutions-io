import { motion } from 'framer-motion';
import { Share2, MoreVertical, User, Calendar, MessageCircle, ThumbsUp } from 'lucide-react';
import { Button } from '../../../../components/ui/button';

const InteractiveCards = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
        Interactive Cards
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Social Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <img
            src="https://source.unsplash.com/random/800x600"
            alt="Random"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 sm:p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <User className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">John Doe</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">@johndoe</p>
              </div>
              <div className="ml-auto">
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Just shared an amazing photo! Check it out and let me know what you think.
            </p>
            <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
              <Button variant="ghost" size="sm">
                <ThumbsUp className="h-4 w-4 mr-1" />
                <span>24</span>
              </Button>
              <Button variant="ghost" size="sm">
                <MessageCircle className="h-4 w-4 mr-1" />
                <span>12</span>
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-1" />
                <span>Share</span>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Event Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-blue-500" />
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">Tomorrow</span>
              </div>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
              Team Meeting
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Discuss project updates and plan next sprint activities.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center"
                  >
                    <User className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-600 border-2 border-white dark:border-gray-800 flex items-center justify-center">
                  <span className="text-xs text-gray-600 dark:text-gray-300">+2</span>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Join
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Notification Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <ThumbsUp className="w-5 h-5 text-green-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">New Achievement</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Just now</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Congratulations! You've reached 1,000 followers.
            </p>
            <div className="flex justify-end space-x-2">
              <Button variant="ghost" size="sm">
                Dismiss
              </Button>
              <Button size="sm">
                View Details
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveCards;
