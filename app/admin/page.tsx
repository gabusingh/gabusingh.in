'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

export default function AdminPage() {
  const router = useRouter()
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    checkAuthAndRedirect()
  }, [])

  const checkAuthAndRedirect = async () => {
    try {
      const response = await fetch('/api/auth/check')
      
      if (!response.ok) {
        // If response is not ok, redirect to login
        router.push('/admin/login')
        return
      }
      
      const data = await response.json()

      if (data.isAuthenticated) {
        // Redirect to blog admin if authenticated
        router.push('/admin/blog')
      } else {
        // Redirect to login if not authenticated
        router.push('/admin/login')
      }
    } catch (error) {
      console.error('Auth check error:', error)
      // On error, redirect to login
      router.push('/admin/login')
    } finally {
      setIsChecking(false)
    }
  }

  // Show loading state while checking authentication
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="animate-spin text-primary-600 mx-auto mb-4" size={32} />
        <p className="text-gray-600 dark:text-gray-400">Redirecting...</p>
      </div>
    </div>
  )
}

