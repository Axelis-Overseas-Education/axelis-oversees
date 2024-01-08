import Image from 'next/image'
import Hero from '@/components/LandingPage'
import TestimonialCarousel from '@/components/TestimonialCarousel'
// import TestimonialCarousel from '@/components/TestimonialCarousel'
export default function Home() {
  return (
    <>
    <Hero />    
    <TestimonialCarousel />
    </>
  )
}
