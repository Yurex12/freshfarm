import { Facebook, Instagram, Twitter } from 'lucide-react';
import type {
  Faq,
  FooterSection,
  ImportanceItem,
  Link,
  Partner,
  Product,
  socialLink,
  Sponsor,
  Testimonial,
} from '../types/types';

export const links: Link[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export const footerSections: FooterSection[] = [
  {
    title: 'menu',
    links: [
      { label: 'Gallery', path: '#' },
      { label: 'Category', path: '#' },
      { label: 'Best Offer', path: '#' },
      { label: 'Promo', path: '#' },
    ],
  },
  {
    title: 'faq',
    links: [
      { label: 'Payment', path: '#' },
      { label: 'Order', path: '#' },
      { label: 'Manage Delivery', path: '#' },
      { label: 'Contact us', path: '#' },
    ],
  },
  {
    title: 'support',
    links: [
      { label: 'Call of delivery', path: '#' },
      { label: 'Online chat', path: '#' },
      { label: 'Call center', path: '#' },
    ],
  },
];

export const socialLinks: socialLink[] = [
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Facebook, href: '#', label: 'Facebook' },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Wheat',
    image: '/wheat.jpg',
    description: [
      'Our wheat is high quality, planted organically without chemical fertilizer.',
      'Our wheat is high in fiber and carbohydrate.',
    ],
  },
  {
    id: 2,
    name: 'Rice',
    image: '/rice.jpg',
    description: [
      'Our rice is high quality, planted organically without chemical fertilizer.',
      'Our rice is high in fiber and carbohydrate.',
    ],
  },
  {
    id: 3,
    name: 'Pumpkin',
    image: '/pumpkin.jpg',
    description: [
      'Our pumpkin is high quality, planted organically without chemical fertilizer.',
      'Our pumpkin is high in fiber and carbohydrate.',
    ],
  },
  {
    id: 4,
    name: 'Vegetable',
    image: '/vegetable.jpg',
    description: [
      'Our vegetable is high quality, planted organically without chemical fertilizer.',
      'Our vegetable is high in fiber and carbohydrate.',
    ],
  },
];

export const partners: Partner[] = [
  {
    id: 1,
    name: 'Input Supplier Companies',
    description:
      'We collaborate with trusted input supplier companies to provide high-quality seeds, fertilizers, and farming inputs.',
    image: '/suppliers.png',
  },
  {
    id: 2,
    name: 'Govt and NGO',
    description:
      'We work closely with government agencies and non-governmental organizations to promote smart farming initiatives.',
    image: '/ngo.png',
  },
  {
    id: 3,
    name: 'Farmers',
    description:
      'We partner directly with farmers, offering guidance, modern farming techniques, and data-driven insights to improve farming.',
    image: '/farmers.png',
  },
];

export const importance: ImportanceItem[] = [
  {
    id: 1,
    name: 'Farm Management',
    image: '/management.png',
  },
  {
    id: 2,
    name: 'Market',
    image: '/market.png',
  },
  {
    id: 3,
    name: 'Agri-Financing',
    image: '/finance.png',
  },
  {
    id: 4,
    name: 'Advisory & Knowledge',
    image: '/knowledge.png',
  },
];

export const sponsors: Sponsor[] = [
  { id: 1, name: 'Terraform', image: '/sponsor1.svg' },
  { id: 2, name: 'GreenPulse', image: '/sponsor2.svg' },
  { id: 3, name: 'AgroCore', image: '/sponsor3.svg' },
  { id: 4, name: 'BioField', image: '/sponsor4.svg' },
  { id: 5, name: 'Lumina Flora', image: '/sponsor5.svg' },
  { id: 6, name: 'Rooted AI', image: '/sponsor6.svg' },
  { id: 7, name: 'Terraform', image: '/sponsor1.svg' },
  { id: 8, name: 'GreenPulse', image: '/sponsor2.svg' },
  { id: 9, name: 'AgroCore', image: '/sponsor3.svg' },
  { id: 10, name: 'BioField', image: '/sponsor4.svg' },
  { id: 11, name: 'Lumina Flora', image: '/sponsor5.svg' },
  { id: 12, name: 'Rooted AI', image: '/sponsor6.svg' },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Navi James',
    role: 'Operation Manager, Santos',
    image: '/navi.jpg',
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam reprehenderit inventore tempora voluptatibus quasi quae laudantium officia. Maxime, harum illum?',
  },
  {
    id: 2,
    name: 'Sheriff Amar',
    role: 'Managing Director, Pumket',
    image: '/sheriff.jpg',
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam reprehenderit inventore tempora voluptatibus quasi quae laudantium officia. Maxime, harum illum?',
  },
  {
    id: 3,
    name: 'Devina Devillo',
    role: 'Founder, Muuske',
    image: '/davina.jpg',
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam reprehenderit inventore tempora voluptatibus quasi quae laudantium officia. Maxime, harum illum?',
  },
  {
    id: 4,
    name: 'Randy Orton',
    role: 'Co-Founder, Tokyo',
    image: '/randy.jpg',
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam reprehenderit inventore tempora voluptatibus quasi quae laudantium officia. Maxime, harum illum?',
  },
  {
    id: 5,
    name: 'Mike Fury',
    role: 'Sales Manager, Oslo',
    image: '/mike.jpg',
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam reprehenderit inventore tempora voluptatibus quasi quae laudantium officia. Maxime, harum illum?',
  },
  {
    id: 6,
    name: 'D Pamela',
    role: 'Professor, Berlin',
    image: '/pamela.jpg',
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam reprehenderit inventore tempora voluptatibus quasi quae laudantium officia. Maxime, harum illum?',
  },
];

export const faqs: Faq[] = [
  {
    id: 1,
    question: 'Where do your farm products come from?',
    answer:
      'All our products are grown and harvested directly from our own farms using sustainable and environmentally friendly farming practices to ensure freshness and quality.',
  },
  {
    id: 2,
    question: 'Are your products organic?',
    answer:
      'Yes, we prioritize organic farming methods and avoid harmful chemicals. Some products are fully certified organic, while others follow strict natural growing standards.',
  },
  {
    id: 3,
    question: 'How fresh are your products when delivered?',
    answer:
      'Our produce is harvested and delivered within the shortest possible time to ensure maximum freshness, taste, and nutritional value.',
  },
  {
    id: 4,
    question: 'Do you offer home delivery?',
    answer:
      'Yes, we offer reliable home delivery services so you can enjoy fresh farm products without leaving your home.',
  },
  {
    id: 5,
    question: 'Can I place bulk or wholesale orders?',
    answer:
      'Absolutely. We support bulk and wholesale orders for restaurants, retailers, and events. Please contact us directly for custom pricing and arrangements.',
  },
];
