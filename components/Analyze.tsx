"use client"

import { motion } from "framer-motion"
import { FiUpload, FiCheckCircle, FiAlertCircle } from "react-icons/fi"
import { useState } from "react"

export default function Analyze() {
  const [isDragging, setIsDragging] = useState(false)

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  }

  const features = [
    { icon: FiCheckCircle, label: "Grammar Check", desc: "Professional tone analysis" },
    { icon: FiAlertCircle, label: "Gap Detection", desc: "Identify missing sections" },
    { icon: FiCheckCircle, label: "ATS Optimization", desc: "Improve readability score" },
  ]

  return (
    <section id="analyze" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">Analyze Your Resume</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload your resume and let our AI engine scan for improvements. Get detailed insights in seconds.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Upload Zone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.div
              onDragEnter={() => setIsDragging(true)}
              onDragLeave={() => setIsDragging(false)}
              whileHover={{ borderColor: "#00d4ff", backgroundColor: "rgba(0, 212, 255, 0.02)" }}
              className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all cursor-pointer ${
                isDragging ? "border-cyan-400 bg-cyan-400/5" : "border-border hover:border-cyan-400/50"
              }`}
            >
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
                <FiUpload className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Upload Your Resume</h3>
              <p className="text-muted-foreground">Drag and drop your PDF or Word document here, or click to browse</p>
            </motion.div>
          </motion.div>

          {/* Features List */}
          <motion.div className="space-y-4">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-4 rounded-lg bg-card border border-border hover:border-blue-400/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <feature.icon className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">{feature.label}</h4>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
