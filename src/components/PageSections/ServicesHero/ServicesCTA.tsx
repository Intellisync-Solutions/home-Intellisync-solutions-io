import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import Animation from '../../features/Animation';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ContactFormModal from '../../Modals/ContactFormModal';

export const ServicesCTA = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900" />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(147,51,234,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-500/5 dark:shadow-blue-500/10">
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-3xl opacity-20" />

            <div className="relative">
              {/* Sparkle Icon */}
              <Animation type="bounce">
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 animate-pulse">
                      <Sparkles className="w-8 h-8 text-purple-500 opacity-50" />
                    </div>
                    <Sparkles className="w-8 h-8 text-purple-500" />
                  </div>
                </div>
              </Animation>

              {/* Heading */}
              <Animation type="fade" delay={0.2}>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
                  <div className="inline-block">
                    Ready to{' '}
                    <span className="relative inline-block px-2">
                      Transform
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                    </span>
                  </div>
                  <div className="inline-block mt-4">
                    Your{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Digital
                    </span>{' '}
                    Presence?
                  </div>
                </h2>
              </Animation>

              {/* Description */}
              <Animation type="fade" delay={0.3}>
                <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto">
                  Let's discuss how our services can help you achieve your business goals. Schedule a free consultation today.
                </p>
              </Animation>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Animation type="slide-fade" direction="right" delay={0.4}>
                  <button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                  >
                    Start a Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </button>
                </Animation>

                <Animation type="slide-fade" direction="left" delay={0.5}>
                  <Link 
                    to="/contact"
                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Schedule a Call
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/0 to-purple-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </Link>
                </Animation>
              </div>

              {/* Trust Indicators */}
              <Animation type="fade" delay={0.6}>
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    Free Consultation
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    24/7 Support
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    100% Satisfaction Guaranteed
                  </div>
                </div>
              </Animation>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  );
};

export default ServicesCTA;