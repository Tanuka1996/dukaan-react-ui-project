import { TagInfo } from ".";

export default {
  title: "Components/TagInfo",
  component: TagInfo,
  argTypes: {
    type: {
      options: ["manual", "COD", "new", "paid", "unpaid", "beta", "draft", "cash", "return"],
      control: { type: "select" },
    },
    size: {
      options: ["twenty-two-px", "twenty-px"],
      control: { type: "select" },
    },
    text: {
      options: ["medium", "semi-bold"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "manual",
    size: "twenty-two-px",
    text: "medium",
    className: {},
  },
};
