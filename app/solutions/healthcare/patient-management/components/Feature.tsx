"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { FeatureType } from "../types"

interface FeatureProps {
  feature: FeatureType;
  index: number;
  inView: boolean;
}

export default function Feature({ feature, index, inView }: FeatureProps) {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col ${
        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } gap-12 items-center`}
    >
      <div className="lg:w-1/2">
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="lg:w-1/2 space-y-6">
        <Icon className="w-12 h-12 text-primary" />
        <h3 className="text-3xl font-bold text-gray-900">{feature.title}</h3>
        <p className="text-lg text-gray-600">{feature.description}</p>
        <ul className="space-y-3">
          {feature.points.map((point, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}