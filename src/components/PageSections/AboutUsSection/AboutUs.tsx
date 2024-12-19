import { motion } from 'framer-motion';
import { Code, Brain, Heart, Rocket, Star, Trophy } from 'lucide-react';

export const AboutUs = () => {
  const achievements = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Innovation",
      description: "Pioneering AI solutions that transform businesses"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Tech Excellence",
      description: "Building robust, scalable applications"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "User-Centric",
      description: "Creating delightful user experiences"
    }
  ];

  const values = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Innovation First",
      description: "Constantly pushing boundaries with cutting-edge solutions"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Excellence",
      description: "Delivering exceptional quality in every project"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Growth Mindset",
      description: "Continuously learning and evolving"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            About Intellisync Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            We're a team of passionate innovators dedicated to creating intelligent solutions
            that empower businesses and individuals to achieve more.
          </motion.p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-muted/50 hover:bg-muted/70 transition-colors"
            >
              <div className="mb-4 text-primary">{achievement.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p className="text-muted-foreground">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="max-w-3xl mx-auto p-8 rounded-xl bg-primary/5 border border-primary/10">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground">
              To revolutionize industries through innovative AI solutions while maintaining
              the highest standards of quality, security, and user experience.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-muted/50 hover:bg-muted/70 transition-colors"
            >
              <div className="mb-4 text-primary">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
