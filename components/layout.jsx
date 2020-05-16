import Head from 'next/head'
import AppHeader from './appHeader'
import Footer from './footer'
import styled from "styled-components"

const name = 'Romina Villaverde'
export const siteTitle = 'Romina Villaverde'

export function AppLayout({ children }) {
  return (
    <Layout>
      <Head>
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

const Layout = styled.div`
background-color: white;
`
export default AppLayout;
