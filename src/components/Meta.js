import React from "react";
import { oneLine } from "common-tags";

import { website } from "../../endpoints.json";

let url = process.env.BUILD_ENV
  ? website[process.env.BUILD_ENV]
  : website.local;

const lastChar = url[url.length - 1];

if (lastChar === "/") {
  url = url.substring(0, url.length - 1);
}

const description = oneLine`
  Studying Computer Science at the university of Linneaus in Sweden.
`;

const content = {
  title: "Viola Caroline",
  author: "Viola Caroline",
  description,
  keywords: "",
  locale: "en_GB",
  og_site_name: "Viola Caroline",
  og_title: "Viola Caroline",
  twitter_title: "Viola Caroline",
  og_description: description,
  twitter_description: description,
};

const Meta = () => {
  return (
    <header>
      <title key="title">{content.title}</title>
      <meta key="x-ua" httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width,initial-scale=1"
      />
      <meta
        prefix="og: http://ogp.me/ns#"
        name="image"
        property="og:image"
        content={`${url}/cover.png`}
      />
      <meta key="author" name="author" content={content.author} />
      <meta
        key="description"
        name="description"
        content={content.description}
      />
      <meta key="keywords" name="keywords" content={content.keywords} />

      <meta key="og.locale" property="og:locale" content={content.locale} />
      <meta key="og.type" property="og:type" content="website" />
      <meta
        key="og.site_name"
        property="og:site_name"
        content={content.og_site_name}
      />

      <meta key="og.title" property="og:title" content={content.og_title} />
      <meta
        key="og.description"
        property="og:description"
        content={content.og_description}
      />

      <meta
        key="twitter.title"
        name="twitter:title"
        content={content.twitter_title}
      />
      <meta
        key="twitter.description"
        name="twitter:description"
        content={content.twitter_description}
      />
      <meta name="msapplication-TileColor" content="#006884" />
      <meta name="theme-color" content="#006884" />
      <meta name="msapplication-TileColor" content="#006884" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@400;700&family=Titan+One&display=swap"
        rel="stylesheet"
      ></link>
      <script async src="//www.instagram.com/embed.js"></script>
    </header>
  );
};

export default Meta;
