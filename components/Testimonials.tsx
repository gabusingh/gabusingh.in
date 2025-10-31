'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, Tech Startup',
    content:
      'Pradipta delivered an outstanding WordPress site that exceeded our expectations. The custom theme is beautiful, fast, and SEO-optimized. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'E-Commerce Owner',
    content:
      'The WooCommerce store Pradipta built for us is exactly what we needed. Custom features, smooth payment integration, and excellent ongoing support.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    content:
      'Working with Pradipta was a great experience. Our site traffic increased significantly after the SEO optimization. Professional, responsive, and results-driven.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-300">
            What clients say about working with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 relative"
            >
              <Quote
                className="absolute top-6 right-6 text-primary-200 dark:text-primary-800"
                size={48}
              />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-yellow-400 text-yellow-400"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
