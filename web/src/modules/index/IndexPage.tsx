import styled from "styled-components";

import { IndexLayout } from "@/layouts/IndexLayout";
import { SigninCard } from "./components/SigninCard";
import { Tour } from "./components/Tour";
import { TourType } from "./types/TourType";

export interface IndexPageProps {
  tourType: TourType;
}

export const IndexPage: React.FC<IndexPageProps> = ({ tourType }) => {
  return (
    <IndexLayout title="Twitter: What are you doing?" lang>
      <Flex>
        <Tour tourType={tourType} />
        <SigninCard />
      </Flex>
    </IndexLayout>
  );
};

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
