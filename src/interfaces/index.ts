import { ReactNode } from "react";
export interface MainLayOuteProps {
  children: ReactNode;
}
export interface ProductsProps {
  products: {
    category: string;
    description: string;
    id: 1;
    image: string;
    price: number;
    rating: { rate: number; count: number };
    title: string;
  }[];
}
export interface CardProps {
  id: 1;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
  breakPoints?: { sm: number; md: number; lg: number };
}
export interface productProps {
  product: {
    category: string;
    description: string;
    id: 1;
    image: string;
    price: number;
    rating: { rate: number; count: number };
    title: string;
  };
}
export interface ButtonProps {
  name: string;
  color?: string;
  size: string;
  bgColor?: string;

  action?: () => void;
}
