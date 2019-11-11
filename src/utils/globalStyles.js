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
    text-decoration: none;
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
`;
