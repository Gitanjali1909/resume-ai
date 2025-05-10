'use client';

import { FaSearch, FaMagic, FaFileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FaSearch className="text-3xl text-blue-600" />,
    title: 'AI Resume Scanner',
    desc: 'Scans your resume instantly and identifies what needs improvement.',
  },
  {
    icon: <FaMagic className="text-3xl text-purple-600" />,
    title: 'AI Resume Enhancer',
    desc: 'Suggests personalized enhancements to match your target job.',
  },
  {
    icon: <FaFileAlt className="text-3xl text-green-600" />,
    title: 'AI Resume Builder',
    desc: 'Creates a fresh, tailored resume in seconds based on the job description.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
          Powerful Features Built for Jobseekers
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
