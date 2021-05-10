import { Meta, Story } from "@storybook/react";

import { Sidebar, SidebarProps } from "../components/Sidebar";
import { SidebarSection } from "../components/Sidebar/SidebarSection";

export default {
  title: "components/Sidebar",
  component: Sidebar,
} as Meta;

const Template: Story<SidebarProps> = (args) => (
  <Sidebar {...args}>
    <SidebarSection>sidebar</SidebarSection>
  </Sidebar>
);

export const Default = Template.bind({});
Default.args = {} as SidebarProps;
