"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { textReveal } from "../animations/variants";

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Your Innovation Hub💡", "Your Innovation Partners💡"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev === 0 ? 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #41bd7e10 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute inset-0 bg-gradient-radial from-white/0 via-white/80 to-white" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={textReveal}
          className="space-y-8"
        >
          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-20 left-1/4 w-12 h-12 rounded-full bg-primary/10"
          />
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-20 right-1/4 w-8 h-8 rounded-full bg-secondary/10"
          />

          {/* Main Title */}
          <div className="h-20 relative">
            <AnimatePresence mode="wait">
              <motion.h1
                key={titleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-4xl md:text-6xl font-bold text-gray-900 absolute w-full"
              >
                {titles[titleIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Description */}
          <motion.p
            variants={textReveal}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Bridging global expertise with Asian innovation, we deliver premium quality solutions that won't break the bank. Operating across Eastern and Pacific time zones, we're your 24/7 innovation partners.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={textReveal}
            className="mt-8 flex justify-center gap-4"
          >
            <motion.a
              href="#start"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 px-8 py-3 text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "10+", label: "Years Experience" },
              { value: "200+", label: "Projects Delivered" },
              { value: "50+", label: "Global Clients" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}