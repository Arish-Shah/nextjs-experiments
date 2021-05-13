import { FormEventHandler } from "react";
import styled from "styled-components";

export interface FormProps {
  onSubmit: FormEventHandler;
}

export const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit}>
      <FieldSet>
        <table cellSpacing={0}>
          <tbody>{children}</tbody>
        </table>
      </FieldSet>
    </form>
  );
};

const FieldSet = styled.fieldset`
  border: 0;
  margin: 10px 0;

  th,
  td {
    padding: 7px 3px;
    vertical-align: top;
  }
`;
