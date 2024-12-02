"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Cloud, Code, Cog, LineChart, Layout } from "lucide-react";
import { containerVariants, itemVariants, cardHover, iconSpin } from "../animations/variants";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to power your digital transformation",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to your unique business needs and challenges",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: Cog,
    title: "System Integration",
    description: "Seamless integration of various systems and applications for improved efficiency",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: LineChart,
    title: "Strategic Consulting",
    description: "Expert guidance to help you make informed technology decisions and optimize processes",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: Layout,
    title: "Custom Software",
    description: "Bespoke software solutions designed and built to match your exact specifications",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive solutions to drive your business forward
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-48"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6 bg-white">
                <div className="flex items-center mb-4">
                  <motion.div
                    variants={iconSpin}
                    className="w-6 h-6 text-primary mr-3"
                  >
                    <service.icon />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}