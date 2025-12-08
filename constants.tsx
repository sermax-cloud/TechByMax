import {
  Code2,
  Globe,
  ShoppingCart,
  GraduationCap,
  Layout,
  Database,
  Users,
  BarChart3,
  Bot,
  Search,
  Briefcase,
  Building2,
  Cpu,
  Smartphone
} from 'lucide-react';
import { NavItem, Service, Project, Testimonial, Stat } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  // Web Development
  {
    id: 'corp-web',
    title: 'Corporate Websites',
    description: 'High-performance, visually stunning websites designed to build trust and convert visitors.',
    icon: Globe,
    features: ['Responsive Design', 'SEO Optimization', 'CMS Integration'],
    category: 'Web'
  },
  {
    id: 'ecom',
    title: 'E-commerce Solutions',
    description: 'Scalable online stores with secure payment gateways integration specifically for the Ghanaian market.',
    icon: ShoppingCart,
    features: ['Payment Integration (Paystack/Hubtel)', 'Inventory Management', 'User Dashboards'],
    category: 'Web'
  },
  // Enterprise
  {
    id: 'school-sys',
    title: 'School Management',
    description: 'Comprehensive digital systems for schools to manage students, fees, and academics efficiently.',
    icon: GraduationCap,
    features: ['Grade Reporting', 'Fee Tracking', 'Parent Portal'],
    category: 'Enterprise'
  },
  {
    id: 'erp',
    title: 'ERP Solutions',
    description: 'Custom Enterprise Resource Planning software to streamline complex business operations.',
    icon: Database,
    features: ['HR & Payroll', 'Supply Chain', 'Financial Reporting'],
    category: 'Enterprise'
  },
  // AI & Digital
  {
    id: 'ai-auto',
    title: 'AI Automation',
    description: 'Leverage artificial intelligence to automate repetitive tasks and enhance customer service.',
    icon: Bot,
    features: ['Chatbots', 'Workflow Automation', 'Data Analysis'],
    category: 'AI'
  },
  {
    id: 'branding',
    title: 'Digital Branding',
    description: 'Strategic brand identity design that positions your company as a market leader.',
    icon: Layout,
    features: ['Logo Design', 'Brand Strategy', 'UI/UX Design'],
    category: 'AI'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'FinTech Ghana',
    category: 'Web Application',
    description: 'A secure banking portal for a leading microfinance institution.',
    image: '/project-fintech.png',
    tags: ['React', 'Node.js', 'Security']
  },
  {
    id: '2',
    title: 'EduTrack Pro',
    category: 'SaaS Product',
    description: 'School management system currently used by 50+ schools in Accra.',
    image: '/project-edutrack.png',
    tags: ['SaaS', 'Dashboard', 'Mobile App']
  },
  {
    id: '3',
    title: 'CocoaExport AI',
    category: 'AI Automation',
    description: 'Predictive analytics tool for cocoa export logistics optimization.',
    image: 'https://picsum.photos/800/600?random=3',
    tags: ['Python', 'AI', 'Logistics']
  },
  {
    id: '4',
    title: 'Luxury Homes GH',
    category: 'Real Estate Website',
    description: 'Premium property listing platform with virtual tours.',
    image: 'https://picsum.photos/800/600?random=4',
    tags: ['UI/UX', 'Frontend', 'Gallery']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Kwame Asante',
    role: 'CEO',
    company: 'Asante Logistics',
    content: 'TechByMax transformed our operational efficiency. Their custom ERP solution saved us countless hours of manual work.',
    image: '/testimonial-kwame.png'
  },
  {
    id: '2',
    name: 'Sarah Osei',
    role: 'Director',
    company: 'Beacon International School',
    content: 'The school management system they built is intuitive and robust. Parents love the easy access to grades and fee payments.',
    image: '/testimonial-sarah.png'
  },
  {
    id: '3',
    name: 'Emmanuel Darko',
    role: 'Founder',
    company: 'TechStart Accra',
    content: 'World-class design standards. They understood our vision perfectly and delivered a website that stands out globally.',
    image: '/testimonial-emmanuel.png'
  }
];

export const STATS: Stat[] = [
  { label: 'Projects Delivered', value: '150+', icon: Code2 },
  { label: 'Enterprise Clients', value: '40+', icon: Building2 },
  { label: 'Customer Satisfaction', value: '99%', icon: Users },
];