import ScrollProgress from '@/components/ScrollProgress'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import StackStrip from '@/components/StackStrip'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Cases from '@/components/Cases'
import Pricing from '@/components/Pricing'
import VideoSection from '@/components/VideoSection'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="pageWrapper">
      <ScrollProgress />
      <Nav />
      <Hero />
      <StackStrip />
      <Services />
      <Process />
      <Cases />
      <Pricing />
      <VideoSection />
      <Testimonials />
      <FAQ />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}
