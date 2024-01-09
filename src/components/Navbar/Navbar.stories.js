import { Navbar } from ".";

export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    navbar: {
      options: [
        "tools",
        "discounts",
        "affiliates",
        "vendors",
        "apperance",
        "payouts",
        "plugins",
        "marketing",
        "products",
        "home",
        "audience",
        "orders",
        "account",
        "delivery",
        "analytics",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    navbar: "tools",
    className: {},
    baseNavigationBarBaseNavBottomOutlineWalletWallet: "/img/wallet-11.svg",
    baseNavigationBarBaseNavButtonText: "Payouts",
    baseNavigationBarDivClassName: {},
  },
};
