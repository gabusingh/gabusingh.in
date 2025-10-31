'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, Globe, ShoppingBag, Building2, Stethoscope, Leaf, Utensils, TreePine, Sun, Mountain, Droplet, Briefcase } from 'lucide-react'

interface Project {
  title: string
  description: string
  tags: string[]
  link: string
  category: string
  icon: any
  color: string
}

const projects: Project[] = [
  {
    title: 'Travel Essence Magazine',
    description:
      'Online publication dedicated to showcasing Africa\'s diverse landscapes, rich cultures, and unique travel experiences with a variety of interactive sections.',
    tags: ['WordPress', 'Elementor', 'Magazine', 'Web Design', 'Hosting & Maintenance'],
    link: 'https://wpfreelance.in/projects/',
    category: 'Magazine',
    icon: Globe,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Adirex Pharmaceuticals',
    description:
      'Pharmaceutical company website focused on developing and providing innovative healthcare solutions with WooCommerce integration for product management.',
    tags: ['WordPress', 'Elementor', 'WooCommerce', 'Web Design', 'Hosting & Maintenance'],
    link: 'https://wpfreelance.in/projects/',
    category: 'E-Commerce',
    icon: Stethoscope,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Satiate Luxe',
    description:
      'Luxury restaurant platform enabling customers to relish premium dining experiences at home with custom menu selection and online ordering system.',
    tags: ['WordPress', 'Elementor', 'WooCommerce', 'Food & Beverages', 'Web Design'],
    link: 'https://wpfreelance.in/projects/',
    category: 'E-Commerce',
    icon: Utensils,
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Gangani Resort',
    description:
      'Hotel and resort website running on Public Private Partnership Model, featuring booking system and comprehensive resort information at Gangani Tourist Spot.',
    tags: ['WordPress', 'Elementor', 'WooCommerce', 'Web Application', 'Hosting & Maintenance'],
    link: 'https://wpfreelance.in/projects/',
    category: 'E-Commerce',
    icon: Mountain,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Anticlock Suites & Resorts',
    description:
      'Popular restaurant and bar in Bankura with mobile-responsive design, online ordering system, and comprehensive booking management.',
    tags: ['WordPress', 'WooCommerce', 'Mobile Design', 'Web Application', 'Food & Beverages'],
    link: 'https://wpfreelance.in/projects/',
    category: 'E-Commerce',
    icon: Utensils,
    color: 'from-red-500 to-rose-500',
  },
  {
    title: 'PlantZone',
    description:
      'Plant discovery and delivery platform helping users discover the best plants for their space with door-to-door delivery and care guidance.',
    tags: ['WordPress', 'Elementor', 'WooCommerce', 'Web Design'],
    link: 'https://wpfreelance.in/projects/',
    category: 'E-Commerce',
    icon: Leaf,
    color: 'from-green-600 to-teal-600',
  },
  {
    title: 'Bankura Organics',
    description:
      'Medicinal Plants Seeds & Saplings marketplace, Herbal Garden & Organic Farming platform connecting buyers and suppliers of raw herbs.',
    tags: ['WordPress', 'Elementor', 'Branding', 'Web Design', 'Hosting & Maintenance'],
    link: 'https://wpfreelance.in/projects/',
    category: 'Corporate',
    icon: Leaf,
    color: 'from-lime-500 to-green-500',
  },
  {
    title: 'Arnab Powertech',
    description:
      'Solar solution expert website providing end-to-end solar solutions with comprehensive service information and project showcase.',
    tags: ['WordPress', 'Elementor', 'Branding', 'Web Design', 'Hosting & Maintenance'],
    link: 'https://wpfreelance.in/projects/',
    category: 'Corporate',
    icon: Sun,
    color: 'from-yellow-500 to-amber-500',
  },
  {
    title: 'Ma Annapurna',
    description:
      'Salasar Bakers Pvt Ltd website for manufacturing and showcasing bakery products including Bread, Rusk, Cakes, Cookies and Khari items.',
    tags: ['WordPress', 'Elementor', 'Branding', 'Web Design'],
    link: 'https://wpfreelance.in/projects/',
    category: 'Corporate',
    icon: Droplet,
    color: 'from-brown-500 to-amber-600',
  },
  {
    title: 'Bankura District Forest',
    description:
      'Forest conservation initiative website highlighting the impressive achievement of planting 21,000,000+ seedlings in the last 5 years.',
    tags: ['WordPress', 'Elementor', 'Web Design', 'Hosting & Maintenance'],
    link: 'https://wpfreelance.in/projects/',
    category: 'Corporate',
    icon: TreePine,
    color: 'from-green-700 to-green-900',
  },
  {
    title: 'Gush Contractors',
    description:
      'Construction company website showcasing over a decade of delivering quality projects with portfolio and service information.',
    tags: ['WordPress', 'Visual Composer', 'Web Design'],
    link: 'https://wpfreelance.in/projects/',
    category: 'Corporate',
    icon: Building2,
    color: 'from-gray-600 to-gray-800',
  },
  {
    title: 'Altos de Montserrat',
    description:
      'Luxury gated community website in Playa Herradura, Costa Rica, featuring ocean-view residences with modern design and high-end amenities showcase.',
    tags: ['WordPress', 'Elementor', 'Web Design'],
    link: 'https://wpfreelance.in/projects/',
    category: 'Corporate',
    icon: Mountain,
    color: 'from-blue-600 to-indigo-600',
  },
  {
    title: 'Nucleus Diagnostic Centre',
    description:
      'Reliable one-stop solution for medical needs across pathology and doctor consultations with appointment booking and service information.',
    tags: ['Web Application', 'Web Design', 'Product'],
    link: 'https://wpfreelance.in/projects/',
    category: 'Web App',
    icon: Briefcase,
    color: 'from-teal-500 to-cyan-500',
  },
]

const categories = ['All', 'E-Commerce', 'Corporate', 'Magazine', 'Web App']

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            A curated selection of projects showcasing expertise in WordPress development, WooCommerce, and custom web solutions
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary-600 to-blue-600 text-white shadow-lg shadow-primary-500/50 scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                {/* Project Image/Icon Header */}
                <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="text-white" size={64} />
                  </motion.div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="text-white" size={32} />
                    </motion.div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-xs font-semibold text-gray-900 dark:text-white rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <span>View Project</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* View All Projects Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://wpfreelance.in/projects/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-full font-semibold hover:from-primary-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>View All Projects</span>
            <ExternalLink size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}