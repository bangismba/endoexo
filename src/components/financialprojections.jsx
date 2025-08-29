// src/components/Financial.jsx
import React from "react";
import { FaMoneyBillWave, FaChartLine, FaExchangeAlt, FaCogs, FaShieldAlt } from "react-icons/fa";

export default function Financial() {
  return (
    <section
      id="financial"
      className="bg-gray-900 text-white py-16 px-6 flex flex-col items-center text-center"
    >
      <h2 className="text-4xl font-bold mb-6">Financial Projections</h2>
      <p className="text-lg text-gray-300 mb-10 max-w-3xl">
        Strong growth trajectory with positive EBITDA from Year 1
      </p>

      {/* Timeline */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-full mb-12">
        {/* Year 1 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Year 1</h3>
          <p className="text-blue-400 font-semibold">Foundation</p>
          <ul className="text-gray-300 mt-4 space-y-2 text-left">
            <li>✔ Positive EBITDA</li>
            <li>✔ MVP development & early traction</li>
          </ul>
        </div>

        {/* Year 3 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Year 3</h3>
          <p className="text-blue-400 font-semibold">Scaling</p>
          <ul className="text-gray-300 mt-4 space-y-2 text-left">
            <li>✔ Market Expansion</li>
            <li>✔ Full platform deployment</li>
          </ul>
        </div>

        {/* Year 5 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Year 5</h3>
          <p className="text-blue-400 font-semibold">Maturity</p>
          <ul className="text-gray-300 mt-4 space-y-2 text-left">
            <li>✔ Revenue target achieved</li>
            <li>✔ Enhanced RWA projections</li>
            <li>
              Original pre-RWA forecast was{" "}
              <span className="font-semibold text-green-400">£28.1M - £46.8M</span> by Year 5
            </li>
          </ul>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="max-w-5xl mb-12 text-gray-300 text-lg">
        <p>EBITDA Positive: <span className="text-green-400">Year 1</span></p>
        <p>Revenue CAGR: <span className="text-green-400">High Growth</span></p>
        <p>Cost Structure: <span className="text-green-400">Lean & Scalable</span></p>
        <p>Market Position: <span className="text-green-400">First Mover</span></p>
      </div>

      {/* Revenue Streams */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full mb-12">
        <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center">
          <FaMoneyBillWave className="text-4xl text-green-400 mb-3" />
          <p>IP tokenisation fees</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center">
          <FaChartLine className="text-4xl text-blue-400 mb-3" />
          <p>Primary token offering commissions</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center">
          <FaExchangeAlt className="text-4xl text-yellow-400 mb-3" />
          <p>Secondary market transaction fees</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center">
          <FaCogs className="text-4xl text-purple-400 mb-3" />
          <p>Traditional SaaS subscriptions</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center">
          <FaShieldAlt className="text-4xl text-red-400 mb-3" />
          <p>IP protection & enforcement services</p>
        </div>
      </div>

      {/* Growth Model */}
      <div className="max-w-3xl text-center text-gray-300 text-lg mb-8">
        <p>
          <span className="text-blue-400 font-semibold">Scalable tokenised asset marketplace model</span> drives robust EBITDA and sustainable growth
        </p>
      </div>
    </section>
  );
}
