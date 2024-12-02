"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building2, Users2, Target } from "lucide-react";

const models = [
  {
    icon: Building2,
    title: "Cost plus Model",
    description: "We set up a dedicated development center in the cost-plus model with an open kitchen concept. This model provides complete transparency and offers you the option to select your team, onboard them, and even transfer them to your payroll.",
    pricing: "A certain % above the CTC of candidate. Minimum: 15 people team commitment for 24 months",
    gradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    icon: Users2,
    title: "Team Augmentation Model",
    description: "Our team members join & get fully integrated with your engineering team to work in collaboration on tasks/modules basis. You have the flexibility to scale the team up and down based on your requirements.",
    pricing: "Monthly billing basis the people and rate card. Get in touch with us to get the rate card.",
    gradient: "from-purple-500/10 to-pink-500/10"
  },
  {
    icon: Target,
    title: "Turnkey Solution",
    description: "This is a fixed-price engagement model where the project requirements and total fixed cost are identified at the starting.",
    pricing: "Fixed cost basis the project requirements and features implemented",
    gradient: "from-orange-500/10 to-amber-500/10"
  }
];

export default function EngagementModels() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="start" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Engagement Models</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect engagement model that suits your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${model.gradient} transition-all duration-300 group-hover:scale-[0.98]`} />
              <div className="relative bg-white p-8 rounded-2xl shadow-md">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                    <model.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{model.title}</h3>
                <p className="text-gray-600 mb-6">{model.description}</p>
                <div className="border-t pt-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Pricing Model</h4>
                  <p className="text-sm text-gray-600">{model.pricing}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}