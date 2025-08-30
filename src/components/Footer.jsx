// src/components/Footer.jsx
import React from "react";
import InstagramIcon from "../assets/instagram.svg";
import LinkedInIcon from "../assets/linkedin.svg";
import TwitterIcon from "../assets/twitter.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-2">EndoExo</h3>
          <p className="text-gray-400">© 2025 EndoExo. All rights reserved.</p>
        </div>
        
        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <ul className="text-gray-400 space-y-1">
            <li>Email: <a href="mailto:info@endoxo.com" className="text-blue-500 hover:underline">info@endoxo.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="text-blue-500 hover:underline">+1 234 567 890</a></li>
            <li>Address: awaiting address UK</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" className="w-6 h-6 hover:opacity-80 transition-opacity"/>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={LinkedInIcon} alt="LinkedIn" className="w-6 h-6 hover:opacity-80 transition-opacity"/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={TwitterIcon} alt="Twitter" className="w-6 h-6 hover:opacity-80 transition-opacity"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
