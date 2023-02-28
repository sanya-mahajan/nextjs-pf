import '@/styles/globals.css'
//cant umport global css anywhere else
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
