"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const technologies = {
  Backend: [
    { name: "Node.js", icon: "/icons/backend/nodejs.svg" },
    { name: "Python", icon: "/icons/backend/python.svg" },
    { name: "Java", icon: "/icons/backend/java.svg" },
    { name: ".NET", icon: "/icons/backend/dotnet.svg" },
    { name: "Go", icon: "/icons/backend/go.svg" },
    { name: "PHP", icon: "/icons/backend/php.svg" }
  ],
  Frontend: [
    { name: "React", icon: "/icons/frontend/react.svg" },
    { name: "Vue.js", icon: "/icons/frontend/vue.svg" },
    { name: "Angular", icon: "/icons/frontend/angular.svg" },
    { name: "Next.js", icon: "/icons/frontend/nextjs.svg" },
    { name: "TypeScript", icon: "/icons/frontend/typescript.svg" }
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: "/icons/cloud/aws.svg" },
    { name: "Azure", icon: "/icons/cloud/azure.svg" },
    { name: "Docker", icon: "/icons/cloud/docker.svg" },
    { name: "Kubernetes", icon: "/icons/cloud/kubernetes.svg" },
    { name: "Jenkins", icon: "/icons/cloud/jenkins.svg" },
    { name: "Terraform", icon: "/icons/cloud/terraform.svg" }
  ],
  "Testing & QA": [
    { name: "Jest", icon: "/icons/testing/jest.svg" },
    { name: "Cypress", icon: "/icons/testing/cypress.svg" },
    { name: "Selenium", icon: "/icons/testing/selenium.svg" },
    { name: "JUnit", icon: "/icons/testing/junit.svg" }
  ],
  Databases: [
    { name: "MongoDB", icon: "/icons/databases/mongodb.svg" },
    { name: "PostgreSQL", icon: "/icons/databases/postgresql.svg" },
    { name: "MySQL", icon: "/icons/databases/mysql.svg" },
    { name: "Redis", icon: "/icons/databases/redis.svg" }
  ]
};

export default function Technologies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="technologies" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies We Master</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our expertise spans across modern technologies, enabling us to deliver cutting-edge solutions
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(technologies).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {techs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-12 h-12 mb-2 relative">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}