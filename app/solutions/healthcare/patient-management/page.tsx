"use client";

import { useInView } from "react-intersection-observer";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
import ValueCard from "./components/ValueCard";
import { features } from "./data/features";
import { valueProps } from "./data/valueProps";
import { motion } from "framer-motion";

export default function PatientManagement() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />

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
                <Feature 
                  key={feature.title}
                  feature={feature}
                  index={index}
                  inView={inView}
                />
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
              <p className="text-lg text-gray-600">Experience the power of intelligent patient management</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valueProps.map((prop, index) => (
                <ValueCard
                  key={prop.title}
                  prop={prop}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}