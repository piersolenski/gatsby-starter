import { createGlobalStyle } from 'styled-components';
import lock from 'utils/lock';

export default createGlobalStyle`

  :root {
    ${lock('--baseline', '17px', '21px')}
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    background-repeat: no-repeat;
  }

  html {
    font-family: 'Nunito Sans', sans-serif;
    color: ${(props) => props.theme.colors.grey};
    background: ${(props) => props.theme.colors.black}; 
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
    /* A elements that don't have a class get default styles */
    &:not([class]) {
      text-decoration-skip-ink: auto;
    }
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
  
  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
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
    background: ${({ theme }) => theme.colors.pink};
  }

  *:focus {
    outline: 2px solid hotpink;
  }

  *:focus:not(:focus-visible) {
    outline: 0;
  }

  *:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.pink};
  }
`;
