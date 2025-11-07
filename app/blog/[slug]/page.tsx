import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPost, getRelatedPosts } from '@/lib/blog-data'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogPostContent from '@/components/BlogPostContent'
import RelatedPosts from '@/components/RelatedPosts'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.seo.metaTitle || post.title,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords.join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.seo.metaTitle || post.title,
      description: post.seo.metaDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: post.featuredImage ? [post.featuredImage] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo.metaTitle || post.title,
      description: post.seo.metaDescription,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
    alternates: {
      canonical: post.seo.canonicalUrl || `https://gabusingh.in/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)
  const relatedPosts = post ? await getRelatedPosts(slug) : []

  if (!post) {
    notFound()
  }

  // Generate structured data for the blog post
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.seo.metaDescription,
    image: post.featuredImage,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://gabusingh.in',
    },
    publisher: {
      '@type': 'Person',
      name: 'Pradipta Sinha',
      url: 'https://gabusingh.in',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://gabusingh.in/blog/${slug}`,
    },
    keywords: post.seo.keywords.join(', '),
    articleSection: post.category,
    wordCount: post.content.split(/\s+/).length,
  }

  return (
    <main className="min-h-screen">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <BlogPostContent post={post} />
      {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
      <Footer />
    </main>
  )
}

