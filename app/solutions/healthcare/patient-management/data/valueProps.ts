import { Zap, HeartPulse, LineChart, Shield } from "lucide-react";
import { ValuePropType } from "../types";

export const valueProps: ValuePropType[] = [
  {
    icon: Zap,
    title: "Enhanced Efficiency",
    description: "Streamline patient feedback collection and analysis",
    stats: "80% time saved"
  },
  {
    icon: HeartPulse,
    title: "Improved Care Quality",
    description: "Data-driven insights for better patient care",
    stats: "40% quality improvement"
  },
  {
    icon: LineChart,
    title: "Real-time Insights",
    description: "Instant access to patient feedback and analytics",
    stats: "Real-time monitoring"
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "HIPAA-compliant secure data management",
    stats: "100% compliance"
  }
];