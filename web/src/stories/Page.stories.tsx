import { Meta, Story } from "@storybook/react";
import { Content, Sidebar } from "../components/layout";

import { Page, PageProps } from "../components/layout/Page";

export default {
  title: "components/Page",
  component: Page,
} as Meta;

const Template: Story<PageProps> = (args) => (
  <Page {...args}>
    <Content>Main Content</Content>
    <Sidebar>Sidebar Content</Sidebar>
  </Page>
);

export const SignedOut = Template.bind({});
SignedOut.args = {} as PageProps;

export const SignedIn = Template.bind({});
SignedIn.args = {
  me: "tom",
} as PageProps;

export const WithoutNav = Template.bind({});
WithoutNav.args = {
  hideNav: true,
} as PageProps;
