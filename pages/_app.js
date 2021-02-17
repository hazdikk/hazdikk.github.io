import Head from 'next/head'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hazdik Portofolio</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
