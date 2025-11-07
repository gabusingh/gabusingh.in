'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  BarChart3,
  Search,
  MousePointer,
  Eye,
  Activity,
  Save,
  CheckCircle,
  AlertCircle,
  Loader2,
  Settings,
  Info,
} from 'lucide-react'
import Link from 'next/link'
import { AnalyticsConfig, getAnalyticsConfig, updateAnalyticsConfig } from '@/lib/analytics-config'
import AdminLogout from '@/components/AdminLogout'

export default function AnalyticsAdminPage() {
  const [config, setConfig] = useState<AnalyticsConfig>({
    googleAnalytics: { enabled: false, measurementId: '' },
    googleTagManager: { enabled: false, containerId: '' },
    googleSearchConsole: { enabled: false, verificationCode: '' },
    facebookPixel: { enabled: false, pixelId: '' },
    microsoftClarity: { enabled: false, projectId: '' },
    hotjar: { enabled: false, siteId: '' },
  })
  const [isSaving, setIsSaving] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    // Load current configuration from localStorage
    try {
      const saved = localStorage.getItem('analytics-config')
      if (saved) {
        const parsed = JSON.parse(saved)
        setConfig(parsed)
      }
    } catch (error) {
      console.error('Error loading analytics config:', error)
      // Load default config
      const currentConfig = getAnalyticsConfig()
      setConfig(currentConfig)
    }
  }, [])

  const handleChange = (service: keyof AnalyticsConfig, field: string, value: string | boolean) => {
    setConfig((prev) => ({
      ...prev,
      [service]: {
        ...prev[service],
        [field]: value,
      },
    }))
  }

  const handleSave = async () => {
    setIsSaving(true)
    setError('')
    setSuccess('')

    try {
      // Validate configurations
      if (config.googleAnalytics?.enabled && !config.googleAnalytics.measurementId.trim()) {
        throw new Error('Google Analytics Measurement ID is required when enabled')
      }
      if (config.googleTagManager?.enabled && !config.googleTagManager.containerId.trim()) {
        throw new Error('Google Tag Manager Container ID is required when enabled')
      }
      if (config.facebookPixel?.enabled && !config.facebookPixel.pixelId.trim()) {
        throw new Error('Facebook Pixel ID is required when enabled')
      }
      if (config.microsoftClarity?.enabled && !config.microsoftClarity.projectId.trim()) {
        throw new Error('Microsoft Clarity Project ID is required when enabled')
      }
      if (config.hotjar?.enabled && !config.hotjar.siteId.trim()) {
        throw new Error('Hotjar Site ID is required when enabled')
      }

      // Save to localStorage
      localStorage.setItem('analytics-config', JSON.stringify(config))
      
      // Update configuration
      updateAnalyticsConfig(config)

      // Save to API (optional - for server-side persistence)
      try {
        const response = await fetch('/api/analytics/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(config),
        })

        if (!response.ok) {
          console.warn('Failed to save to API, but saved to localStorage')
        }
      } catch (apiError) {
        console.warn('API save failed, but configuration saved to localStorage:', apiError)
      }

      setSuccess('Analytics configuration saved successfully!')
      setTimeout(() => setSuccess(''), 3000)
      
      // Trigger a custom event to notify AnalyticsScripts component
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('analytics-config-updated'))
      }
    } catch (err: any) {
      setError(err.message || 'Failed to save analytics configuration')
    } finally {
      setIsSaving(false)
    }
  }

  const serviceConfigs = [
    {
      key: 'googleAnalytics' as keyof AnalyticsConfig,
      title: 'Google Analytics 4 (GA4)',
      icon: BarChart3,
      description: 'Track website traffic, user behavior, and conversions',
      fields: [
        {
          name: 'measurementId',
          label: 'Measurement ID',
          placeholder: 'G-XXXXXXXXXX',
          type: 'text',
          help: 'Find this in your Google Analytics 4 property settings',
        },
      ],
      enabled: config.googleAnalytics?.enabled || false,
    },
    {
      key: 'googleTagManager' as keyof AnalyticsConfig,
      title: 'Google Tag Manager',
      icon: Settings,
      description: 'Manage and deploy marketing tags without code changes',
      fields: [
        {
          name: 'containerId',
          label: 'Container ID',
          placeholder: 'GTM-XXXXXXX',
          type: 'text',
          help: 'Found in your GTM container dashboard',
        },
      ],
      enabled: config.googleTagManager?.enabled || false,
    },
    {
      key: 'googleSearchConsole' as keyof AnalyticsConfig,
      title: 'Google Search Console',
      icon: Search,
      description: 'Monitor search performance and verify site ownership',
      fields: [
        {
          name: 'verificationCode',
          label: 'Verification Code',
          placeholder: 'Verification meta tag content',
          type: 'text',
          help: 'Copy the content value from your verification meta tag',
        },
      ],
      enabled: config.googleSearchConsole?.enabled || false,
    },
    {
      key: 'facebookPixel' as keyof AnalyticsConfig,
      title: 'Facebook Pixel',
      icon: MousePointer,
      description: 'Track conversions and optimize Facebook ad campaigns',
      fields: [
        {
          name: 'pixelId',
          label: 'Pixel ID',
          placeholder: '123456789012345',
          type: 'text',
          help: 'Found in your Facebook Events Manager',
        },
      ],
      enabled: config.facebookPixel?.enabled || false,
    },
    {
      key: 'microsoftClarity' as keyof AnalyticsConfig,
      title: 'Microsoft Clarity',
      icon: Eye,
      description: 'Free heatmaps, session recordings, and insights',
      fields: [
        {
          name: 'projectId',
          label: 'Project ID',
          placeholder: 'Your Clarity project ID',
          type: 'text',
          help: 'Found in your Microsoft Clarity project settings',
        },
      ],
      enabled: config.microsoftClarity?.enabled || false,
    },
    {
      key: 'hotjar' as keyof AnalyticsConfig,
      title: 'Hotjar',
      icon: Activity,
      description: 'Heatmaps, recordings, surveys, and user feedback',
      fields: [
        {
          name: 'siteId',
          label: 'Site ID',
          placeholder: '123456',
          type: 'text',
          help: 'Found in your Hotjar site settings',
        },
      ],
      enabled: config.hotjar?.enabled || false,
    },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Top Bar */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <BarChart3 className="text-primary-600" size={24} />
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                Analytics & Tracking
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/admin/blog"
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                Blog Admin
              </Link>
              <Link
                href="/admin/blog/list"
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                All Posts
              </Link>
              <AdminLogout />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6 flex items-start gap-3"
        >
          <Info className="text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" size={20} />
          <div className="text-sm text-blue-800 dark:text-blue-300">
            <p className="font-medium mb-1">Configuration Guide</p>
            <p>
              Add your tracking IDs and codes below. These will be automatically included in your site's header.
              Make sure to verify each service after adding the configuration.
            </p>
          </div>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6 flex items-start gap-3"
          >
            <AlertCircle className="text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" size={20} />
            <p className="text-sm text-red-800 dark:text-red-300">{error}</p>
          </motion.div>
        )}

        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6 flex items-start gap-3"
          >
            <CheckCircle className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" size={20} />
            <p className="text-sm text-green-800 dark:text-green-300">{success}</p>
          </motion.div>
        )}

        {/* Analytics Services */}
        <div className="space-y-6">
          {serviceConfigs.map((service, index) => {
            const Icon = service.icon
            const serviceData = config[service.key]

            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                      <Icon className="text-primary-600 dark:text-primary-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{service.description}</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={service.enabled}
                      onChange={(e) => handleChange(service.key, 'enabled', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                  </label>
                </div>

                {service.enabled && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
                    {service.fields.map((field) => (
                      <div key={field.name}>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          value={(serviceData as any)?.[field.name] || ''}
                          onChange={(e) => handleChange(service.key, field.name, e.target.value)}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                        {field.help && (
                          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{field.help}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSaving ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Saving...
              </>
            ) : (
              <>
                <Save size={20} />
                Save Configuration
              </>
            )}
          </button>
        </div>

        {/* Status Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Configuration Status
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {serviceConfigs.map((service) => {
              const serviceData = config[service.key]
              const isEnabled = service.enabled
              const hasId = service.fields.some(
                (field) => (serviceData as any)?.[field.name]?.trim()
              )
              const status = isEnabled && hasId ? 'configured' : isEnabled ? 'incomplete' : 'disabled'

              return (
                <div key={service.key} className="flex items-center gap-3">
                  {status === 'configured' ? (
                    <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
                  ) : status === 'incomplete' ? (
                    <AlertCircle className="text-yellow-600 dark:text-yellow-400" size={20} />
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-600" />
                  )}
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {service.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {status === 'configured'
                        ? 'Active'
                        : status === 'incomplete'
                        ? 'Missing configuration'
                        : 'Disabled'}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </main>
  )
}

