import React from "react";
import { ChevronRight, Globe, Plane, FlaskConical, Building, Wrench, BarChart, Brain } from "lucide-react";

// Define types for the solution items
interface SolutionItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  subItems?: { title: string; description: string }[];
}

const SolutionsPage: React.FC = () => {
  // Data for each section
  const sections: { title: string; items: SolutionItem[] }[] = [
    {
      title: "VAR & Solution Implementation",
      items: [
        {
          title: "Geovia",
          description: "Advanced geological modeling and mine planning solutions.",
          icon: <Globe className="w-6 h-6 text-cyan-400" />,
          subItems: [
            {
              title: "Geovia Product – Surpac, Whittle & MineSched",
              description: "Tools for geological modeling, pit optimization, and mine scheduling.",
            },
            {
              title: "Geovia Solution and Solution Implementation",
              description: "End-to-end implementation for mining operations.",
            },
          ],
        },
        {
          title: "Drone Based End-to-End Solution & Centre of Excellence",
          description: "Innovative drone-based solutions for agriculture and mining.",
          icon: <Plane className="w-6 h-6 text-green-400" />, // Replaced Drone with Helicopter
        },
      ],
    },
    {
      title: "Biovia",
      items: [
        {
          title: "Biovia Product – Material Studio, Discovery Studio, Image Studio, Pipeline Pilot",
          description: "Cutting-edge tools for material and biological simulation.",
          icon: <FlaskConical className="w-6 h-6 text-purple-400" />,
          subItems: [
            {
              title: "Biovia Based Solution Implementation for Research",
              description: "Tailored solutions for scientific research and innovation.",
            },
          ],
        },
      ],
    },
    {
      title: "Solution Implementation",
      items: [
        {
          title: "Dassault Systèmes Solution Implementation in Skill Development",
          description: "Enhancing skills with advanced 3D technology training.",
          icon: <Wrench className="w-6 h-6 text-yellow-400" />,
        },
        {
          title: "Centralized Project Management Systems",
          description: "Streamlined project oversight with integrated tools.",
          icon: <BarChart className="w-6 h-6 text-blue-400" />,
        },
        {
          title: "High-End Engineering Services Using 3D Experience Platform",
          description: "Precision engineering with state-of-the-art 3D platforms.",
          icon: <Building className="w-6 h-6 text-indigo-400" />,
        },
      ],
    },
    {
      title: "Other Solutions",
      items: [
        {
          title: "3D Experience Smart City Solution Implementation",
          description: "Sustainable urban planning with 3D modeling.",
          icon: <Globe className="w-6 h-6 text-teal-400" />,
        },
        {
          title: "AEC for BIM Solution Implementation",
          description: "Architectural and engineering solutions with BIM.",
          icon: <Building className="w-6 h-6 text-orange-400" />,
        },
        {
          title: "Enovia Customization & Solution",
          description: "Tailored PLM solutions for enhanced collaboration.",
          icon: <Wrench className="w-6 h-6 text-pink-400" />,
        },
      ],
    },
    {
      title: "R&D Centres",
      items: [
        {
          title: "High-End Research & Design Centers",
          description: "State-of-the-art facilities for innovation and design.",
          icon: <Brain className="w-6 h-6 text-red-400" />,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-gray-900 to-purple-900 opacity-80 animate-pulse"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22none%22 stroke=%22rgba(6, 182, 212, 0.1)%22 stroke-width=%222%22/%3E%3C/svg%22)] opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mt-8 mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text tracking-wide">
  VAR & Solution Implementation
</h1>
<p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
  Unlocking the future with cutting-edge technology, innovation, and transformative solutions.
</p>

        {/* Sections */}
        <div className="space-y-24">
          {sections.map((section, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-80 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md border border-gray-700/50">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-cyan-300">
                {section.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="group bg-gray-700 bg-opacity-70 p-4 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                  >
                    <div className="flex items-center mb-2">
                      {item.icon}
                      <h3 className="ml-2 text-lg font-semibold text-gray-200 group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">{item.description}</p>
                    {item.subItems && (
                      <div className="space-y-2">
                        {item.subItems.map((subItem, subIndex) => (
                          <div key={subIndex} className="flex items-center text-xs text-gray-300">
                            <ChevronRight className="w-4 h-4 text-cyan-400 mr-1" />
                            <span>{subItem.title}</span>
                            <span className="ml-1 text-gray-500">{subItem.description}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;