export interface AnalyticsConfig {
  googleAnalytics?: {
    enabled: boolean
    measurementId: string // G-XXXXXXXXXX or GA4 measurement ID
  }
  googleTagManager?: {
    enabled: boolean
    containerId: string // GTM-XXXXXXX
  }
  googleSearchConsole?: {
    enabled: boolean
    verificationCode: string
  }
  facebookPixel?: {
    enabled: boolean
    pixelId: string // 15-digit number
  }
  microsoftClarity?: {
    enabled: boolean
    projectId: string
  }
  hotjar?: {
    enabled: boolean
    siteId: string // 6-digit number
  }
}

// Default empty configuration
export const defaultAnalyticsConfig: AnalyticsConfig = {
  googleAnalytics: {
    enabled: false,
    measurementId: '',
  },
  googleTagManager: {
    enabled: false,
    containerId: '',
  },
  googleSearchConsole: {
    enabled: false,
    verificationCode: '',
  },
  facebookPixel: {
    enabled: false,
    pixelId: '',
  },
  microsoftClarity: {
    enabled: false,
    projectId: '',
  },
  hotjar: {
    enabled: false,
    siteId: '',
  },
}

// In production, this would load from a database or file
// For now, we'll use localStorage in the browser and in-memory on server
let analyticsConfig: AnalyticsConfig = { ...defaultAnalyticsConfig }

export function getAnalyticsConfig(): AnalyticsConfig {
  // In browser, try to load from localStorage
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem('analytics-config')
      if (saved) {
        const parsed = JSON.parse(saved)
        return { ...defaultAnalyticsConfig, ...parsed }
      }
    } catch (error) {
      console.error('Error loading analytics config from localStorage:', error)
    }
  }
  
  // Fallback to in-memory config or default
  return analyticsConfig
}

export function updateAnalyticsConfig(config: AnalyticsConfig): void {
  analyticsConfig = { ...config }
  
  // Save to localStorage in browser
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('analytics-config', JSON.stringify(config))
    } catch (error) {
      console.error('Error saving analytics config to localStorage:', error)
    }
  }
  
  // In production, also save to database/file
  // TODO: Implement persistence to database/file/API
}

