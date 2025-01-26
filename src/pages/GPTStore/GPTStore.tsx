import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, BookOpen, Trophy, Code, University, Utensils, Feather, Heart, TrendingUp, Smile } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';

interface AIModel {
  id: number;
  name: string;
  description: string;
  category: string;
  complexity: string;
  icon: React.ElementType;
  chatbotId: string;
  tags: string[];
  focus: string;
  whyIntellisync: string;
}

const GPTStore: React.FC = () => {
  // Comprehensive AI Models with rich descriptions
  const gptModels: AIModel[] = [
    {
      id: 1,
      name: 'Professor Pixel',
      description: 'The Edutainment Wizard transforming learning into an adventure',
      category: 'Education',
      complexity: 'Advanced',
      icon: BookOpen,
      chatbotId: 'professor-pixel',
      tags: ['Learning', 'Interactive Education', 'K-12'],
      focus: 'K–12 education, interactive learning',
      whyIntellisync: 'Personalizing content to every student\'s level with seamless classroom integration.'
    },
    {
      id: 2,
      name: 'CourtSide Clara',
      description: 'Your dynamic sports analyst and fitness companion',
      category: 'Sports & Fitness',
      complexity: 'Intermediate',
      icon: Trophy,
      chatbotId: 'courtside-clara',
      tags: ['Sports Commentary', 'Fitness', 'Predictions'],
      focus: 'Sports commentary, game predictions, fitness tips',
      whyIntellisync: 'Delivering instant sports insights and personalized fitness guidance.'
    },
    {
      id: 3,
      name: 'ByteGuru',
      description: 'The tech enthusiast who speaks geek fluently',
      category: 'Technology',
      complexity: 'Expert',
      icon: Code,
      chatbotId: 'byte-guru',
      tags: ['Tech Support', 'Coding', 'Gadget Reviews'],
      focus: 'Tech tutorials, coding help, gadget insights',
      whyIntellisync: 'Demystifying complex tech topics with comedic flair and advanced data pipelines.'
    },
    {
      id: 4,
      name: 'Her Highness Historia',
      description: 'A regal journey through time and cultural landscapes',
      category: 'History & Culture',
      complexity: 'Advanced',
      icon: University,
      chatbotId: 'historia',
      tags: ['Historical Facts', 'Cultural Deep-Dive', 'Heritage'],
      focus: 'Historical facts, cultural explanations',
      whyIntellisync: 'Quickly fetching and presenting era-specific information for educational platforms.'
    },
    {
      id: 5,
      name: 'Chef Byte',
      description: 'Your whimsical culinary companion and kitchen confidant',
      category: 'Culinary',
      complexity: 'Intermediate',
      icon: Utensils,
      chatbotId: 'chef-byte',
      tags: ['Recipes', 'Meal Planning', 'Cooking Tips'],
      focus: 'Recipes, meal planning, culinary tips',
      whyIntellisync: 'Transforming diverse food data into personalized, real-time cooking experiences.'
    },
    {
      id: 6,
      name: 'ScriptSage',
      description: 'The creative writing mentor who understands your narrative soul',
      category: 'Creative Writing',
      complexity: 'Advanced',
      icon: Feather,
      chatbotId: 'script-sage',
      tags: ['Storytelling', 'Writing Prompts', 'Character Development'],
      focus: 'Storytelling, scriptwriting, character development',
      whyIntellisync: 'Fueling creativity with natural language interactions for writers.'
    },
    {
      id: 7,
      name: 'Coach Calm',
      description: 'Your serene guide to mindfulness and inner peace',
      category: 'Wellness',
      complexity: 'Intermediate',
      icon: Heart,
      chatbotId: 'coach-calm',
      tags: ['Mental Health', 'Meditation', 'Wellness'],
      focus: 'Mental health, mindfulness, positivity',
      whyIntellisync: 'Delivering personalized, ethical mental health support.'
    },
    {
      id: 8,
      name: 'Dr. Data',
      description: 'The analytical brainiac turning numbers into narratives',
      category: 'Business Intelligence',
      complexity: 'Expert',
      icon: TrendingUp,
      chatbotId: 'dr-data',
      tags: ['Analytics', 'Forecasting', 'Business Strategy'],
      focus: 'Business intelligence, data analytics, forecasting',
      whyIntellisync: 'Transforming raw data into actionable business insights.'
    },
    {
      id: 9,
      name: 'Trendy Tina',
      description: 'The social media maven who speaks viral fluently',
      category: 'Marketing',
      complexity: 'Intermediate',
      icon: MessageCircle,
      chatbotId: 'trendy-tina',
      tags: ['Social Media', 'Content Strategy', 'Influencer Insights'],
      focus: 'Social media strategies, content creation',
      whyIntellisync: 'Spotting viral content opportunities in real-time.'
    },
    {
      id: 10,
      name: 'PlayGround',
      description: 'The magical companion for early childhood learning',
      category: 'Early Education',
      complexity: 'Beginner',
      icon: Smile,
      chatbotId: 'playground',
      tags: ['Kids Learning', 'Interactive Stories', 'Educational Games'],
      focus: 'Early childhood learning through stories and games',
      whyIntellisync: 'Adapting interactive content in real-time for curious young minds.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Intellisync AI Models" 
        description="Explore our diverse collection of AI companions for every need" 
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent/80">
          Intellisync AI Companions
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover AI models tailored for every domain, from education to entertainment
        </p>
      </motion.div>

      {/* GPT Models Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {gptModels.map((model) => (
          <Link 
            key={model.id}
            to={`/ai-models/${model.chatbotId}`}
            className="no-underline"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, delay: model.id * 0.1 }}
              className="bg-card border border-border/20 rounded-xl p-6 relative group overflow-hidden hover:border-accent/50"
            >
              <div className="flex items-center mb-4 relative z-10">
                <model.icon 
                  className="w-16 h-16 mr-4 text-accent rounded-lg" 
                />
                <div>
                  <h3 className="text-xl font-semibold">{model.name}</h3>
                  <p className="text-muted-foreground text-sm">{model.category}</p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">{model.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {model.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                  {model.complexity}
                </span>
                <a 
                  href={`/chat/${model.chatbotId}`}
                  className="text-sm text-accent hover:underline flex items-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Open Chat
                </a>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GPTStore;
