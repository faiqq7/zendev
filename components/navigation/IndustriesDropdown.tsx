"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Building2, PiggyBank, Heart, Briefcase, Globe, Cpu } from "lucide-react";

const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Heart,
    description: "Digital solutions for modern healthcare",
    solutions: [
      { name: "Patient Management System", href: "/solutions/healthcare/patient-management" },
      { name: "Telemedicine Platform", href: "/solutions/healthcare/telemedicine" }
    ]
  },
  {
    id: "fintech",
    name: "Fintech",
    icon: PiggyBank,
    description: "Revolutionary financial technology",
    solutions: [
      { name: "Expense Management System", href: "/solutions/expense-management" },
      { name: "Payment Gateway", href: "/solutions/fintech/payment-gateway" }
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: Building2,
    description: "Enterprise-grade business solutions",
    solutions: [
      { name: "ERP System", href: "/solutions/enterprise/erp" },
      { name: "CRM Platform", href: "/solutions/enterprise/crm" }
    ]
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    icon: Globe,
    description: "Next-gen e-commerce solutions",
    solutions: [
      { name: "Marketplace Platform", href: "/solutions/ecommerce/marketplace" },
      { name: "Inventory Management", href: "/solutions/ecommerce/inventory" }
    ]
  },
  {
    id: "tech",
    name: "Technology",
    icon: Cpu,
    description: "Cutting-edge tech solutions",
    solutions: [
      { name: "Cloud Infrastructure", href: "/solutions/tech/cloud" },
      { name: "AI/ML Solutions", href: "/solutions/tech/ai-ml" }
    ]
  }
];

export default function IndustriesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-secondary hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1">
        Industries
        <ChevronRight className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-[600px] backdrop-blur-md bg-white/90 rounded-2xl shadow-2xl border border-white/20 grid lg:grid-cols-[300px,1fr] overflow-hidden"
            style={{
              backgroundImage: 'radial-gradient(circle at top right, rgba(65, 189, 126, 0.05), transparent)',
            }}
          >
            {/* Industries List */}
            <div className="backdrop-blur-sm bg-gray-50/50 p-4">
              {industries.map((industry) => (
                <motion.div
                  key={industry.id}
                  onMouseEnter={() => setActiveIndustry(industry)}
                  whileHover={{ x: 4 }}
                  className={`p-3 rounded-xl cursor-pointer transition-all ${
                    activeIndustry.id === industry.id
                      ? 'bg-white/80 shadow-lg shadow-primary/5'
                      : 'hover:bg-white/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      activeIndustry.id === industry.id 
                        ? 'bg-primary/10' 
                        : 'bg-gray-100/50'
                    }`}>
                      <industry.icon className={`w-5 h-5 ${
                        activeIndustry.id === industry.id ? 'text-primary' : 'text-gray-500'
                      }`} />
                    </div>
                    <div>
                      <h3 className={`font-medium ${
                        activeIndustry.id === industry.id ? 'text-primary' : 'text-gray-700'
                      }`}>
                        {industry.name}
                      </h3>
                      <p className="text-sm text-gray-500">{industry.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Solutions Panel */}
            <div className="p-6 bg-gradient-to-br from-white/50 to-gray-50/30">
              <div className="relative">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <activeIndustry.icon className="w-5 h-5 text-primary" />
                  {activeIndustry.name} Solutions
                </h3>
                <div className="grid gap-3">
                  {activeIndustry.solutions.map((solution) => (
                    <Link
                      key={solution.href}
                      href={solution.href}
                    >
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="group p-4 rounded-xl hover:bg-white/80 transition-all hover:shadow-lg hover:shadow-primary/5 border border-transparent hover:border-primary/10"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700 group-hover:text-primary transition-colors">
                            {solution.name}
                          </span>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}