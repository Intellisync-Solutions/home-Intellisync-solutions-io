import { motion } from 'framer-motion';
import { Image, Music, Video } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

const LayoutCards = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
        Layout Variations
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {/* Modern Layout */}
        <AccordionItem value="modern">
          <AccordionTrigger className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Modern Layout
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-4">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-4 sm:p-6 text-white"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center">
                    <Image className="w-8 h-8" />
                  </div>
                  <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                    New
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Visual Design
                </h3>
                <p className="text-white/80">
                  Create stunning visual experiences that captivate users.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-4 sm:p-6 text-white"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center">
                    <Music className="w-8 h-8" />
                  </div>
                  <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                    Featured
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Audio Design
                </h3>
                <p className="text-white/80">
                  Craft immersive audio experiences for your applications.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl p-4 sm:p-6 text-white"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center">
                    <Video className="w-8 h-8" />
                  </div>
                  <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                    Popular
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Video Production
                </h3>
                <p className="text-white/80">
                  Produce engaging video content that tells your story.
                </p>
              </motion.div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Minimal Layout */}
        <AccordionItem value="minimal">
          <AccordionTrigger className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Minimal Layout
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-4">
              {[1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={`https://source.unsplash.com/random/100x100?minimal=${index}`}
                      alt="Minimal"
                      className="w-16 h-16 rounded-full mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                      Minimal Design {index}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Simple and clean design that focuses on essential elements.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Gradient Layout */}
        <AccordionItem value="gradient">
          <AccordionTrigger className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Gradient Layout
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-4">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative overflow-hidden rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 p-4 sm:p-6 border border-violet-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    Purple Haze
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Elegant gradient design with purple accents.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-600/20 p-4 sm:p-6 border border-emerald-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    Emerald Flow
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Fresh gradient design with emerald tones.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 p-4 sm:p-6 border border-amber-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    Amber Glow
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Warm gradient design with amber highlights.
                  </p>
                </div>
              </motion.div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default LayoutCards;
