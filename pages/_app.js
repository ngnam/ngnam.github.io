import Script from 'next/script'
import '../styles/tailwind.css'
import '../styles/global.css'
import '../styles/input_styles_custom.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-C02PHC117F" strategy="lazyOnload" onLoad={() => {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-C02PHC117F');
        console.log('GA loaded')
      }
      } />
      
      <Component {...pageProps} />
    </>
  )
}