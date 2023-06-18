import type { AppProps } from 'next/app'
 
import '../styles/reset.css'  //この行を追加
 
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
 
export default MyApp