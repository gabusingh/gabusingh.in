import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import ProfessionalJourney from '@/components/ProfessionalJourney'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <ProfessionalJourney />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
