import Script from 'next/script'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-C02PHC117F" strategy="lazyOnload" />
      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C02PHC117F');
          `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}