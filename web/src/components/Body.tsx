import styled from "styled-components";

export interface BodyProps {
  mt?: string;
  mb?: string;
}

export const Body: React.FC<BodyProps> = ({ mt, mb, children }) => {
  return (
    <Main mt={mt} mb={mb}>
      <Arrow />
      <Columns>{children}</Columns>
    </Main>
  );
};

const Main = styled.main<BodyProps>`
  margin-top: ${(props) => props.mt ?? "11px"};
  margin-bottom: ${(props) => props.mb ?? "15px"};
`;

const Arrow = styled.div`
  margin-top: 6px;
  padding-top: 10.5px;
  background: url(/assets/arrow.gif) no-repeat 25px 0;
`;

const Columns = styled.div`
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
`;
