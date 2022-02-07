import React from 'react'
import styles from '../../styles/Onde.module.css'

export default function Onde() {
  return (
    <div className={styles.container} id='onde'>
      <h2>Onde atendemos?</h2>
      <div className={styles.body}>
        <div className={styles.imagem}>
          <img src='/robo.png' alt='imagem figurativa que representa um mapa' />
        </div>
        <div className={styles.localidades}>
          <h3>
            A Info-tec leva internet de qualidade para as seguintes localidades
          </h3>

          <ul>
            <li>
              <b> Francisco Ayres</b>
              <ul>
                <li>Tocuns - Zona Rural</li>
                <li>Prata - Zona Rural</li>
                <li>Gaivotas - Zona Rural</li>
                <li>Vereda - Zona Rural</li>
                <li>Sacos dos Mel - Zona Rural</li>
                <li>Novo Estado - Zona Rural</li>
                <li>Limoeiro - Zona Rural</li>
                <li>Monte Santo - Zona Rural</li>
                <li>Campo de Bola - Zona Rural</li>
                <li>Piripiri - Zona Rural</li>
                <li>Assentamento Boa Fé - Zona Rural</li>
                <li>Estrelinha - Zona Rural</li>
              </ul>
            </li>
            <li>
              <b>Arraial</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
