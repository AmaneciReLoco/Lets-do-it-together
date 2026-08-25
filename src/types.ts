export interface ProjectInfo {
  name: string;
  slogan: string;
  city: string;
  country: string;
  introduction: string;
  historyAndOrigin: string;
  reasonWhy: string;
  macroObjective: string;
  specificObjectives: string[];
  mission: string;
  vision: string;
}

export interface WeeklyEntry {
  id: string;
  weekNumber: number;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  tags: string[];
  highlights: string[];
  imageUrl: string;
  imageAlt: string;
  multimediaType: 'series' | 'music' | 'webcomic' | 'icfes';
}

export interface NewsTip {
  id: string;
  category: 'tip' | 'noticia' | 'recurso' | 'icfes';
  title: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: string;
  tags: string[];
  imageUrl: string;
  videoUrl?: string;
  sourceUrl?: string;
  sourceCitation?: string;
}

export interface IcfesQuestion {
  id: number;
  context: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
