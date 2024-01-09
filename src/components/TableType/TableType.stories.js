import { TableType } from ".";

export default {
  title: "Components/TableType",
  component: TableType,
  argTypes: {
    type: {
      options: [
        "text-regular",
        "u-line-link",
        "status",
        "checkbox",
        "text-medium",
        "switch",
        "input-active",
        "input-disabled",
        "remove",
        "link",
        "icons",
        "tag",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    icon2: true,
    icon1: true,
    icon3: true,
    infoTag: false,
    icon4: true,
    image: false,
    iconRight: false,
    twoLineText: false,
    italics: false,
    text: "Sample Data",
    iconLeft: false,
    threeLineText: false,
    checkbox: false,
    strikeThrough: false,
    type: "text-regular",
    className: {},
    divClassName: {},
    divClassNameOverride: {},
  },
};
