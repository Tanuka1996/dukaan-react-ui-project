import { NavbarIcon } from ".";

export default {
  title: "Components/NavbarIcon",
  component: NavbarIcon,
  argTypes: {
    name: {
      options: [
        "tools",
        "discounts",
        "plugin",
        "tutorials",
        "appearance",
        "vendor",
        "manage",
        "customers",
        "marketing",
        "home",
        "payments",
        "account",
        "affiliate",
        "orders",
        "delivery",
        "pages",
        "analytics",
        "catalogue",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    name: "tools",
    state: true,
    nameAccountStateClassName: {},
    vectorClassName: {},
    vector: "/img/vector-1.svg",
  },
};
