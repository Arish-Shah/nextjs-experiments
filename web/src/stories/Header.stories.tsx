import { Meta, Story } from "@storybook/react";

import { Header, HeaderProps } from "../components/layout/Header";

export default {
  title: "components/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const SignedOut = Template.bind({});
SignedOut.args = {} as HeaderProps;

export const SignedIn = Template.bind({});
SignedIn.args = {
  me: "tom",
} as HeaderProps;

export const LanguageDropdown = Template.bind({});
LanguageDropdown.args = {
  lang: true,
} as HeaderProps;
