import { HTMLAttributes } from "react";
import { LuGithub } from "react-icons/lu";
import { FaKaggle } from "react-icons/fa";

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  index: number;
  Icon: typeof LuGithub | typeof FaKaggle;
  href: string;
  color: string;
  label: string;
  bgColor: string;
  hoverColor: string;
}
