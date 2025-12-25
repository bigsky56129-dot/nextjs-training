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
        {/* Prefix-rewriter removed; all assets use static base path */}
      </body>
    </html>
  )
}
