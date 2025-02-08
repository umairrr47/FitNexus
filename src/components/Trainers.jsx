import React from "react";
import one from "../../src/assets/1.jpg";
import two from "../../src/assets/2.jpg";
import three from "../../src/assets/3.jpg";
import four from "../../src/assets/4.jpg";
import five from "../../src/assets/5.jpg";
import six from "../../src/assets/6.jpg";

const trainers = [
  { img: one, name: "John Carter", specialty: "Strength & Conditioning" },
  { img: two, name: "Emma Smith", specialty: "Yoga & Flexibility" },
  { img: three, name: "Michael Brown", specialty: "Cardio & HIIT" },
  { img: four, name: "Sophia Johnson", specialty: "Weight Training" },
  { img: five, name: "Daniel Wilson", specialty: "Functional Fitness" },
  { img: six, name: "Olivia Martinez", specialty: "Nutrition & Wellness" },
];

const Trainers = () => (
  <section
    id="trainers"
    className="py-16 text-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white"
  >
    <h2 className="text-4xl font-extrabold mb-6 text-yellow-400 tracking-wide">
      Meet Our Elite Trainers
    </h2>
    <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-lg">
      Train with the best in the industry. Our certified trainers are here to guide you every step of the way.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
      {trainers.map((trainer, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl shadow-xl group transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          {/* Trainer Image */}
          <img
            src={trainer.img}
            alt={trainer.name}
            className="w-full h-64 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h3 className="text-white text-xl font-bold mb-1">{trainer.name}</h3>
            <p className="text-yellow-300 text-md">{trainer.specialty}</p>
            <button className="mt-4 px-5 py-2 bg-yellow-500 text-black font-semibold rounded-full shadow-md hover:bg-yellow-400 transition-all duration-300">
              View Profile
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Trainers;
