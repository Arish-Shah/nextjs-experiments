import Head from "next/head";
import styled from "styled-components";

import { Header } from "@/components/ui/Header";
import { Arrow } from "@/components/ui/Body";
import { Footer } from "@/components/ui/Footer";
import { DefaultLayoutProps } from "./DefaultLayout";

export interface IndexLayoutProps extends DefaultLayoutProps {
  lang?: boolean;
}

export const IndexLayout: React.FC<IndexLayoutProps> = ({
  title,
  children,
  ...props
}) => {
  return (
    <Container>
      <Head>
        <title>{title || "Twitter"}</title>
      </Head>
      <Header {...props} />
      <Arrow />
      <Content>{children}</Content>
      <Footer borderRadius="0 0 5px 5px" />
    </Container>
  );
};

const Container = styled.div`
  width: 763px;
  margin: 0 auto;
  padding: 15px 0;
`;

const Content = styled.div`
  padding: 17px 20px;
  background: #fff;
  display: flex;
  justify-content: space-between;
`;
