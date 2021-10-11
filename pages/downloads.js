import React, { useState } from 'react'
import styles from '../styles/Downloads.module.css'

import Header from '../components/HeaderSimples'
import Footer from '../components/Footer'

export default function Downloads() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.helper}>
          <a href='/' id={styles.helperlink}>
            Página Inicial
          </a>
          <span id={styles.helperlink}>/</span>
          <a href='/downloads' id={styles.helperlink}>
            downloads
          </a>
        </div>
        <h1>Downloads</h1>
        <div className={styles.containerlinks}>
          <ul>
            <li className={styles.divlist}>
              <h4>Certidão de Registro Contrato de Comodato de Equipamentos</h4>
              <a
                href='https://drive.google.com/file/d/1Ljuv0AbqRdVB-YRUID1lYOKlGPE_IshG/view'
                target='_blank'
              >
                Clique aqui para baixar
              </a>
            </li>
            <li className={styles.divlist}>
              <h4>
                Certidão de Registro Contrato de Prestação de Serviços de
                Telecomunicações
              </h4>
              <a
                href='https://drive.google.com/file/d/1Onp8X90qrQSjriWE_bddOIyEEGgpYHB4/view'
                target='_blank'
              >
                Clique aqui para baixar
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}
