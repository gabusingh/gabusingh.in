'use client'

import { motion } from 'framer-motion'
import { Code, Search, ShoppingCart, Palette, Zap, Shield, Server, Cpu, Layers, Mail, Store, Globe, Cloud } from 'lucide-react'

export default function About() {
  const skills = [
    { icon: Code, name: 'WordPress Development', level: 95 },
    { icon: ShoppingCart, name: 'WooCommerce', level: 90 },
    { icon: Store, name: 'Shopify', level: 85 },
    { icon: Globe, name: 'Squarespace', level: 85 },
    { icon: Layers, name: 'Next.js', level: 88 },
    { icon: Cpu, name: 'React', level: 90 },
    { icon: Server, name: 'Node.js', level: 85 },
    { icon: Cloud, name: 'AWS & Cloud', level: 85 },
    { icon: Mail, name: 'Resend (Email Services)', level: 85 },
    { icon: Search, name: 'SEO Optimization', level: 88 },
    { icon: Palette, name: 'Custom Themes', level: 92 },
    { icon: Zap, name: 'Performance', level: 90 },
    { icon: Shield, name: 'Security', level: 85 },
  ]

  return (
    <section id="about" itemScope itemType="https://schema.org/Person" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 itemProp="name" className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-8" />
          <p itemProp="description" className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm <span itemProp="name">Pradipta Sinha</span>, a passionate <span itemProp="jobTitle">WordPress developer and SEO specialist</span> with years of experience
            creating custom solutions for small businesses and partnering with web design agencies worldwide. Through my agency{' '}
            <a
              href="https://wpfreelance.in"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="worksFor"
              itemScope
              itemType="https://schema.org/Organization"
              className="text-primary-600 dark:text-primary-400 hover:underline font-semibold"
            >
              <span itemProp="name">WPFreelance</span>
            </a>
            , I help small businesses grow their online presence and provide white-label WordPress development services to agencies looking to outsource with confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Expertise
            </h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <skill.icon
                      size={20}
                      className="text-primary-600 dark:text-primary-400"
                    />
                    <span className="font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-primary-600 to-blue-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience & Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              What I Offer
            </h3>
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  Custom WordPress Development
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Bespoke WordPress themes and plugins tailored to your business needs, built
                  with clean code and modern best practices.
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  Modern Web Development
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Full-stack web applications using Next.js, React, and Node.js. Building fast, scalable, and SEO-friendly modern websites with email service integration using Resend.
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  E-Commerce Solutions
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Complete e-commerce store development on WooCommerce, Shopify, and Squarespace with payment integration, inventory management, and custom features. AWS cloud infrastructure deployment and management.
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  White-Label Services for Agencies
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Perfect outsourcing partner for web design agencies. White-label WordPress development services that let you scale without hiring. Your clients see your brand, not mine.
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  SEO & Performance
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive SEO audits, optimization strategies, and performance tuning to
                  boost your search rankings and site speed.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
