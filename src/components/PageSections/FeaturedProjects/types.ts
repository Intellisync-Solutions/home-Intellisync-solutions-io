import { ReactNode } from 'react';

export interface ProjectFeature {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
  features?: ProjectFeature[];
  demoUrl?: string;
  githubUrl?: string;
}
