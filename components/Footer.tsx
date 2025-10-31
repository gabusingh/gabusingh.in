'use client'

import { Linkedin, Briefcase, Globe, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/pradiptasinha/', label: 'LinkedIn' },
    { icon: Briefcase, href: 'https://www.upwork.com/freelancers/~018601c014ac7a099f', label: 'Upwork' },
    { icon: Globe, href: 'https://www.fiverr.com/wpfreelance?public_mode=true', label: 'Fiverr' },
    { icon: Mail, href: 'mailto:hello@gabusingh.in', label: 'Email' },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Pradipta Sinha</h3>
            <p className="text-gray-400 leading-relaxed">
              WordPress Developer & SEO Specialist creating modern, fast, and
              SEO-optimized websites for businesses worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-primary-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary-400 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="https://wpfreelance.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                Visit WPFreelance →
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} Pradipta Sinha. All rights reserved. | Built with Next.js &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
