'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Linkedin, Briefcase, Globe, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you for your message! I will get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle')
          setSubmitMessage('')
        }, 5000)
      } else {
        setSubmitStatus('error')
        setSubmitMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setSubmitMessage('Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/pradiptasinha/',
      label: 'LinkedIn',
      text: 'Connect on LinkedIn',
    },
    {
      icon: Briefcase,
      href: 'https://www.upwork.com/freelancers/~018601c014ac7a099f',
      label: 'Upwork',
      text: 'Hire me on Upwork',
    },
    {
      icon: Globe,
      href: 'https://www.fiverr.com/wpfreelance?public_mode=true',
      label: 'Fiverr',
      text: 'View my Fiverr profile',
    },
    {
      icon: Mail,
      href: 'mailto:hello@gabusingh.in',
      label: 'Email',
      text: 'hello@gabusingh.in',
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have a project in mind? Let's discuss how I can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              {/* Status Message */}
              {submitStatus !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    submitStatus === 'success'
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800'
                      : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800'
                  }`}
                >
                  <p className="text-sm font-medium">{submitMessage}</p>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Feel free to reach out through any of these
                channels:
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <link.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {link.label}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {link.text}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Quick Response Time
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                I typically respond to inquiries within 24 hours. For urgent matters, please
                mention it in your message.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
