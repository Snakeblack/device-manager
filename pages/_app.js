import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel='icon'
          href='/favicon-light.ico'
          media='(prefers-color-scheme: light)'
        />
        <link
          rel='icon'
          href='/favicon-dark.ico'
          media='(prefers-color-scheme: dark)'
        />
        <title>Device Manager</title>
        <meta property='og:title' content='Device Manager' key='title' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
