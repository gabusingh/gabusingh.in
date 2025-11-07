# WordPress-like Blog Admin Panel Guide

## Overview

A comprehensive blog admin panel inspired by WordPress's classic editor interface, with authentication protection and modern features.

## Features

### ✨ Main Editor (`/admin/blog`)

1. **WordPress-like Interface**
   - Clean, focused editor layout
   - Two-column design (editor + sidebar)
   - Sticky top navigation bar

2. **Content Editor**
   - **Title Input**: Large, WordPress-style title field
   - **Markdown Editor**: Full-featured markdown editor with live preview
   - **Excerpt Field**: Optional excerpt for blog listings

3. **Publish Sidebar**
   - **Publish Button**: Main publish button with loading states
   - **Save Draft**: Save posts as drafts
   - **Status**: Draft/Published status display
   - **Visibility**: Public/Private toggle
   - **Schedule**: Schedule posts for future publication (date & time)
   - **Featured Image**: Upload and preview featured images
   - **Categories**: Select from predefined categories
   - **Tags**: Add/remove tags dynamically

4. **SEO Settings**
   - **Slug**: Auto-generated from title, manually editable
   - **Meta Title**: SEO title with character counter (60 chars)
   - **Meta Description**: SEO description with character counter (160 chars)
   - **Keywords**: Add/remove SEO keywords

5. **Preview**
   - Modal preview of how the post will look
   - Shows title, featured image, and formatted content

### 📋 Post List (`/admin/blog/list`)

1. **Table View**
   - WordPress-style post management table
   - Displays title, category, date, and actions

2. **Search & Filter**
   - Search posts by title or excerpt
   - Filter by category
   - Real-time filtering

3. **Actions**
   - **View**: Open post in new tab
   - **Edit**: Edit post (coming soon)
   - **Delete**: Delete post with confirmation

## Access

- Admin panel is now publicly accessible (no authentication)
- Consider adding your own authentication method if needed

## Routes

- `/admin/blog` - Create/Edit post editor
- `/admin/blog/list` - View all posts

## Usage

### Creating a New Post

1. Navigate to `/admin/blog`
2. Enter post title
3. Write content in the markdown editor
4. Set featured image (optional)
5. Choose category and add tags
6. Configure SEO settings
7. Click "Publish" or "Save Draft"

### Managing Posts

1. Navigate to `/admin/blog/list`
2. Use search to find specific posts
3. Filter by category
4. Click actions (View/Edit/Delete)

## Technical Details

### Technologies Used

- **Next.js 14** (App Router)
- **React Markdown Editor** (`@uiw/react-md-editor`)
- **Tailwind CSS** (Styling)
- **TypeScript** (Type safety)

### API Endpoints

- `POST /api/blog/publish` - Save/publish blog post
- `GET /api/blog` - Fetch all posts (to be implemented)
- `PUT /api/blog/[slug]` - Update post (to be implemented)
- `DELETE /api/blog/[slug]` - Delete post (to be implemented)

## Next Steps

1. **Database Integration**: Connect to a database (PostgreSQL, MongoDB, etc.)
2. **Image Upload**: Implement cloud storage for featured images (Cloudinary, AWS S3)
3. **Edit Functionality**: Complete the edit post page
4. **Media Library**: Add media library for managing images
5. **Post Status**: Implement scheduled publishing
6. **Revision History**: Save post revisions
7. **Bulk Actions**: Bulk edit/delete posts

## Styling

The admin panel uses:
- WordPress-inspired color scheme
- Clean, minimal design
- Dark mode support
- Responsive layout
- Smooth transitions and hover effects

## Security

- Consider adding authentication if needed
- API endpoints are publicly accessible
- Input validation and sanitization
- CSRF protection via Next.js built-in security

