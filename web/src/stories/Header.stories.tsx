import { Meta, Story } from "@storybook/react";
import { Header, HeaderProps } from "../components/Header";

export default {
  title: "components/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const LogoOnly = Template.bind({});
LogoOnly.args = {};

export const LanguageDropdown = Template.bind({});
LanguageDropdown.args = {
  lang: true,
};

export const SignedIn = Template.bind({});
SignedIn.args = {
  me: "tom",
  nav: true,
};

export const SignedOut = Template.bind({});
SignedOut.args = {
  nav: true,
};
