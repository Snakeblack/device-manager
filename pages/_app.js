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
        <meta httpEquiv='content-language' content='es' />
        <meta
          name='description'
          content='Aplicación para la gestion y control de los dispositivos'
        />
        <meta
          property='og:description'
          content='Aplicación para la gestion y control de los dispositivos'
        />
        <meta
          name='keywords'
          content='dispositivos, gestion, control, administracion, dispositivos, devices, management, control, administration'
        />
        <meta name='author' content='Manuel Michael Retamozo García' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
