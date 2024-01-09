/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const NameMarketingStateFalse = ({ color = "#4D4D4D", className }) => {
  return (
    <svg
      className={`name-marketing-state-false ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" opacity="0.8">
        <path
          className="path"
          clipRule="evenodd"
          d="M12.1074 2.2909C13.0654 1.7684 14.2333 2.46173 14.2333 3.55287V16.4472C14.2333 17.5383 13.0653 18.2317 12.1074 17.7092L4.04696 13.3125H2.375C1.23591 13.3125 0.3125 12.3891 0.3125 11.25V8.75005C0.3125 7.61096 1.23591 6.68755 2.375 6.68755H4.04692L12.1074 2.2909ZM12.6083 3.86873L5.06662 7.98236V12.0177L12.6083 16.1313V3.86873ZM1.9375 8.75005C1.9375 8.50842 2.13338 8.31255 2.375 8.31255H3.4375V11.6875H2.375C2.13338 11.6875 1.9375 11.4917 1.9375 11.25V8.75005Z"
          fill={color}
          fillRule="evenodd"
        />
        <path
          className="path"
          d="M18.6387 5.32579C18.919 5.67619 18.8622 6.18749 18.5118 6.46781L16.4284 8.13448C16.078 8.4148 15.5667 8.35799 15.2864 8.00759C15.0061 7.65719 15.0629 7.14589 15.4133 6.86557L17.4966 5.1989C17.847 4.91858 18.3583 4.97539 18.6387 5.32579Z"
          fill={color}
        />
        <path
          className="path"
          d="M15.5041 10.0209C15.5041 9.57214 15.8679 9.20837 16.3166 9.20837H18.8583C19.307 9.20837 19.6708 9.57214 19.6708 10.0209C19.6708 10.4696 19.307 10.8334 18.8583 10.8334H16.3166C15.8679 10.8334 15.5041 10.4696 15.5041 10.0209Z"
          fill={color}
        />
        <path
          className="path"
          d="M16.4284 12.2823C16.078 12.0019 15.5667 12.0588 15.2864 12.4092C15.0061 12.7596 15.0629 13.2709 15.4133 13.5512L17.4966 15.2178C17.847 15.4982 18.3583 15.4414 18.6387 15.091C18.919 14.7406 18.8622 14.2292 18.5118 13.9489L16.4284 12.2823Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

NameMarketingStateFalse.propTypes = {
  color: PropTypes.string,
};
