import React from 'react'
import Link from 'next/link'

import styles from '../../styles/Footer.module.css'

export default function Footer() {
  function sendWhatsappMessage() {
    window.location.href =
      'https://wa.me/+5589994578337?text=Olá,%20Tudo%20Bem?'
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.frase}>
        CNPJ: 29.470.487/0001-58 <br />
        ATO DE AUTORIZAÇÃO - ANATEL 7679 de 13 de dezembro de 2020
      </h3>
      <div className={styles.info}>
        <div className={styles.links}>
          <h3>Acesso rápido</h3>
          <Link href='#planos'>Planos</Link>
          <Link href='#onde'>Onde atendemos</Link>
          <Link href='#quem_somos'>Quem somos</Link>
          <Link href='#topo'>Topo</Link>
          <Link href='/downloads' className={styles.btn_contrato}>
            Baixar contrato
          </Link>
        </div>

        <div className={styles.endereco}>
          <h3>Onde nos encontrar</h3>
          <address>
            Francisco Ayres - PI, <br />
            Rua Tito Ferreia, 420 - Bairro Centro
          </address>
        </div>

        <div className={styles.contato}>
          <h3>Formas de contato</h3>
          <p onClick={() => sendWhatsappMessage()}>
            Nos mande uma mensagem pelo whatsapp: 89994578337
          </p>

          <a href='tel:08000420497'>
            Nos ligue em nosso 0800, é gratuito :) 08000420497
          </a>

          <p>
            {' '}
            <a href='mailto:cavalcante@infotecpi.com.br'>
              Ou envie um e-mail para: cavalcante@infotecpi.com.br
            </a>
          </p>
        </div>
      </div>
      <small>&copy; Todos os direitos reservados a INFO-TEC - 2021</small>
    </div>
  )
}
