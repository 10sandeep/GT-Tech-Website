import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Printer from "../assets/3D-Printer.png";
import Rickshaw from "../assets/E-Rickshaw.jpeg";
import Vehicle from "../assets/Small Commercial Vehicle.png";

const features = [
  {
    title: "3D Printer",
    description:
      "The program intends to engage all the stakeholders to collectively plan cities, explore various city problems and generate strategic design solution to maximize quality of space and functional operability. It provides a platform to seamlessly connect all phases of project and efficiently manage city verticals - urban planning, public works, governance, waste management, transportation, utilities, safety security and natural disaster management.",
    image: Printer,
  },
  {
    title: "E-Rickshaw",
    description:
      "The program intends to engage all the stakeholders to collectively plan cities, explore various city problems and generate strategic design solution to maximize quality of space and functional operability. It provides a platform to seamlessly connect all phases of project and efficiently manage city verticals - urban planning, public works, governance, waste management, transportation, utilities, safety security and natural disaster management.",
    image: Rickshaw,
  },
  {
    title: "Small Commercial Vehicle",
    description:
      "The program intends to engage all the stakeholders to collectively plan cities, explore various city problems and generate strategic design solution to maximize quality of space and functional operability. It provides a platform to seamlessly connect all phases of project and efficiently manage city verticals - urban planning, public works, governance, waste management, transportation, utilities, safety security and natural disaster management.",
    image: Vehicle,
  },
];

export default function Products() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-indigo-950 text-white px-6 py-12 flex flex-col items-center overflow-hidden">
      {/* Background Video with Enhanced Overlay */}
      {/* <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-indigo-900/50 to-black/70 z-10" />
        <video
          className="w-full h-full object-cover opacity-30"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-typing-on-computer-keyboard-2684/1080p.mp4"
            type="video/mp4"
          />
        </video>
      </div> */}



      {/* Header Section */}
      <motion.h1
           initial={{ opacity: 0, y: -30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7 }}
           className="text-5xl font-extrabold text-white mb-6"
         >
           Our <span className="text-indigo-400">Products</span>
         </motion.h1>

      {/* Features Section */}
      <div className="relative z-20 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="group"
          >
            <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-700/50 hover:shadow-cyan-500/30 transition-all duration-300">
              <motion.img
                src={feature.image}
                alt={feature.title}
                className="w-full h-56 object-cover rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.4 }}
              />
              <div className="mt-4">
                <h2 className="text-2xl font-bold text-cyan-300 group-hover:text-cyan-400 transition-colors duration-200">
                  {feature.title}
                </h2>
                <p className="text-gray-300 mt-2">{feature.description}</p>
                <motion.button
                  className="mt-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white w-full flex items-center justify-center py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/50"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}