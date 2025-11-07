# Analytics & Tracking Setup Guide

## Overview

The admin analytics panel allows you to easily configure and manage all your tracking services in one place. No need to manually edit code or configuration files.

## Access

Navigate to `/admin/analytics` in your browser to access the analytics configuration panel.

## Supported Services

### 1. Google Analytics 4 (GA4)

**What it does**: Tracks website traffic, user behavior, conversions, and provides detailed analytics.

**Setup**:
1. Go to [Google Analytics](https://analytics.google.com)
2. Create a GA4 property (if you haven't already)
3. Go to **Admin** → **Data Streams** → Select your web stream
4. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)
5. Enable the toggle in the admin panel
6. Paste the Measurement ID
7. Click "Save Configuration"

**Note**: The tracking script will automatically be added to all pages.

### 2. Google Tag Manager (GTM)

**What it does**: Manages and deploys marketing tags (analytics, pixels, etc.) without code changes.

**Setup**:
1. Go to [Google Tag Manager](https://tagmanager.google.com)
2. Create a container or use an existing one
3. Copy your **Container ID** (format: `GTM-XXXXXXX`)
4. Enable the toggle in the admin panel
5. Paste the Container ID
6. Click "Save Configuration"

**Note**: GTM can be used alongside GA4 or as an alternative.

### 3. Google Search Console

**What it does**: Verifies site ownership and provides search performance data.

**Setup**:
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (domain or URL prefix)
3. Choose **HTML tag** verification method
4. Copy the **content** value from the meta tag (not the entire tag)
   - Example: If the tag is `<meta name="google-site-verification" content="abc123xyz" />`
   - Copy only: `abc123xyz`
5. Enable the toggle in the admin panel
6. Paste the verification code
7. Click "Save Configuration"
8. Go back to Search Console and click "Verify"

**Note**: The verification meta tag will be automatically added to your site's `<head>`.

### 4. Facebook Pixel

**What it does**: Tracks conversions and user actions for Facebook ad campaigns.

**Setup**:
1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Create a new pixel or select an existing one
3. Copy your **Pixel ID** (15-digit number)
4. Enable the toggle in the admin panel
5. Paste the Pixel ID
6. Click "Save Configuration"

**Note**: The pixel will automatically track PageView events. Additional events can be added via custom code.

### 5. Microsoft Clarity

**What it does**: Provides free heatmaps, session recordings, and user behavior insights.

**Setup**:
1. Go to [Microsoft Clarity](https://clarity.microsoft.com)
2. Create a new project
3. Copy your **Project ID**
4. Enable the toggle in the admin panel
5. Paste the Project ID
6. Click "Save Configuration"

**Note**: Clarity is completely free and provides powerful insights.

### 6. Hotjar

**What it does**: Advanced heatmaps, session recordings, surveys, and user feedback tools.

**Setup**:
1. Go to [Hotjar](https://www.hotjar.com)
2. Create a new site or use an existing one
3. Copy your **Site ID** (6-digit number)
4. Enable the toggle in the admin panel
5. Paste the Site ID
6. Click "Save Configuration"

**Note**: Hotjar offers free and paid plans with different features.

## Configuration Storage

Currently, configurations are stored in:
- **Browser localStorage**: Persists across sessions
- **In-memory**: For server-side rendering

### For Production

To persist configurations permanently, you can:
1. **Save to a JSON file**: Update the API route to write to `/data/analytics-config.json`
2. **Save to a database**: Connect to MongoDB, PostgreSQL, etc.
3. **Use environment variables**: For sensitive configurations
4. **Use a CMS**: Integrate with Sanity, Contentful, etc.

## How It Works

1. **Configuration**: Enter your tracking IDs in the admin panel
2. **Storage**: Configurations are saved to localStorage (browser) or API (server)
3. **Injection**: The `AnalyticsScripts` component automatically injects the tracking scripts
4. **Verification**: Google Search Console meta tag is dynamically added to the `<head>`

## Verification Status

The admin panel shows the status of each service:
- ✅ **Active**: Service is enabled and properly configured
- ⚠️ **Missing configuration**: Service is enabled but missing required ID/code
- ⚪ **Disabled**: Service is turned off

## Best Practices

1. **Don't enable all services at once**: Start with essential ones (GA4, Search Console)
2. **Test after enabling**: Use browser developer tools to verify scripts are loading
3. **Verify Search Console**: After adding the verification code, verify in Google Search Console
4. **Check for conflicts**: Some services may conflict (e.g., GTM includes GA4, so don't enable both GA4 and GTM with GA4)
5. **Respect privacy**: Ensure GDPR compliance if targeting EU users

## Troubleshooting

### Scripts Not Loading

1. Check browser console for errors
2. Verify IDs are correct (no extra spaces)
3. Ensure the service toggle is enabled
4. Clear browser cache and reload

### Google Search Console Not Verifying

1. Ensure verification code is correct (only the content value)
2. Check that the meta tag appears in page source
3. Wait a few minutes after saving before verifying
4. Try alternative verification methods if needed

### Multiple Analytics Services

- **GA4 + GTM**: If GTM includes GA4, disable direct GA4 to avoid double-tracking
- **Clarity + Hotjar**: Can run together but may impact performance
- **Facebook Pixel + GTM**: Pixel can be deployed via GTM or directly

## Security Notes

- Tracking IDs are public by design (they're in the page source)
- Verification codes are also public
- No sensitive API keys are stored in this configuration
- Consider adding authentication to the admin panel in production

## Next Steps

1. Visit `/admin/analytics`
2. Enable and configure the services you need
3. Save the configuration
4. Verify each service is working (check Google Analytics dashboard, Search Console, etc.)
5. Monitor tracking in respective dashboards

