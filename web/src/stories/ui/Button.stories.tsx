import { Meta, Story } from "@storybook/react";

import { InputButton as IButton } from "@/components/button/InputButton";
import { JoinButton as JButton } from "@/modules/auth/components/JoinButton";

export default {
  title: "components/Button",
} as Meta;

const InputButtonTemplate: Story = () => (
  <IButton>Default Input Button</IButton>
);

export const InputButton = InputButtonTemplate.bind({});

const JoinButtonTemplate: Story = () => <JButton>Join Button</JButton>;

export const JoinButton = JoinButtonTemplate.bind({});
