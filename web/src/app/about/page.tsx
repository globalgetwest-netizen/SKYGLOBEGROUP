import type { Metadata } from 'next'
import About from '@/components/sections/About'
import CTA from '@/components/sections/CTA'
import Container from '@/components/layout/Container'

export const metadata: Metadata = {
  title: 'About Us | SkyGlobe Group',
  description: 'Learn about SkyGlobe Group — 12 years of opening doors to global opportunities.',
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#1A3A8F] py-20">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-[48px] leading-[56px] font-extrabold text-white mb-5">
              About SkyGlobe Group
            </h1>
            <p className="text-white/80 text-[16px] leading-[28px]">
              Twelve years. 47 countries. 5,000+ lives changed. We are passionate about making
              global mobility accessible to everyone.
            </p>
          </div>
        </Container>
      </section>
      <About />
      <CTA />
    </>
  )
}
