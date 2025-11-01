'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  company?: string
  content: string
  rating: number
  source?: 'LinkedIn' | 'Upwork' | 'Fiverr' | 'Client'
  linkedInUrl?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Simba Makahamadze',
    role: 'Entrepreneur | IP Consultant & Advisor | Certified Chief Innovation Officer | TEDx Speaker',
    company: 'Founder & CEO @AfricanLaw | Chairman Zimbabwean Business Council UAE | Lecturer | WBAF (G20) Senator for Zimbabwe',
    content:
      'I have been working with Pradipta and his team on website development and management projects since 2020, and continue to rely on them to this day. Their technical expertise, meticulous attention to detail and prompt response to time-sensitive issues have made them an invaluable partner in maintaining and improving our online presence.',
    rating: 5,
    source: 'LinkedIn',
    linkedInUrl: 'https://www.linkedin.com/services/page/454a2a33a9410a3b65/',
  },
  {
    name: 'Tapiwa Augustine Nyamupa',
    role: 'HR, Reward and Performance Management Professional',
    company: 'MBA, MCIPD',
    content:
      'Pradipta designed my company website and did a very good job. Besides being very professional and flexible in his work he was, most importantly, proactive in providing me with innovative design solutions and edited my content as well. Excellent piece of work!',
    rating: 5,
    source: 'LinkedIn',
    linkedInUrl: 'https://www.linkedin.com/services/page/454a2a33a9410a3b65/',
  },
  {
    name: 'Upwork Client',
    role: 'E-Commerce Store Owner',
    company: 'WooCommerce Theme Project',
    content:
      'Highly skilled and available to answer any questions. Only downside is the time dedicated to my project was limited.',
    rating: 5,
    source: 'Upwork',
  },
  {
    name: 'Upwork Client',
    role: 'Dispensary Owner',
    company: 'WordPress Website Error Fix - Online Ordering',
    content:
      'Great to work with. Very knowledgeable and will go the extra mile.',
    rating: 5,
    source: 'Upwork',
  },
  {
    name: 'Upwork Client',
    role: 'E-Commerce Business Owner',
    company: 'WordPress + WooCommerce Project Finalization',
    content:
      'Pradipta delivered great work on our website finalisation project and I enjoyed working with him. He was very responsive, patient and helpful on technical issues that I was not clear about. He handled the job in a timeous manner. I enjoyed working with Pradipta and will likely have additional jobs for him in the future. I highly recommend him!',
    rating: 5,
    source: 'Upwork',
  },
  {
    name: 'Upwork Client',
    role: 'Business Owner',
    company: 'Squarespace Development - Desktop & Mobile',
    content:
      'Another excellent project completed together, thanks!',
    rating: 5,
    source: 'Upwork',
  },
  {
    name: 'Upwork Client',
    role: 'Website Owner',
    company: 'WordPress Site Updates',
    content:
      'The freelancer did a great job on the project and we will definitely work with them again in the future!',
    rating: 5,
    source: 'Upwork',
  },
  {
    name: 'Upwork Client',
    role: 'Business Owner',
    company: 'Website Design',
    content:
      'Gabu delivered great work and in a timely manner. He and his team did everything I asked of them and I\'m really happy with them. I will definitely hire them again.',
    rating: 5,
    source: 'Upwork',
  },
  {
    name: 'Upwork Client',
    role: 'Fashion E-Commerce Owner',
    company: 'Fashion WordPress (WooCommerce) Site Setup',
    content:
      'The job is done successfully. thanks for the excellent cooperation.',
    rating: 4,
    source: 'Upwork',
  },
  {
    name: 'Upwork Client',
    role: 'Business Owner',
    company: 'Elementor One Product Page Website Builder',
    content:
      'Very good. Will hire again.',
    rating: 5,
    source: 'Upwork',
  },
  {
    name: 'Upwork Client',
    role: 'Website Owner',
    company: 'WordPress Page Web Development',
    content:
      'It was a pleasure working with the WP Freelance team as always. I recommend working with them and we will definitely use them again in the future.',
    rating: 5,
    source: 'Upwork',
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
          {testimonials.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                Reviews from LinkedIn Services page will be displayed here.
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                Add reviews from your{' '}
                <a
                  href="https://www.linkedin.com/services/page/454a2a33a9410a3b65/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  LinkedIn Services page
                </a>
              </p>
            </div>
          ) : (
            testimonials.map((testimonial, index) => (
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
                  {testimonial.company && ` • ${testimonial.company}`}
                </p>
                {testimonial.source && (
                  <p className="text-xs text-primary-600 dark:text-primary-400 mt-1">
                    {testimonial.source === 'LinkedIn' && '⭐'} {testimonial.source}
                  </p>
                )}
              </div>
            </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
