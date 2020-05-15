import Head from 'next/head'
import AppHeader from './appHeader'
import Footer from './footer'

const name = 'Romina Villaverde'
export const siteTitle = 'Romina Villaverde'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Romina Villaverde</title>
        <link href="https://fonts.googleapis.com/css2?family=Questrial&display=swap" rel="stylesheet"></link>
        <link href="/fonts/GothamNarrow/style.css" rel="stylesheet" />
        <meta
          name="Romina Villaverde"
          content="Web developer with an eye on design."
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
        
      <AppHeader name={name}></AppHeader>
      <main>{children}</main>

      <Footer />
      <style jsx global>{`
        html,
        body {
          font-size: 16px;
        }
      `}</style>
    </div>
  )
}