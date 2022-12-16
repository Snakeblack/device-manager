import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Device Manager</title>
        <meta 
          property='og:title'
          content='Device Manager'
          key='title'
        />
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
