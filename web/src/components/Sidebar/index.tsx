import styled, { useTheme } from "styled-components";

export interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <Side sidebar={theme.sidebar} sidebarBorder={theme.sidebarBorder}>
      {children}
    </Side>
  );
};

const Side = styled.div<{ sidebar: string; sidebarBorder: string }>`
  width: 200px;
  border-left: 1px solid ${(props) => props.sidebarBorder};
  background: ${(props) => props.sidebar};
  line-height: 1.2;
`;
