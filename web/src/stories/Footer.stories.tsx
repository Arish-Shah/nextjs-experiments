import { Meta, Story } from "@storybook/react";
import { Footer, FooterProps } from "../components/Footer";

export default {
  title: "components/Footer",
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
