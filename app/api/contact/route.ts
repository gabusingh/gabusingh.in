import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check if Resend API key is configured
    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      // In development, you can log the email instead
      if (process.env.NODE_ENV === 'development') {
        console.log('Email would be sent:', {
          to: process.env.CONTACT_EMAIL || 'hello@gabusingh.in',
          from: 'noreply@gabusingh.in',
          subject: `Contact Form: ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
        })
        return NextResponse.json(
          { message: 'Email sent successfully (development mode)' },
          { status: 200 }
        )
      }
      
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Send email using Resend
    const resend = new Resend(resendApiKey)

    // Domain verified (gabusingh.in) - can send to any recipient using verified domain email
    const toEmail = process.env.CONTACT_EMAIL || 'hello@gabusingh.in'
    const fromEmail = process.env.FROM_EMAIL || 'noreply@gabusingh.in'

    try {
      const { data, error } = await resend.emails.send({
        from: `Portfolio Contact <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject: `Contact Form: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      })

      if (error) {
        console.error('Resend API error:', JSON.stringify(error, null, 2))
        
        // Extract error message from Resend error response
        let errorMessage = 'Failed to send email'
        
        // Resend errors can have different structures
        if (typeof error === 'string') {
          errorMessage = error
        } else if (error && typeof error === 'object') {
          // Try common error message fields
          const errorObj = error as any
          if (errorObj.message) {
            errorMessage = errorObj.message
          } else if (errorObj.error) {
            errorMessage = typeof errorObj.error === 'string' 
              ? errorObj.error 
              : errorObj.error.message || 'Unknown error'
          } else if (Array.isArray(errorObj) && errorObj.length > 0) {
            errorMessage = errorObj[0].message || 'Validation error'
          }
        }
        
        return NextResponse.json(
          { error: errorMessage },
          { status: 500 }
        )
      }

      if (!data) {
        console.error('Resend returned no data and no error')
        return NextResponse.json(
          { error: 'Email service returned an unexpected response' },
          { status: 500 }
        )
      }

      return NextResponse.json(
        { message: 'Email sent successfully', id: data.id },
        { status: 200 }
      )
    } catch (resendError) {
      // Handle errors thrown by Resend SDK
      console.error('Resend SDK error:', resendError)
      
      let errorMessage = 'Failed to send email'
      if (resendError instanceof Error) {
        errorMessage = resendError.message
      } else if (resendError && typeof resendError === 'object') {
        const err = resendError as any
        errorMessage = err.message || err.error || 'Unknown error'
      }
      
      return NextResponse.json(
        { error: errorMessage },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Contact form error:', error)
    
    // Provide more detailed error information
    let errorMessage = 'Internal server error'
    if (error instanceof Error) {
      errorMessage = error.message
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name,
      })
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}

