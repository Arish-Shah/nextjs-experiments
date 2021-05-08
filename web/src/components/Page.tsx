import styled from "styled-components";

import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";

export interface PageProps {
  lang?: boolean;
  nav?: boolean;
}

export const Page: React.FC<PageProps> = ({ children, lang, nav }) => {
  return (
    <Wrapper>
      <Header lang={lang} nav={nav} />
      <Body mt="15px" mb="15px">
        {children}
      </Body>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 763px;
  margin: 0 auto;
  margin-top: 15px;
`;
