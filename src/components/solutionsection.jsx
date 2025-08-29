import React from "react";
import { motion } from "framer-motion";
import { FaLink, FaRobot, FaCoins } from "react-icons/fa";

const coreSolutions = [
  {
    icon: <FaLink className="text-blue-500 w-12 h-12 mb-4" />,
    title: "Blockchain-Based IP Registration",
    desc: "Secure, time-stamped, immutable IP recording with smart contract-based licensing and royalty distribution."
  },
  {
    icon: <FaRobot className="text-blue-500 w-12 h-12 mb-4" />,
    title: "AI-Powered Protection",
    desc: "EndoGuard AI continuously scans for IP infringement with real-time alerts."
  },
  {
    icon: <FaCoins className="text-blue-500 w-12 h-12 mb-4" />,
    title: "RWA Tokenisation",
    desc: "Transform IP into tradable digital tokens enabling fractional investment and liquidity."
  }
];

const integratedServices = [
  "Blockchain-Based IP Registration & Management",
  "AI-Powered IP Infringement Detection (EndoGuard)",
  "Digital Fingerprinting for Authenticity",
  "IP Valuation & Monetisation Marketplace",
  "NFT Platform for Creative IP Protection",
  "Legal & Regulatory Compliance Frameworks",
  "IP Enforcement & Dispute Resolution"
];

export default function SolutionSection() {
  const leftColumn = integratedServices.slice(0, 4);
  const rightColumn = integratedServices.slice(4);

  return (
    <section id="solutions" className="py-20 px-6 bg-gray-900 text-white relative">
      <h2 className="text-4xl font-bold text-center mb-12">Our Solution</h2>
      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
        Comprehensive IP lifecycle management platform integrating blockchain, AI, and RWA tokenisation.
        From SaaS/PaaS to a sophisticated fintech ecosystem — democratising IP investment through fractional ownership.
      </p>

      {/* Core Solutions */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
      >
        {coreSolutions.map((solution, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 p-8 rounded-xl shadow-2xl hover:shadow-blue-500/50 transition cursor-pointer flex flex-col items-center text-center"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            {solution.icon}
            <h3 className="font-bold text-xl mb-2 text-blue-400">{solution.title}</h3>
            <p className="text-gray-300">{solution.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Seven Integrated Services */}
      <motion.div
        className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="font-bold text-2xl text-blue-400 mb-6 text-center">Seven Integrated Services</h3>
        <div className="grid md:grid-cols-2 gap-6 text-gray-300">
          {/* Left Column */}
          <ol className="list-decimal list-inside space-y-3">
            {leftColumn.map((service, i) => (
              <li key={i} className="leading-relaxed">{service}</li>
            ))}
          </ol>

          {/* Right Column */}
          <ol start={5} className="list-decimal list-inside space-y-3">
            {rightColumn.map((service, i) => (
              <li key={i + 4} className="leading-relaxed">{service}</li>
            ))}
          </ol>
        </div>
      </motion.div>
    </section>
  );
}
