import { Code, Laptop, Lightbulb, Rocket, Cpu, Cloud } from 'lucide-react';
import Animation from '../../features/Animation';

export const ServicesHero = () => {
  const services = [
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Web Development",
      description: "Creating stunning, responsive websites that deliver exceptional user experiences.",
      delay: 0.2
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Web Application Software",
      description: "Building tailored A.I. solutions that solve your unique business needs.",
      delay: 0.3
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI Innovation",
      description: "Leveraging cutting-edge artificial intelligence to transform your business capabilities.",
      delay: 0.35
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Digital Innovation",
      description: "Transforming ideas into cutting-edge digital solutions.",
      delay: 0.4
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Integrated Intelligence",
      description: "Building Personalized Intelligent solutions that enhance your digital experience.",
      delay: 0.45
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Growth Solutions",
      description: "Accelerating your business with scalable technology solutions.",
      delay: 0.5
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_25%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_25%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.05),transparent_25%)] dark:bg-[radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.08),transparent_25%)]" />
      </div>

      <div className="relative">
        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <div className="relative mb-24">
            <Animation type="scale" duration={0.6}>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-2xl" />
            </Animation>
            
            <Animation type="slide" duration={0.6} direction="up">
              <h1 className="text-6xl md:text-7xl font-bold text-center mb-8">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our</span>
                <span className="relative ml-4 text-gray-900 dark:text-gray-100">
                  Services
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                </span>
              </h1>
            </Animation>
            
            <Animation type="fade" duration={0.6} delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
                Empowering your digital journey with <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">innovative solutions</span> and <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">cutting-edge technology</span>. We transform ideas into reality.
              </p>
            </Animation>
          </div>

          {/* Services Grid - Asymmetric Layout */}
          <div className="relative max-w-7xl mx-auto">
            {/* Decorative line connecting services */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600/0 via-purple-600/20 to-blue-600/0 transform -translate-y-1/2" />
            
            <div className="grid grid-cols-12 gap-6">
              {/* First Service - Large Card */}
              <Animation
                type="slide-fade"
                delay={0.2}
                duration={0.5}
                direction="left"
                className="col-span-12 md:col-span-8 lg:col-span-6"
              >
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-300" />
                  <div className="relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-blue-200/30 dark:border-blue-500/20 shadow-lg shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="flex items-start mb-4">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-colors duration-300">
                        {services[0].icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                          {services[0].title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                          {services[0].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Animation>

              {/* Second Service - Medium Card, Offset */}
              <Animation
                type="slide-fade"
                delay={0.3}
                duration={0.5}
                direction="right"
                className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8 md:mt-12"
              >
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300" />
                  <div className="relative p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-purple-200/30 dark:border-purple-500/20 shadow-lg shadow-purple-500/5 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-colors duration-300">
                        {services[1].icon}
                      </div>
                      <h3 className="text-xl font-bold ml-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {services[1].title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {services[1].description}
                    </p>
                  </div>
                </div>
              </Animation>

              {/* AI Innovation Card - Center */}
              <Animation
                type="pop"
                delay={0.35}
                duration={0.5}
                className="col-span-12 md:col-span-8 lg:col-span-8 lg:col-start-3 md:-mt-4"
              >
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-blue-600/10 to-indigo-600/10 rounded-2xl transform rotate-0 group-hover:scale-[1.02] transition-transform duration-300" />
                  <div className="relative p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-indigo-200/30 dark:border-indigo-500/20 shadow-lg shadow-indigo-500/5 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-500/20 via-blue-500/20 to-indigo-500/20 group-hover:from-indigo-500/30 group-hover:via-blue-500/30 group-hover:to-indigo-500/30 transition-colors duration-300">
                        {services[2].icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                          {services[2].title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                          {services[2].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Animation>

              {/* Digital Innovation - Left */}
              <Animation
                type="slide-fade"
                delay={0.4}
                duration={0.5}
                direction="left"
                className="col-span-12 md:col-span-7 lg:col-span-5 lg:col-start-2"
              >
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300" />
                  <div className="relative p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-cyan-200/30 dark:border-cyan-500/20 shadow-lg shadow-cyan-500/5 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-colors duration-300">
                        {services[3].icon}
                      </div>
                      <h3 className="text-xl font-bold ml-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                        {services[3].title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {services[3].description}
                    </p>
                  </div>
                </div>
              </Animation>

              {/* Cloud Infrastructure - Right */}
              <Animation
                type="slide-fade"
                delay={0.45}
                duration={0.5}
                direction="right"
                className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8 md:mt-4"
              >
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-cyan-600/10 rounded-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300" />
                  <div className="relative p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-emerald-200/30 dark:border-emerald-500/20 shadow-lg shadow-emerald-500/5 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 group-hover:from-emerald-500/30 group-hover:to-cyan-500/30 transition-colors duration-300">
                        {services[4].icon}
                      </div>
                      <h3 className="text-xl font-bold ml-4 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                        {services[4].title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {services[4].description}
                    </p>
                  </div>
                </div>
              </Animation>

              {/* Growth Solutions - Bottom */}
              <Animation
                type="slide-fade"
                delay={0.5}
                duration={0.5}
                direction="up"
                className="col-span-12 md:col-span-10 lg:col-span-8 lg:col-start-3 md:mt-8"
              >
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-purple-600/10 to-violet-600/10 rounded-2xl transform rotate-0 group-hover:scale-[1.01] transition-transform duration-300" />
                  <div className="relative p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-violet-200/30 dark:border-violet-500/20 shadow-lg shadow-violet-500/5 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-violet-500/20 group-hover:from-violet-500/30 group-hover:via-purple-500/30 group-hover:to-violet-500/30 transition-colors duration-300">
                        {services[5].icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 bg-clip-text text-transparent mb-2">
                          {services[5].title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                          {services[5].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Animation>
            </div>
          </div>

          {/* Bottom Accent */}
          <Animation type="fade" duration={0.6} delay={0.6}>
            <div className="flex justify-center mt-16">
              <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-600/50 to-purple-600/50" />
            </div>
          </Animation>
        </div>
      </div>
    </section>
  );
};
