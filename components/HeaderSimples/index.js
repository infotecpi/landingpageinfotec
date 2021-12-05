import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import styles from '../../styles/HeaderSimples.module.css'

export default function HeaderSimples() {
  const [showMenuMobile, setShowMenuMobile] = useState(false)
  const [showButtonGoToTop, setShowButonGoToTop] = useState(false)

  // to change the header background according the mouse scroll
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction()
    }

    function scrollFunction() {
      let header = ''

      if (screen.width > 1024) {
        header = header = document.getElementsByClassName(
          'Header_header__182Qc'
        )[0]
      } else {
        header = header = document.getElementsByClassName(
          'Header_header_mobile__19UYL'
        )[0]
      }
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <header className={styles.header}>
          <div className={styles.left_header}>
            <img src='/frase.png' alt='logo da info-tec' />
          </div>

          <div className={styles.rigth_header}>
            <Link href='/#planos'>Nossos Planos</Link>
            <Link href='/#onde'>Onde Atendemos</Link>
            <Link href='/#quem_somos'>Quem Somos</Link>
            <Link href='/downloads'>Downloads</Link>

            <div className={styles.dropdown}>
              <p className={styles.dropdown_btn}>Está Sem Internet?</p>
              <div className={styles.dropdown_content}>
                <Link href='https://wa.me/+5589994578337?text=Olá,%20Tudo%20Bem?%20Estou%20com%20problemas%20na%20internet'>
                  Abrir chamado
                </Link>
              </div>
            </div>
            <p className={styles.area_do_cliente_btn}>
              <a href='https://ixc.infotecpi.com.br/central_assinante_web/login' target="_blanck">
                Área do Cliente
              </a>
            </p>
          </div>
        </header>
        {/* HEADER-MOBILE */}
        <header className={styles.header_mobile}>
          <div className={styles.left_header}>
            <img src='/frase.png' alt='logo da info-tec' />
          </div>

          <button
            className={styles.btn_menu}
            onClick={() => setShowMenuMobile(!showMenuMobile)}
          >
            <img
              src='/menu.png'
              alt='ícone de um botão para abrir o menu de opções'
            />
          </button>
        </header>

        {/* MENU-MOBILE */}
        {showMenuMobile ? (
          <header className={styles.menu_mobile}>
            <div className={styles.header_menu}>
              <img src='/frase.png' alt='logo da info-tec' />
              <button
                className={styles.btn_menu}
                onClick={() => setShowMenuMobile(!showMenuMobile)}
              >
                <img
                  src='/close.png'
                  alt='ícone de um botão para abrir o menu de opções'
                />
              </button>
            </div>

            <div className={styles.body_menu}>
              <a href='/#planos' onClick={() => setShowMenuMobile(false)}>
                Nossos Planos
              </a>
              <a href='/#onde' onClick={() => setShowMenuMobile(false)}>
                Onde Atendemos
              </a>
              <a href='/#quem_somos' onClick={() => setShowMenuMobile(false)}>
                Quem Somos
              </a>
              <a href='/downloads' onClick={() => setShowMenuMobile(false)}>
                Downloads
              </a>
              <p className={styles.area_do_cliente_btn}>
                <a href='https://ixc.infotecpi.com.br/central_assinante_web/login' target="_blanck">
                  Área do Cliente
                </a>
              </p>

              <hr />

              <p className={styles.sem_internet_paragraph}>
                Está Sem Internet?
              </p>
              <div className={styles.abrir_chamado_div}>
                <Link href='https://wa.me/+5589994578337?text=Olá,%20Tudo%20Bem?%20Estou%20com%20problemas%20na%20internet'>
                  Abrir chamado
                </Link>
              </div>
            </div>
          </header>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
