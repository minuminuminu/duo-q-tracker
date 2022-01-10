import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    box-sizing: border-box;
    font-family: 'Be Vietnam Pro', sans-serif;
  }

  body{
    width:100vw;
    height:100vh;
    background-image: url("/images/background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
