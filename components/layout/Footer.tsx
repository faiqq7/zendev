"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">Zen</span>Dev Co.
            </h3>
            <p className="text-gray-300 mb-4">
              Transforming ideas into exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#technologies" className="text-gray-300 hover:text-primary transition-colors">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#values" className="text-gray-300 hover:text-primary transition-colors">
                  Our Values
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <a href="mailto:contact@zendev.com" className="text-gray-300 hover:text-primary transition-colors">
                  contact@zendevcorporate.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                <span className="text-gray-300">Global Presence</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} ZenDev Corporation. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}