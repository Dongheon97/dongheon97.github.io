export interface Project {
  slug: string;
  title: string;
  one_liner: string;
  tags: string[];
  timeframe?: string;
  role?: string;
  team?: string;
  stack?: string[];
  problem: string[];
  approach: string[];
  contributions: string[];
  results: string[];
  media: {
    type: 'youtube' | 'vimeo';
    embed_url: string;
    description?: string;
  };
  sub_media?: {
    type: 'youtube' | 'vimeo';
    embed_url: string;
    description?: string;
  };
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
    slides?: string;
  };
  thumbnail: string;
}

export interface SiteContent {
  hero: {
    name: string;
    role_title: string;
    one_liner: string;
    location: string;
    profile_image: string;
    links: {
      email: string;
      github: string;
      linkedin: string;
      cv_pdf: string;
    };
  };
  expertise: {
    categories: Array<{
      title: string;
      keywords: string[];
      highlight_line: string;
    }>;
  };
  projects: Project[];
  publications: Array<{
    title: string;
    authors: string;
    venue: string;
    year: string;
    doi_url?: string;
    pdf_path?: string;
  }>;
  experience: Array<{
    org: string;
    title: string;
    start: string;
    end?: string;
    location: string;
    bullets: string[];
  }>;
  education: Array<{
    school: string;
    degree: string;
    location: string;
    start: string;
    end: string;
    bullets: string[];
  }>;
  awards: Array<{
    name: string;
    org: string;
    year: string;
    note: string;
  }>;
}

import siteContent from './site.json';

const typedContent: SiteContent = siteContent as any;
export default typedContent;
