import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    margin:0;padding:0;border:0;
  }
  html, 
  body {
    width:100%; 
    font-size: 11px;
    font-family:'Noto Sans KR', sans-serif;
    text-align: center;
    font-weight: 100;
    text-align: center;
  }
  html, h1, h2, h3, h4, h5, h6, 
  form, fieldset, img {
    margin:0;
    padding:0;
    border:0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family:'Noto Sans KR', sans-serif;
    font-size:1rem;
    font-weight: 100;
  }
  ul {
    margin:0;
    padding:0;
    list-style:none;
  }
  label, input, button, select, img {
    vertical-align:middle;
    font-size:1em;
  }
  input, button {
    margin:0;
    padding:0;
    font-family:'Noto Sans KR', sans-serif;
    font-size:1em;
  }
  input[type="submit"] {
    cursor:pointer
  }
  button {
    cursor:pointer
  }
  textarea, select {
    font-family:'Noto Sans KR', sans-serif;
    font-size:1em;
  }
  p {
    word-break:break-all;
  }
  a {
    color:#000;
    text-decoration:none;
  }
  a:hover {
    color:#000;
    text-decoration:none;
  }
  *, :after, :before {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
`;

export default GlobalStyle;