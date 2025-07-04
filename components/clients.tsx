import { Building, CheckCircle } from "lucide-react"

export default function Clients() {
  const clients = [
    "Prefeitura Municipal de Francisco Ayres - PI",
    "Câmara Municipal de Francisco Ayres - PI",
    "Piauí Conectado",
    "Armazém Paraíba",
    "Veloso Eletromóveis",
    "Comercial O Didi",
    "Comercial Econômico",
    "Preço Bom",
    "Posto Martinez",
    "Posto Brasil",
    "Posto SP.I",
    "Cartório Único de Francisco Ayres - PI",
    "Sindicato dos Trabalhadores de Francisco Ayres - PI",
  ]

  return (
    <section id="quem-somos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Quem Somos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A INFO-TEC é um provedor de internet comprometido em oferecer conexão de qualidade para residências e
            empresas. Conheça alguns dos nossos clientes que confiam em nossos serviços.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Building className="mr-2 text-[#0092e5]" />
              Alguns de nossos clientes
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {clients.map((client, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#fc842b] mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
