import { FormEventHandler, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

import { Page } from "@/layouts/DefaultPage";
import { Content } from "@/components/ui/Content";
import { Form } from "@/components/form/Form";
import { Field } from "@/components/form/Field";
import { Row } from "@/components/form/Row";
import { InputButton } from "@/components/button/InputButton";
import { Sidebar } from "@/components/ui/Sidebar";
import { SidebarSection } from "./components/SidebarSection";

export const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Page title="Twitter / Create an Account" hideNav>
      <Content>
        <h2>Create a Free Twitter Account</h2>
        <Form onSubmit={handleSubmit}>
          <Field
            type="text"
            id="username"
            label="Username:"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autofocus
          >
            <small>
              Your URL: http://twitter.com/
              <span className="username-url">{username}</span>
            </small>
            <br />
            <small>Username can only contain letters, numbers and '_'</small>
          </Field>
          <Field
            type="password"
            id="password"
            label="Password:"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >
            <small>6 characters or more (be tricky!)</small>
          </Field>
          <Field
            type="email"
            id="email"
            label="Email Address:"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            <small>In case you forget something</small>
          </Field>
          <Row label="Humanness:">
            <CaptchaPlaceholder />
          </Row>
          <Row>
            <label>
              <input type="checkbox" />I want the inside scoop—please send me
              email updates!
            </label>
          </Row>
          <Row>
            <small className="no-margin">
              By clicking on 'I accept' below, you confirm that you are over 13
              years of age and accept the{" "}
              <Link href="/terms">
                <a>Terms of Service</a>
              </Link>
              .
            </small>
          </Row>
          <Row>
            <InputButton type="submit">
              I accept. Create my account.
            </InputButton>
          </Row>
        </Form>
      </Content>
      <Sidebar>
        <SidebarSection>
          <h3>
            Already a member? Please{" "}
            <Link href="/login">
              <a>Sign In!</a>
            </Link>
          </h3>
          <p>
            Already use Twitter on your phone?{" "}
            <Link href="/account/complete">
              <a>Head over here</a>
            </Link>{" "}
            and we’ll get you signed up on the web.
          </p>
        </SidebarSection>
      </Sidebar>
    </Page>
  );
};

const CaptchaPlaceholder = styled.div`
  height: 128px;
  width: 317px;
  border: 1px solid black;
`;
