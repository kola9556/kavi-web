import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap');

  
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
    margin:0;
    padding-top: 90px;
    font-size: 1.6rem;
    font-family: 'Nunito Sans', sans-serif;
  }
`;

export default GlobalStyle;
