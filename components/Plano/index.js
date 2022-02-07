import React, { useState } from 'react'
import styles from '../../styles/Planos.module.css'

export default function Plano() {
  const [planos] = useState([
    {
      nome: '60Mb',
      up: '50Mb',
      valor: 'R$ 89,99',
      tipo: 'Exclusivo Fibra Óptica',
      frase: 'Garantimos à você a melhor experiência',
    },
    {
      nome: '100Mb',
      up: '80Mb',
      valor: 'R$ 99,99',
      tipo: 'Exclusivo Fibra Óptica',
      frase: 'Garantimos à você a melhor experiência',
    },
    {
      nome: '200Mb',
      up: '180Mb',
      valor: 'R$ 149,99',
      tipo: 'Exclusivo Fibra Óptica',
      frase: 'Garantimos à você a melhor experiência',
    },
    {
      nome: '30Mb',
      up: '20Mb',
      valor: 'R$ 100,00',
      tipo: 'Rádio - Zona Rural*',
      frase: 'Garantimos à você a melhor experiência',
    },
  ])

  function sendWhatsappMessage(plano) {
    window.location.href = `https://wa.me/+5589994578337?text=Olá,%20Tudo%20Bem?%20Estou%20interessado%20no%20plano%20de%20${plano}`
  }

  return (
    <div className={styles.planos_container} id='planos'>
      {/* CABEÇALHO */}
      <div className={styles.cabecalho}>
        <h1>Conheça Nossos Planos</h1>
        <h2>
          Adesão de R$240,00 à vista para a zona urbana e R$380,00 à vista para
          a zona rural
        </h2>
      </div>

      {/* PLANOS */}
      <div className={styles.planos}>
        {planos.map((item, _) => (
          <div className={styles.paper} key={item.nome}>
            <h4 className={styles.paper_planeName}>
              {_ === 3 ? (
                <>A melhor internet a rádio da região</>
              ) : (
                <>A melhor internet fibra óptica da região</>
              )}
            </h4>
            <h1 className={styles.velocity}>{item.nome}</h1>
            <hr />

            <div className={styles.body_info}>
              <p>{item.tipo}</p>
            </div>

            <div className={styles.body_info}>
              <p>Download de {item.nome}</p>
            </div>

            <div className={styles.body_info}>
              <p>Upload de {item.up}</p>
            </div>

            <div className={styles.body_info}>
              <p>{item.frase}</p>
            </div>

            <div className={styles.div_price}>
              <h2>Apenas {item.valor}</h2>
              <p>mensais</p>
            </div>

            <button
              className={styles.button_getPlane}
              onClick={() => sendWhatsappMessage(item.nome)}
            >
              Eu Quero Esse!
            </button>
          </div>
        ))}
      </div>
      <small>
        *A internet à rádio é apenas para localidades que ainda não possuem
        fibra òptica
      </small>
      <small>
        *Para a zona rural, a adesão pode ser dividida em até 6 vezes
      </small>
    </div>
  )
}
