import React from 'react';
import { withRouter } from 'next/router';
import App from 'next/app';
import GlobalStyles from '../src/styles/global';
import Meta from '../src/components/Meta';

class ParentApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <GlobalStyles />
        <Meta />
        <Component {...pageProps} />
      </>
    );
  }
}

export default withRouter(ParentApp);
