import { InputSearchBox } from ".";

export default {
  title: "Components/InputSearchBox",
  component: InputSearchBox,
  argTypes: {
    type: {
      options: ["active", "default", "focus", "header", "input"],
      control: { type: "select" },
    },
    size: {
      options: ["small", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    clearText: true,
    icon: true,
    type: "active",
    size: "small",
    className: {},
    baseSearchFieldDivClassName: {},
    baseSearchFieldText: "Order ID, phone or a name...",
  },
};
