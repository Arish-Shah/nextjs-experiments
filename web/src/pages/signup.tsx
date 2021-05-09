import { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

import { Page } from "../components/Page";
import { Content } from "../components/Content";
import { Sidebar } from "../components/Sidebar";
import { SidebarSection } from "../components/Sidebar/SidebarSection";
import { useSignupMutation } from "../generated/graphql";
import { withApollo } from "../lib/withApollo";

const Signup: NextPage = () => {
  const [signup, { data, loading }] = useSignupMutation();

  return (
    <Page>
      <Head>
        <title>Twitter / Create an Account</title>
      </Head>
      <Content>
        <h1>Create a Free Twitter Account</h1>
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

export default withApollo({ ssr: false })(Signup);
