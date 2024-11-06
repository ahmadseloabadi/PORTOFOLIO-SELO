import { HTMLAttributes } from "react";

export interface ProjectProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  image: string;
  technologies: Array<string>;
  category: Array<string>;
  demoUrl: string;
  githubUrl: string;
  features: Array<string>;
}
