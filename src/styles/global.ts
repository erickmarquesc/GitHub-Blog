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
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    font-family: 'Nunito', sans-serif;
  };
`