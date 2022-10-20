type URL = string;
type Technology = string;

export interface Project {
  coverUrl: URL;
  id: number;
  images: URL[];
  internalId: string;
  internalUrl: string;
  name: string;
  order: number;
  show: boolean;
  technologies: Technology[];
  type: 'app' | 'e-commerce' | 'site';
  url: string;
  year: number;
}
