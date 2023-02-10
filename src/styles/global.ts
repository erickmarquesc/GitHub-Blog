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
    line-height: 160%;
    font: 400 1rem 'Nunito', sans-serif;
  };

  body::-webkit-scrollbar {
    width: 12px;
  };

  body::-webkit-scrollbar-track {
    background: #071422;
  };

  body::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: #3294F8;
    border: 3px solid #071422;
  };
`