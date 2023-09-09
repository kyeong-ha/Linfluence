import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin:0; padding:0; border:0;
  }
  #root { position:relative; }
  html,body {
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
    width: 100%;
    font-size: 11px;
    font-family:'Noto Sans KR', sans-serif;
    text-align: center;
    position: relative;
    overflow-x: clip;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family:'Noto Sans KR', sans-serif;
    font-size:1rem;
  }
  ul {
    list-style:none;
  }
  label, input, button, select, img {
    vertical-align:middle;
    font-size:1rem;
  }
  input, button {
    font-family:'Noto Sans KR', sans-serif;
    font-size:1rem;
    width: fit-content;
  }
  input[type="submit"] {
    cursor:pointer
  }
  button {
    cursor:pointer
  }
  textarea, select {
    font-family:'Noto Sans KR', sans-serif;
    font-size:1rem;
  }
  p {
    word-break:break-all;
  }
  a {
    text-decoration:none;
  }
  a:hover {
    text-decoration:none;
  }
  *, :after, :before {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
`;

export default GlobalStyle;