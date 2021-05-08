import styled from "styled-components";

export interface ContentProps {
  p?: string;
}

export const Content: React.FC<ContentProps> = ({ p, children }) => {
  return <Wrapper p={p}>{children}</Wrapper>;
};

const Wrapper = styled.section<ContentProps>`
  padding: ${(props) => props.p ?? "5px 10px 15px"};
  width: 563px;

  p {
    line-height: 1.2;
    margin: 5px 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 3px 0 4px;
  }

  ol {
    padding-left: 30px;
  }
`;
