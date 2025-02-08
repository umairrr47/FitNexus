import { FaMedal, FaChalkboardTeacher, FaUsers, FaThumbsUp } from 'react-icons/fa';

const stats = [
  { icon: <FaMedal />, label: '5+ Years of Service' },
  { icon: <FaChalkboardTeacher />, label: '50+ Certified Trainers' },
  { icon: <FaUsers />, label: '1000+ Happy Members' },
  { icon: <FaThumbsUp />, label: '95% Customer Satisfaction' },
];

const StatsSection = () => (
  <section className="bg-gradient-to-r from-gray-900 to-black text-white py-16 px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-yellow-400 tracking-wide">Our Achievements</h2>
      <p className="text-gray-400 mt-2 text-lg">Trusted by thousands, driven by results.</p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 
          hover:shadow-yellow-500/50 transition-transform duration-300 hover:scale-105"
        >
          <div className="text-yellow-400 text-6xl mb-3 animate-bounce">{item.icon}</div>
          <p className="text-lg font-semibold">{item.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;
