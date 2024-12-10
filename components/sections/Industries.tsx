"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, PiggyBank, Heart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const industries = [
  {
    id: "healthcare",
    title: "Healthcare",
    icon: Heart,
    description: "Revolutionizing healthcare with innovative solutions",
    solutions: []
  },
  {
    id: "fintech",
    title: "Fintech",
    icon: PiggyBank,
    description: "Transforming financial technology landscape",
    solutions: [
      {
        id: "expense-management",
        title: "Expense Management System",
        description: "Comprehensive expense tracking and management solution",
        href: "/solutions/expense-management"
      }
    ]
  }
];

export default function Industries() {
  const [activeTab, setActiveTab] = useState("fintech");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="industries" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tailored solutions for diverse industry needs
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Custom Tab List */}
          <div className="flex justify-center space-x-4">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === industry.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                <industry.icon className={`w-5 h-5 mr-2 ${
                  activeTab === industry.id ? "text-white" : "text-primary"
                }`} />
                {industry.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {industries.find(i => i.id === activeTab)?.solutions.map((solution) => (
              <Link key={solution.id} href={solution.href}>
                <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{solution.title}</CardTitle>
                    <CardDescription>{solution.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
            {industries.find(i => i.id === activeTab)?.solutions.length === 0 && (
              <Card className="col-span-full">
                <CardContent className="pt-6 text-center">
                  <p className="text-gray-600">Solutions coming soon...</p>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}