import { ChangeEvent } from "react";
import styled from "styled-components";

import { Row } from "./Row";

export interface FieldProps {
  type: "text" | "email" | "password";
  id: string;
  label: string;
  value?: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Field: React.FC<FieldProps> = ({ label, children, ...props }) => {
  return (
    <Row label={label} htmlFor={props.id}>
      <Input {...props} />
      {children}
    </Row>
  );
};

const Input = styled.input`
  padding: 4px 2px;
  width: 12.45em;
  border: 1px solid #aaa;
`;
