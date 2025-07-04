import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#0092e5] to-[#0078bd] text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Internet de alta velocidade para sua casa ou empresa
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Conectamos você ao mundo com a melhor tecnologia em fibra óptica e rádio. Planos a partir de R$ 89,99.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#fc842b] hover:bg-[#e07525] text-white">
                <Link href="#planos">Ver Planos</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-[#0092e5] hover:bg-gray-100">
                <Link href="#onde-atendemos">Verificar Cobertura</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-white/20 animate-pulse"></div>
              <img src="/images/mascote-infotec.png" alt="Mascote INFO-TEC" className="h-64 w-64 object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.65,118.92,150.86,113.31,214.65,107.57Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  )
}
