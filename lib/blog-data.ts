export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  updatedAt?: string
  category: string
  tags: string[]
  featuredImage?: string
  seo: {
    metaTitle?: string
    metaDescription: string
    keywords: string[]
    canonicalUrl?: string
  }
  readingTime?: number
  views?: number
}

// Check if WordPress is enabled
const USE_WORDPRESS = !!(
  process.env.NEXT_PUBLIC_WORDPRESS_URL || 
  process.env.WORDPRESS_URL
)

// Fallback blog posts (for when WordPress is not configured or as backup)
const fallbackBlogPosts: BlogPost[] = [
  // Add your blog posts here as fallback
  // Posts can be added manually or via the AI generation API
]

/**
 * Get blog post by slug
 * Fetches from WordPress if configured, otherwise uses fallback
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  if (USE_WORDPRESS) {
    try {
      const { fetchWordPressPost } = await import('./wordpress-api')
      const post = await fetchWordPressPost(slug)
      return post
    } catch (error) {
      console.error('Error fetching from WordPress, using fallback:', error)
      // Fall through to fallback
    }
  }
  
  return fallbackBlogPosts.find(post => post.slug === slug) || null
}

/**
 * Get all blog posts
 * Fetches from WordPress if configured, otherwise uses fallback
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (USE_WORDPRESS) {
    try {
      const { fetchWordPressPosts } = await import('./wordpress-api')
      const posts = await fetchWordPressPosts()
      if (posts.length > 0) {
        return posts.sort((a, b) => 
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        )
      }
    } catch (error) {
      console.error('Error fetching from WordPress, using fallback:', error)
      // Fall through to fallback
    }
  }
  
  return fallbackBlogPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

/**
 * Get blog posts by category
 */
export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts()
  return allPosts.filter(post => post.category === category)
}

/**
 * Get related posts
 */
export async function getRelatedPosts(currentSlug: string, limit: number = 3): Promise<BlogPost[]> {
  const currentPost = await getBlogPost(currentSlug)
  if (!currentPost) return []
  
  const allPosts = await getAllBlogPosts()
  return allPosts
    .filter(post => 
      post.slug !== currentSlug &&
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit)
}

/**
 * Calculate reading time
 */
export function calculateReadingTime(content: string): number {
  // Remove HTML tags for accurate word count
  const text = content.replace(/<[^>]*>/g, ' ')
  const wordsPerMinute = 200
  const words = text.split(/\s+/).filter(word => word.length > 0).length
  return Math.ceil(words / wordsPerMinute)
}

// Legacy synchronous functions (for backward compatibility)
// These now use async internally but may return empty arrays if WordPress is async
export function getBlogPostSync(slug: string): BlogPost | undefined {
  return fallbackBlogPosts.find(post => post.slug === slug)
}

export function getAllBlogPostsSync(): BlogPost[] {
  return fallbackBlogPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

