"use client"

import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      role: "Dona de Casa",
      location: "Francisco Ayres",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "A INFO-TEC mudou completamente minha experiência com internet. Antes eu tinha problemas constantes, agora posso trabalhar de casa sem preocupações. A velocidade é excelente e o suporte sempre me atende rapidamente!",
    },
    {
      id: 2,
      name: "João Santos",
      role: "Proprietário - Posto Martinez",
      location: "Francisco Ayres",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Como empresário, preciso de uma internet confiável para meu posto. A INFO-TEC nunca me deixou na mão. O sistema de pagamento funciona perfeitamente e nunca tive problemas de conexão.",
    },
    {
      id: 3,
      name: "Ana Costa",
      role: "Professora",
      location: "Arraial",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Trabalho com aulas online e a qualidade da internet da INFO-TEC é fundamental para meu trabalho. A instalação foi rápida e o técnico muito educado. Recomendo para todos!",
    },
    {
      id: 4,
      name: "Carlos Oliveira",
      role: "Gerente - Armazém Paraíba",
      location: "Francisco Ayres",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Nossa empresa depende de uma conexão estável para o sistema de vendas. A INFO-TEC oferece um serviço de qualidade com suporte técnico excepcional. Estamos muito satisfeitos!",
    },
    {
      id: 5,
      name: "Francisca Alves",
      role: "Aposentada",
      location: "Tocuns - Zona Rural",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Moro na zona rural e achava que nunca teria internet boa. A INFO-TEC provou que eu estava errada! Agora posso conversar com meus netos por vídeo sem travamentos.",
    },
    {
      id: 6,
      name: "Roberto Lima",
      role: "Proprietário - Veloso Eletromóveis",
      location: "Francisco Ayres",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "A internet da INFO-TEC revolucionou meu negócio. Agora posso fazer vendas online, consultar preços em tempo real e oferecer um melhor atendimento aos meus clientes.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Quote className="h-8 w-8 text-[#0092e5] mr-2" />
            <h2 className="text-3xl font-bold">O que nossos clientes dizem</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja os depoimentos de quem já confia na qualidade dos nossos serviços de internet.
          </p>
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 relative">
              <div className="absolute -top-3 -left-3">
                <div className="bg-[#0092e5] rounded-full p-2">
                  <Quote className="h-4 w-4 text-white" />
                </div>
              </div>

              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-3">{renderStars(testimonial.rating)}</div>

              <p className="text-gray-700 text-sm leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <div className="relative max-w-sm mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 relative">
              <div className="absolute -top-3 -left-3">
                <div className="bg-[#0092e5] rounded-full p-2">
                  <Quote className="h-4 w-4 text-white" />
                </div>
              </div>

              <div className="flex items-center mb-4">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-600">{testimonials[currentIndex].role}</p>
                  <p className="text-xs text-gray-500">{testimonials[currentIndex].location}</p>
                </div>
              </div>

              <div className="flex mb-4">{renderStars(testimonials[currentIndex].rating)}</div>

              <p className="text-gray-700 leading-relaxed">{testimonials[currentIndex].text}</p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-[#0092e5] text-[#0092e5] hover:bg-[#0092e5] hover:text-white bg-transparent"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-[#0092e5]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-[#0092e5] text-[#0092e5] hover:bg-[#0092e5] hover:text-white bg-transparent"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#0092e5] to-[#0078bd] p-8 rounded-lg text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Seja nosso próximo cliente satisfeito!</h3>
            <p className="mb-6 opacity-90">
              Junte-se a centenas de clientes que já escolheram a qualidade da INFO-TEC.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#fc842b] hover:bg-[#e07525] text-white">
                <a href="#planos">Ver Nossos Planos</a>
              </Button>
              <Button variant="outline" className="bg-white text-[#0092e5] hover:bg-gray-100">
                <a href="tel:89994578337">Falar com Consultor</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
