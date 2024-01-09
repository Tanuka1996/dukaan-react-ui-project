/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const FilledInfo = ({ color = "#FAB73B", className }) => {
  return (
    <svg
      className={`filled-info ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_0_751)">
        <path
          className="path"
          clipRule="evenodd"
          d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 5.58973C10.4279 5.58973 10.7747 5.93655 10.7747 6.36439C10.7747 6.79222 10.4279 7.13904 10 7.13904C9.57219 7.13904 9.22536 6.79222 9.22536 6.36439C9.22536 5.93655 9.57219 5.58973 10 5.58973ZM10.6409 9.34539C10.6097 9.04256 10.3347 8.80572 10 8.80572C9.64444 8.80572 9.35618 9.07309 9.35618 9.4029V13.8131L9.35913 13.8706C9.39033 14.1734 9.66536 14.4103 10 14.4103C10.3556 14.4103 10.6439 14.1429 10.6439 13.8131V9.4029L10.6409 9.34539Z"
          fill={color}
          fillRule="evenodd"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_0_751">
          <rect className="rect" fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};

FilledInfo.propTypes = {
  color: PropTypes.string,
};
