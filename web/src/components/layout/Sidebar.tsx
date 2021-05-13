import styled from "styled-components";

export const Sidebar = styled.div`
  width: 201px;
  line-height: 1.2;
  background-color: ${({ theme }) => theme.sidebar};
  border-left: 1px solid ${({ theme }) => theme.sidebarBorder};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const SidebarSection = styled.div`
  padding: 13px 13px 16px;

  h1 {
    font-weight: bold;
    font-size: 1.1em;
    padding: 0 0 2px;
    margin: 10px 0 5px 0;
  }

  ol {
    margin-left: -10px;
    padding-left: 30px;
    line-height: 1.4em;

    li {
      padding-bottom: 8px;
      width: 140px;
    }
  }
`;
