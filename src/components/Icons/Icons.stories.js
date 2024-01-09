import { Icons } from ".";

export default {
  title: "Components/Icons",
  component: Icons,
  argTypes: {
    type: {
      options: ["two", "three", "four"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "two",
    className: {},
  },
};
