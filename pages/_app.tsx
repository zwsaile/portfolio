import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
require('dotenv').config()

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.isFallback) {
    <h1>Data is loading</h1>;
  }
  return <Component {...pageProps} />
}

export default MyApp
