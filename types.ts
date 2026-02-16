
export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  approach: string;
  materials: string[];
  gallery: string[];
  testimonial?: {
    quote: string;
    author: string;
  };
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
}
