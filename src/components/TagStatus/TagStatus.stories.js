import { TagStatus } from ".";

export default {
  title: "Components/TagStatus",
  component: TagStatus,
  argTypes: {
    weight: {
      options: ["regular", "medium"],
      control: { type: "select" },
    },
    type: {
      options: [
        "cancelled-by-buyer",
        "successful",
        "processing",
        "shipped",
        "failed",
        "received",
        "pending",
        "completed",
        "rejected",
        "ready-to-ship",
        "unpaid",
        "preparing",
        "delivered",
        "cancelled",
        "served",
        "accepted",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    weight: "regular",
    type: "cancelled-by-buyer",
    className: {},
  },
};
