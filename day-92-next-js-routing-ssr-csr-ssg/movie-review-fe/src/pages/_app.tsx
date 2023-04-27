import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Movies from './movies'
import Navbar from '@/components/navbar'
export default function App({ Component, pageProps }: AppProps):JSX.Element {
  return (
  <ThemeProvider>
    <div>
  <Navbar/>
  <Component {...pageProps} />
  <Movies/>
  </div>
  </ThemeProvider> )
}
