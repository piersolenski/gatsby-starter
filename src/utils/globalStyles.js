import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  /* If you are using Google Fonts, consider using https://www.gatsbyjs.com/plugins/gatsby-plugin-google-fonts/ */
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;800&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    background-repeat: no-repeat;
  }

  html {
    font-family: 'Nunito Sans', sans-serif;
    overflow-y: scroll;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Remove default margins */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video  {
    max-width: 100%;
    vertical-align: middle;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  figure,
  blockquote {
    margin: 0;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  textarea {
    resize: vertical;
  }

  address {
    font-style: normal;
    white-space: pre;
  }

  ul, ol {
    padding-left: 0;
    list-style-position: inside;
  }

  ::selection { 
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.black}; 
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.black};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.purple};
  }

  .js-focus-visible :focus:not(.focus-visible) {
    outline: none;
  }
`;
