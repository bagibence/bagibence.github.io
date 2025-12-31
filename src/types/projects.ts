import type { ImageMetadata } from 'astro';

export interface Project {
  category: 'research' | 'software' | 'lab-rotation' | 'hackathon';
  title: string;
  description: string;
  image?: string | ImageMetadata;
  imageAlt?: string;
  time?: string;
  supervisor?: string;
  company?: string;
  school?: string;
  presentedAt?: string;
  publishedIn?: string;
  paperUrl?: string;
  repoUrl?: string;
  dataUrl?: string;
}
