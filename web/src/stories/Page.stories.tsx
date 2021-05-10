import { Meta, Story } from "@storybook/react";

import { Page, PageProps } from "../components/Page";

export default {
  title: "components/Page",
  component: Page,
} as Meta;

const Template: Story<PageProps> = (args) => (
  <Page {...args}>Default Page</Page>
);

export const LogoOnly = Template.bind({});
LogoOnly.args = {} as PageProps;

export const LanguageDropdown = Template.bind({});
LanguageDropdown.args = {
  lang: true,
} as PageProps;

export const SignedIn = Template.bind({});
SignedIn.args = {
  me: "tom",
  nav: true,
} as PageProps;

export const SignedOut = Template.bind({});
SignedOut.args = {
  nav: true,
} as PageProps;
