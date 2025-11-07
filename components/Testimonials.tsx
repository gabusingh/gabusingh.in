'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

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
  {
    name: 'Upwork Client',
    role: 'Website Owner',
    company: 'Custom WordPress Theme Web Development',
    content:
      'Excellent experience. Website with WP ready for indexing in search engines.',
    rating: 5,
    source: 'Upwork',
  },
  {
    name: 'Upwork Client',
    role: 'Business Owner',
    company: 'Website Migration to Hosting',
    content:
      'Excellent work on migrating multiple websites to one hosting account. Professional and efficient service.',
    rating: 5,
    source: 'Upwork',
  },
  {
    name: 'Upwork Client',
    role: 'Business Owner',
    company: 'WordPress Migration and Optimization',
    content:
      'We had an excellent experience working together and will definitely work with them again in the future!',
    rating: 5,
    source: 'Upwork',
  },
  {
    name: 'Upwork Client',
    role: 'Business Owner',
    company: 'Web Development',
    content:
      'Excellent service and professional approach to web development projects.',
    rating: 5,
    source: 'Upwork',
  },
  {
    name: 'Upwork Client',
    role: 'Business Owner',
    company: 'WordPress Theme Customization',
    content:
      'Excellent experience. We highly recommend working with this freelancer and we will definitely work with them again in the future!',
    rating: 4.7,
    source: 'Upwork',
  },
  {
    name: 'Upwork Client',
    role: 'Business Owner',
    company: 'WordPress Migration to AWS',
    content:
      'Excellent work on migrating content from WPEngine to AWS. Smooth migration process.',
    rating: 5,
    source: 'Upwork',
  },
  {
    name: 'Upwork Client',
    role: 'Business Owner',
    company: 'WordPress Migration Clean Up',
    content:
      'Excellent experience. We highly recommend working with this freelancer!',
    rating: 5,
    source: 'Upwork',
  },
  {
    name: 'Upwork Client',
    role: 'Business Owner',
    company: 'WordPress Landing Page Web Development',
    content:
      'Excellent work on WordPress landing page development.',
    rating: 5,
    source: 'Upwork',
  },
  {
    name: 'Upwork Client',
    role: 'Business Owner',
    company: 'WordPress Performance Optimization',
    content:
      'Excellent freelancer. We highly recommend working with this team and will do so again in the future!',
    rating: 5,
    source: 'Upwork',
  },
  {
    name: 'Upwork Client',
    role: 'Business Owner',
    company: 'WordPress Speed Optimization',
    content:
      'Excellent work, we highly recommend this freelancer and will work with them again in the future.',
    rating: 5,
    source: 'Upwork',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [containerHeight, setContainerHeight] = useState<number | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const itemsPerPage = 3 // Show 3 testimonials at a time on desktop, 1 on mobile

  // Measure and set container height
  useEffect(() => {
    const updateHeight = () => {
      // Use a small delay to ensure DOM has updated
      setTimeout(() => {
        if (gridRef.current) {
          const height = gridRef.current.scrollHeight
          if (height > 0) {
            setContainerHeight(height)
          }
        }
      }, 100)
    }
    
    updateHeight()
    
    // Update height when window resizes
    const handleResize = () => {
      setTimeout(() => {
        if (gridRef.current) {
          const height = gridRef.current.scrollHeight
          if (height > 0) {
            setContainerHeight(height)
          }
        }
      }, 100)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [currentIndex])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + itemsPerPage) % testimonials.length)
    }, 5000) // Auto-advance every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, itemsPerPage])

  const paginate = (newDirection: number) => {
    setIsAutoPlaying(false) // Pause auto-play when user interacts
    setDirection(newDirection)
    
    if (newDirection === 1) {
      setCurrentIndex((prev) => {
        const next = prev + itemsPerPage
        return next >= testimonials.length ? 0 : next
      })
    } else {
      setCurrentIndex((prev) => {
        const prevIndex = prev - itemsPerPage
        return prevIndex < 0 ? Math.floor((testimonials.length - 1) / itemsPerPage) * itemsPerPage : prevIndex
      })
    }
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    }),
  }

  return (
    <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
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

        {testimonials.length === 0 ? (
          <div className="text-center py-12">
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
          <div className="relative max-w-7xl mx-auto">
            {/* Slider Container */}
            <div 
              className="relative overflow-hidden" 
              data-testimonials-container
              style={{ 
                height: containerHeight ? `${containerHeight}px` : 'auto',
                minHeight: '450px',
                transition: 'height 0.3s ease-out'
              }}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  ref={gridRef}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 },
                  }}
                  className="grid md:grid-cols-3 gap-8"
                  style={{ position: 'relative' }}
                >
                  {getVisibleTestimonials().map((testimonial, index) => (
                    <div
                      key={`${currentIndex}-${testimonial.name}-${index}`}
                      className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 relative flex flex-col"
                      style={{ minHeight: '400px' }}
                    >
                      <Quote
                        className="absolute top-6 right-6 text-primary-200 dark:text-primary-800"
                        size={48}
                      />
                      <div className="flex mb-4">
                        {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                          <Star
                            key={i}
                            className="fill-yellow-400 text-yellow-400"
                            size={20}
                          />
                        ))}
                        {testimonial.rating % 1 !== 0 && (
                          <Star
                            className="fill-yellow-400 text-yellow-400 opacity-50"
                            size={20}
                          />
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed relative z-10 flex-grow">
                        "{testimonial.content}"
                      </p>
                      <div className="mt-auto">
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
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors z-20"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="text-gray-700 dark:text-gray-300" size={24} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors z-20"
              aria-label="Next testimonials"
            >
              <ChevronRight className="text-gray-700 dark:text-gray-300" size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: Math.ceil(testimonials.length / itemsPerPage) }).map((_, index) => {
                const pageIndex = index * itemsPerPage
                const isActive = Math.floor(currentIndex / itemsPerPage) === index
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      const newDirection = pageIndex > currentIndex ? 1 : -1
                      setDirection(newDirection)
                      setCurrentIndex(pageIndex)
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      isActive
                        ? 'bg-primary-600 w-8'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
