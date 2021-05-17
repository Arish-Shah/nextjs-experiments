import styled from "styled-components";

import { useAlert } from "@/stores/useAlert";

export const Alert = () => {
  const message = useAlert((state) => state.message);

  return message ? (
    <Container>
      <Content>{message}</Content>
    </Container>
  ) : null;
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 2px solid #ccc;
  padding: 1.05em 0;
  cursor: pointer;
  user-select: none;
`;

const Content = styled.div`
  width: 763px;
  margin: 0 auto;
  font-size: 1.75em;
`;
