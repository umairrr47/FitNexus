import { FaStar } from "react-icons/fa"

import op1 from "/src/assets/1op.jpg";
import op2 from "/src/assets/2op.jpg";
import op3 from "/src/assets/3op.jpg";
import op4 from "/src/assets/4op.jpg";
import op5 from "/src/assets/5op.jpg";
import op6 from "/src/assets/6op.jpg";
const reviews = [
  { 
    name: "John Carter", 
    text: "The trainers are incredibly supportive and knowledgeable. I've seen amazing progress in just a few months!", 
    rating: 5, 
    img: op1
  },
  { 
    name: "Emily White", 
    text: "A fantastic gym with a positive atmosphere. The equipment is top-notch, and the classes are super engaging!", 
    rating: 4, 
    img: op2
  },
  { 
    name: "Michael Johnson", 
    text: "This gym changed my life! Personalized workout plans and constant motivation keep me coming back.", 
    rating: 5, 
    img: op3
  },
  { 
    name: "Sophia Martinez", 
    text: "I love how clean and spacious the gym is. The staff is always friendly and ready to help!", 
    rating: 4, 
    img: op4
  },
  { 
    name: "Chris Evans", 
    text: "The best fitness experience I've had. Trainers genuinely care about your progress and keep you motivated.", 
    rating: 5, 
    img: op5
  },
  { 
    name: "Jessica Brown", 
    text: "Great place for both beginners and advanced fitness enthusiasts. Highly recommend!", 
    rating: 5, 
    img: op6
  },
];

const Reviews = () => (
  <section id="reviews" className="py-16 bg-gray-900 text-white text-center">
    <h2 className="text-3xl font-bold mb-6 text-blue-400">What Our Members Say</h2>
    <p className="text-gray-400 mb-8">Real experiences from our fitness community</p>
    
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {reviews.map((review, index) => (
        <div key={index} className="p-6 bg-gray-800 border border-gray-700 shadow-lg rounded-lg transform transition-all hover:scale-105 hover:shadow-xl">
          <div className="flex flex-col items-center">
            <img 
              src={review.img} 
              alt={review.name} 
              className="w-16 h-16 object-cover rounded-full mb-3 border-2 border-blue-400"
            />
            <h3 className="text-xl font-bold mb-2 text-blue-300">{review.name}</h3>
            <p className="text-gray-300 mb-4 italic">"{review.text}"</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={`text-xl ${i < review.rating ? "text-yellow-400" : "text-gray-500"}`} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    
    <button className="mt-8 px-6 py-2 bg-red-500 hover:bg-red-600 transition text-white rounded-full shadow-lg">
      Add Your Review
    </button>
  </section>
);

export default Reviews;
