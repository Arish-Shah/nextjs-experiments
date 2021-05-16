import { ChangeEvent, useEffect, useRef } from "react";
import styled from "styled-components";

import { Row } from "./Row";

export interface FieldProps {
  type: "text" | "email" | "password";
  id: string;
  label: string;
  value?: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  autofocus?: boolean;
}

export const Field: React.FC<FieldProps> = ({
  label,
  children,
  autofocus,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    if (autofocus) {
      if (inputRef.current) inputRef.current.focus();
    }
  }, []);

  return (
    <Row label={label} htmlFor={props.id}>
      <Input {...props} ref={inputRef} />
      {children}
    </Row>
  );
};

const Input = styled.input`
  width: 12.45em;
`;
