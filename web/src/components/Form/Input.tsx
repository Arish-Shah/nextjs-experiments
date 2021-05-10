import { ChangeEvent } from "react";
import styled from "styled-components";

export interface InputProps {
  label: string;
  type: "text" | "email" | "password";
  id: string;
  maxLength?: number;
  value: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isInvalid?: boolean;
}

export const Input: React.FC<InputProps> = ({ children, label, ...args }) => {
  return (
    <TableRow>
      <th>
        <label htmlFor={args.id}>{label}:</label>
      </th>
      <td>
        <StyledInput {...args} />
        {children}
      </td>
    </TableRow>
  );
};

const TableRow = styled.tr`
  th,
  td {
    padding: 7px 3px;
  }

  th {
    text-align: right;
    width: 11em;
    padding-top: 10px;
    font-weight: normal;
    vertical-align: top;
  }

  label {
    white-space: nowrap;
    font-weight: normal;
  }

  small {
    color: #777;
    font-size: 0.97em;
  }

  span {
    &.username-url {
      color: green;
      font-weight: bold;
    }
  }
`;

const StyledInput = styled.input<{ isInvalid?: boolean }>`
  width: 12.5em;
  border: 1px solid ${(props) => (props.isInvalid ? "#f00" : "#aaa")};
  padding: 4px 2px;
  margin-right: 4px;
`;
