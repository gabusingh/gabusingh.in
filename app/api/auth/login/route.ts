import { NextRequest, NextResponse } from 'next/server'
import { validateCredentials, createSessionToken } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      )
    }

    if (!validateCredentials(username, password)) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Create session token
    const token = createSessionToken()
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days

    // Set HTTP-only cookie for security
    const response = NextResponse.json(
      { success: true, message: 'Login successful' },
      { status: 200 }
    )

    response.cookies.set('admin-session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      expires,
      path: '/',
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

