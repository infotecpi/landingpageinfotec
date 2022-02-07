import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import styles from '../../styles/Header.module.css'

export default function Header() {
  const [showMenuMobile, setShowMenuMobile] = useState(false)
  const [showButtonGoToTop, setShowButonGoToTop] = useState(false)

  function sendWhatsappMessage() {
    window.location.href =
      'https://wa.me/+5589994578337?text=Olá,%20Tudo%20Bem?'
  }

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

      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        header.style.backgroundColor = '#18C3FF'
        header.style.width = '100%'
        setShowButonGoToTop(true)
      } else {
        header.style.backgroundColor = '#3bb7e82f'
        setShowButonGoToTop(false)
        if (screen.width > 1024) {
          header.style.width = '80%'
        }
      }
    }
  }, [])

  // go to top
  function goToTop() {
    const header = document.getElementsByClassName(
      'Header_header_mobile__19UYL'
    )[0]
    if (screen.width <= 1024) {
      header.style.display = 'flex'
    }

    const c = document.documentElement.scrollTop || document.body.scrollTop
    if (c > 0) {
      window.scrollTo(0, 0)
      // window.requestAnimationFrame(goToTop);
      // window.scrollTo(0, c - c / 8);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <header className={styles.header}>
          <div className={styles.left_header}>
            <img src='/frase.png' alt='logo da info-tec' />
          </div>

          <div className={styles.rigth_header}>
            <Link href='#planos'>Nossos Planos</Link>
            <Link href='#onde'>Onde Atendemos</Link>
            <Link href='#quem_somos'>Quem Somos</Link>
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
              <a
                href='https://ixc.infotecpi.com.br/central_assinante_web/login'
                target='_blanck'
              >
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
              <a href='#planos' onClick={() => setShowMenuMobile(false)}>
                Nossos Planos
              </a>
              <a href='#onde' onClick={() => setShowMenuMobile(false)}>
                Onde Atendemos
              </a>
              <a href='#quem_somos' onClick={() => setShowMenuMobile(false)}>
                Quem Somos
              </a>
              <a href='/downloads' onClick={() => setShowMenuMobile(false)}>
                Downloads
              </a>
              <p className={styles.area_do_cliente_btn}>
                <a
                  href='https://ixc.infotecpi.com.br/central_assinante_web/login'
                  target='_blanck'
                >
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
      {/* MAIN-INFOS */}
      {/* <div className={styles.sides}>
        <div className={styles.left}>
          <img
            src="/robo.png"
            alt="logo do robozinho da info-tec"
            className={styles.robo_image}
          />
        </div>

        <div className={styles.rigth}>
          <h1>Site da info-tec em desenvolvimento</h1>
          <h3>Estamos trabalhando para cada dia lhe atender melhor.</h3>

          <div className={styles.contato}>
            <p>
              Você pode entrar em contato conôsco, é só mandar uma mensagem para
              o nosso whatsapp :)
            </p>

            <button
              className={styles.btn_whatsapp}
              onClick={() => sendWhatsappMessage()}
            >
              Mandar mensagem!
            </button>
          </div>
        </div>
      </div> */}

      {/* GO TO TOP BUTTON */}
      {showButtonGoToTop ? (
        <button className={styles.goToTop} onClick={() => goToTop()}>
          <img
            src='/top.png'
            alt='ícone de seta para cima para levar o usuário para o topo da página'
          />
        </button>
      ) : (
        ''
      )}
    </div>
  )
}
