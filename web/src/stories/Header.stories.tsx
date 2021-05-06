import { Meta, Story } from "@storybook/react";

import { Header, HeaderProps } from "../components/Header";

export default {
  title: "Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const SignedIn = Template.bind({});
SignedIn.args = {};

export const SignedOut = Template.bind({});
SignedOut.args = {};
