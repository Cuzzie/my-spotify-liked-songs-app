import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.fontColor};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
