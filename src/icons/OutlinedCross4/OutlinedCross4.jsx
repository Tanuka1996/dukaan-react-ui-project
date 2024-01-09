/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const OutlinedCross4 = ({ color = "#4D4D4D", className }) => {
  return (
    <svg
      className={`outlined-cross-4 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M12.693 3.30696C12.9273 3.54128 12.9273 3.92117 12.693 4.15549L4.15561 12.6929C3.9213 12.9272 3.5414 12.9272 3.30708 12.6929C3.07277 12.4586 3.07277 12.0787 3.30708 11.8444L11.8445 3.30696C12.0788 3.07265 12.4587 3.07265 12.693 3.30696Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M3.30708 3.30696C3.5414 3.07265 3.9213 3.07265 4.15561 3.30696L12.693 11.8444C12.9273 12.0787 12.9273 12.4586 12.693 12.6929C12.4587 12.9272 12.0788 12.9272 11.8445 12.6929L3.30708 4.15549C3.07277 3.92117 3.07277 3.54128 3.30708 3.30696Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

OutlinedCross4.propTypes = {
  color: PropTypes.string,
};
