import React, { useState } from "react";
import Automotive from "../assets/Automotive.jpg";
import Railway from "../assets/Railway.jpg";
import Ship from "../assets/Construction & Territories.jpg";
import Aerospace from "../assets/Aerospace.jpg";
import Construction from "../assets/Construction & Territories.jpg";
import IndustryIMG from "../assets/Industry Equipement.jpeg";
import Digital from "../assets/Digital Manufacturing.jpg";
import Smart from "../assets/smart city.jpg";
import Mining from "../assets/mining.jpg";
import Information from "../assets/information Technology.jpg";
import Skill from "../assets/skill.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = [
  {
    title: "Automotive",
    category: "Engineering & Manufacturing",
    image: Automotive,
    description:
      "GRAMTARANG Technologies partners with reputed Automotive OEMs and firms to deliver advanced development and manufacturing solutions.",
  },
  {
    title: "Railways",
    category: "Engineering & Infrastructure",
    image: Railway,
    description:
      "Offering cutting-edge engineering design and development services for railway locomotives and infrastructure.",
  },
  {
    title: "Ship Building",
    category: "Marine & Naval Engineering",
    image: Ship,
    description:
      "Shaping marine projects with a Design, Optimize, Validate approach—crafted for the sea with regulatory compliance.",
  },
  {
    title: "Aerospace",
    category: "Aerospace & Defense",
    image: Aerospace,
    description:
      "Tackling aerospace challenges with solutions for fuel efficiency, production, and analytics.",
  },
  {
    title: "Construction & Territories",
    category: "Civil & Infrastructure",
    image: Construction,
    description:
      "Sustainable infrastructure solutions for cities, buildings, and mega structures.",
  },
  {
    title: "Industry Equipment",
    category: "Industrial Automation",
    image: IndustryIMG,
    description:
      "Process flow simulation and special-purpose machine design for flexible manufacturing.",
  },
  {
    title: "Digital Manufacturing",
    category: "Smart Manufacturing",
    image: Digital,
    description:
      "Driving innovation with 3D modeling, simulation, and production validation.",
  },
  {
    title: "Smart City",
    category: "Urban Planning & GIS",
    image: Smart,
    description:
      "Geo-located 3D intelligent models with BIM LOD 350 for smart infrastructure.",
  },
  {
    title: "Mining",
    category: "Natural Resources & Mining",
    image: Mining,
    description:
      "Advanced 3D models for efficient visualization and resource planning in mining.",
  },
  {
    title: "Information Technology",
    category: "IT & Digital Solutions",
    image: Information,
    description:
      "AI, cloud, cybersecurity, and smart tech for seamless digital transformation.",
  },
  {
    title: "High-End Skill Development",
    category: "Education & Training",
    image: Skill,
    description:
      "Enhancing engineering skills with 65+ 3D Experience Labs in partnership with Dassault Systèmes.",
  },
];

const categories = [
  "All",
  "Engineering & Manufacturing",
  "Engineering & Infrastructure",
  "Marine & Naval Engineering",
  "Aerospace & Defense",
  "Civil & Infrastructure",
  "Industrial Automation",
  "Smart Manufacturing",
  "Urban Planning & GIS",
  "Natural Resources & Mining",
  "IT & Digital Solutions",
  "Education & Training",
];

const Industry: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="pt-20 bg-gradient-to-br from-gray-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-16">
        {/* Heading */}
        <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mt-8 mb-8 text-indigo-400  bg-clip-text tracking-wide">
 Industry
</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our futuristic projects transforming industries with innovation and precision.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/50"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg dark:shadow-gray-800/50 transform hover:-translate-y-2 transition-all duration-500"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm line-clamp-3">
                    {project.description}
                  </p>
                  <span className="inline-block mt-3 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-semibold rounded-full shadow-inner">
                    {project.category}
                  </span>
                </div>
              </div>
              {/* Neon Border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-cyan-400 dark:group-hover:border-purple-400 transition-all duration-300 glow-effect" />
            </div>
          ))}
        </div>

        
      
      </div>
      <Footer/>
    </section>
  );
};

export default Industry;