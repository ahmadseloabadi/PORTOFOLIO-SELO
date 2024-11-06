import { HTMLAttributes } from "react";
import { LuGithub } from "react-icons/lu";

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  index: number;
  Icon: typeof LuGithub;
  href: string;
  color: string;
  label: string;
  bgColor: string;
  hoverColor: string;
}
