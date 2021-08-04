import styles from "../styles/Home.module.css"
import Head from 'next/head'

import Plano from '../components/Plano'
import QuemSomos from '../components/QuemSomos'
import Onde from '../components/Onde'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Clientes from '../components/Clientes'
// import Carrousel from '../components/Carrousel'

export default function Home() {

  return (
    <div className={styles.container} id="topo">
      <Head>
        <title>INFO-TEC - O melhor provedor de internet fibra da região</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="author" content="Jarod Mateus" />

        {/* SEO */}
        {/*  <!-- Primary Meta Tags --> */}
        <meta name="description" content="Info-tec, seu melhor provedor de internet fibra-óptica. Mais que produtos, vendemos soluções." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://infotecpi.com.br/" />
        <meta property="og:title" content="INFO-TEC" />
        <meta property="og:description" content="Info-tec, seu melhor provedor de internet fibra-óptica. Mais que produtos, vendemos soluções." />
        <meta property="og:image" content="" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://infotecpi.com.br/" />
        <meta property="twitter:title" content="INFO-TEC" />
        <meta property="twitter:description" content="Info-tec, seu melhor provedor de internet fibra-óptica. Mais que produtos, vendemos soluções." />
        <meta property="twitter:image" content="" />
      </Head>
      {/* HEADER */}
      <Header />
      {/* HEADER */}
      {/* <Carrousel /> */}
      {/* PLANOS */}
      <Plano />
      {/* ONDE ESTAMOS */}
      <Onde />
      {/* QUEM ATENDEMOS */}
      <Clientes />
      {/* QUEM SOMOS */}
      <QuemSomos />
      {/* FOOTER */}
      <Footer />
    </div>
  )
}