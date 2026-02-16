
import { Project, Skill } from './types';

export const GOLDEN_RATIO = 1.61803398875;

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Visual Identity: Luxe Real Estate',
    description: 'A comprehensive branding project focusing on minimalist elegance and golden ratio based logo design.',
    image: 'https://picsum.photos/800/500?random=1',
    tags: ['Branding', 'Illustrator', 'Logo Design'],
    link: '#'
  },
  {
    id: '2',
    title: 'Performance Marketing: Eco-Flow',
    description: 'A data-driven digital marketing campaign that achieved 300% growth in organic reach through strategic SEO and social funnels.',
    image: 'https://picsum.photos/800/500?random=2',
    tags: ['Growth', 'SEO', 'Ad Strategy'],
    link: '#'
  },
  {
    id: '3',
    title: 'Digital Campaign: Urban Pulse',
    description: 'Creative direction and execution of a cross-platform digital marketing campaign with high-impact visual assets.',
    image: 'https://picsum.photos/800/500?random=3',
    tags: ['Campaign', 'Graphic Design', 'Social Media'],
    link: '#'
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'Graphic Design',
    items: ['Visual Identity', 'Typography', 'Logo Design', 'Print Media']
  },
  {
    category: 'Digital Marketing',
    items: ['SEO & SEM', 'Social Media Strategy', 'Content Marketing', 'Analytics']
  },
  {
    category: 'Creative Tools',
    items: ['Adobe Creative Suite', 'Figma', 'Canvas', 'Motion Graphics']
  },
  {
    category: 'Growth Strategy',
    items: ['Conversion Optimization', 'Email Funnels', 'PPC Management', 'Brand Strategy']
  }
];

export const BIO = "Fahad Ahmed Ornob is a creative Graphic Designer and Digital Marketing strategist. He combines visual storytelling with data-driven growth strategies to build compelling brand identities and high-performing digital campaigns.";
