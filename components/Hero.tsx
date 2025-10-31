'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Briefcase, Globe } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium">
              WordPress Developer & SEO Specialist
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              Pradipta Sinha
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            I create custom WordPress solutions, build WooCommerce stores, and optimize websites
            for search engines & AI agents. Let's bring your digital vision to life.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#portfolio"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-12"
          >
            <motion.a
              href="https://www.linkedin.com/in/pradiptasinha/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="https://www.upwork.com/freelancers/~018601c014ac7a099f"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Upwork"
            >
              <Briefcase size={24} />
            </motion.a>
            <motion.a
              href="https://www.fiverr.com/wpfreelance?public_mode=true"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Fiverr"
            >
              <Globe size={24} />
            </motion.a>
            <motion.a
              href="https://wpfreelance.in"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="WPFreelance"
            >
              <Github size={24} />
            </motion.a>
          </motion.div>

        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  )
}
