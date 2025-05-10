'use client';

import { motion } from 'framer-motion';
import { FaClock, FaThumbsUp, FaBolt } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaClock className="text-xl text-rose-500" />,
    title: 'Save Hours Per Application',
    desc: 'No more tweaking resumes endlessly. Let AI handle it in seconds.',
  },
  {
    icon: <FaBolt className="text-xl text-yellow-500" />,
    title: 'Instant Suggestions',
    desc: 'AI delivers personalized resume tips based on your job goals.',
  },
  {
    icon: <FaThumbsUp className="text-xl text-green-500" />,
    title: 'Boost Your Chances',
    desc: 'Submit resumes that stand out and match job requirements.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-900">
          Why Use Resume AI?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg border hover:shadow-md transition"
            >
              <div className="mb-4">{b.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{b.title}</h3>
              <p className="text-sm text-gray-600">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
