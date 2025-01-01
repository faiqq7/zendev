import { LucideIcon } from "lucide-react";

export interface FeatureType {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  points: string[];
}

export interface ValuePropType {
  icon: LucideIcon;
  title: string;
  description: string;
  stats: string;
}