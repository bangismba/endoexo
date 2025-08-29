// src/components/MarketOpportunity.jsx
import React from "react";
import { motion } from "framer-motion";

export default function MarketOpportunity() {
  const cards = [
    {
      title: "RWA Market Explosion",
      stats: [
        { label: "H1 2025 Market Size", value: "$23B" },
        { label: "Growth Rate", value: "260% ↗" },
        { label: "Deloitte Forecast (2035)", value: "$4T" },
        { label: "Notes", value: "Primarily led by tokenisation of private credit and U.S. Treasury debt" }
      ]
    },
    {
      title: "IP Market Untapped Value",
      stats: [
        { label: "Uncommercialized Patents", value: "90%" },
        { label: "Annual Untapped Value", value: "Billions £" },
        { label: "Music Industry Value", value: "$26B" },
        { label: "Notes", value: "Trillions in IP value historically difficult to financialise" }
      ]
    }
  ];

  return (
    <section id="market" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Market Opportunity</h2>

      <motion.div 
        className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 p-8 rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-transform cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-6">{card.title}</h3>
            <div className="space-y-4">
              {card.stats.map((stat, j) => (
                <div key={j} className="flex justify-between items-center">
                  <p className="text-gray-400 font-medium">{stat.label}</p>
                  <p className={`text-white font-bold ${stat.label === "Notes" ? "text-sm" : "text-2xl"}`}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Total Addressable Market */}
      <h3 className="text-2xl font-bold mb-6 text-center text-blue-400">Total Addressable Market: £23.5B ($30B)</h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-xl shadow-2xl">
          <p className="text-gray-400">IP Management Software 12.9% CAGR</p>
          <p className="text-2xl font-bold mt-2">£9.59B ($12.30B) in 2024</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-2xl">
          <p className="text-gray-400">IP Services Market 12.48% CAGR</p>
          <p className="text-2xl font-bold mt-2">£2.18B → £4.98B (2024 → 2030)</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-2xl">
          <p className="text-gray-400">Digital Fingerprinting 14.8% CAGR</p>
          <p className="text-2xl font-bold mt-2">£6.64B → £15.82B (2024 → 2030)</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-2xl">
          <p className="text-gray-400">IP Licensing Market High Growth</p>
          <p className="text-2xl font-bold mt-2">£129.09B Global IP & brand licensing</p>
        </div>
      </div>

      <motion.div
        className="bg-blue-900 text-white p-8 rounded-xl shadow-2xl border-l-4 border-blue-500 mt-12 max-w-6xl mx-auto flex items-center gap-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-3xl">
          🚀
        </div>
        <p className="text-lg md:text-xl font-semibold">
          Perfect convergence: Established IP markets + Explosive RWA growth = Unprecedented opportunity
        </p>
      </motion.div>
    </section>
  );
}
