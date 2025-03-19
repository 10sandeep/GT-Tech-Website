import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-10">
      {/* Header Section */}
      <motion.h1
        className="text-5xl font-extrabold text-center text-cyan-400 mt-10 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Centre of Excellence
      </motion.h1>

      <motion.hr
        className="border-t border-cyan-400 w-1/4 mx-auto mb-8"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Content Section */}
      <motion.p
        className="text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        The COE supports the government's initiative to establish a world-class
        ecosystem in industries, attracting investments. It ensures a steady
        supply of skilled manpower, bridging the gap between education and
        industry needs. Our innovation hub nurtures start-ups and fosters
        research collaborations with industry leaders.
      </motion.p>

      {/* Sections */}
      <div className="mt-16 space-y-20">
        {/* Outsourcing of Skilled Manpower */}
        <motion.div
          className="bg-gray-800 p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-4">
            Outsourcing of Skilled Technical Manpower
          </h2>
          <p className="text-gray-300 text-center">
            Through our COE, we have built a pipeline of skilled professionals
            across Digital Manufacturing, Mining, Aerospace, and allied
            industries, serving both national and international sectors.
          </p>
        </motion.div>

        {/* Digital Manufacturing Services */}
        <motion.div
          className="bg-gray-800 p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-4">
            Digital Manufacturing Services
          </h2>
          <p className="text-gray-300 text-center">
            Industry 4.0 aims to build a "smart" production environment with
            intelligent processes, real-time communication, and automation.
            Digital manufacturing enhances efficiency, reduces costs, and
            enables high-speed production with superior quality.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
