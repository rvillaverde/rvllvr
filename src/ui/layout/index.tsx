import Head from '../head';
import Header from '../header';
import React from 'react';
import Footer from '../footer';

interface PropTypes {
  children: React.ReactNode;
  home: boolean;
}

const Layout: React.FunctionComponent<PropTypes> = ({ children, home }) => (
  <div className="layout">
    <Head />
    <Header home={home}></Header>
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
