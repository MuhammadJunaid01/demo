import { StaticImageData } from "next/image";
import { ReactNode } from "react";
export interface MainLayOuteProps {
  children: ReactNode;
}
export interface HeroBannerProps {
  image: string | StaticImageData;
  button: ReactNode;
  title: string;
  heading: string;
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
  heading: string;
  isLoading: boolean;
  tabsData: { name: string }[];
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
