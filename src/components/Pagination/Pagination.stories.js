import { Pagination } from ".";

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    state: {
      options: ["previous", "other-page", "next", "hover", "current-page"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "previous",
    className: {},
    text: "0",
    divClassName: {},
    text1: "1",
  },
};
