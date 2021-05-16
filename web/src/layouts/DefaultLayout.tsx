import Head from "next/head";
import styled from "styled-components";

import { Header } from "@/components/ui/Header";
import { Body } from "@/components/ui/Body";
import { Footer } from "@/components/ui/Footer";

export interface DefaultLayoutProps {
  title?: string;
  me?: string;
  hideNav?: boolean;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
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
