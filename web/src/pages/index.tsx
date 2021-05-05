import Head from "next/head";

import { Page } from "../components/Page";

const demoProps = {
  user: {},
  onLogin: () => {},
  onLogout: () => {},
  onCreateAccount: () => {},
};

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Including demo props here for example */}
      <Page {...demoProps} />
    </div>
  );
};

export default Home;
