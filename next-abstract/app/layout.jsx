import "./globals.css"
import Script from "next/script"
import Header from "../components/Header"
import Footer from "../components/Footer"

export const metadata = {
  title: "Abstract Next",
  description: "Next.js 13 conversion of Abstract theme",
}

export default function RootLayout({ children }) {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`${prefix}/favicon.ico`} />
        <link rel="stylesheet" href={`${prefix}/css/base.css`} />
        <link rel="stylesheet" href={`${prefix}/css/vendor.css`} />
        <link rel="stylesheet" href={`${prefix}/css/main.css`} />
        <Script src={`${prefix}/js/modernizr.js`} strategy="beforeInteractive" />
        <Script src={`${prefix}/js/pace.min.js`} strategy="beforeInteractive" />
      </head>
      <body id="top">
        <Header />
        {children}
        <Footer />
        <Script src={`${prefix}/js/jquery-2.1.3.min.js`} strategy="beforeInteractive" />
        <Script src={`${prefix}/js/plugins.js`} strategy="afterInteractive" />
        <Script src={`${prefix}/js/jquery.appear.js`} strategy="afterInteractive" />
        <Script src={`${prefix}/js/main.js`} strategy="afterInteractive" />
        {/* Rewrite root-leading asset links when served under a base path (GH Pages project sites) */}
        <Script id="prefix-rewriter" strategy="afterInteractive">{
          ` (function(){
              var prefix = '${prefix}';
              if(!prefix) return;
              try {
                document.querySelectorAll('[src^="/"]').forEach(function(el){
                  var src = el.getAttribute('src');
                  if (src && !src.startsWith(prefix)) el.setAttribute('src', prefix + src);
                });
                document.querySelectorAll('a[href^="/"]').forEach(function(el){
                  var href = el.getAttribute('href');
                  if (href && !href.startsWith(prefix)) el.setAttribute('href', prefix + href);
                });
                document.querySelectorAll('[style]').forEach(function(el){
                  var s = el.getAttribute('style');
                  if (s && s.indexOf('url(/') !== -1) {
                    el.setAttribute('style', s.replace(/url\(\/(.*?)\)/g, 'url(' + prefix + '/$1)'));
                  }
                });
              } catch(e) {
                // ignore
              }
            })();`
        }</Script>
      </body>
    </html>
  )
}
