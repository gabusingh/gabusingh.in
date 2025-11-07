import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const session = request.cookies.get('admin-session')

  if (session?.value) {
    return NextResponse.json({ isAuthenticated: true }, { status: 200 })
  }

  // Return 200 with isAuthenticated: false instead of 401
  // 401 is for authentication errors, not for "not authenticated yet"
  return NextResponse.json({ isAuthenticated: false }, { status: 200 })
}

