import { NextRequest, NextResponse } from 'next/server'
import { AnalyticsConfig, updateAnalyticsConfig } from '@/lib/analytics-config'

export async function POST(request: NextRequest) {
  try {
    const config: AnalyticsConfig = await request.json()

    // Validate configuration
    if (!config || typeof config !== 'object') {
      return NextResponse.json({ error: 'Invalid configuration' }, { status: 400 })
    }

    // Save configuration
    updateAnalyticsConfig(config)

    // TODO: In production, save to database or file system
    // For now, we'll just validate and return success
    // You can extend this to save to:
    // - A JSON file
    // - A database (MongoDB, PostgreSQL, etc.)
    // - Environment variables (for sensitive data)
    // - A CMS like Sanity, Contentful, etc.

    return NextResponse.json({
      success: true,
      message: 'Analytics configuration saved successfully',
      config,
    })
  } catch (error) {
    console.error('Error saving analytics config:', error)
    return NextResponse.json(
      { error: 'Failed to save analytics configuration' },
      { status: 500 }
    )
  }
}

