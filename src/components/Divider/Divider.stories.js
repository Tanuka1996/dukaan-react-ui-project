import { Divider } from ".";

export default {
  title: "Components/Divider",
  component: Divider,
  argTypes: {
    stroke: {
      options: ["black-90", "black-85", "dash"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stroke: "black-90",
    className: {},
  },
};
