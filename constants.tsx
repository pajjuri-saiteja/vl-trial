
import { Project, Service, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'serenity-villa',
    title: 'The Serenity Villa',
    category: 'Residential Architecture',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    description: 'A masterpiece of contemporary minimalism, the Serenity Villa balances raw architectural elements with soft, layered textiles to create a haven of quiet luxury.',
    approach: 'We focused on capturing natural light at different times of the day, using floor-to-ceiling glass and reflective stone surfaces.',
    materials: ['Carrara Marble', 'Brushed Brass', 'European Oak', 'Silk Textiles'],
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687960-4a2139519951?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&q=80&w=1200'
    ],
    testimonial: {
      quote: "VL Interiors turned our vision into a reality that exceeded every expectation. Every room feels like a piece of art.",
      author: "Eleanor Vance"
    }
  },
  {
    id: '2',
    slug: 'urban-calm',
    title: 'Urban Calm Apartment',
    category: 'Apartment Styling',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    description: 'A sophisticated urban retreat in the heart of the city, focusing on space optimization without compromising on high-end aesthetic value.',
    approach: 'Custom built-in furniture was integrated to maximize the 120sqm footprint while maintaining an airy, open-plan flow.',
    materials: ['Walnut Veneer', 'Velvet', 'Polished Concrete', 'Glass'],
    gallery: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: '3',
    slug: 'olive-penthouse',
    title: 'The Olive Penthouse',
    category: 'Luxury Living',
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&q=80&w=1200',
    description: 'Inspired by Mediterranean palettes, this penthouse uses deep olive tones and stone textures to evoke a sense of grounded elegance.',
    approach: 'The use of organic shapes in the furniture selection softens the sharp lines of the building architecture.',
    materials: ['Limestone', 'Travertine', 'Linen', 'Cast Iron'],
    gallery: [
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: '4',
    slug: 'maison-lumiere',
    title: 'Maison Lumière',
    category: 'Heritage Renovation',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=1200',
    description: 'A careful restoration of a 19th-century estate, blending historical moldings with avant-garde lighting and contemporary Italian furniture.',
    approach: 'Preservation was key. We restored original features while seamlessly integrating modern smart home technology.',
    materials: ['Antique Oak', 'Crystal', 'Plaster', 'Gold Leaf'],
    gallery: [
      'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&q=80&w=1200'
    ]
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Luxury Residential Interiors',
    description: 'Tailored interior solutions for high-end homes that prioritize both aesthetic excellence and comfort.',
    icon: 'home'
  },
  {
    title: 'Apartment Styling',
    description: 'Curated styling services to transform urban apartments into sophisticated personal sanctuaries.',
    icon: 'layout'
  },
  {
    title: 'Space Planning & 3D Visualization',
    description: 'Photorealistic renderings and strategic layout planning to bring your project to life before execution.',
    icon: 'layers'
  },
  {
    title: 'Custom Furniture & Décor',
    description: 'Bespoke furniture design and sourcing of exclusive art and décor pieces for a unique signature look.',
    icon: 'palette'
  },
  {
    title: 'Renovation & Turnkey Projects',
    description: 'Full-service management from initial concept to the final reveal, ensuring a seamless transformation.',
    icon: 'key'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    content: "The attention to detail and understanding of luxury living is unparalleled. Our home finally feels complete.",
    author: "Julian Thorne",
    role: "Property Developer"
  },
  {
    id: 2,
    content: "VL Interiors doesn't just design spaces; they design experiences. The process was as elegant as the result.",
    author: "Sophia Laurent",
    role: "Creative Director"
  },
  {
    id: 3,
    content: "Professional, inspired, and truly attentive to our lifestyle needs. A remarkable journey from start to finish.",
    author: "Marcus Aurelius",
    role: "Private Investor"
  }
];
