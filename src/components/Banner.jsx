import React from "react";
import { FaDumbbell, FaRunning, FaHeartbeat, FaGooglePlay } from "react-icons/fa";
import banner from "../assets/bannertop.png"; 

const Banner = () => {
  return (
    <section className="relative min-h-screen pt-20 bg-black text-white flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 py-10 lg:py-16 overflow-hidden">
      
      {/* Background Image for Mobile */}
      <div className="absolute inset-0 lg:hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${banner})` }}>
        <div className="absolute inset-0 bg-black/70"></div> {/* Dark overlay for readability */}
      </div>

      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent opacity-40 blur-3xl"></div>

      {/* Left Content */}
      <div className="relative flex-1 min-w-0 flex flex-col justify-center items-start text-center lg:text-left space-y-6 z-10">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent animate-slide-in-left">
          Elevate Your <span className="text-yellow-500">Workout</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 animate-slide-in-left delay-200">
          Join the best gym in town and transform your fitness journey.
        </p>

        {/* Features Section */}
        <div className="flex flex-wrap gap-6 justify-center lg:justify-start animate-fade-in delay-400">
          {[ 
            { icon: <FaDumbbell />, label: "Strength Training" },
            { icon: <FaRunning />, label: "Endurance" },
            { icon: <FaHeartbeat />, label: "Cardio Fitness" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4 group p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 shadow-lg backdrop-blur-md">
              <div className="text-yellow-500 text-3xl group-hover:scale-125 transition-transform">{item.icon}</div>
              <span className="text-lg font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-5 justify-center lg:justify-start mt-6">
          <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-red-500 text-black font-semibold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-transform">
            Get Started
          </button>
          <button className="px-6 py-3 bg-gray-900 border border-gray-700 text-white font-semibold rounded-full shadow-md hover:bg-gray-800 hover:shadow-lg transition-transform flex items-center gap-2">
            <FaGooglePlay className="text-yellow-400" />
            <a href="https://youtu.be/eaRQF-7hhmo?si=7SXg-OnUBGRgda8x" target="_blank" rel="noopener noreferrer">
              Watch Demo
            </a>
          </button>
        </div>
      </div>

      {/* Right Side Image (Only visible on larger screens) */}
      <div className="hidden lg:flex flex-1 min-w-0 justify-center items-center mt-8 lg:mt-0">
        <img
          src={banner}
          alt="Banner"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl h-auto object-cover object-top animate-zoom-in-slow drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Banner;
