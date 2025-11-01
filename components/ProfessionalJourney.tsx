'use client'

import { motion } from 'framer-motion'
import { Briefcase, Award, TrendingUp, Code, Users, Target, ShoppingCart, Palette, Building2, Search } from 'lucide-react'


interface JourneyItem {
  year: string
  title: string
  organization?: string
  description: string
  icon: any
  achievements?: string[]
}

const journeyItems: JourneyItem[] = [
  {
    year: '2011 - Present',
    title: 'Founder & Lead Developer',
    organization: 'WPFreelance',
    description: 'Founded and scaled a specialist team delivering WordPress, web, and mobile solutions to international clients. Managed 1955+ projects with 860+ satisfied customers. Leading the company\'s strategic direction, team development, and client relationships.',
    icon: Code,
    achievements: [
      'Managed 2000+ projects successfully',
      '300+ satisfied customers worldwide',
      'Built and scaled specialist development team',
      'Delivered WordPress, web, and mobile solutions globally',
    ],
  },
  {
    year: '2021 - Present',
    title: 'WordPress Developer & SEO Lead',
    organization: 'United We Care',
    description: 'Leading WordPress development, SEO strategy, and site maintenance for a mission-driven organization. Focused on enhancing digital presence and optimizing for search engines. Implemented comprehensive analytics and tracking solutions including Google Analytics Setup, GA4 migration, Google Search Console, Tag Manager with custom events, and Custom Looker Studio Dashboards.',
    icon: Search,
    achievements: [
      'Leading WordPress development initiatives',
      'Google Analytics Setup and GA4 migration',
      'Google Search Console implementation',
      'Google Tag Manager with custom events tracking',
      'Custom Looker Studio Dashboards creation',
      'Implementing comprehensive SEO strategies',
      'Ongoing site maintenance and optimization',
      'Supporting mission-driven organization goals',
    ],
  },
  {
    year: '2021 - 2022',
    title: 'Independent WordPress Consultant',
    organization: 'Eunimart',
    description: 'Provided WordPress development, site maintenance, and SEO optimization services. Delivered custom solutions and technical expertise to support business objectives.',
    icon: Briefcase,
    achievements: [
      'WordPress development and customization',
      'Site maintenance and updates',
      'SEO optimization services',
      'Technical consulting and support',
    ],
  },
  {
    year: '2009 - 2010',
    title: 'Senior Web Developer',
    organization: 'Assurgent Technology Solutions Pvt Ltd',
    description: 'Specialized in WordPress, Joomla, and PHP/MySQL development with Smarty templating. Developed robust web applications and content management systems.',
    icon: Building2,
    achievements: [
      'WordPress and Joomla development',
      'PHP/MySQL application development',
      'Smarty templating expertise',
      'Web application architecture',
    ],
  },
  {
    year: '2008 - 2009',
    title: 'Junior Web Developer',
    organization: 'High Tech Labs, Kolkata',
    description: 'Started professional journey in web design and development. Learned core technologies and industry best practices while contributing to client projects.',
    icon: TrendingUp,
    achievements: [
      'Web design and development fundamentals',
      'HTML, CSS, and JavaScript proficiency',
      'Client project delivery',
      'Foundation for advanced web development',
    ],
  },
]

export default function ProfessionalJourney() {
  return (
    <section id="journey" itemScope itemType="https://schema.org/Person" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            A timeline of my growth as a WordPress developer and SEO specialist, showcasing key milestones and achievements throughout my career.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-blue-500 to-primary-500 transform md:-translate-x-1/2" />

            {/* Journey items */}
            <div className="space-y-12">
              {journeyItems.map((item, index) => {
                const Icon = item.icon
                const isEven = index % 2 === 0
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-start ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-row`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 z-10">
                      <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border-4 border-primary-500 shadow-lg">
                        <Icon className="text-primary-600 dark:text-primary-400" size={24} />
                      </div>
                    </div>

                    {/* Content card */}
                    <div
                      className={`ml-24 md:ml-0 md:w-5/12 ${
                        isEven ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                      }`}
                    >
                      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold">
                            {item.year}
                          </span>
                        </div>
                        {item.organization && (
                          <div className="mb-3">
                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-lg font-bold text-lg shadow-md">
                              {item.organization}
                            </span>
                          </div>
                        )}
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        {item.achievements && item.achievements.length > 0 && (
                          <ul className="space-y-2">
                            {item.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                              >
                                <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1">▸</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg">
            <Award className="text-primary-600 dark:text-primary-400 mx-auto mb-2" size={32} />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">1955+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Projects Managed</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg">
            <Users className="text-primary-600 dark:text-primary-400 mx-auto mb-2" size={32} />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">860+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Satisfied Customers</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg">
            <Code className="text-primary-600 dark:text-primary-400 mx-auto mb-2" size={32} />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">16+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg">
            <Target className="text-primary-600 dark:text-primary-400 mx-auto mb-2" size={32} />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">5</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Organizations Served</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

