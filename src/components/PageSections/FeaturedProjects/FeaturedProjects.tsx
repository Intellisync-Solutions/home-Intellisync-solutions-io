import { motion } from 'framer-motion';
import {  Code, Brain, Heart, Users, Clock, Calculator } from 'lucide-react';
import { useState } from 'react';
import { ProjectFeaturesModal } from '../../Modals/ProjectFeaturesModal';

import { InfiniteCarousel } from '../../ui/InfiniteCarousel/InfiniteCarousel';
import { ProjectCard } from '../../ui/ProjectCard/ProjectCard';
import type { Project } from './types';

const projects: Project[] = [
  {
    title: "Intellisync Solutions - BusinessOne",
    description: "A comprehensive suite of tools and calculators designed to assist entrepreneurs and seasoned business professionals in making data-driven decisions.",
    imageUrl: "/projects/business-one.png",
    link: "/work/business-one",
    tags: ["React", "TypeScript", "Firebase"],
    features: [
      {
        title: "Business Analytics",
        description: "Advanced analytics and reporting tools for business insights",
        icon: <Calculator />
      },
      {
        title: "Financial Planning",
        description: "Comprehensive financial planning and forecasting tools",
        icon: <Code />
      },
      {
        title: "Real-time Monitoring",
        description: "Monitor business metrics and KPIs in real-time",
        icon: <Clock />
      },
      {
        title: "Smart AI Business Planning",
        description: "AI-powered recommendations for business strategy and growth opportunities",
        icon: <Brain className="w-5 h-5" />
      },
      {
        title: "Cashflow Analysis",
        description: "Advanced cashflow calculations and forecasting tools for better financial planning",
        icon: <Calculator className="w-5 h-5" />
      },
      {
        title: "Financial Ratio Analysis",
        description: "In-depth business financial ratio calculations with trend analysis and industry benchmarking",
        icon: <Calculator className="w-5 h-5" />
      },
      {
        title: "Break-Even Analysis",
        description: "Interactive break-even calculator with visual charts and scenario planning",
        icon: <Calculator className="w-5 h-5" />
      },
      {
        title: "Pricing Optimization",
        description: "Smart pricing tools to optimize product and service pricing strategies",
        icon: <Brain className="w-5 h-5" />
      }
    ]
  },
  {
    title: "Serenity",
    description: "An interactive mental health and wellness platform featuring mood tracking, daily affirmations, journaling, guided meditation, and sleep tracking.",
    imageUrl: "/projects/serenity.png",
    link: "/work/serenity",
    tags: ["React", "TypeScript", "Node.js", "Firebase"],
    features: [
      {
        title: "AI Mood Analysis",
        description: "Advanced AI-powered mood tracking and pattern recognition with personalized insights",
        icon: <Brain className="w-5 h-5" />
      },
      {
        title: "Guided Meditation",
        description: "Personalized meditation sessions with breathing exercises and progress tracking",
        icon: <Heart className="w-5 h-5" />
      },
      {
        title: "Smart Journaling",
        description: "AI-enhanced journaling with emotion analysis and therapeutic writing prompts",
        icon: <Brain className="w-5 h-5" />
      },
      {
        title: "Sleep Analytics",
        description: "Comprehensive sleep tracking with quality analysis and improvement recommendations",
        icon: <Clock className="w-5 h-5" />
      },
      {
        title: "Wellness Routines",
        description: "Customizable daily wellness routines with reminders and habit tracking",
        icon: <Heart className="w-5 h-5" />
      },
      {
        title: "Community Support",
        description: "Safe, moderated peer support groups and professional guidance",
        icon: <Users className="w-5 h-5" />
      }
    ]
  },
  {
    title: "Teen Minds Matter",
    description: "A social networking platform for youth mental health, featuring community groups, peer-led tutoring, and gamified interactions for ages 10-18.",
    imageUrl: "/projects/teen-minds.png",
    link: "/work/teen-minds-matter",
    tags: ["React", "TypeScript", "Supabase", "Node.js"],
    features: [
      {
        title: "Safe Social Networking",
        description: "Age-appropriate, moderated social platform with real-time content filtering",
        icon: <Users className="w-5 h-5" />
      },
      {
        title: "Peer Support Groups",
        description: "Themed support groups led by trained peer mentors and supervised by professionals",
        icon: <Heart className="w-5 h-5" />
      },
      {
        title: "Interactive Learning",
        description: "Gamified mental health education with achievements and rewards",
        icon: <Brain className="w-5 h-5" />
      },
      {
        title: "Crisis Support",
        description: "24/7 access to crisis resources and professional support with smart escalation",
        icon: <Heart className="w-5 h-5" />
      },
      {
        title: "Parent Dashboard",
        description: "Secure parent portal for activity monitoring and professional communications",
        icon: <Users className="w-5 h-5" />
      },
      {
        title: "AI Mentor",
        description: "AI-powered companion providing age-appropriate guidance and support",
        icon: <Brain className="w-5 h-5" />
      }
    ]
  },
  {
    title: "Intellisync Solutions - EducationOne",
    description: "A comprehensive AI-powered educational platform featuring expert AI tutors across multiple subjects, with specialized dashboards for students, parents, teachers, and administrators.",
    imageUrl: "/projects/education-one.png",
    link: "/work/education-one",
    tags: ["React", "TypeScript", "Node.js", "Firebase", "OpenAI"],
    features: [
      {
        title: "AI Subject Tutors",
        description: "Specialized AI tutors for Mathematics, Physics, Languages, and Humanities with interactive problem-solving",
        icon: <Brain className="w-5 h-5" />
      },
      {
        title: "Student Dashboard",
        description: "Personalized learning paths, progress tracking, and adaptive study recommendations",
        icon: <Users className="w-5 h-5" />
      },
      {
        title: "Parent Portal",
        description: "Real-time progress monitoring, performance analytics, and direct communication with teachers",
        icon: <Users className="w-5 h-5" />
      },
      {
        title: "Teacher Analytics",
        description: "Comprehensive class performance metrics, individual student insights, and curriculum planning tools",
        icon: <Calculator className="w-5 h-5" />
      },
      {
        title: "Admin Management",
        description: "Institution-wide analytics, resource allocation, and performance benchmarking tools",
        icon: <Brain className="w-5 h-5" />
      },
      {
        title: "Progress Tracking",
        description: "Advanced analytics showing learning patterns, strengths, and areas for improvement",
        icon: <Calculator className="w-5 h-5" />
      }
    ]
  },
  {
    title: "Intellisync Solutions - TimeCapsule",
    description: "AI-enhanced photo sharing platform with smart albums, family sharing, and interactive AI storytelling for preserving and sharing memories.",
    imageUrl: "/projects/time-capsule.png",
    link: "/work/time-capsule",
    tags: ["React", "TypeScript", "Node.js", "Firebase", "OpenAI"],
    features: [
      {
        title: "Smart Photo Organization",
        description: "AI-powered photo categorization and tagging with facial recognition and scene detection",
        icon: <Brain className="w-5 h-5" />
      },
      {
        title: "Memory Stories",
        description: "AI-generated narratives that transform your photos into engaging stories and timelines",
        icon: <Brain className="w-5 h-5" />
      },
      {
        title: "Family Sharing",
        description: "Secure family albums with collaborative features and privacy controls",
        icon: <Users className="w-5 h-5" />
      },
      {
        title: "Time Travel",
        description: "Interactive timeline view with AI-enhanced memory exploration and reminiscence",
        icon: <Clock className="w-5 h-5" />
      },
      {
        title: "Smart Search",
        description: "Natural language photo search using AI to find photos by people, places, events, or emotions",
        icon: <Brain className="w-5 h-5" />
      },
      {
        title: "Memory Preservation",
        description: "Automatic photo enhancement, restoration, and archival-quality storage",
        icon: <Heart className="w-5 h-5" />
      }
    ]
  },
  {
    title: "Intellisync Solutions - PersonalOne",
    description: "A comprehensive personal finance platform offering advanced tools for wealth management, investment planning, tax projections, and retirement planning.",
    imageUrl: "/projects/personal-one.png",
    link: "/work/personal-one",
    tags: ["React", "TypeScript", "Node.js", "Firebase", "OpenAI"],
    features: [
      {
        title: "Net Worth Tracker",
        description: "Real-time net worth calculation with asset and liability tracking, automated valuations, and trend analysis",
        icon: <Calculator className="w-5 h-5" />
      },
      {
        title: "Smart Budgeting",
        description: "AI-powered budget recommendations, expense categorization, and spending pattern analysis",
        icon: <Brain className="w-5 h-5" />
      },
      {
        title: "Tax Projection",
        description: "Advanced tax planning tools with scenario modeling and optimization strategies",
        icon: <Calculator className="w-5 h-5" />
      },
      {
        title: "Investment Portfolio",
        description: "Comprehensive investment tools including asset allocation, risk assessment, and rebalancing recommendations",
        icon: <Brain className="w-5 h-5" />
      },
      {
        title: "Investment Analysis",
        description: "Historical performance review with AI-driven future projections and market insights",
        icon: <Calculator className="w-5 h-5" />
      },
      {
        title: "Loan Assessment",
        description: "Smart loan qualification calculator with multiple lender comparisons and approval odds",
        icon: <Calculator className="w-5 h-5" />
      },
      {
        title: "Retirement Planning",
        description: "Comprehensive retirement calculator with goal setting, scenario planning, and progress tracking",
        icon: <Brain className="w-5 h-5" />
      }
    ]
  }
];

export const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-50/30 to-purple-50/30 dark:via-blue-950/30 dark:to-purple-950/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            At Intellisync Solutions we build Communities. We believe that great work comes from sharing a Passion, not just the technical requirements, but the human stories that live behind every project.
          </p>
        </motion.div>

        <InfiniteCarousel speed={0.1} className="py-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={handleProjectClick}
              index={index}
            />
          ))}
        </InfiniteCarousel>
      </div>

      <ProjectFeaturesModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
