import Head from 'next/head'
import AppHeader from './appHeader'
import Footer from './footer'
import styled from "styled-components"

const name = 'Romi Villaverde'
const siteTitle = 'Romi Villaverde'
const description = "Web developer with an eye on design."

const Layout = styled.div`
  background-color: white;
`

export function AppLayout({ children, home }) {
  return (
    <Layout>
      <Head>
        <link type="text/css" href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link type="text/css" href="/fonts/GothamNarrow/style.css" rel="stylesheet" />
        <title>{ siteTitle }</title>
        <meta
          name={ name }
          content={ description }
        />
        <meta name="og:title" content={ siteTitle } />
        <meta name="og:description" content={ description } />
        <meta property="og:url" content="https://www.romivillaverde.com" />
        <meta property="og:image" content="/img/icon.png" />
      </Head>
        
      <AppHeader name={name} home={home}></AppHeader>
      <main>{children}</main>
      <Footer />
    </Layout>
  )
}

export default AppLayout;
