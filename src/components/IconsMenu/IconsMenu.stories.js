import { IconsMenu } from ".";

export default {
  title: "Components/IconsMenu",
  component: IconsMenu,
  argTypes: {
    type: {
      options: ["dropdown", "message", "notification", "shortcuts"],
      control: { type: "select" },
    },
    state: {
      options: ["hover", "active", "normal"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "dropdown",
    state: "hover",
    typeDropdownStateClassName: {},
    polygonClassName: {},
    polygon: "/img/polygon-2-8.svg",
  },
};
