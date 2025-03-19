import React from "react";
import President from '../assets/President.jpg';
import Director from '../assets/rao-sir.jpg';
import MD from '../assets/babu.png';
import Manager from '../assets/ashish.jpg';
import BIOVIA from '../assets/Sidharth.jpeg';
import HR from '../assets/alam.jpeg';
import Project from '../assets/Madhusudhan.jpg';

interface Person {
  name: string;
  image: string;
  position: string;
}

const directors: Person[] = [
  { name: "Mukti Kanta Mishra", image: President, position: "Director" },
  { name: "D.N. Rao", image: Director, position: "Director" },
  { name: "Babu Shankar", image: MD, position: "Managing Director" },
  { name: "Vikranth Killi", image: President, position: "Director Business Development" },
];

const team: Person[] = [
  { name: "Ashish Kumar Modi", image: Manager, position: "Project Manager" },
  { name: "Sidhartha Mansingh", image: BIOVIA, position: "BIOVIA Specialist" },
  { name: "Khursid Alam", image: HR, position: "HR Administrator" },
  { name: "Madhusudhan B", image: Project, position: "Project Manager" },
];

const AboutUs: React.FC = () => {
  return (
    <section className="min-h-screen bg-black py-16 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-small opacity-10"></div>
      
      {/* Animated Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500 blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500 blur-3xl opacity-20 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl mt-8 font-extrabold text-white mb-12">
  About <span className="text-indigo-400">US</span> 
</h2>


        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          GramTarang Technologies is a cutting-edge tech firm incubated within Centurion University, collaborating with subsidiaries to pioneer innovation in a digital future.
        </p>
        
        {/* Directors Section */}
        <h3 className="mt-20 text-4xl font-bold text-white">
          Our Visionary Directors
        </h3>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {directors.map((director, index) => (
            <div key={index} className="group transform hover:scale-105 transition-all duration-500">
              <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg border border-gray-700 backdrop-blur-lg">
                <img src={director.image} alt={director.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-xl font-semibold tracking-wide">{director.name}</h4>
                  <p className="text-sm text-cyan-300 mt-1">{director.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Team Section */}
        <h3 className="mt-20 text-4xl font-bold text-white">
          Our Dynamic Team
        </h3>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <div key={index} className="group transform hover:scale-105 transition-all duration-500">
              <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg border border-gray-700 backdrop-blur-lg">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-xl font-semibold tracking-wide">{member.name}</h4>
                  <p className="text-sm text-purple-300 mt-1">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
