import styled from "styled-components";

export const FieldSet: React.FC = ({ children }) => {
  return (
    <StyledFieldSet>
      <table>
        <tbody>{children}</tbody>
      </table>
    </StyledFieldSet>
  );
};

export const StyledFieldSet = styled.fieldset`
  margin: 9px 2px;
  border: 0;
`;
