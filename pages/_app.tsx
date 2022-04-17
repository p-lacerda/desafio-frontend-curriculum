import '../styles/globals.css'
import type { AppProps } from 'next/app'

import CurriculumsProvider from '../context/CurriculumsProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CurriculumsProvider>
      <Component {...pageProps} />
    </CurriculumsProvider>
  )
}

export default MyApp
