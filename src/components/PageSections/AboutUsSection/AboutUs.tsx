import { Heart, Code, Brain } from 'lucide-react';
import Animation from '../../features/Animation';
import { IntellisyncStory } from './IntellisyncStory';

export const AboutUs = () => {
  const stats = [
    { number: "10+", label: "Years Experience", delay: 0.4 },
    { number: "100+", label: "Projects Completed", delay: 0.6 },
    { number: "95%", label: "Client Satisfaction", delay: 0.8 }
  ];

  const values = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Innovation First",
      description: "Pushing boundaries with cutting-edge solutions and creative problem-solving."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Excellence",
      description: "Delivering robust, scalable solutions with clean, efficient code."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Client-Centric",
      description: "Your success is our priority. We're committed to exceeding expectations."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/10 to-purple-50/10 dark:via-blue-950/10 dark:to-purple-950/10" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section with Overlapping Elements */}
        <div className="relative mb-24">
          <Animation type="scale" duration={0.6}>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-2xl" />
          </Animation>
          
          <Animation type="slide" duration={0.6} direction="up">
            <h2 className="text-6xl md:text-7xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About</span>
              <span className="relative ml-4 text-gray-900 dark:text-gray-100">
                Us
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
              </span>
            </h2>
          </Animation>
          
          <Animation type="fade" duration={0.6} delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
              With <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">passion</span> at our core, we create <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">digital experiences</span> that feel personal, meaningful, and built to <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">inspire</span>—unlocking <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">innovation</span>, empowering possibilities, and bringing the future of technology closer to everyone.
            </p>
          </Animation>
        </div>

        {/* Stats Section - Floating Cards */}
        <div className="relative mb-32">
          <div className="flex flex-wrap justify-center gap-8">
            {stats.map((stat, index) => (
              <Animation
                key={stat.label}
                type="pop"
                delay={index * 0.1}
                duration={0.5}
              >
                <div className="w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
                  <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600" />
                  <div className="p-6">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </Animation>
            ))}
          </div>
        </div>

        {/* Values Section - Modern Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Animation
                key={value.title}
                type="slide-fade"
                delay={index * 0.1}
                duration={0.5}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300" />
                  <div className="relative p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/20 dark:border-gray-700/20">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-colors duration-300">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold ml-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Animation>
            ))}
          </div>
        </div>
      </div>
      <IntellisyncStory />
    </section>
  );
};
