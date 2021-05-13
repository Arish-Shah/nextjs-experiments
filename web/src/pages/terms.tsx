import { Content, Page, Sidebar, SidebarSection } from "../components/layout";

const TermsPage = () => {
  return (
    <Page title="Twitter / Twitter Terms of Service">
      <Content className="container">
        <h2>Terms of Service</h2>
        <p>
          By using the Twitter.com web site, a service of Twitter, Inc., you are
          agreeing to be bound by the following terms and conditions ("Terms of
          Use").
        </p>
        <h3>Basic Terms</h3>
        <ol></ol>
      </Content>
      <Sidebar>
        <SidebarSection>
          <h1>Opting-in to SMS Updates</h1>
          <ol>
            <li>Sign up on the Web at www.twitter.com</li>
            <li>
              Text "follow username" to with your mobile (where "username" is a
              registered Twitter username).
            </li>
            <li>
              Accept an invitation from a registered Twitter user via SMS or
              email
            </li>
          </ol>
          <h1>Opting-out of SMS Updates</h1>
          <ol>
            <li>To delete your account text "delete me" or "stop all" to</li>
            <li>
              Disable all mobile updates by texting any of the following words
              to : "off, end, stop, quit, cancel, unsubscribe"
            </li>
            <li>
              All mobile updates my also be disabled from the web at Twitter.com
            </li>
            <li>
              Disable mobile updates from a specific registered Twitter user or
              users by texting "leave username" to (where "username" is a
              registered Twitter username).
            </li>
          </ol>
        </SidebarSection>
      </Sidebar>
    </Page>
  );
};

export default TermsPage;
