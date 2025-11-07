// Simple authentication utilities
// In production, use a more secure method (JWT, NextAuth, etc.)

export interface AuthSession {
  isAuthenticated: boolean
  username?: string
}

// Default credentials (should be moved to environment variables in production)
const DEFAULT_USERNAME = process.env.ADMIN_USERNAME || 'admin'
const DEFAULT_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'

export function validateCredentials(username: string, password: string): boolean {
  return username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD
}

export function createSessionToken(): string {
  // In production, use a proper JWT or session token
  return Buffer.from(`${Date.now()}-${Math.random()}`).toString('base64')
}

export function isPublicAdminRoute(pathname: string): boolean {
  // Routes that don't require authentication
  const publicRoutes = ['/admin/login']
  return publicRoutes.some(route => pathname.startsWith(route))
}

