import { createGlobalStyle } from 'styled-components';
import { media } from 'utils';

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

    ${media.desktop`
    font-size: 72%;
    `}
  }
  
  body {
    margin:0;
    padding: 7rem 0 0 0 ;
    font-size: 1.6rem;
    font-family: 'Mulish', sans-serif;

    ${media.desktop`padding: 5rem 0 0 0 ;`}}
`;

export default GlobalStyle;
