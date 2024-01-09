/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TagStatus = ({ weight, type, className }) => {
  return (
    <div className={`tag-status ${className}`}>
      <div className={`ellipse ${type}`} />
      <div className={`delivered-2 weight-${weight}`}>
        {type === "delivered" && <>Delivered</>}

        {type === "accepted" && <>Accepted</>}

        {type === "received" && <>Received</>}

        {type === "successful" && <>Successful</>}

        {type === "pending" && <>Pending</>}

        {type === "ready-to-ship" && <>Ready to ship</>}

        {type === "shipped" && <>Shipped</>}

        {type === "preparing" && <>Preparing</>}

        {type === "cancelled" && <>Cancelled</>}

        {type === "served" && <>Served</>}

        {type === "rejected" && <>Rejected</>}

        {type === "failed" && <>Failed</>}

        {type === "processing" && <>Processing</>}

        {type === "unpaid" && <>Unpaid</>}

        {type === "cancelled-by-buyer" && <>Cancelled by buyer</>}

        {type === "completed" && <>Completed</>}
      </div>
    </div>
  );
};

TagStatus.propTypes = {
  weight: PropTypes.oneOf(["regular", "medium"]),
  type: PropTypes.oneOf([
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
  ]),
};
