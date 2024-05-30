import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
  body {
    margin: 0;
    padding: 0;
    background: #3C5B6F;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
    color: rgb(223, 208, 184)
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
