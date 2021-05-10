import Head from "next/head";
import { useRouter } from "next/router";

import { Page } from "../components/Page";

const IndexPage = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <Page lang>
      <Head>
        <title>Twitter: What are you doing?</title>
      </Head>
      this is index page
    </Page>
  );
};

export default IndexPage;
