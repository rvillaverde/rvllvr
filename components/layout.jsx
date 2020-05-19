import Head from 'next/head'
import AppHeader from './appHeader'
import Footer from './footer'
import styled from "styled-components"

const name = 'Romina Villaverde'
const siteTitle = 'Romina Villaverde'

const Layout = styled.div`
background-color: white;
`

export function AppLayout({ children }) {
  return (
    <Layout>
      <Head>
        <link type="text/css" href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link type="text/css" href="/fonts/GothamNarrow/style.css" rel="stylesheet" />
        <title>Romina Villaverde</title>
        <meta
          name="Romina Villaverde"
          content="Web developer with an eye on design."
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
        
      <AppHeader name={name}></AppHeader>
      <main>{children}</main>
      <Footer />
    </Layout>
  )
}

export default AppLayout;
