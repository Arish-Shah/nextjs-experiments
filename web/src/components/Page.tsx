import styled from "styled-components";

import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";

export interface PageProps {
  nav?: boolean;
  lang?: boolean;
  me?: string;
  mt?: string;
  mb?: string;
}

export const Page: React.FC<PageProps> = ({ children, ...props }) => {
  return (
    <Wrapper>
      <Header lang={props.lang} nav={props.nav} me={props.me} />
      <Body mt={props.mt} mb={props.mb}>
        {children}
      </Body>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 763px;
  margin: 15px auto;
`;
