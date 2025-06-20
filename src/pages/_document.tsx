// pages/_document.js or pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Analytics Script (external) */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-JQ2KNG5LBV" async />
        {/* Google Analytics Inline Script */}
        <Script
          id="google-analytics-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JQ2KNG5LBV');
            `,
          }}
        />
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
