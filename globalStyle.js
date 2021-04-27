import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    --clrPrimary:#ff5200;
    --clrLight:#f4eee8;
    --clrDark:#1b1a17;
    --clrAccent:#fa9905;
}

*, *::after, *::before {
    margin: 0;
    padding:0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    font-family: 'Open Sans', sans-serif;
}

ol, ul {
  list-style: none;
}

a {
    text-decoration: none;
    color: inherit;
}

img {
  max-width: 100%;
  height: auto;
}
`;

export default GlobalStyle;
