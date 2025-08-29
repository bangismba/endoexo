import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/herologo.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden px-6 md:px-12"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 z-10">
        {/* Left Content */}
        <motion.div
          className="text-white max-w-xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Pioneering the Future of IP with{" "}
            <span className="text-blue-400">RWA Tokenisation</span>
          </motion.h1>

          {/* Features */}
          <motion.div
            className="flex flex-wrap gap-3 mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium shadow-md">
              🛡 IP Protection
            </span>
            <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-medium shadow-md">
              💰 RWA Tokenisation
            </span>
            <span className="px-4 py-2 bg-purple-500 text-white rounded-full text-sm font-medium shadow-md">
              📈 AI-Powered
            </span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Transforming intellectual property into a transparent, liquid, and
            accessible asset class through blockchain, AI, and Real-World Asset
            tokenisation.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="#problem"
            className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Right Image with continuous easing and glow pulse */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.img
            src={heroImage}
            alt="Hero Visual"
            className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
            animate={{ scale: [1, 1.05, 1] }} // scale up and back
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Animated Glow Effect */}
          <motion.div
            className="absolute -z-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
