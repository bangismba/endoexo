// src/components/BusinessModel.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaServer,
  FaUsers,
  FaCoins,
  FaArrowRight,
  FaRocket,
  FaDollarSign,
  FaExchangeAlt,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

export default function BusinessModel() {
  return (
    <section
      id="business"
      className="relative py-20 px-6 bg-gray-900 text-white overflow-hidden"
    >
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1f2937,#0f172a)] opacity-90"></div>
      <div className="absolute inset-0 bg-grid-white/[0.05]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-center mb-4 text-green-400">
          Business Model
        </h2>
        <p className="text-xl text-gray-400 text-center mb-12">
          Evolution from SaaS/PaaS to Sophisticated Fintech Ecosystem
        </p>

        {/* Evolution Row */}
        <div className="glass-card p-8 mb-16 rounded-xl border border-green-500/30 shadow-lg max-w-6xl mx-auto backdrop-blur-lg">
          <h3 className="text-2xl font-bold text-center mb-8 text-green-300">
            Strategic Evolution
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Card 1 */}
            <motion.div
              className="bg-gray-800 rounded-xl p-6 text-center w-full md:w-1/2 border border-green-500/20 hover:shadow-green-400/30 hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <FaServer className="text-green-400 w-12 h-12 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Traditional SaaS/PaaS</h4>
              <p className="text-gray-400">IP Management & Protection Services</p>
            </motion.div>

            {/* Arrow */}
            <FaArrowRight className="text-green-400 w-10 h-10 hidden md:block animate-pulse" />

            {/* Card 2 */}
            <motion.div
              className="bg-gray-800 rounded-xl p-6 text-center w-full md:w-1/2 border border-green-500/20 hover:shadow-green-400/30 hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <FaCoins className="text-green-400 w-12 h-12 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Fintech Ecosystem</h4>
              <p className="text-gray-400">
                IP Management + Financialisation + RWA Tokenisation
              </p>
            </motion.div>
          </div>
        </div>

        {/* Three Revenue Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 text-center">
          {[
            {
              icon: <FaDollarSign className="text-green-400 w-12 h-12 mx-auto mb-4" />,
              title: "IP Tokenisation Fees",
              text: "Revenue from converting IP assets into digital tokens",
              tag: "Primary Revenue Stream",
            },
            {
              icon: <FaRocket className="text-green-400 w-12 h-12 mx-auto mb-4" />,
              title: "Primary Token Offerings",
              text: "Commissions from initial IP token sales",
              tag: "High-Value Transactions",
            },
            {
              icon: <FaExchangeAlt className="text-green-400 w-12 h-12 mx-auto mb-4" />,
              title: "Secondary Market Trading",
              text: "Transaction fees from IP token trading",
              tag: "Recurring Revenue",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-xl shadow-xl border border-green-500/20 hover:shadow-green-400/40 hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {card.icon}
              <h4 className="text-xl font-bold mb-2 text-green-300">{card.title}</h4>
              <p className="text-gray-400 mb-4">{card.text}</p>
              <div className="bg-green-900/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full border border-green-400/30">
                {card.tag}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Two Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-green-500/20 hover:shadow-green-400/30 hover:scale-105 transition-all">
            <h4 className="text-xl font-bold mb-4 text-center text-green-300">
              Traditional Revenue Streams
            </h4>
            <ul className="space-y-3 text-gray-400">
              {[
                "SaaS subscription fees",
                "IP registration services",
                "Monitoring & enforcement fees",
                "Legal compliance services",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-green-500/20 hover:shadow-green-400/30 hover:scale-105 transition-all">
            <h4 className="text-xl font-bold mb-4 text-center text-green-300">
              New RWA Revenue Streams
            </h4>
            <ul className="space-y-3 text-gray-400">
              {[
                "Tokenisation platform fees",
                "Marketplace transaction fees",
                "DeFi integration revenue",
                "Institutional investor services",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FaStar className="text-green-400" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Final Full Width Card */}
        <motion.div
          className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-green-500/30 flex items-center justify-center text-center gap-4 max-w-6xl mx-auto mt-12 hover:shadow-green-400/40 transition-all"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaUsers className="text-green-400 w-10 h-10" />
          <h3 className="text-2xl font-bold text-green-300">
            Democratising IP investment: From institutional-only assets to
            fractional ownership for all investors
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
