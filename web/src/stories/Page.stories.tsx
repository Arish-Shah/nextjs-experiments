import { Meta, Story } from "@storybook/react";

import { Content } from "@/components/ui/Content";
import { Sidebar } from "@/components/ui/Sidebar";
import { Page, PageProps } from "@/layouts/DefaultPage";

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
