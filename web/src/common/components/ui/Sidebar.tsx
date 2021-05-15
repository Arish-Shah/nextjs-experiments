import styled from "styled-components";

export const Sidebar = styled.div`
  width: 201px;
  line-height: 1.2;
  background-color: ${({ theme }) => theme.sidebar};
  border-left: 1px solid ${({ theme }) => theme.sidebarBorder};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
