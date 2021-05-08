import { Meta, Story } from "@storybook/react";

import { Page, PageProps } from "../components/Page";

export default {
  title: "components/Page",
  component: Page,
} as Meta;

const Template: Story<PageProps> = (args) => <Page {...args} />;

export const Default = Template.bind({});
Default.args = {};
