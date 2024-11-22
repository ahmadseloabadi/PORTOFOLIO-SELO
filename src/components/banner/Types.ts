import { HTMLAttributes } from "react";
import { LuGithub } from "react-icons/lu";
import { FaKaggle } from "react-icons/fa";

export interface HeroProps extends HTMLAttributes<HTMLDivElement> {
  Icon: typeof LuGithub | typeof FaKaggle;
  href: string;
  color: string;
  label: string;
  bgColor: string;
  hoverColor: string;
}
