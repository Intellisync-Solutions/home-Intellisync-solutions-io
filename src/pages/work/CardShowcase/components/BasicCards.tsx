import { motion } from 'framer-motion';

const BasicCards = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
        Basic Cards
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Simple Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
              Simple Card
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              A clean and simple card design for basic content presentation.
            </p>
          </div>
        </motion.div>

        {/* Bordered Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-6"
        >
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Bordered Card
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            A bordered card variant for subtle separation of content.
          </p>
        </motion.div>

        {/* Gradient Border Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="relative rounded-xl p-4 sm:p-6 bg-white dark:bg-gray-800"
          style={{
            background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #3b82f6, #8b5cf6) border-box',
            border: '2px solid transparent'
          }}
        >
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Gradient Border
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            A card with a beautiful gradient border effect.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BasicCards;
