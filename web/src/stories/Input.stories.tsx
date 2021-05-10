import { Meta, Story } from "@storybook/react";

import { Input, InputProps } from "../components/Form/Input";
import { FieldSet } from "../components/Form/Fieldset";

export default {
  title: "components/Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => (
  <FieldSet>
    <Input {...args} />
  </FieldSet>
);

export const Text = Template.bind({});
Text.args = {
  label: "Text",
  type: "text",
  id: "text",
  maxLength: 30,
} as InputProps;
