import React from 'react';
import wcu1 from '../assets/wcu1.jpg';
import wcu2 from '../assets/wcu2.jpg';
import wcu3 from '../assets/wcu3.jpg';

const WhyChooseUs = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-400 tracking-wide">Why Choose Us?</h1>
        <p className="mt-2 text-gray-400 text-lg max-w-lg mx-auto">
          Elevate your fitness journey with expert coaching, world-class equipment, and a supportive community.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: '🏋️ Expert Trainers', desc: 'Certified professionals to help you achieve your goals.' },
            { title: '💪 Modern Equipment', desc: 'Train with high-end machines and fitness gear.' },
            { title: '🏆 Award Winning', desc: 'Recognized for excellence in fitness coaching.' },
            { title: '🤝 Community Driven', desc: 'A friendly and motivating environment for all levels.' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800 hover:shadow-blue-500/50 
              transition-transform duration-300 hover:scale-105 text-center max-w-[260px] mx-auto"
            >
              <h3 className="text-lg font-semibold text-blue-400">{item.title}</h3>
              <p className="text-gray-300 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="relative grid grid-cols-2 gap-4 w-full max-w-lg">
          <div className="flex flex-col gap-4">
            <img
              src={wcu1}
              alt="Workout 1"
              className="rounded-xl w-full h-40 sm:h-44 md:h-52 object-cover border-2 border-gray-700 
              hover:scale-105 transition-transform duration-300 shadow-lg"
            />
            <img
              src={wcu2}
              alt="Workout 2"
              className="rounded-xl w-full h-40 sm:h-44 md:h-52 object-cover border-2 border-gray-700 
              hover:scale-105 transition-transform duration-300 shadow-lg"
            />
          </div>

          <div className="relative">
            <img
              src={wcu3}
              alt="Workout 3"
              className="rounded-xl w-full h-[85%] sm:h-[90%] md:h-full object-cover border-2 border-gray-700 
              hover:scale-105 transition-transform duration-300 shadow-lg"
            />
            <div className="absolute inset-0 bg-black opacity-10 rounded-xl hover:opacity-0 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
