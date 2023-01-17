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
export interface ProductProps {
  id: 1;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
  breakPoints?: { sm: number; md: number; lg: number };
}
export interface ButtonProps {
  name: string;
  color?: number;
  size: string;
  action?: () => void;
}
