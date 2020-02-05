import { createGlobalStyle } from 'styled-components';
import SourceSansProBold from '../fonts/SourceSansPro-Bold.ttf';
import SourceSansProRegular from '../fonts/SourceSansPro-Regular.ttf';

export default createGlobalStyle`

  @font-face {
    font-family: SourceSansPro;
    src: url('${SourceSansProBold}') format('truetype');
    font-weight: bold;
  }


  @font-face {
    font-family: SourceSansPro;
    src: url('${SourceSansProRegular}') format('truetype');
    font-weight: normal;
  }


  *,
  *::before,
  *::after {
    box-sizing: border-box;
    background-repeat: no-repeat;
  }

  html {
    font-family: SourceSansPro;
    color: ${props => props.theme.colors.black};
    background: ${props => props.theme.colors.white}; 
    overflow-y: scroll;
  }

  body {
    margin: 0;
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
