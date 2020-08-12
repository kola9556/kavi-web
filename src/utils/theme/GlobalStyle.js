import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&display=swap');
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    margin:0px;
    font-size: 62.5%; 
    font-family: 'Mulish', sans-serif;

    @media only screen and (min-width: 1900px) {
      font-size: 85%;
    }

    @media only screen and (min-width: 2300px) {
      font-size: 95%;
    }

  }
  
  body {
    margin:0;
    padding-top: 5rem;
    font-size: 1.6rem;
    font-family: 'Mulish', sans-serif;

    
  }
`;

export default GlobalStyle;
