import type { Metadata } from 'next'
import Pricing from '@/components/sections/Pricing'
import CTA from '@/components/sections/CTA'
import Container from '@/components/layout/Container'
import { HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing | SkyGlobe Group',
  description: 'Transparent, honest pricing for all SkyGlobe Group services.',
}

const faqs = [
  { q: 'Are there any hidden fees?', a: 'No. The price you see includes our full service fee. Government and embassy fees are disclosed upfront as additional costs.' },
  { q: 'Do you offer payment plans?', a: 'Yes. We offer flexible instalment plans for Professional and Enterprise packages. Contact us to discuss your options.' },
  { q: 'What if my visa is refused?', a: 'For cases where we prepared the full application, we offer one free re-submission. Terms apply.' },
  { q: 'How long does processing take?', a: 'Processing times vary by visa type and country, from 2 weeks to 3 months. We will give you an estimate at the start.' },
]

export default function PricingPage() {
  return (
    <>
      <section className="bg-[#F8F9FA] py-16 border-b border-[#DADCE0]">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#C9A227]/15 text-[#8B6B14] text-sm font-semibold mb-6">
              Pricing
            </span>
            <h1 className="text-[48px] leading-[56px] font-extrabold text-[#202124] mb-5">
              Simple, Transparent Fees
            </h1>
            <p className="text-[16px] leading-[28px] text-[#5F6368]">
              We believe you deserve to know exactly what you are paying for. No surprises.
            </p>
          </div>
        </Container>
      </section>

      <Pricing />

      {/* FAQ */}
      <section className="bg-[#F8F9FA] py-20">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <HelpCircle size={24} className="text-[#1A3A8F]" />
              <h2 className="text-[28px] leading-[36px] font-extrabold text-[#202124]">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map(({ q, a }) => (
                <div key={q} className="bg-white rounded-[24px] shadow-[0_1px_3px_rgba(60,64,67,0.10)] p-6">
                  <h3 className="font-bold text-[#202124] mb-2">{q}</h3>
                  <p className="text-sm text-[#5F6368] leading-[22px]">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  )
}
