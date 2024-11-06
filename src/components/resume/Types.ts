import { HTMLAttributes } from "react";

export interface ResumeProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  desc: string;
  type: "experience" | "education";
}
