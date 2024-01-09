/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeNotificationStateActive = ({ color = "#146EB4", opacity = "unset", fill = "#146EB4", className }) => {
  return (
    <svg
      className={`type-notification-state-active ${className}`}
      fill="none"
      height="36"
      viewBox="0 0 36 36"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="circle" cx="18" cy="18" fill={color} fillOpacity={opacity} r="18" />
      <path
        className="path"
        d="M19.031 24.9607C19.5977 24.9607 20.0571 25.4172 20.0571 25.9803C20.0571 26.5435 19.5977 27 19.031 27H16.979C16.4123 27 15.9529 26.5435 15.9529 25.9803C15.9529 25.4172 16.4123 24.9607 16.979 24.9607H19.031ZM18.005 9C18.792 9 19.4301 9.63802 19.4301 10.4251L19.4307 11.4425C20.5369 11.6979 21.5637 12.2483 22.3935 13.0485C23.6187 14.2299 24.3098 15.8548 24.309 17.5519V21.4698C24.309 21.9026 24.6618 22.2534 25.097 22.2534C25.5322 22.2534 25.885 22.6043 25.885 23.037C25.885 23.4698 25.5322 23.8206 25.097 23.8206H10.913C10.4778 23.8206 10.125 23.4698 10.125 23.037C10.125 22.6043 10.4778 22.2534 10.913 22.2534C11.3482 22.2534 11.701 21.9026 11.701 21.4698V17.7791C11.6702 14.76 13.7381 12.1874 16.5796 11.4708L16.5799 10.4251C16.5799 9.63802 17.218 9 18.005 9Z"
        fill={fill}
      />
    </svg>
  );
};

TypeNotificationStateActive.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
  fill: PropTypes.string,
};
