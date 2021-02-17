import Head from 'next/head'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hazdik Portofolio</title>
        <link><img src="/favicon.ico" className={styles.logo} /></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
