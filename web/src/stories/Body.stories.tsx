import { Meta, Story } from "@storybook/react";
import { Body, BodyProps } from "../components/Body";

export default {
  title: "components/Body",
  component: Body,
} as Meta;

const Template: Story<BodyProps> = (args) => <Body {...args}>Default</Body>;

export const Default = Template.bind({});
Default.args = {};
