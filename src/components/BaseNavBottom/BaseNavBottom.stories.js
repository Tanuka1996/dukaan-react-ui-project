import { BaseNavBottom } from ".";

export default {
  title: "Components/BaseNavBottom",
  component: BaseNavBottom,
  argTypes: {
    property1: {
      options: ["wallet-credits", "support"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "wallet-credits",
    className: {},
    outlineWalletWallet: "/img/wallet-16.svg",
  },
};
