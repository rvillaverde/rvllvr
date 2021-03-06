import App from 'next/app';
import React from 'react';

import '../styles/global.css'

class MyApp extends App {
//   static async getInitialProps({Component, ctx}) {
//     const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
//     return {pageProps: pageProps};
//  }

  render() {
    const {Component, pageProps} = this.props;
    return (
      <Component {...pageProps}/>
    );
  }
}

export default MyApp;
