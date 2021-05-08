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

const Main = styled.main`
  font: 14.4px/1.5 "Lucida Grande", sans-serif;
  margin-top: ${(props) => props.mt ?? 0};
  margin-bottom: ${(props) => props.mb ?? 0};
`;

const Arrow = styled.div`
  margin-top: 6px;
  padding-top: 11px;
  background: url(/assets/arrow.gif) no-repeat 25px 0;
`;

const Columns = styled.div`
  background: #fff;
  border-radius: 5px;
`;
