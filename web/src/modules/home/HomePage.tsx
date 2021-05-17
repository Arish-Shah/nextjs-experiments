import styled from "styled-components";
import { NextPage } from "next";

import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Content } from "@/components/ui/Content";
import { Sidebar } from "@/components/ui/Sidebar";

export const HomePage: NextPage = () => {
  return (
    <DefaultLayout me="tom">
      <Content>
        <H2>What are you doing?</H2>
      </Content>
      <Sidebar>this is good</Sidebar>
    </DefaultLayout>
  );
};

const H2 = styled.h2`
  font-weight: normal;
`;
