import { Meta, Story } from "@storybook/react";

import Body, { BodyProps } from "../components/layout/Body";

export default {
  title: "components/Body",
  component: Body,
} as Meta;

const Template: Story<BodyProps> = (args) => <Body>Template</Body>;

export const Default = Template.bind({});
Default.args = {} as BodyProps;
