import { motion } from 'framer-motion';
import { Image, Music, Video, Star } from 'lucide-react';
import { Button } from '../../../../components/ui/button';

const MediaCards = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
        Media Cards
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Image Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="relative">
            <img
              src="https://source.unsplash.com/random/800x600?nature"
              alt="Nature"
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-4 right-4">
              <Button variant="secondary" size="icon">
                <Image className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
              Nature Photography
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Stunning landscapes and natural beauty captured in high resolution.
            </p>
          </div>
        </motion.div>

        {/* Audio Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                <Music className="w-6 h-6 text-purple-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Summer Vibes
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  By John Smith
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <Star className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div className="h-2 bg-purple-500 rounded-full w-2/3"></div>
            </div>
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>2:14</span>
              <span>3:25</span>
            </div>
          </div>
        </motion.div>

        {/* Video Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="relative">
            <img
              src="https://source.unsplash.com/random/800x600?video"
              alt="Video thumbnail"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <Button variant="secondary" size="icon" className="rounded-full">
                <Video className="h-6 w-6" />
              </Button>
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
              Tutorial Video
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Learn how to create amazing designs in just 10 minutes.
            </p>
            <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
              <span>10:23</span>
              <span className="mx-2">•</span>
              <span>1.2K views</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaCards;
