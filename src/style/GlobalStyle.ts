import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'sanfrancisco-regular';
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff") format('woff2');
  font-weight: 400;
  font-style: normal;
}

  ${reset}
  
  html,
  body {
    font-family: 'sanfrancisco-regular', sans-serif;
    font-size: 16px;

    @media screen and (max-width: 1249px) {
      font-size: 18px;
    }

    @media screen and (max-width: 430px) {
      font-size: 15px;
    }
    
  }
  button {
    margin: 0;
    padding: 0;
    vertical-align: middle;
    border: 0 none;
    background-color: transparent;
    cursor: pointer;
  }
  a{
    color: #333;
    text-decoration: none;
  }
  ul, dl{
    list-style: disc;
  }
`;
export default GlobalStyle;
