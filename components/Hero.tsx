"use client"

import { motion } from "framer-motion"
import { FiArrowRight, FiZap } from "react-icons/fi"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-b from-background via-background to-secondary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 hover:bg-secondary/80 transition-colors"
        >
          <FiZap className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-muted-foreground">AI-Powered Resume Engineering</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-blue-400 to-cyan-400">
            Your Resume, Perfected
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance"
        >
          Analyze, enhance, and build job-winning resumes with AI. Get instant insights and tailored recommendations to
          land your dream job.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 212, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow flex items-center gap-2"
          >
            Get Started <FiArrowRight className="w-4 h-4" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-border rounded-lg font-semibold text-foreground hover:bg-secondary/50 transition-colors"
          >
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Trust Badge */}
        <motion.div variants={itemVariants} className="text-sm text-muted-foreground pt-4">
          Trusted by 10,000+ professionals worldwide
        </motion.div>
      </motion.div>
    </section>
  )
}
