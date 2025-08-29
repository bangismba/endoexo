// src/components/TractionMilestones.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaTrophy, FaChartLine, FaCheck, FaClock } from "react-icons/fa";

export default function TractionMilestones() {
  return (
    <section id="traction" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold text-purple-400">Traction & Milestones</h2>
        <p className="text-lg text-gray-300 mt-2">
          Financial discipline from inception with strong growth trajectory
        </p>
      </div>

      {/* Two Key Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-14">
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 border border-purple-500 p-6 rounded-xl shadow-xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaChartLine className="text-green-400 text-3xl" />
            <h3 className="font-bold text-xl text-white">Financial Discipline</h3>
          </div>
          <p className="text-gray-300 mb-3">
            Unlike many blockchain startups prioritising market share over profitability, Endoexo emphasises sustainable growth from inception.
          </p>
          <p className="font-semibold text-green-400">Positive EBITDA Year 1</p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 border border-green-400 p-6 rounded-xl shadow-xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaRocket className="text-purple-400 text-3xl" />
            <h3 className="font-bold text-xl text-white">Strategic Pivot</h3>
          </div>
          <p className="text-gray-300 mb-3">
            Successfully integrated RWA tokenisation into existing IP management platform, positioning for explosive growth.
          </p>
          <p className="font-semibold text-purple-400">RWA Integration Complete</p>
        </motion.div>
      </div>

      {/* Revenue Projections Full Width Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gray-800 border border-gray-600 p-8 rounded-xl shadow-xl mb-10"
      >
        <h3 className="text-2xl font-bold mb-6 text-center text-purple-400">Revenue Projections</h3>

        {/* Three Columns */}
        <div className="grid md:grid-cols-3 gap-8 text-center mb-6">
          <div>
            <p className="font-bold text-lg text-white">Year 1</p>
            <p className="text-gray-300">Positive EBITDA</p>
            <p className="text-gray-300">MVP & Early Traction</p>
          </div>
          <div>
            <p className="font-bold text-lg text-white">Year 3</p>
            <p className="text-gray-300">Scaling Phase</p>
            <p className="text-gray-300">Market Expansion</p>
          </div>
          <div>
            <p className="font-bold text-lg text-white">Year 5</p>
            <p className="text-green-400">£30.9M - £50.5M</p>
            <p className="text-gray-300">Full Platform Deployment</p>
          </div>
        </div>

        {/* Enhanced Projection Note */}
        <div className="border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
          Enhanced projections: Original pre-RWA forecast was £28.1M - £46.8M by Year 5
        </div>
      </motion.div>

      {/* Two Additional Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Card 1: Key Achievements */}
        <div className="bg-gray-800 border border-purple-500 rounded-xl shadow-xl p-6">
          <h3 className="text-xl font-bold mb-5 text-purple-400">Key Achievements</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center">
              <FaCheck className="text-green-400 mr-3" /> Lean cost structure established
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-400 mr-3" /> RWA tokenisation integration
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-400 mr-3" /> Regulatory compliance framework
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-400 mr-3" /> AI-powered IP protection (EndoGuard)
            </li>
          </ul>
        </div>

        {/* Card 2: Upcoming Milestones */}
        <div className="bg-gray-800 border border-green-400 rounded-xl shadow-xl p-6">
          <h3 className="text-xl font-bold mb-5 text-green-400">Upcoming Milestones</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center">
              <FaClock className="text-blue-400 mr-3" /> MVP development completion
            </li>
            <li className="flex items-center">
              <FaClock className="text-blue-400 mr-3" /> First IP tokenisation transactions
            </li>
            <li className="flex items-center">
              <FaClock className="text-blue-400 mr-3" /> Institutional investor partnerships
            </li>
            <li className="flex items-center">
              <FaClock className="text-blue-400 mr-3" /> Global market expansion
            </li>
          </ul>
        </div>
      </div>

      {/* Final Trophy Note */}
      <div className="bg-gray-800 border border-yellow-400 shadow-xl rounded-xl p-6 mt-8 flex items-center text-center">
        <FaTrophy className="text-yellow-400 text-3xl mr-4 mt-1" />
        <p className="text-lg text-gray-200 font-medium leading-relaxed">
          Proven financial discipline <span className="font-bold text-white">+</span> Strategic RWA positioning <span className="font-bold text-white">=</span> Sustainable competitive advantage
        </p>
      </div>
    </section>
  );
}
