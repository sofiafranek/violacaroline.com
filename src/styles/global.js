import { createGlobalStyle } from "styled-components";
import TYPO from "./typography";

const base = 16;

// reset CSS + injecting fonts
// DO NOT USE THIS FILE TO OVERWRITE STYLING OF CSS CLASSES
export default createGlobalStyle`

  :root {
    --gutter: 30px;
    --gutter-side: 15px;
  }

  ::selection {
    background: #006884;
    color: white;
    opacity: 1;
  }
  ::-moz-selection {
    background: #006884;
    color: white;
    opacity: 1;
  }

  html, body {
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: ${base}px;
    line-height: 26px;
    color: #006884;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  a {
    position: relative;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  h1 {
    ${TYPO.h1}
  }

  h2 {
    ${TYPO.h2}
  }

  h3 {
    ${TYPO.h3}
  }

  h4 {
    ${TYPO.h4}
  }

  h5 {
    ${TYPO.h5}
  }

  h6 {
    ${TYPO.h6}
  }

  p {
    ${TYPO.p}
    margin: 0;
  }

  small {
    ${TYPO.small}
  }

  button {
    ${TYPO.button}
    padding: 0;
    background-color: transparent;
    border: none;
    outline: none;
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;
