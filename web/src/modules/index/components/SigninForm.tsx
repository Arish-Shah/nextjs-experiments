import Link from "next/link";
import { FormEventHandler, useState } from "react";
import styled from "styled-components";

import { InputButton } from "@/components/button/InputButton";

export const SigninForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log({ username, password });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Please sign in</h3>
      <Paragraph>
        <label htmlFor="username">user name or email address:</label>
        <Input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Paragraph>
      <Paragraph>
        <label htmlFor="password">password:</label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Paragraph>
      <Flex>
        <label htmlFor="remember">
          <input type="checkbox" id="remember" />
          Remember me
        </label>
        <InputButton>Sign In »</InputButton>
      </Flex>
      <Forgot>
        Forgot password?{" "}
        <Link href="/account/resend_password">
          <a>Click here</a>
        </Link>
        .
      </Forgot>
    </Form>
  );
};

const Form = styled.form`
  margin: 15px 0 5px 0;
`;

const Paragraph = styled.p`
  margin: 5px 0;
`;

const Input = styled.input`
  width: 100%;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5em;

  input {
    margin-right: 3px;
  }

  label {
    font-size: 0.85em;
  }
`;

const Forgot = styled.p`
  padding: 0.5em 0;
  font-size: 0.85em;
  a {
    text-decoration: underline;
    color: #333;
    &:hover {
      text-decoration: none;
    }
  }
`;
