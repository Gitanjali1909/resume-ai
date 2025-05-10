'use client';

import { motion } from 'framer-motion';
import { FaUpload, FaBrain, FaDownload } from 'react-icons/fa';

const steps = [
  {
    icon: <FaUpload className="text-xl text-blue-500" />,
    title: 'Upload Your Resume',
    desc: 'Start by uploading your existing resume in PDF or DOC format.',
  },
  {
    icon: <FaBrain className="text-xl text-purple-500" />,
    title: 'AI Analyzes & Enhances',
    desc: 'Our AI scans and suggests changes tailored to your target job.',
  },
  {
    icon: <FaDownload className="text-xl text-green-500" />,
    title: 'Download New Resume',
    desc: 'Instantly download a polished, job-ready resume.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-900">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg border hover:shadow-md transition"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
