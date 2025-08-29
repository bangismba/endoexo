// src/components/ProblemSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaPoundSign, FaPuzzlePiece, FaGlobe, FaRegEyeSlash } from "react-icons/fa";

const problems = [
  { 
    title: "Inefficiency & High Costs", 
    desc: "Manual processes, exorbitant legal fees, and prolonged delays make IP protection costly.",
    icon: <FaPoundSign className="text-blue-400 w-8 h-8 mb-3" />
  },
  { 
    title: "Lack of Transparency", 
    desc: "Opacity in licensing, royalties, and compliance leads to disputes and lost revenue.",
    icon: <FaRegEyeSlash className="text-blue-400 w-8 h-8 mb-3" />
  },
  { 
    title: "Barriers for Emerging Markets", 
    desc: "Limited access to effective IP protection in developing economies.",
    icon: <FaGlobe className="text-blue-400 w-8 h-8 mb-3" />
  },
  { 
    title: "Fragmented Solutions", 
    desc: "Multiple siloed platforms create operational inefficiencies and security risks.",
    icon: <FaPuzzlePiece className="text-blue-400 w-8 h-8 mb-3" />
  }
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">The Problem</h2>
      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
        Traditional IP management is broken, creating barriers to innovation and value realisation
      </p>
      <motion.div 
        className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
      >
        {problems.map((item, i) => (
          <motion.div 
            key={i} 
            className="bg-gray-800 border-l-4 border-blue-500 p-6 rounded-lg shadow-2xl hover:shadow-blue-500/50 transition-all cursor-pointer flex flex-col items-start"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            {item.icon}
            <h3 className="text-xl font-semibold mb-2 text-blue-400">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
