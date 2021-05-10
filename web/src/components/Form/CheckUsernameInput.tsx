import { ChangeEvent } from "react";
import styled from "styled-components";
import { useCheckUsernameLazyQuery } from "../../generated/graphql";
import { Input } from "./Input";

export interface CheckUsernameInputProps {
  value: any;
  onChange: (e) => void;
}

export const CheckUsernameInput = ({ value, onChange }) => {
  const [checkUsername, { data, loading }] = useCheckUsernameLazyQuery();

  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    checkUsername({ variables: { username: e.target.value } });
    onChange(e.target.value);
  };

  const success = data?.checkUsername?.success;
  const message = data?.checkUsername?.message;

  return (
    <Input
      type="text"
      id="username"
      label="Username"
      maxLength={15}
      value={value}
      onChange={onUsernameChange}
      isInvalid={data?.checkUsername?.success === false}
    >
      <small>
        Your URL: http://twitter.com/
        <span className="username-url">{value}</span>
      </small>
      <br />
      <small
        className={success === false ? "red" : success === true ? "green" : ""}
      >
        {message || "Username can only contain letters, numbers and '_'"}
      </small>
    </Input>
  );
};

const Small = styled.small`
  &.green {
    color: green;
  }
  &.red {
    color: red;
  }
`;
