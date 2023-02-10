import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  body {
    background: #071422;
  };
  body, input, textarea  {
    color: #fff;
    font: 400 1rem 'Nunito', sans-serif;
    line-height: 160%;
  };
`