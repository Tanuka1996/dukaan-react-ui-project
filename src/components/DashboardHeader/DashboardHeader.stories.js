import { DashboardHeader } from ".";

export default {
  title: "Components/DashboardHeader",
  component: DashboardHeader,
  argTypes: {
    screenWidth: {
      options: ["full", "large", "middle", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    backArrow: true,
    help: true,
    searchBox: true,
    descriptionText: true,
    button: true,
    screenWidth: "full",
    beta: true,
    className: {},
    divClassName: {},
    text: "Dashboard",
    howToUseText: "How to use",
    howToUseDivClassName: {},
    iconsSearch: "/img/icons-search-1.png",
    placeholderTextClassName: {},
  },
};
