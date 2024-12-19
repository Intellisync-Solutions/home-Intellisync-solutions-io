import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface WorkFeatureContent {
  title: string;
  description: string;
  clientImportance: string;
  companyImportance: string;
  personalImportance: string;
}

const featureContent: Record<string, WorkFeatureContent> = {
  process: {
    title: "Our Process: Building Together",
    description: "Every great journey begins with understanding. We don't just build solutions; we build relationships that start with truly knowing you, your dreams, and your aspirations.",
    clientImportance: "For you, this means more than just getting a service - it's about having a partner who truly understands your vision. Our process ensures that every step we take together is purposeful, aligned with your goals, and designed to bring your dreams to life.",
    companyImportance: "At Intellisync Solutions, we believe that true innovation comes from deep understanding. Our process isn't just a methodology; it's our commitment to creating solutions that genuinely resonate with our clients' needs and aspirations.",
    personalImportance: "As someone who has spent years in technology, I've learned that the most meaningful solutions come from genuine connections. When I sit down for a 1-1 consultation, I'm not just gathering requirements - I'm listening to your story, understanding your passions, and committing myself to helping you achieve your goals. This process reflects my belief that technology should serve human connections, not replace them."
  },
  commitment: {
    title: "Our Commitment: Excellence Through Dedication",
    description: "Excellence isn't just a goal - it's a commitment we make to every client, every project, and every line of code we write. It's about creating solutions that not only work but inspire.",
    clientImportance: "When you choose Intellisync Solutions, you're choosing a partner who sees your success as our success. Our commitment means you'll always receive honest communication, innovative solutions tailored to your needs, and unwavering support throughout our journey together. We're invested in building something that not only meets your current needs but grows with your vision.",
    companyImportance: "Excellence is woven into every aspect of our work. From our rigorous development practices to our client communication, we maintain the highest standards because we believe that's what our clients deserve. This commitment drives us to continuously learn, adapt, and improve, ensuring we're always delivering the best possible solutions.",
    personalImportance: "Throughout my career, I've lived by a simple principle: anything worth doing is worth doing exceptionally well. This isn't just about writing code or building systems - it's about making a real difference in people's lives. When I commit to a project, I'm committing my full expertise, creativity, and dedication to ensuring its success. This level of personal investment in every project comes from my belief that true excellence is achieved when we pour our hearts into our work."
  },
  expectations: {
    title: "Your Expectations: Our Blueprint for Success",
    description: "We believe in setting clear expectations and then consistently exceeding them. Your trust is earned through our reliability, transparency, and unwavering dedication to your success.",
    clientImportance: "We understand that entrusting your project to a technology partner is a significant decision. That's why we've built our entire service model around ensuring you always feel informed, supported, and confident in our partnership. From clear timelines and regular updates to transparent pricing and responsive support, every aspect of our service is designed to give you peace of mind and confidence in your investment.",
    companyImportance: "Meeting and exceeding expectations isn't just a goal - it's fundamental to how we operate. We've carefully crafted our processes, communication channels, and delivery methods to ensure consistency and excellence in everything we do. Your expectations serve as our roadmap, guiding us to deliver solutions that not only meet your current needs but anticipate future opportunities.",
    personalImportance: "Having been on both sides of technology projects, I understand the importance of clear expectations and reliable delivery. It's why I've made it my personal mission to ensure every client feels heard, valued, and supported throughout their journey with us. When you share your expectations with us, you're not just providing project requirements - you're entrusting us with your vision, and that's a responsibility I take very personally. Your trust drives me to ensure we not only meet but exceed your expectations at every turn."
  }
};

interface WorkFeaturesProps {
  isOpen: boolean;
  closeModal: () => void;
  feature: 'process' | 'commitment' | 'expectations';
}

export const WorkFeatures = ({ isOpen, closeModal, feature }: WorkFeaturesProps) => {
  const content = featureContent[feature];

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-3xl font-bold leading-tight text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-4"
                >
                  {content.title}
                </Dialog.Title>
                
                <div className="mt-6 space-y-8">
                  <p className="text-xl text-gray-600 dark:text-gray-300 italic leading-relaxed">
                    {content.description}
                  </p>

                  <div className="space-y-8">
                    <div className="bg-blue-50 dark:bg-gray-700/50 p-6 rounded-xl border border-blue-100 dark:border-gray-600">
                      <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-3 flex items-center">
                        <span className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg mr-3">
                          Why This Matters to You
                        </span>
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {content.clientImportance}
                      </p>
                    </div>

                    <div className="bg-purple-50 dark:bg-gray-700/50 p-6 rounded-xl border border-purple-100 dark:border-gray-600">
                      <h4 className="text-xl font-semibold text-purple-900 dark:text-purple-300 mb-3 flex items-center">
                        <span className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg mr-3">
                          Why This Matters to Intellisync Solutions
                        </span>
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {content.companyImportance}
                      </p>
                    </div>

                    <div className="bg-green-50 dark:bg-gray-700/50 p-6 rounded-xl border border-green-100 dark:border-gray-600">
                      <h4 className="text-xl font-semibold text-green-900 dark:text-green-300 mb-3 flex items-center">
                        <span className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg mr-3">
                          A Personal Note from Chris
                        </span>
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {content.personalImportance}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6 flex justify-end">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
