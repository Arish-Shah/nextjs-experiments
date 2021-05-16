import Head from "next/head";
import styled from "styled-components";

import { Header } from "@/components/ui/Header";
import { Arrow } from "@/components/ui/Body";
import { Footer } from "@/components/ui/Footer";
import { WhatIsTwitter } from "@/modules/index/components/WhatIsTwitter";
import { DefaultLayoutProps } from "./DefaultLayout";
import { TweetType } from "@/modules/index/types/TweetType";

export interface IndexLayoutProps extends DefaultLayoutProps {
  lang?: boolean;
}

export const IndexLayout: React.FC<IndexLayoutProps> = ({
  title,
  children,
  ...props
}) => {
  const tweets: TweetType[] = [
    {
      text: "Suddenly, it seems as though all the world's a-twitter.",
      name: "Newsweek",
    },
    {
      text: "It's one of the fastest-growing phenomena on the Internet.",
      name: "New York Times",
    },
    {
      text:
        "When I first started doing it, I thought, 'geez, not another website to worry about updating and checking', but now I'm glad I did it.",
      username: "point_chevalier",
      name: "livejournaller",
    },
  ];

  return (
    <Container>
      <Head>
        <title>{title || "Twitter"}</title>
      </Head>
      <Header {...props} />
      <Arrow />
      <Content>{children}</Content>
      <WhatIsTwitter tweets={tweets} />
      <Footer borderRadius="0 0 5px 5px" />
    </Container>
  );
};

const Container = styled.div`
  width: 763px;
  margin: 0 auto;
  padding: 15px 8px 15px 0;
`;

const Content = styled.div`
  padding: 17px 20px 30px 20px;
  background: #fff;
`;
