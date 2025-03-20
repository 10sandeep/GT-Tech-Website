
import { motion } from "framer-motion";
import { ShieldCheck, Globe, Users, Lightbulb, Award, Layers } from "lucide-react";
import Footer from "../components/Footer";

const Career = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative flex-grow py-20 bg-black text-white">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/20 blur-xl opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          {/* Header Section */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold text-white mb-6"
          >
            Come <span className="text-indigo-400">Shape the Future</span> With Us
          </motion.h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We design and innovate to create a better world. Join us to lead the future of design and technology.
          </p>

          {/* Core Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: <ShieldCheck size={40} className="text-indigo-400" />, title: "INTEGRITY", desc: "We will be fair, honest, transparent, and ethical in our conduct; everything we do must stand the test of public scrutiny." },
              { icon: <Globe size={40} className="text-indigo-400" />, title: "RESPONSIBILITY", desc: "We will integrate environmental and social principles in our businesses, ensuring that what comes from the people goes back to the people many times over." },
              { icon: <Users size={40} className="text-indigo-400" />, title: "UNITY", desc: "We will invest in our people and partners, enable continuous learning, and build caring and collaborative relationships based on trust and mutual respect." },
              { icon: <Lightbulb size={40} className="text-indigo-400" />, title: "PIONEERING", desc: "We will be bold and agile, courageously taking on challenges, using deep customer insight to develop innovative solutions." },
              { icon: <Award size={40} className="text-indigo-400" />, title: "EXCELLENCE", desc: "A culture that fosters innovation and values a diverse and inclusive workplace. We’re made up of strong, smart people dedicated to doing their best work collaboratively." },
              { icon: <Layers size={40} className="text-indigo-400" />, title: "DIVERSITY", desc: "Diversity allows us to create and innovate leading-edge products, develop an unmatched level of customer focus, and collaborate effectively." },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg hover:shadow-indigo-500/40 transition-all"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-indigo-400">{value.title}</h3>
                <p className="text-gray-300 mt-3">{value.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Featured Jobs Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Jobs – Apply Today!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { role: "Engineering Manager", location: "Remote / India" },
                { role: "IT Admin Manager", location: "Hybrid / Tech City" },
                { role: "Mining Engineer", location: "Remote / Global" },
                { role: "AR/VR Content Developer", location: "On-Site / HQ" },
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg hover:shadow-purple-500/40 transition-all"
                >
                  <h3 className="text-2xl font-bold text-indigo-400">{job.role}</h3>
                  <p className="text-gray-300 mt-2">{job.location}</p>
                  <button className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all">
                    Apply Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 p-6 bg-indigo-600 rounded-xl text-white"
          >
            <p className="text-lg">
              Have questions? Reach out to us at{" "}
              <a href="mailto:hr@thegttech.com" className="font-bold hover:underline">
                hr@thegttech.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Career;

