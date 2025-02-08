import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white font-poppins py-14 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-radial from-blue-500/10 to-transparent opacity-30 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        
        {/* Brand Info */}
        <div>
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            FitNexus
          </h1>
          <p className="text-gray-400 mt-4 leading-relaxed text-lg">
            Join the best gym in town and transform your fitness journey with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-300 border-b border-gray-700 pb-2 mb-4">
            Quick Links
          </h2>
          <ul className="space-y-3 text-lg">
            {["Home", "Trainers", "Pricing", "Contact"].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative hover:text-blue-400 transition duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-blue-400 before:transition-all before:duration-300 hover:before:w-full"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-300 border-b border-gray-700 pb-2 mb-4">
            Follow Us
          </h2>
          <div className="mt-4 flex gap-6">
            {[
              { icon: <FaFacebook />, link: "#facebook", color: "hover:bg-blue-600" },
              { icon: <FaTwitter />, link: "https://x.com/shaikhumair47", color: "hover:bg-blue-500" },
              { icon: <FaInstagram />, link: "https://www.instagram.com/umairrr47?igsh=a3E0bXYzYjY0ZXls", color: "hover:bg-pink-600" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className={`relative p-4 bg-gray-800 rounded-full transition duration-300 
                ${social.color} shadow-md shadow-gray-800 hover:shadow-lg transform hover:scale-110`}
              >
                {React.cloneElement(social.icon, { className: "w-7 h-7 text-white" })}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm relative z-10">
        <p>© 2025 FitLife Gym. All rights reserved.</p>
        <p className="text-white hover:text-purple-400 cursor-pointer transition duration-300">
          Powered by <span className="font-semibold text-blue-400">Hexagon Digital Services</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
