import styled from "styled-components";

const Sidebar = styled.div`
  width: 201px;
  line-height: 1.2;
  background-color: ${({ theme }) => theme.sidebar};
  border-left: 1px solid ${({ theme }) => theme.sidebarBorder};
`;

export default Sidebar;
