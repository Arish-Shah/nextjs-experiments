import { FormEventHandler, useState } from "react";
import Link from "next/link";

import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Content } from "@/components/ui/Content";
import { Form } from "@/components/form/Form";
import { Field } from "@/components/form/Field";
import { Row } from "@/components/form/Row";
import { InputButton } from "@/components/button/InputButton";
import { Sidebar } from "@/components/ui/Sidebar";
import { SidebarSection } from "@/components/ui/SidebarSection";
import { JoinButton } from "./components/JoinButton";
import { Center } from "./components/Center";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log({ username, password, remember });
  };

  return (
    <DefaultLayout>
      <Content>
        <h2>Sign in to Twitter</h2>
        <p>
          If you’ve been using Twitter from your phone,{" "}
          <Link href="/account/complete">
            <a>click here</a>
          </Link>{" "}
          and we’ll get you signed up on the web.
        </p>
        <Form onSubmit={handleSubmit}>
          <Field
            type="text"
            id="username"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autofocus
          />
          <Field
            type="password"
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >
            <small>
              <Link href="/account/resend_password">
                <a>Forgot?</a>
              </Link>
            </small>
          </Field>
          <Row>
            <label>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember me
            </label>
          </Row>
          <Row>
            <InputButton type="submit">Sign In</InputButton>
          </Row>
        </Form>
      </Content>
      <Sidebar>
        <SidebarSection>
          <h1>Create Your Account</h1>
          <Center>
            <Link href="/signup">
              <a>
                <JoinButton>Join!</JoinButton>
              </a>
            </Link>
            <p>
              Already using Twitter
              <br />
              from your phone?{" "}
              <Link href="/account/complete">
                <a>click here</a>
              </Link>
              .
            </p>
          </Center>
        </SidebarSection>
        <SidebarSection>
          <Center>
            <select>
              <option value="">Select Language ... &nbsp;</option>
              <option value="en">English</option>
            </select>
          </Center>
        </SidebarSection>
      </Sidebar>
    </DefaultLayout>
  );
};
