import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    margin:0px;
    font-size: 62.5%; 
  }
  
  body {
    padding-top: 90px;
    font-size: 1.6rem;
    font-family: 'Nunito Sans', sans-serif;
  }
`;

export default GlobalStyle;
