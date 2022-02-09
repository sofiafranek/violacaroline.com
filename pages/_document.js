/* eslint-disable react/no-danger */

// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

import { website } from "../endpoints.json";

let url = process.env.BUILD_ENV
  ? website[process.env.BUILD_ENV]
  : website.local;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="image" property="og:image" content={`${url}/cover.png`} />
          {/* <link rel='icon' type='image/x-icon' href='../static/logo.png' /> */}
          <link rel="shortcut icon" href={`${url}/favicon/favicon.png`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
