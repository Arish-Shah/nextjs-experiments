import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    image: string;
    background: string;
    text: string;
    links: string;
    sidebar: string;
    sidebarBorder: string;
    repeat: boolean;
  }
}
