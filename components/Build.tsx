"use client"

import { motion } from "framer-motion"
import { FiZap, FiTool, FiLayers } from "react-icons/fi" // fixed: FiWand2 → FiMagic

export default function Build() {
  const tools = [
    {
      icon: FiZap,
      title: "AI Resume Builder",
      description:
        "Generate job-specific resumes instantly using smart templates and AI-based recommendations.",
    },
    {
      icon: FiTool,
      title: "Custom Templates",
      description:
        "Choose from clean, modern designs optimized for readability and ATS compatibility.",
    },
    {
      icon: FiLayers,
      title: "Multiple Versions",
      description:
        "Save, compare, and tweak different versions of your resume for various job roles.",
    },
  ]

  return (
    <section id="build" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">Build Your Resume Smarter</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Create professional, AI-optimized resumes that match your target roles effortlessly.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl border border-border bg-card hover:border-cyan-400/50 transition-colors"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-4"
              >
                <tool.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-400/10 border border-blue-500/20"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">
                Ready to build your next-level resume?
              </h3>
              <p className="text-muted-foreground">
                Start creating personalized versions for every opportunity.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-cyan-400/20 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/30 transition-colors flex-shrink-0"
            >
              Build Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
