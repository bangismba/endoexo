import { FaShieldCheck, FaCoins, FaTrendingUp } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section
      className="bg-gray-50 py-16 px-6 md:px-20 text-center"
      aria-label="About EndoExo"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          About <span className="text-blue-600">EndoExo</span>
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          Pioneering the Future of Intellectual Property through{" "}
          <span className="font-semibold">RWA Tokenisation</span>.  
          EndoExo transforms intellectual property into a transparent, liquid, and accessible asset class using 
          blockchain, AI, and Real-World Asset tokenisation.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <FaShieldCheck className="text-blue-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">IP Protection</h3>
            <p className="text-gray-600 mt-2">
              Securing intellectual property with cutting-edge blockchain technology for trust and transparency.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <FaCoins className="text-green-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">RWA Tokenisation</h3>
            <p className="text-gray-600 mt-2">
              Fractionalize and trade IP-backed tokens, unlocking trillions in dormant value for global investors.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <FaTrendingUp className="text-purple-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">AI-Powered</h3>
            <p className="text-gray-600 mt-2">
              Advanced AI analytics for valuation, compliance, and intelligent decision-making in IP investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
