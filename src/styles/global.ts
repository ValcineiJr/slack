import { createGlobalStyle } from 'styled-components';

const GlobalStyle: any = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Bowlby+One&family=Inter:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@500;800&family=Syne:wght@400;500;700;800&display=swap');

 html {
  box-sizing: border-box;
  font-size: 62.5%;

}

@media (max-width: 1200px) {
  .desktop-only{
    display: none;
    opacity: 0;
    visibility: hidden;
  }

}

@media (min-width: 1200px) {
  .mobile-only{
    display: none;
    opacity: 0;
    visibility: hidden;
  }

}



*, *:before, *:after {
  box-sizing: border-box;
  border:0;

}

button{
  cursor: pointer;
}

input{ outline:none}

a{
  text-decoration: none;

}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

h1, h2, h3, h4, h5, h6 {

}

ol, ul {
  list-style: none;
  display: flex;
}

img {
  max-width: 100%;
  height: auto;
}

//responsive

@media (max-width: 500px) {
  html {
    font-size: 50%;
  }
}

`;

export default GlobalStyle;
