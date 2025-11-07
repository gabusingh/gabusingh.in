# WordPress Integration Setup Guide

## Overview

Your Next.js portfolio now supports WordPress as a headless CMS for blog posts. You can manage all your blog content in WordPress while displaying it on your Next.js site.

## Benefits

- ✅ Manage blog posts in familiar WordPress admin
- ✅ Use WordPress plugins and features (SEO, media library, categories, tags)
- ✅ Keep your Next.js site fast and modern
- ✅ Best of both worlds: WordPress for content, Next.js for frontend

## Setup Instructions

### 1. WordPress Installation

You can use:
- **Self-hosted WordPress** (your own WordPress installation)
- **WordPress.com** (hosted WordPress)
- **Managed WordPress hosting** (WP Engine, Kinsta, etc.)

### 2. Enable WordPress REST API

WordPress REST API is enabled by default in WordPress 4.7+. Verify it's working by visiting:
```
https://your-wordpress-site.com/wp-json/wp/v2/posts
```

You should see JSON data of your posts.

### 3. Configure Environment Variables

Add to your `.env.local` file:

```bash
# WordPress URL (without trailing slash)
NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-site.com

# Or if using server-side only:
WORDPRESS_URL=https://your-wordpress-site.com
```

**Example:**
```bash
NEXT_PUBLIC_WORDPRESS_URL=https://blog.wpfreelance.in
```

### 4. Make WordPress Posts Public (Optional)

If you want to access WordPress posts without authentication:
1. WordPress Dashboard → **Settings** → **Reading**
2. Ensure your site is set to be visible to search engines
3. Posts are automatically accessible via REST API when published

### 5. WordPress Post Structure

Your WordPress posts should have:
- **Title**: Post title
- **Content**: Full post content (supports HTML)
- **Excerpt**: Short excerpt (auto-generated if not set)
- **Featured Image**: Set featured image in WordPress
- **Categories**: Assign to categories (becomes blog category)
- **Tags**: Add tags (becomes blog tags)

## How It Works

### Data Flow

1. **Next.js site** requests blog posts
2. **WordPress REST API** returns post data
3. **Next.js transforms** WordPress data to match your BlogPost interface
4. **Posts are displayed** on your Next.js site
5. **Caching** prevents excessive API calls (5-minute cache)

### Supported WordPress Features

- ✅ Categories → Blog categories
- ✅ Tags → Blog tags
- ✅ Featured images → Blog featured images
- ✅ Authors → Blog author names
- ✅ Publication dates → Blog dates
- ✅ Custom fields → Can be extended
- ✅ SEO plugins → Works with Yoast, Rank Math, etc.

## WordPress Plugins That Work Well

### SEO Plugins
- **Yoast SEO** - Meta descriptions, titles, canonical URLs
- **Rank Math** - Advanced SEO features
- **All in One SEO** - Comprehensive SEO

### Media Plugins
- **Smush** - Image optimization
- **ShortPixel** - Image compression
- **WP Media Library** - Built-in media management

### Content Plugins
- **Gutenberg** - Block editor (content is rendered)
- **Classic Editor** - Classic WordPress editor
- **Elementor** - Visual builder (content is rendered)

## Performance Optimization

### Caching

Posts are cached for 5 minutes by default. To clear cache programmatically:
```typescript
import { clearPostsCache } from '@/lib/wordpress-api'
clearPostsCache()
```

### Revalidation

- Posts: Revalidated every 5 minutes
- Categories/Tags: Revalidated every hour
- Media: Revalidated every hour

### Next.js ISR (Incremental Static Regeneration)

Posts are automatically revalidated based on the `next: { revalidate }` settings.

## Troubleshooting

### Posts Not Showing

1. **Check WordPress URL**: Verify `NEXT_PUBLIC_WORDPRESS_URL` is correct
2. **Check REST API**: Visit `https://your-site.com/wp-json/wp/v2/posts`
3. **Check Post Status**: Posts must be "Published" not "Draft"
4. **Check Permissions**: REST API should be publicly accessible

### CORS Issues

If you see CORS errors:
1. Install **CORS plugin** in WordPress
2. Or add this to `wp-config.php`:
```php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
```

### Images Not Loading

1. Check WordPress media URL is accessible
2. Verify featured images are set in WordPress
3. Check if images are in `_embedded` response

### Categories/Tags Not Showing

1. Ensure categories and tags are assigned in WordPress
2. Check WordPress REST API: `/wp-json/wp/v2/categories`
3. Verify they're published and not hidden

## Example WordPress Setup

### Recommended WordPress Structure

1. **Categories**: WordPress, SEO, E-Commerce, Web Development, Tutorials, Best Practices
2. **Tags**: Use descriptive tags for each post
3. **Featured Images**: Upload high-quality images (1200x630px recommended)
4. **Excerpts**: Write custom excerpts or let WordPress auto-generate

### Sample Post in WordPress

```
Title: Best WordPress Security Practices
Category: WordPress
Tags: security, wordpress, tips
Featured Image: security-article.jpg
Content: Full article content with HTML...
```

This will automatically appear on your Next.js blog at `/blog/best-wordpress-security-practices`

## Fallback Behavior

If WordPress is not configured or unavailable:
- Site falls back to empty blog or manually added posts
- No errors are thrown
- Graceful degradation

## Admin Panel Note

The admin panel at `/admin/blog` is for **creating posts that sync to WordPress** (if you implement that). For now, use WordPress admin to manage posts directly.

## Advanced: Sync Admin Posts to WordPress

You can extend the system to:
1. Create posts in Next.js admin panel
2. Automatically publish to WordPress via REST API
3. Then WordPress posts appear on the site

This requires WordPress REST API authentication (Application Passwords).

## Security

### Public API
- WordPress REST API is public by default
- Only published posts are accessible
- No sensitive data is exposed

### Private Sites
If your WordPress is private:
1. Use WordPress Application Passwords
2. Store credentials in environment variables
3. Add authentication headers to API calls

## Next Steps

1. Set up your WordPress site
2. Add `NEXT_PUBLIC_WORDPRESS_URL` to `.env.local`
3. Create some test posts in WordPress
4. Visit `/blog` on your Next.js site
5. Posts should appear automatically!

## Support

If you encounter issues:
1. Check WordPress REST API is accessible
2. Verify environment variables are set
3. Check browser console for errors
4. Review Next.js build logs

