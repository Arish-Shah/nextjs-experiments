import styled from "styled-components";

export interface RowProps {
  label?: string;
  htmlFor?: string;
}

export const Row: React.FC<RowProps> = ({ label, htmlFor, children }) => {
  return (
    <tr>
      <TableHead>{label && <label htmlFor={htmlFor}>{label}</label>}</TableHead>
      <TableData>{children}</TableData>
    </tr>
  );
};

const TableHead = styled.th`
  text-align: right;
  width: 11.5em;
  font-weight: normal;
  padding-top: 11px !important;
  label {
    white-space: nowrap;
    font-weight: normal;
  }
`;

const TableData = styled.td`
  input {
    margin-right: 3px;
  }
  small {
    font-size: 0.97em;
    color: #777;
    &:first-of-type {
      margin-left: 3px;
      &.no-margin {
        margin-left: 0;
      }
    }
  }
`;
