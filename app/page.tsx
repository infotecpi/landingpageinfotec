import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Plans from "@/components/plans"
import FreeBenefits from "@/components/free-benefits"
import FloatingBanner from "@/components/floating-banner"
import Locations from "@/components/locations"
import Clients from "@/components/clients"
import Footer from "@/components/footer"
import FAQ from "@/components/faq"
// import Testimonials from "@/components/testimonials"
// import MascotSection from "@/components/mascot-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FreeBenefits />
        <Plans />
        {/* <MascotSection /> */}
        <Locations />
        <FAQ />
        {/* <Testimonials /> */}
        <Clients />
      </main>
      <Footer />
      <FloatingBanner />
    </div>
  )
}
