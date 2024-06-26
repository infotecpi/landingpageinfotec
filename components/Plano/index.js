import React, { useState } from 'react'
import styles from '../../styles/Planos.module.css'

export default function Plano() {
  const [planos] = useState([
    {
      nome: '150Mb',
      up: '150Mb',
      valor: 'R$ 89,99',
      tipo: 'Exclusivo Fibra Óptica',
      frase: 'Garantimos à você a melhor experiência',
    },
    {
      nome: '200Mb',
      up: '200Mb',
      valor: 'R$ 99,99',
      tipo: 'Exclusivo Fibra Óptica',
      frase: 'Garantimos à você a melhor experiência',
    },
    {
      nome: '300Mb',
      up: '300Mb',
      valor: 'R$ 149,99',
      tipo: 'Exclusivo Fibra Óptica',
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
        *R$ 150,00 a adesão para clientes fibra óptica e R$ 200,00 para clientes rádio
      </small>
      <small>
        *A internet à rádio é apenas para localidades que ainda não possuem
        fibra óptica
      </small>
      <small>
        *Para a zona rural, a adesão pode ser dividida em até 6 vezes
      </small>
    </div>
  )
}
