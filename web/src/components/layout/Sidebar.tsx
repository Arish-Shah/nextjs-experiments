import styled from "styled-components";

export const Sidebar = styled.div`
  width: 201px;
  line-height: 1.2;
  background-color: ${({ theme }) => theme.sidebar};
  border-left: 1px solid ${({ theme }) => theme.sidebarBorder};
`;

export const SidebarSection = styled.div`
  padding: 13px 13px 16px;

  h1 {
    font-weight: bold;
    font-size: 1.1em;
    padding: 0 0 2px;
    margin: 10px 0 5px 0;
  }

  .complete {
    font-size: 0.9em;
    margin-top: 1em;
  }
`;
