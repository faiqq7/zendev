"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AlertCircle, Clock, Globe, MessageSquare, XCircle, Users } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Time Zone Differences",
    description: "We bridge the gap across time zones with flexible scheduling and 24/7 availability"
  },
  {
    icon: MessageSquare,
    title: "Communication Challenges",
    description: "Clear, consistent communication channels with dedicated project managers"
  },
  {
    icon: Users,
    title: "Poor Project Management",
    description: "Experienced project leads ensuring smooth workflow and delivery"
  },
  {
    icon: AlertCircle,
    title: "Longer Turnaround",
    description: "Optimized processes for quick iterations and faster delivery"
  },
  {
    icon: XCircle,
    title: "Delayed Delivery",
    description: "Strict adherence to timelines with regular progress updates"
  },
  {
    icon: Globe,
    title: "Poor Coordination",
    description: "Seamless integration between teams with modern collaboration tools"
  }
];

export default function Problems() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="problems" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Say Goodbye to Offshore Development Problems!
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We understand and solve the common challenges that companies face with their global development teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <problem.icon className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{problem.title}</h3>
              </div>
              <p className="text-gray-600">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}