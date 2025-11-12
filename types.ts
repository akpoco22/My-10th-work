import type { ReactNode } from 'react';

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  // Fix: Use `ReactNode` type and import it to resolve the "Cannot find namespace 'React'" error.
  icon: ReactNode;
}

export interface Testimonial {
  id: string;
  customerName: string;
  quote: string;
  videoUrl: string;
  generating?: boolean;
}
