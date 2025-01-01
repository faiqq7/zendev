"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { textReveal } from "../animations/variants";

const FloatingElement = ({
  delay,
  duration,
  size,
  color,
  left,
  top,
  blur,
}: any) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      opacity: [0.5, 1, 0.5],
    }}
    transition={{
      duration,
      repeat: Infinity,
      repeatType: "reverse",
      delay,
    }}
    className={`absolute ${left} ${top} w-${size} h-${size} rounded-full ${color} filter blur-${blur} mix-blend-multiply`}
    style={{ zIndex: 0 }}
  />
);

const GridPattern = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `
          linear-gradient(90deg, #41bd7e 1px, transparent 0),
          linear-gradient(180deg, #41bd7e 1px, transparent 0)
        `,
        backgroundSize: "40px 40px",
      }}
    />
  </div>
);

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    { text: "Your Innovation Hub", emoji: "💡" },
    { text: "Your Innovation Partners", emoji: "💡" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev === 0 ? 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
    >
      {/* Animated Background Elements */}
      <GridPattern />

      {/* Floating Elements */}
      <FloatingElement
        delay={0}
        duration={4}
        size="32"
        color="bg-primary/10"
        left="left-1/4"
        top="-top-16"
        blur="xl"
      />
      <FloatingElement
        delay={1}
        duration={5}
        size="48"
        color="bg-secondary/10"
        left="right-1/3"
        top="top-32"
        blur="2xl"
      />
      <FloatingElement
        delay={2}
        duration={6}
        size="40"
        color="bg-primary/5"
        left="left-1/3"
        top="bottom-32"
        blur="xl"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-white/0 via-white/80 to-white pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={textReveal}
          className="space-y-8"
        >
          {/* Animated Title */}
          <div className="relative h-20 mb-20">
            <AnimatePresence mode="wait">
              <motion.h1
                key={titleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-4xl md:text-6xl font-bold absolute w-full flex items-center justify-center gap-2"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  {titles[titleIndex].text}
                </span>
                <span className="text-[#FFD700]">
                  {titles[titleIndex].emoji}
                </span>
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Description with Gradient Border */}
          <motion.div
            variants={textReveal}
            className="relative mx-auto max-w-3xl p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-gradient"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(65, 189, 126, 0.1), rgba(29, 57, 83, 0.1))",
            }}
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Bridging global expertise with Asian innovation, we deliver
              premium quality solutions that won't break the bank. Operating
              across Eastern and Pacific time zones, we're your 24/7 innovation
              partners.
            </p>
          </motion.div>

          {/* Animated CTA Button */}
          <motion.div variants={textReveal} className="mt-12">
            <motion.a
              href="#start"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-medium rounded-full text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Stats with Gradient Cards */}
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
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-xl transition-all group-hover:blur-2xl" />
                <div className="relative bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-200">
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
