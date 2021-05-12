import styled from "styled-components";

export interface BodyProps {}

const Body: React.FC<BodyProps> = ({ children }) => {
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

const Arrow = styled.div`
  margin-top: 5px;
  padding-top: 11px;
  background: url(/assets/arrow.gif) no-repeat 25px 0px;
`;

const Columns = styled.div`
  background: #fff;
  overflow: hidden;
  border-radius: 5px;
  display: flex;
`;

export default Body;
