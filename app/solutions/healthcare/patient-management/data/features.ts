import { ClipboardList, BarChart3, Users2, Smartphone, QrCode, HeadphonesIcon } from "lucide-react";
import { FeatureType } from "../types";


export const features: FeatureType[] = [
  {
    icon: ClipboardList,
    title: "Online Survey System",
    description: "Comprehensive digital survey platform designed specifically for healthcare facilities to gather patient feedback, measure satisfaction, and track quality metrics.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000",
    points: [
      "Customizable survey templates",
      "Real-time response collection",
      "Automated follow-ups",
      "Multi-language support"
    ]
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Powerful analytics engine that transforms patient feedback into actionable insights, helping healthcare providers improve service quality and patient outcomes.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1000",
    points: [
      "Predictive analytics",
      "Patient satisfaction metrics",
      "Treatment outcome analysis",
      "Performance benchmarking"
    ]
  },
  {
    icon: Users2,
    title: "360° Feedback System",
    description: "Holistic feedback system that captures insights from patients, staff, and healthcare providers to ensure comprehensive quality improvement.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
    points: [
      "Multi-stakeholder feedback",
      "Peer review system",
      "Department-wise analysis",
      "Continuous improvement tracking"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Mobile-first platform ensuring seamless feedback collection and access to patient data across all devices, perfect for modern healthcare environments.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
    points: [
      "Native mobile apps",
      "Cross-platform compatibility",
      "Offline functionality",
      "Real-time notifications"
    ]
  },
  {
    icon: QrCode,
    title: "QR Integration",
    description: "Innovative QR-based system for instant feedback collection at various touchpoints throughout the patient journey.",
    image: "https://mydia.ai/wp-content/uploads/2021/10/QR-code-automation-solutions.png",
    points: [
      "Point-of-care feedback",
      "Contactless interaction",
      "Location-specific insights",
      "Quick deployment"
    ]
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support",
    description: "Dedicated support team providing comprehensive assistance through multiple channels to ensure smooth system operation.",
    image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&q=80&w=1000",
    points: [
      "24/7 technical support",
      "Multi-channel assistance",
      "Training programs",
      "Regular system updates"
    ]
  }
];