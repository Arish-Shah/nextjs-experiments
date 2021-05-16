import styled from "styled-components";

export interface BodyProps {}

export const Body: React.FC<BodyProps> = ({ children }) => {
  return (
    <Main>
      <Arrow />
      <Columns>{children}</Columns>
    </Main>
  );
};

const Main = styled.main`
  margin-bottom: 15px;
`;

export const Arrow = styled.div`
  margin-top: 11px;
  padding-top: 10.5px;
  background: url(/assets/arrow.gif) no-repeat 25px 0px;
`;

const Columns = styled.div`
  overflow: hidden;
  display: flex;
`;
