import React from "react";
import { ArrowRight } from "lucide-react";
import Products from "./Products";
import Testimonials from "./Testimonials";
// import Contact from "./Contact";
import Footer from "./Footer";

const Hero: React.FC = () => {
  return (

    <>     <div id="home" className="relative min-h-screen flex items-center bg-gray-900">
    {/* Background Video */}
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10" /> {/* Slightly darker overlay */}
      <video
        className="w-full h-full object-cover"
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
    </div>

    {/* Content */}
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        <span className="block">Innovate. Create.</span>
        <span className="block text-indigo-400">Transform.</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
        We build cutting-edge digital solutions that help businesses thrive in
        the modern world.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
        <button className="inline-flex items-center px-8 py-3 border-2 border-gray-300 text-base font-medium rounded-md text-gray-300 hover:bg-gray-300 hover:text-indigo-900 transition-colors duration-200">
          Learn More
        </button>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-scroll" />
      </div>
    </div>
  
  </div> 
  <Products />
    {/* <Portfolio /> */}
    <Testimonials />
    {/* <Contact /> */}
    <Footer /></>
  );
};

export default Hero;