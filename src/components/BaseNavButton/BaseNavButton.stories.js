import { BaseNavButton } from ".";

export default {
  title: "Components/BaseNavButton",
  component: BaseNavButton,
  argTypes: {
    type: {
      options: ["child", "parent"],
      control: { type: "select" },
    },
    state: {
      options: ["inactive", "active", "hover"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "child",
    state: "inactive",
    badge: true,
    beta: true,
    className: {},
    text: "Home",
    text1: "Child Item (12)",
  },
};
