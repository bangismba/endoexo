// src/components/ProductServices.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaLink, FaRegEye, FaFingerprint, FaChartLine, FaPalette, FaBalanceScale,
  FaShieldAlt, FaRegFileAlt, FaCoins, FaGavel
} from "react-icons/fa";

const services = [
  {
    icon: <FaLink className="text-cyan-400 w-10 h-10 mb-3" />,
    title: "Blockchain-Based IP Registration",
    desc: "Secure, time-stamped, immutable recording with global IP office integration (WIPO, USPTO, EUIPO)"
  },
  {
    icon: <FaRegEye className="text-cyan-400 w-10 h-10 mb-3" />,
    title: "AI-Powered Infringement Detection",
    desc: "EndoGuard: Continuous automated scanning for IP violations with real-time alerts"
  },
  {
    icon: <FaFingerprint className="text-cyan-400 w-10 h-10 mb-3" />,
    title: "Digital Fingerprinting",
    desc: "Authenticity verification and traceability for digital and physical IP assets"
  },
  {
    icon: <FaChartLine className="text-cyan-400 w-10 h-10 mb-3" />,
    title: "IP Valuation & Marketplace",
    desc: "AI-driven valuation with primary issuance and secondary trading for tokenised IP assets"
  },
  {
    icon: <FaPalette className="text-cyan-400 w-10 h-10 mb-3" />,
    title: "NFT Platform for Creative IP",
    desc: "Beyond simple NFTs to complex RWA structures with fractionalised royalty-bearing tokens"
  },
  {
    icon: <FaBalanceScale className="text-cyan-400 w-10 h-10 mb-3" />,
    title: "Legal & Regulatory Compliance",
    desc: "Smart contract frameworks compliant with securities regulations across key jurisdictions"
  },
  {
    icon: <FaShieldAlt className="text-cyan-400 w-10 h-10 mb-3" />,
    title: "IP Enforcement & Dispute Resolution",
    desc: "Automated enforcement mechanisms with transparent dispute resolution processes"
  }
];

export default function ProductServices() {
  return (
    <section id="products" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <h2 className="text-4xl font-extrabold text-center mb-8 tracking-wide">
        Product & Services
      </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">Seven integrated services creating a comprehensive IP ecosystem</p>
      {/* Main Services */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {services.map((item, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 bg-opacity-80 p-8 rounded-xl shadow-xl border border-cyan-400/40 
                       flex flex-col hover:shadow-cyan-500/50 transition-all hover:border-cyan-400"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            {item.icon}
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Synergistic Integration */}
      <motion.div
        className="bg-gradient-to-r from-cyan-500 to-indigo-600 p-8 rounded-xl shadow-xl text-white mt-12 max-w-6xl mx-auto border-l-4 border-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-4">Synergistic Integration</h3>
        <p className="text-lg">
          All services work together to create a formidable competitive advantage, enhancing IP protection and monetisation capabilities exponentially through the unique combination of blockchain, AI, and digital fingerprinting technologies.
        </p>
      </motion.div>

      {/* End-to-End IP Lifecycle Management */}
      <motion.div
        className="bg-gray-900 bg-opacity-80 p-8 rounded-xl shadow-xl mt-12 max-w-6xl mx-auto border border-indigo-500"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-center tracking-wide">
          End-to-End IP Lifecycle Management
        </h3>
        <div className="flex items-center justify-between flex-wrap text-gray-300">
          {/* Step 1 */}
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <div className="bg-cyan-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-2 shadow-lg shadow-cyan-500/50">
              <FaRegFileAlt size={24} />
            </div>
            <span>Create & Register</span>
          </div>

          <div className="hidden md:block w-px h-12 bg-cyan-500/40 mx-4"></div>

          {/* Step 2 */}
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <div className="bg-cyan-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-2 shadow-lg shadow-cyan-500/50">
              <FaShieldAlt size={24} />
            </div>
            <span>Protect & Monitor</span>
          </div>

          <div className="hidden md:block w-px h-12 bg-cyan-500/40 mx-4"></div>

          {/* Step 3 */}
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <div className="bg-cyan-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-2 shadow-lg shadow-cyan-500/50">
              <FaCoins size={24} />
            </div>
            <span>Tokenise & Trade</span>
          </div>

          <div className="hidden md:block w-px h-12 bg-cyan-500/40 mx-4"></div>

          {/* Step 4 */}
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <div className="bg-cyan-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-2 shadow-lg shadow-cyan-500/50">
              <FaGavel size={24} />
            </div>
            <span>Enforce & Resolve</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
