'use client'

import Script from 'next/script'
import { getAnalyticsConfig } from '@/lib/analytics-config'
import { useEffect, useState } from 'react'

export default function AnalyticsScripts() {
  const [config, setConfig] = useState<ReturnType<typeof getAnalyticsConfig>>(getAnalyticsConfig())
  const [key, setKey] = useState(0) // Key to force remount scripts when config changes

  // Load config from localStorage and watch for changes
  useEffect(() => {
    const loadConfig = () => {
      const currentConfig = getAnalyticsConfig()
      setConfig(prevConfig => {
        const configChanged = JSON.stringify(prevConfig) !== JSON.stringify(currentConfig)
        
        // Force remount scripts if config changed
        if (configChanged) {
          setKey(prev => prev + 1)
        }
        
        return currentConfig
      })
    }
    
    loadConfig()
    
    // Listen for storage changes (when config is updated in another tab)
    window.addEventListener('storage', loadConfig)
    
    // Listen for custom event when config is updated in same tab
    window.addEventListener('analytics-config-updated', loadConfig)
    
    // Poll for changes (in case localStorage is updated in same tab)
    const interval = setInterval(loadConfig, 500) // Check every 500ms for faster updates
    
    return () => {
      window.removeEventListener('storage', loadConfig)
      window.removeEventListener('analytics-config-updated', loadConfig)
      clearInterval(interval)
    }
  }, [])

  // Add Google Search Console verification meta tag dynamically
  useEffect(() => {
    if (config.googleSearchConsole?.enabled && config.googleSearchConsole.verificationCode) {
      // Remove existing meta tag if any
      const existingMeta = document.querySelector('meta[name="google-site-verification"]')
      if (existingMeta) {
        existingMeta.remove()
      }
      
      // Add new meta tag
      const metaTag = document.createElement('meta')
      metaTag.setAttribute('name', 'google-site-verification')
      metaTag.setAttribute('content', config.googleSearchConsole.verificationCode)
      document.head.appendChild(metaTag)
    } else {
      // Remove meta tag if disabled
      const metaTag = document.querySelector('meta[name="google-site-verification"]')
      if (metaTag) {
        metaTag.remove()
      }
    }
  }, [config.googleSearchConsole])

  return (
    <>
      {/* Google Analytics 4 */}
      {config.googleAnalytics?.enabled && config.googleAnalytics.measurementId && (
        <>
          <Script
            key={`ga-js-${key}-${config.googleAnalytics.measurementId}`}
            src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalytics.measurementId}`}
            strategy="afterInteractive"
          />
          <Script 
            key={`ga-config-${key}-${config.googleAnalytics.measurementId}`}
            id="google-analytics" 
            strategy="afterInteractive"
          >
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${config.googleAnalytics.measurementId}');
            `}
          </Script>
        </>
      )}

      {/* Google Tag Manager */}
      {config.googleTagManager?.enabled && config.googleTagManager.containerId && (
        <>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${config.googleTagManager.containerId}');
            `}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${config.googleTagManager.containerId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      )}

      {/* Facebook Pixel */}
      {config.facebookPixel?.enabled && config.facebookPixel.pixelId && (
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${config.facebookPixel.pixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}

      {/* Microsoft Clarity */}
      {config.microsoftClarity?.enabled && config.microsoftClarity.projectId && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${config.microsoftClarity.projectId}");
          `}
        </Script>
      )}

      {/* Hotjar */}
      {config.hotjar?.enabled && config.hotjar.siteId && (
        <Script id="hotjar" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${config.hotjar.siteId},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      )}
    </>
  )
}

