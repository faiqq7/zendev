"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ValuePropType } from "../types";

interface ValueCardProps {
  prop: ValuePropType;
  index: number;
  inView: boolean;
}

export default function ValueCard({ prop, index, inView }: ValueCardProps) {
  const Icon = prop.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow text-center">
        <CardHeader>
          <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-xl mb-2">{prop.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{prop.description}</p>
          <p className="text-2xl font-bold text-primary">{prop.stats}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}