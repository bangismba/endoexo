import { FaCode, FaUsers, FaBalanceScale, FaRocket, FaTrophy, FaGlobe, FaHandshake, FaChartLine } from "react-icons/fa";

export default function FundingAsk() {
  return (
    <section className="bg-gray-800 py-12 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Header */}
        <h2 className="text-4xl font-bold mb-8">Funding Ask</h2>
        <p className="text-lg text-gray-200 mb-12">
          Strategic investment for explosive growth in IP tokenisation
        </p>

        {/* Two main funding cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Seed Round */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Seed Round</h3>
            <h1 className="text-yellow-400 text-lg font-bold">£800,000</h1>
            <p className="text-gray-300 mb-4">MVP Development & Early Traction</p>
            <h4 className="text-lg font-bold mb-2">Use of Funds:</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center"><FaCode className="text-blue-500 mr-2"/> MVP development & testing</li>
              <li className="flex items-center"><FaUsers className="text-green-500 mr-2"/> Core team expansion</li>
              <li className="flex items-center"><FaBalanceScale className="text-purple-500 mr-2"/> Regulatory compliance setup</li>
              <li className="flex items-center"><FaRocket className="text-red-500 mr-2"/> Initial market validation</li>
            </ul>
          </div>

          {/* Series A */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Series A</h3>
            <h1 className="text-yellow-400 text-lg font-bold">£800,000</h1>
            <p className="text-gray-300 mb-4">Scaling & Full Platform Deployment</p>
            <h4 className="text-lg font-bold mb-2">Use of Funds:</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center"><FaGlobe className="text-indigo-500 mr-2"/> Global market expansion</li>
              <li className="flex items-center"><FaTrophy className="text-yellow-500 mr-2"/> Full RWA platform deployment</li>
              <li className="flex items-center"><FaHandshake className="text-teal-500 mr-2"/> Institutional partnerships</li>
              <li className="flex items-center"><FaChartLine className="text-pink-500 mr-2"/> Advanced AI capabilities</li>
            </ul>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-10 text-gray-500 ">
          <div className="bg-blue-100 p-4 rounded-xl text-center font-semibold">🏆 First Mover Advantage</div>
          <div className="bg-green-100 p-4 rounded-xl text-center font-semibold">📈 Proven Financial Model</div>
          <div className="bg-purple-100 p-4 rounded-xl text-center font-semibold">🚀 Massive Market</div>
        </div>

        {/* Funding Timeline */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg mb-10">
          <h3 className="text-xl font-bold mb-4">Funding Timeline & Milestones</h3>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="font-bold">Q1</p>
              <p className="text-sm">Seed Round Close<br/>£800K</p>
            </div>
            <div>
              <p className="font-bold">Q3</p>
              <p className="text-sm">MVP Launch<br/>First Tokens</p>
            </div>
            <div>
              <p className="font-bold">Y2</p>
              <p className="text-sm">Series A<br/>£6M-7.5M</p>
            </div>
            <div>
              <p className="font-bold">Y5</p>
              <p className="text-sm">Market Leader<br/>£50M Revenue</p>
            </div>
          </div>
        </div>

        {/* Market opportunity */}
        <p className="text-lg text-gray-300 mb-6">
          Join the IP Revolution <br /> Be part of unlocking trillions in dormant IP value through tokenisation. <br /> Total Funding Opportunity: £8.3M
        </p>
      </div>
    </section>
  );
}
