import React from "react";
import { FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import CUTM from '../assets/cutm_logo.png'
import DS from '../assets/dss_logo.png'
import GT from '../assets/GT_logo.png'
import GA from '../assets/GA-Logo-White.png'
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    content:
      "Working with this team has been transformative. Their technical expertise and futuristic solutions changed our entire workflow.",
  },
  {
    name: "Michael Chen",
    role: "CTO, Innovation Labs",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    content:
      "The level of professionalism and attention to detail exceeded our expectations. They delivered AI-driven solutions that evolved our platform.",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, DataFlow",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    content:
      "Their commitment to innovation and deadlines made them the perfect partner for our digital transformation.",
  },
];

const partners = [
  {
    name: "General Aeronautics",
    logo: GA,
    website: "https://generalaeronautics.com/",
    linkedin: "https://in.linkedin.com/company/general-aeronautics-pvt-ltd",
  },
  {
    name: "Centurion University Of Technology And Management",
    logo: CUTM,
    website: "https://cutm.ac.in/",
    linkedin: "https://in.linkedin.com/school/centurion-university-of-technology-and-management/",
  },
  {
    name: "Gram Tarang",
    logo: GT,
    website: "https://gramtarang.org.in/",
    linkedin: "https://in.linkedin.com/company/gram-tarang-employability-training-services",
  },
  {
    name: "Dassault Systèmes",
    logo: DS,
    website: "https://www.3ds.com/",
    linkedin: "https://www.linkedin.com/company/dassaultsystemes",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-4">
            Insights from the pioneers shaping the future with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glassmorphism p-8 rounded-xl backdrop-blur-lg border border-gray-700 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">{testimonial.content}</p>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Our Visionary Partners
          </h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
            Powering the future with global innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="glassmorphism p-6 rounded-xl backdrop-blur-lg border border-gray-700 shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-24 w-auto mb-4 filter drop-shadow-lg"
              />
              <h4 className="text-lg font-semibold">{partner.name}</h4>
              <div className="flex mt-3 space-x-5">
                <a
                  href={partner.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 transition duration-300"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-500 transition duration-300"
                >
                  <FaExternalLinkAlt size={28} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .glassmorphism {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
