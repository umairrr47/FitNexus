import React, { useState } from 'react';

const plans = [
  {
    title: "Beginner Plan",
    price: 500,
    description: "Best for beginners to start their fitness journey.",
    features: [
      { text: "Access to basic equipment", included: true },
      { text: "One personal session", included: true },
      { text: "Dietary consultation", included: false },
      { text: "Dietary consultation", included: false },
      { text: "Access to premium classes", included: false },
    ],
  },
  {
    title: "Premium Plan",
    price: 800,
    description: "Perfect for advanced users with extra perks.",
    features: [
      { text: "Access to all equipment", included: true },
      { text: "Weekly personal training", included: true },
      { text: "Daily personal training", included: false },
      { text: "Dietary consultation", included: false },
      { text: "Access to premium classes", included: true },
    ],
  },
  {
    title: "Pro Plan",
    price: 1000,
    description: "Ideal for professionals aiming for peak performance.",
    features: [
      { text: "Unlimited gym access", included: true },
      { text: "Daily personal training", included: true },
      { text: "Advanced dietary consultation", included: true },
      { text: "Exclusive premium classes", included: true },
    ],
  },
];

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState('Monthly');

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-400">Pricing Plan</h1>
      <p className="text-gray-400 mb-6">Choose the plan that fits you best</p>

      <div className="flex mb-8 bg-gray-800 p-1 rounded-lg">
        {['Monthly', 'Yearly'].map((cycle) => (
          <button
            key={cycle}
            className={`px-4 py-2 rounded-md transition ${
              billingCycle === cycle
                ? 'bg-blue-500 text-white'
                : 'text-gray-400 hover:bg-gray-700'
            }`}
            onClick={() => setBillingCycle(cycle)}
          >
            {cycle}
          </button>
        ))}
      </div>

      <div className="flex gap-6 flex-wrap justify-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-800 border-2 border-gray-700 rounded-xl p-6 w-72 shadow-lg hover:shadow-blue-500 transition"
          >
            <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
            <p className="text-gray-400 mb-4">{plan.description}</p>

            <div className="text-3xl font-extrabold mb-4">
              ${billingCycle === 'Yearly' ? plan.price * 12 * 0.9 : plan.price}
              <span className="text-sm font-medium text-gray-400">/ {billingCycle}</span>
            </div>

            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  {feature.included ? (
                    <span className="text-green-400">✔</span>
                  ) : (
                    <span className="text-red-500">✖</span>
                  )}
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-md transition">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
