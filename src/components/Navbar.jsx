import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaHome, FaUser, FaComment, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
        <div className="cursor-pointer text-2xl font-bold text-white font-caveat">FitNexus</div>
        
        <div className="hidden md:flex gap-8 items-center text-white font-semibold">
          <Link to="home" smooth={true} duration={500} offset={-70} className="flex items-center gap-2 hover:text-blue-500 transition-colors cursor-pointer">
            <FaHome /> Home
          </Link>
          <Link to="trainers" smooth={true} duration={500} offset={-70} className="flex items-center gap-2 hover:text-green-500 transition-colors cursor-pointer">
            <FaUser /> Trainers
          </Link>
          <Link to="pricing" smooth={true} duration={500} offset={-70} className="flex items-center gap-2 hover:text-pink-500 transition-colors cursor-pointer">
            <FaComment /> Pricing
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-70} className="flex items-center gap-2 hover:text-purple-500 transition-colors cursor-pointer">
            <FaEnvelope /> Contact
          </Link>
        </div>

        <button className="md:hidden text-white focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-gray-800 to-gray-900 text-white flex flex-col items-center gap-4 p-4">
          <Link to="home" smooth={true} duration={500} offset={-70} className="hover:text-blue-500 transition-colors cursor-pointer" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="trainers" smooth={true} duration={500} offset={-70} className="hover:text-green-500 transition-colors cursor-pointer" onClick={() => setMenuOpen(false)}>
            Trainers
          </Link>
          <Link to="pricing" smooth={true} duration={500} offset={-70} className="hover:text-pink-500 transition-colors cursor-pointer" onClick={() => setMenuOpen(false)}>
            Pricing
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-70} className="hover:text-purple-500 transition-colors cursor-pointer" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
