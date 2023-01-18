import { StaticImageData } from "next/image";

export type BologTypes = {
  date: string;
  comments: number;
  img: string | StaticImageData;
  title: string;
};
