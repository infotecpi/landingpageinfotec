export default function MascotSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0092e5] to-[#0078bd] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            <h2 className="text-3xl font-bold">Conheça nosso assistente virtual!</h2>
            <p className="text-lg opacity-90">
              Nosso mascote representa a inovação e a tecnologia que levamos até você. Sempre pronto para iluminar suas
              ideias com a melhor conexão de internet!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#fc842b] rounded-full mr-3"></div>
                <span>Suporte técnico inteligente</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#fc842b] rounded-full mr-3"></div>
                <span>Soluções inovadoras</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#fc842b] rounded-full mr-3"></div>
                <span>Sempre conectado com você</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
              <img
                src="/images/mascote-infotec.png"
                alt="Mascote INFO-TEC NETWORKS"
                className="h-80 w-80 object-contain relative z-10 animate-bounce"
                style={{ animationDuration: "3s" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#fc842b]/20 rounded-full"></div>
    </section>
  )
}
