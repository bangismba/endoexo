// src/components/CompetitiveAdvantage.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaPlus,
  FaEquals,
  FaTrophy,
  FaChartLine,
  FaCheck,
  FaClock,
  FaUsers,
  FaBalanceScale,
  FaShieldAlt,
  FaLayerGroup,
  FaCoins
} from "react-icons/fa";

export default function CompetitiveAdvantage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      id="competitive"
      className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      {/* Section Heading */}
      <motion.div
        className="text-center mb-14"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-extrabold text-purple-400">
          Competitive Advantage
        </h2>
        <p className="text-lg text-gray-300 mt-2 max-w-2xl mx-auto">
          Unique integrated approach with end-to-end IP lifecycle management
        </p>
      </motion.div>

      {/* Formula Card */}
      <motion.div
        className="bg-gray-800 border border-yellow-400 shadow-xl rounded-xl p-6 mt-8 flex flex-wrap justify-center items-center text-center mb-14"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.9 }}
      >
        <div className="bg-gray-700 px-4 py-3 rounded-xl text-white text-lg font-semibold">
          Blockchain
        </div>
        <FaPlus className="text-yellow-400 mx-2 text-xl" />
        <div className="bg-gray-700 px-4 py-3 rounded-xl text-white text-lg font-semibold">
          Artificial Intelligence
        </div>
        <FaPlus className="text-yellow-400 mx-2 text-xl" />
        <div className="bg-gray-700 px-4 py-3 rounded-xl text-white text-lg font-semibold">
          Digital Fingerprinting
        </div>
        <FaEquals className="text-yellow-400 mx-2 text-xl" />
        <div className="bg-gray-700 px-4 py-3 rounded-xl text-purple-400 text-lg font-bold">
          Exponential Advantage
        </div>
      </motion.div>

      {/* Explanation Note */}
      <motion.p
        className="text-center text-gray-400 max-w-3xl mx-auto mb-14"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 1 }}
      >
        The unique combination creates a formidable competitive moat that
        enhances IP protection and monetisation capabilities exponentially.
      </motion.p>

      {/* Four Advantage Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          {
            icon: <FaLayerGroup className="text-purple-400 text-3xl" />,
            title: "End-to-End Solution",
            desc: "From IP registration and protection to valuation, tokenisation, and monetisation. No competitor offers complete lifecycle management."
          },
          {
            icon: <FaCoins className="text-green-400 text-3xl" />,
            title: "RWA Tokenisation Pioneer",
            desc: "First-mover advantage in IP tokenisation with comprehensive compliance. Creating an entirely new asset superclass."
          },
          {
            icon: <FaUsers className="text-blue-400 text-3xl" />,
            title: "Democratisation Focus",
            desc: "Making IP protection and investment accessible to creators, SMEs, and individual investors globally."
          },
          {
            icon: <FaBalanceScale className="text-yellow-400 text-3xl" />,
            title: "Regulatory Expertise",
            desc: "Proactive compliance with MiCA, SEC, and global regulations. Attracting institutional capital through trust."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-700 hover:border-purple-500 transition"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Comparison Table */}
      <motion.div
        className="bg-gray-800 border border-purple-400 rounded-xl shadow-xl p-8 mb-16"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-center text-purple-400">
          Endoexo vs. Traditional Solutions
        </h3>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Traditional */}
          <div>
            <h4 className="text-lg font-semibold text-red-400 mb-4">
              Traditional IP Solutions
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>× Fragmented, siloed services</li>
              <li>× Manual, expensive processes</li>
              <li>× Limited monetisation options</li>
              <li>× No investment accessibility</li>
            </ul>
          </div>
          {/* Endoexo */}
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4">
              Endoexo Advantage
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Integrated, comprehensive platform</li>
              <li>✓ Automated, cost-effective</li>
              <li>✓ Multiple revenue streams via tokenisation</li>
              <li>✓ Fractional ownership for all investors</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Defensible Moat */}
      <motion.div
        className="bg-gray-800 border border-yellow-400 rounded-xl shadow-xl p-6 flex flex-col md:flex-row items-center justify-center text-center gap-4"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 1 }}
      >
        <FaShieldAlt className="text-yellow-400 text-4xl" />
        <p className="text-lg text-gray-200 font-medium leading-relaxed">
          <span className="font-bold text-white">Defensible Moat:</span> Technology integration + First-mover advantage + Regulatory compliance = Sustainable leadership
        </p>
      </motion.div>
    </section>
  );
}
