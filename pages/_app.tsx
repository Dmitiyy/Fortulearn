import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import { AppWrapper } from '../context/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}
export default MyApp
