import { FormEventHandler, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

import { withApollo } from "../lib/withApollo";
import { Page } from "../components/Page";
import { Content } from "../components/Content";
import { Sidebar } from "../components/Sidebar";
import { SidebarSection } from "../components/Sidebar/SidebarSection";
import { Input } from "../components/Form/Input";
import { FieldSet } from "../components/Form/Fieldset";
import { useSignupMutation } from "../generated/graphql";
import { CheckUsernameInput } from "../components/Form/CheckUsernameInput";

const SignupPage: NextPage = () => {
  const [signup, { data, loading }] = useSignupMutation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Page>
      <Head>
        <title>Twitter / Create an Account</title>
      </Head>
      <Content>
        <h1>Create a Free Twitter Account</h1>
        <form onSubmit={onSubmit}>
          <FieldSet>
            <CheckUsernameInput value={username} onChange={setUsername} />
            <Input
              type="password"
              id="password"
              label="Password"
              maxLength={30}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            >
              <small>6 characters or more (be tricky!)</small>
            </Input>
            <Input
              type="email"
              id="email"
              label="Email Address"
              maxLength={30}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            >
              <small>In case you forget something</small>
            </Input>
          </FieldSet>
        </form>
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

export default withApollo({ ssr: false })(SignupPage);
