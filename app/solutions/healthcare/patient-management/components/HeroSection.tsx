"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [-20, 0, -20],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-20 left-1/4 w-32 h-32 bg-primary/10 rounded-full filter blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
          className="absolute top-40 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full filter blur-2xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-primary/10 rounded-full">
            <Heart className="w-8 h-8 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Patient Management System
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Transform your healthcare facility with our comprehensive patient management solution
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl hover:shadow-primary/20">
            Get Started
          </button>
          <button className="px-8 py-3 bg-white text-primary border border-primary rounded-lg hover:bg-gray-50 transition-colors">
            Watch Demo
          </button>
        </div>
      </motion.div>
    </section>
  );
}