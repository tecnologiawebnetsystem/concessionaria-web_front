import { CtaSection } from "./cta-section"
import { FeaturesSection } from "./features-section"
import { HeroSection } from "./hero-section"
import { PricingSection } from "./pricing-section"
import { SiteFooter } from "./site-footer"
import { SiteHeader } from "./site-header"
import { TestimonialsSection } from "./testimonials-section"
import { VehicleShowcase } from "./vehicle-showcase"
import { ChatbotButton } from "./chatbot/chatbot-button"

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <VehicleShowcase />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
      </main>
      <SiteFooter />
      <ChatbotButton />
    </div>
  )
}

