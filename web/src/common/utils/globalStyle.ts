import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    color: ${({ theme }) => theme.text};
    background: 
    ${({ theme }) => theme.background} url(${({ theme }) => theme.image}) 
    fixed ${({ theme }) => (theme.repeat ? "repeat" : "no-repeat")} top left;
    font: .75em/1.5 'Lucida Grande',  sans-serif;
  }
  a {
    color: ${({ theme }) => theme.links};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;
