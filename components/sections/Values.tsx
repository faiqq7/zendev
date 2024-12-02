"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart, Users, Shield, Lightbulb, Target } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our interactions and decisions"
  },
  {
    icon: Users,
    title: "Transparency",
    description: "Open communication and honest feedback drive our relationships"
  },
  {
    icon: Heart,
    title: "Steward Leadership",
    description: "Putting people first and nurturing growth in every team member"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly pushing boundaries and embracing new technologies"
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Delivering exceptional quality in everything we do"
  }
];

export default function Values() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="values" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The principles that guide us in delivering excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all group"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}