import { HTMLAttributes } from "react";

export interface NavbarProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  href: string;
}
