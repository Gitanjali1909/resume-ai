'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-white to-gray-100">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
      >
        Tailor your resume to any job in seconds – with AI.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg sm:text-xl text-gray-600 max-w-2xl mb-6"
      >
        Upload. Enhance. Apply. Land your next job faster with myjobb Resume AI.
      </motion.p>

      <motion.a
        href="#features"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-semibold text-lg shadow hover:bg-blue-700 transition"
      >
        Get Started →
      </motion.a>
    </section>
  );
}
