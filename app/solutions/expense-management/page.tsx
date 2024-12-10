"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LineChart, BarChart, Clock, FileText, PieChart, Shield, 
  Users, Scale, RefreshCcw, Database, Zap, CheckCircle 
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Real-Time Cash Flow Tracking",
    description: "Monitor your business's financial pulse with instant updates. Our system provides comprehensive tracking of income and expenses, complete with intelligent alerts for low balances and unusual spending patterns.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    points: [
      "Real-time transaction monitoring",
      "Smart alerts for unusual activities",
      "Customizable spending thresholds",
      "Visual cash flow analytics"
    ]
  },
  {
    icon: FileText,
    title: "Automated Invoicing",
    description: "Transform your billing process with smart automation. Our system handles everything from invoice generation to payment tracking, ensuring you get paid faster and more reliably.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000",
    points: [
      "Automated invoice generation",
      "Payment reminder scheduling",
      "Multiple currency support",
      "Custom invoice templates"
    ]
  },
  {
    icon: PieChart,
    title: "Financial Forecasting",
    description: "Make informed decisions with our advanced forecasting tools. Leverage historical data and AI-powered analytics to predict future financial trends and prepare for various scenarios.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    points: [
      "AI-powered trend analysis",
      "Scenario planning tools",
      "Revenue forecasting",
      "Budget optimization"
    ]
  },
  {
    icon: Users,
    title: "Integrated Payroll",
    description: "Streamline your payroll operations with our comprehensive system. Handle everything from salary calculations to tax compliance in one unified platform.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    points: [
      "Automated tax calculations",
      "Multi-country compliance",
      "Employee self-service portal",
      "Direct deposit integration"
    ]
  },
  {
    icon: Scale,
    title: "Resource Allocation",
    description: "Optimize your resource distribution with intelligent allocation tools. Track project budgets and adjust resources in real-time to maximize efficiency.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    points: [
      "Project budget tracking",
      "Resource utilization metrics",
      "Cost optimization tools",
      "Performance analytics"
    ]
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Protect your financial health with proactive risk management. Identify potential issues before they become problems and maintain robust financial security.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1000",
    points: [
      "Risk assessment tools",
      "Compliance monitoring",
      "Fraud detection",
      "Audit trail maintenance"
    ]
  }
];

const valueProps = [
  {
    icon: Zap,
    title: "Save Time & Effort",
    description: "Reduce manual work by up to 75% with smart automation",
    stats: "75% reduction in processing time"
  },
  {
    icon: CheckCircle,
    title: "Reduce Errors",
    description: "Achieve 99.9% accuracy in financial operations",
    stats: "99.9% accuracy rate"
  },
  {
    icon: LineChart,
    title: "Better Decisions",
    description: "Make data-driven decisions with real-time insights",
    stats: "30% improvement in decision making"
  },
  {
    icon: BarChart,
    title: "Future-Ready",
    description: "Scale your operations with enterprise-grade features",
    stats: "Unlimited scalability"
  }
];

export default function ExpenseManagement() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Smart Expense Management System
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Transform your financial operations with our comprehensive expense management solution
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 bg-white text-primary border border-primary rounded-lg hover:bg-gray-50 transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="space-y-24"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
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
                    <feature.icon className="w-12 h-12 text-primary" />
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
              ))}
            </motion.div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
              <p className="text-lg text-gray-600">Experience the power of intelligent expense management</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valueProps.map((prop, index) => (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow text-center">
                    <CardHeader>
                      <prop.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                      <CardTitle className="text-xl mb-2">{prop.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{prop.description}</p>
                      <p className="text-2xl font-bold text-primary">{prop.stats}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}