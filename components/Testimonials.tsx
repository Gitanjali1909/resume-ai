'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Anjali R.',
    role: 'Marketing Graduate',
    text: 'Resume AI helped me land 3 interviews in a week. It’s a game-changer for job seekers!',
  },
  {
    name: 'Raj S.',
    role: 'Software Engineer',
    text: 'I never knew my resume had so many issues. The AI suggestions were spot on.',
  },
  {
    name: 'Neha D.',
    role: 'Product Manager',
    text: 'Saved me hours. The tailored resumes improved my response rate instantly.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
          What Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white shadow-sm p-6 rounded-lg border"
            >
              <p className="text-sm text-gray-700 italic mb-4">"{t.text}"</p>
              <p className="font-semibold text-gray-900">{t.name}</p>
              <p className="text-xs text-gray-500">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
