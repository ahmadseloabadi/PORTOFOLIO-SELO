import { HTMLAttributes } from "react";
import { LuGithub } from "react-icons/lu";

export interface HeroProps extends HTMLAttributes<HTMLDivElement> {
  Icon: typeof LuGithub;
  href: string;
  color: string;
  label: string;
  bgColor: string;
  hoverColor: string;
}
