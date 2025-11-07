import { BlogPost } from './blog-data'

// WordPress REST API types
interface WordPressPost {
  id: number
  date: string
  date_gmt: string
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
    protected: boolean
  }
  excerpt: {
    rendered: string
    protected: boolean
  }
  author: number
  featured_media: number
  comment_status: string
  ping_status: string
  sticky: boolean
  template: string
  format: string
  meta: any
  categories: number[]
  tags: number[]
  _links: any
}

interface WordPressCategory {
  id: number
  name: string
  slug: string
}

interface WordPressTag {
  id: number
  name: string
  slug: string
}

interface WordPressMedia {
  id: number
  source_url: string
  alt_text: string
}

interface WordPressUser {
  id: number
  name: string
  slug: string
}

// Get WordPress URL from environment
const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || process.env.WORDPRESS_URL || ''
const WORDPRESS_API_URL = WORDPRESS_URL.endsWith('/') 
  ? `${WORDPRESS_URL}wp-json/wp/v2` 
  : `${WORDPRESS_URL}/wp-json/wp/v2`

// Cache for posts (optional - for performance)
let postsCache: BlogPost[] | null = null
let cacheTimestamp: number = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

/**
 * Transform WordPress post to BlogPost format
 */
async function transformWordPressPost(
  wpPost: WordPressPost,
  categories: WordPressCategory[] = [],
  tags: WordPressTag[] = [],
  author?: WordPressUser,
  featuredImage?: string
): Promise<BlogPost> {
  // Get category name
  const categoryId = wpPost.categories?.[0]
  const category = categories.find(cat => cat.id === categoryId)?.name || 'Uncategorized'
  
  // Get tags
  const postTags = wpPost.tags
    .map(tagId => tags.find(tag => tag.id === tagId)?.name)
    .filter(Boolean) as string[]

  // Extract excerpt from HTML
  const excerptText = wpPost.excerpt.rendered
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&[^;]+;/g, ' ') // Replace HTML entities
    .trim()
    .substring(0, 200) + '...'

  // Extract content
  const content = wpPost.content.rendered

  // Get author name
  const authorName = author?.name || 'Pradipta Sinha'

  return {
    slug: wpPost.slug,
    title: wpPost.title.rendered,
    excerpt: excerptText,
    content: content,
    author: authorName,
    publishedAt: wpPost.date,
    updatedAt: wpPost.modified,
    category: category,
    tags: postTags,
    featuredImage: featuredImage,
    seo: {
      metaTitle: wpPost.title.rendered,
      metaDescription: excerptText.substring(0, 160),
      keywords: postTags,
      canonicalUrl: wpPost.link,
    },
    readingTime: calculateReadingTime(content),
  }
}

/**
 * Calculate reading time from content
 */
function calculateReadingTime(content: string): number {
  const text = content.replace(/<[^>]*>/g, '') // Remove HTML tags
  const wordsPerMinute = 200
  const words = text.split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

/**
 * Fetch all WordPress posts
 */
export async function fetchWordPressPosts(): Promise<BlogPost[]> {
  // Check cache first
  const now = Date.now()
  if (postsCache && (now - cacheTimestamp) < CACHE_DURATION) {
    return postsCache
  }

  if (!WORDPRESS_URL) {
    console.warn('WordPress URL not configured. Set NEXT_PUBLIC_WORDPRESS_URL or WORDPRESS_URL environment variable.')
    return []
  }

  try {
    // Fetch posts, categories, tags, and media in parallel
    const [postsResponse, categoriesResponse, tagsResponse] = await Promise.all([
      fetch(`${WORDPRESS_API_URL}/posts?_embed&per_page=100&status=publish`, {
        next: { revalidate: 300 }, // Revalidate every 5 minutes
      }),
      fetch(`${WORDPRESS_API_URL}/categories?per_page=100`, {
        next: { revalidate: 3600 }, // Revalidate every hour
      }),
      fetch(`${WORDPRESS_API_URL}/tags?per_page=100`, {
        next: { revalidate: 3600 }, // Revalidate every hour
      }),
    ])

    if (!postsResponse.ok) {
      throw new Error(`WordPress API error: ${postsResponse.status}`)
    }

    const wpPosts: WordPressPost[] = await postsResponse.json()
    const categories: WordPressCategory[] = await categoriesResponse.json()
    const tags: WordPressTag[] = await tagsResponse.json()

    // Fetch author and featured image for each post
    const postsPromises = wpPosts.map(async (wpPost) => {
      // Get featured image
      let featuredImage: string | undefined
      if (wpPost.featured_media) {
        try {
          const mediaResponse = await fetch(`${WORDPRESS_API_URL}/media/${wpPost.featured_media}`, {
            next: { revalidate: 3600 },
          })
          if (mediaResponse.ok) {
            const media: WordPressMedia = await mediaResponse.json()
            featuredImage = media.source_url
          }
        } catch (error) {
          console.error(`Error fetching media for post ${wpPost.id}:`, error)
        }
      }

      // Get author
      let author: WordPressUser | undefined
      try {
        const authorResponse = await fetch(`${WORDPRESS_API_URL}/users/${wpPost.author}`, {
          next: { revalidate: 3600 },
        })
        if (authorResponse.ok) {
          author = await authorResponse.json()
        }
      } catch (error) {
        console.error(`Error fetching author for post ${wpPost.id}:`, error)
      }

      return transformWordPressPost(wpPost, categories, tags, author, featuredImage)
    })

    const posts = await Promise.all(postsPromises)

    // Update cache
    postsCache = posts
    cacheTimestamp = now

    return posts
  } catch (error) {
    console.error('Error fetching WordPress posts:', error)
    return []
  }
}

/**
 * Fetch a single WordPress post by slug
 */
export async function fetchWordPressPost(slug: string): Promise<BlogPost | null> {
  if (!WORDPRESS_URL) {
    console.warn('WordPress URL not configured.')
    return null
  }

  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed&status=publish`,
      {
        next: { revalidate: 300 },
      }
    )

    if (!response.ok) {
      return null
    }

    const wpPosts: WordPressPost[] = await response.json()
    if (!wpPosts || wpPosts.length === 0) {
      return null
    }

    const wpPost = wpPosts[0]

    // Fetch category and tags
    const [categoriesResponse, tagsResponse] = await Promise.all([
      fetch(`${WORDPRESS_API_URL}/categories?per_page=100`, {
        next: { revalidate: 3600 },
      }),
      fetch(`${WORDPRESS_API_URL}/tags?per_page=100`, {
        next: { revalidate: 3600 },
      }),
    ])

    const categories: WordPressCategory[] = await categoriesResponse.json()
    const tags: WordPressTag[] = await tagsResponse.json()

    // Get featured image
    let featuredImage: string | undefined
    if (wpPost.featured_media) {
      try {
        const mediaResponse = await fetch(`${WORDPRESS_API_URL}/media/${wpPost.featured_media}`, {
          next: { revalidate: 3600 },
        })
        if (mediaResponse.ok) {
          const media: WordPressMedia = await mediaResponse.json()
          featuredImage = media.source_url
        }
      } catch (error) {
        console.error(`Error fetching media:`, error)
      }
    }

    // Get author
    let author: WordPressUser | undefined
    try {
      const authorResponse = await fetch(`${WORDPRESS_API_URL}/users/${wpPost.author}`, {
        next: { revalidate: 3600 },
      })
      if (authorResponse.ok) {
        author = await authorResponse.json()
      }
    } catch (error) {
      console.error(`Error fetching author:`, error)
    }

    return transformWordPressPost(wpPost, categories, tags, author, featuredImage)
  } catch (error) {
    console.error('Error fetching WordPress post:', error)
    return null
  }
}

/**
 * Clear the posts cache (useful after publishing)
 */
export function clearPostsCache(): void {
  postsCache = null
  cacheTimestamp = 0
}

