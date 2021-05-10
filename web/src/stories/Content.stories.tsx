import { Meta, Story } from "@storybook/react";

import { Content, ContentProps } from "../components/Content";

export default {
  title: "components/Content",
  component: Content,
} as Meta;

const Template: Story<ContentProps> = (args) => (
  <Content {...args}>Default Content</Content>
);

export const Default = Template.bind({});
Default.args = {} as ContentProps;
