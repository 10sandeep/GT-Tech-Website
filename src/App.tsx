import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "../src/Pages/about";
import Career from "../src/Pages/career";
import Industry from '../src/Pages/industry'
import Hero from "./components/Hero";
import Products from "./components/Products";
// import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SolutionsPage from "./Pages/solutions";
import Services from "./Pages/Services";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

 



  return (
    <div className={`min-h-screen ${isDarkMode ? "dark bg-gray-900" : "bg-gray-100"} transition-colors duration-300`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industry" element={<Industry/>} />
        <Route path="/solutions" element={<SolutionsPage/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
   
    </div>
  );
};

export default App;