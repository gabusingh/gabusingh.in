# Admin Authentication Guide

## Overview

The admin section now has authentication protection. The `/admin/analytics` page remains publicly accessible, while all other admin routes require login.

## Public Routes

- `/admin/analytics` - Analytics configuration (publicly accessible)
- `/admin/login` - Login page (publicly accessible)

## Protected Routes

- `/admin/blog` - Blog post editor (requires authentication)
- `/admin/blog/list` - Blog post list (requires authentication)
- All other `/admin/*` routes (requires authentication)

## Default Credentials

**⚠️ IMPORTANT: Change these in production!**

- **Username**: `admin`
- **Password**: `admin123`

## Setting Custom Credentials

To set custom credentials, add environment variables to your `.env.local` file:

```env
ADMIN_USERNAME=your_username
ADMIN_PASSWORD=your_secure_password
```

## How It Works

1. **Session Management**: Uses HTTP-only cookies for secure session management
2. **Authentication Check**: The admin layout automatically checks authentication for protected routes
3. **Automatic Redirect**: Unauthenticated users are redirected to `/admin/login`
4. **Public Routes**: The `/admin/analytics` route bypasses authentication checks

## Login Flow

1. User visits a protected admin route (e.g., `/admin/blog`)
2. If not authenticated, they're redirected to `/admin/login`
3. User enters credentials
4. On successful login, a session cookie is set
5. User is redirected to the originally requested page or `/admin/blog`

## Logout

- Click the "Logout" button in any admin page header
- Session cookie is cleared
- User is redirected to the login page

## Security Notes

### Current Implementation (Development)
- Simple username/password authentication
- Session stored in HTTP-only cookies
- Basic credential validation

### Production Recommendations
1. **Use Environment Variables**: Store credentials in `.env.local` (never commit to git)
2. **Strong Passwords**: Use a strong, unique password
3. **HTTPS**: Ensure your site uses HTTPS in production
4. **Consider NextAuth.js**: For production, consider using NextAuth.js or similar for:
   - OAuth providers (Google, GitHub, etc.)
   - JWT tokens
   - Refresh tokens
   - Multi-factor authentication
   - Rate limiting
   - Session management

## API Endpoints

- `POST /api/auth/login` - Authenticate user
- `POST /api/auth/logout` - Clear session
- `GET /api/auth/check` - Check authentication status

## Files

- `lib/auth.ts` - Authentication utilities
- `app/admin/layout.tsx` - Admin layout with authentication check
- `app/admin/login/page.tsx` - Login page
- `app/api/auth/login/route.ts` - Login API endpoint
- `app/api/auth/logout/route.ts` - Logout API endpoint
- `app/api/auth/check/route.ts` - Auth check API endpoint
- `components/AdminLogout.tsx` - Logout button component

