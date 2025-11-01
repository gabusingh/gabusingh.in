'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  ShoppingBag,
  Search,
  Palette,
  Zap,
  Shield,
  Smartphone,
  Settings,
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Custom WordPress Development',
    description:
      'I build WordPress themes and plugins from scratch that match exactly what you need. Everything is designed around your brand and specific requirements.',
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce Solutions',
    description:
      'I set up complete e-commerce stores on WooCommerce, Shopify, and Squarespace with payment gateways, shipping options, coupon management, Google Shopping and Facebook Shopping integration, invoice generation, inventory management, product management, and custom functionality. AWS or other cloud deployment included.',
  },
  {
    icon: Search,
    title: 'Advanced SEO & Analytics',
    description:
      'Technical & on-page SEO audits, GA4 integration, GTM setup, and data-driven optimization strategies. Comprehensive traditional SEO combined with modern AI agents optimization, geo-targeting, and voice search strategies.',
  },
  {
    icon: Palette,
    title: 'Theme Customization',
    description:
      'Transform existing themes or create custom designs that match your brand perfectly with pixel-perfect implementation.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description:
      'I speed up your website with code optimization, server-level caching mechanisms, MySQL query tuning, database cleanup (removing bloated options), image optimization, CDN integration, and caching strategies that make everything load faster.',
  },
  {
    icon: Shield,
    title: 'Security & Maintenance',
    description:
      'I provide immediate malware cleanup and 24/7 availability during critical security incidents. After cleanup, I implement comprehensive security hardening to prevent future attacks, along with regular updates, scanning, and backups.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description:
      'Mobile-first approach ensuring your website looks and works perfectly on all devices and screen sizes.',
  },
  {
    icon: Settings,
    title: 'Plugin Development',
    description:
      'Custom WordPress plugins to add specific functionality that meets your unique business needs.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Core Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Specialized services designed to elevate your digital presence and drive measurable results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
