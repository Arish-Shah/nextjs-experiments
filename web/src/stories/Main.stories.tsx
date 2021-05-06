import { Meta, Story } from "@storybook/react";

import { Main } from "../components/Main";

export default {
  title: "Main",
  component: Main,
} as Meta;

const Template: Story = () => <Main />;

export const Container = Template.bind({});
Container.args = {};
