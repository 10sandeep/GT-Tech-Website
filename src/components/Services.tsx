import React from "react";
import {
  Code2,
  Smartphone,
  Cloud,
  Database,
  Shield,
  LineChart,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android devices.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and services for your growing business.",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Efficient and secure database architectures for optimal performance.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets.",
  },
  {
    icon: LineChart,
    title: "Analytics",
    description:
      "Data-driven insights to help you make informed business decisions.",
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of technology solutions to help your
            business succeed in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon; // Dynamic icon component
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl dark:hover:shadow-gray-700/50 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                  <Icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;