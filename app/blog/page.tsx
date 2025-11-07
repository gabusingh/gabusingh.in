import { Metadata } from 'next'
import { getAllBlogPosts } from '@/lib/blog-data'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogList from '@/components/BlogList'

export const metadata: Metadata = {
  title: 'Blog | Pradipta Sinha - WordPress Developer & SEO Specialist',
  description: 'Expert insights on WordPress development, SEO optimization, web development, and digital marketing. Learn from a professional WordPress developer with 16+ years of experience.',
  keywords: 'WordPress blog, SEO blog, web development blog, WordPress tips, SEO tips, digital marketing blog, WordPress tutorials',
  openGraph: {
    title: 'Blog | Pradipta Sinha',
    description: 'Expert insights on WordPress development, SEO optimization, and web development.',
    type: 'website',
  },
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  return (
    <main className="min-h-screen">
      <Header />
      <BlogList posts={posts} />
      <Footer />
    </main>
  )
}

