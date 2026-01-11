import type { LucideProps } from 'lucide-react';

export interface Link {
  label: string;
  path: string;
}

export interface FooterSection {
  title: string;
  links: Link[];
}

export interface socialLink {
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  href: string;
  label: string;
}

interface Entity {
  id: number;
  name: string;
  image: string;
}

export type Product = Entity & {
  description: string[];
};

export type Partner = Entity & {
  description: string;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
};

export type Faq = {
  id: number;
  question: string;
  answer: string;
};

export type ImportanceItem = Entity;
export type Sponsor = Entity;
