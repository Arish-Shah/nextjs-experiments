import { createGlobalStyle } from "styled-components";

export const theme = {
  image: "http://localhost:4000/images/bg/theme1.gif",
  text: "#333333",
  background: "#9ae4e8",
  links: "#0084b4",
  sidebar: "#dfc",
  sidebarBorder: "#bddcad",
  repeat: false,
};

export const GlobalStyles = createGlobalStyle`
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
