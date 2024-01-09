import { ButtonText } from ".";

export default {
  title: "Components/ButtonText",
  component: ButtonText,
  argTypes: {
    fontWeight: {
      options: ["regular", "medium"],
      control: { type: "select" },
    },
    size: {
      options: ["fourteen-px", "sixteen-px"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    fontWeight: "regular",
    size: "fourteen-px",
    className: {},
    text: "Button",
  },
};
