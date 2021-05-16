import { Meta, Story } from "@storybook/react";

import { Content } from "@/components/ui/Content";
import { Sidebar } from "@/components/ui/Sidebar";
import { DefaultLayout, DefaultLayoutProps } from "@/layouts/DefaultLayout";

export default {
  title: "components/Page",
  component: DefaultLayout,
} as Meta;

const Template: Story<DefaultLayoutProps> = (args) => (
  <DefaultLayout {...args}>
    <Content>Main Content</Content>
    <Sidebar>Sidebar Content</Sidebar>
  </DefaultLayout>
);

export const SignedOut = Template.bind({});
SignedOut.args = {} as DefaultLayoutProps;

export const SignedIn = Template.bind({});
SignedIn.args = {
  me: "tom",
} as DefaultLayoutProps;

export const WithoutNav = Template.bind({});
WithoutNav.args = {
  hideNav: true,
} as DefaultLayoutProps;
