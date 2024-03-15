import Navbar from '@/pages/Navbar'
import Hero from '@/pages/Hero'
import FAQ from '@/pages/FAQ'
import Testimonials from '@/pages/Tesimonials'
import ContactUs from '@/pages/ContactUs'


export default function Home() {
  return (
  <div className='w-screen overscroll-x-none bg-white text-black pl-11'>
    <Navbar />
    <Hero />
    <FAQ />
    <Testimonials />
    <ContactUs />
  </div>
  )
}
