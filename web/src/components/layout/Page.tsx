import Head from "next/head";
import styled from "styled-components";

import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";

export interface PageProps {
  title?: string;
  me?: string;
  lang?: boolean;
  hideNav?: boolean;
}

export const Page: React.FC<PageProps> = ({ title, children, ...props }) => {
  return (
    <Container>
      <Head>
        <title>{title || "Twitter"}</title>
      </Head>
      <Header {...props} />
      <Body>{children}</Body>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 763px;
  margin: 0 auto;
  padding: 15px 0;
`;
