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

type Theme = {
  theme: typeof theme;
};

export const GlobalStyles = createGlobalStyle<Theme>`
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font: 14.4px "Lucida Grande", sans-serif;
    background: 
    ${({ theme }) => theme.background} url(${({ theme }) => theme.image}) 
    fixed ${({ theme }) => (theme.repeat ? "repeat" : "no-repeat")} top left;
  }

  a {
    color: ${({ theme }) => theme.links};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
