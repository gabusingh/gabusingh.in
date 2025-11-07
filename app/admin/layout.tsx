'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { isPublicAdminRoute } from '@/lib/auth'
import { Loader2 } from 'lucide-react'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [isChecking, setIsChecking] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    checkAuthentication()
  }, [pathname])

  const checkAuthentication = async () => {
    // Allow public routes
    if (isPublicAdminRoute(pathname)) {
      setIsChecking(false)
      return
    }

    try {
      const response = await fetch('/api/auth/check')
      
      if (!response.ok) {
        // If response is not ok, redirect to login
        router.push('/admin/login')
        return
      }
      
      const data = await response.json()

      if (data.isAuthenticated) {
        setIsAuthenticated(true)
      } else {
        // Redirect to login if not authenticated
        router.push('/admin/login')
        return
      }
    } catch (error) {
      console.error('Auth check error:', error)
      router.push('/admin/login')
      return
    } finally {
      setIsChecking(false)
    }
  }

  // Show loading state while checking authentication
  if (isChecking && !isPublicAdminRoute(pathname)) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="animate-spin text-primary-600 mx-auto mb-4" size={32} />
          <p className="text-gray-600 dark:text-gray-400">Checking authentication...</p>
        </div>
      </div>
    )
  }

  // If not authenticated and not a public route, don't render children
  // (redirect will happen)
  if (!isAuthenticated && !isPublicAdminRoute(pathname)) {
    return null
  }

  return <>{children}</>
}

