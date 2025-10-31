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
      'Bespoke WordPress themes and plugins built from scratch, tailored to your specific requirements and brand identity.',
  },
  {
    icon: ShoppingBag,
    title: 'WooCommerce Solutions',
    description:
      'Complete e-commerce store setup with payment gateways, shipping options, product management, and custom functionality.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description:
      'Comprehensive SEO audits, on-page optimization, technical SEO, and strategies to improve your search engine rankings.',
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
      'Speed up your website with code optimization, caching strategies, image optimization, and CDN integration.',
  },
  {
    icon: Shield,
    title: 'Security & Maintenance',
    description:
      'Regular security updates, malware scanning, backups, and ongoing maintenance to keep your site safe and running smoothly.',
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
            Services I Offer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Comprehensive WordPress solutions tailored to your business needs
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
