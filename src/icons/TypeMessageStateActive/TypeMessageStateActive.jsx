/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeMessageStateActive = ({ color = "#146EB4", opacity = "unset", fill = "#146EB4", className }) => {
  return (
    <svg
      className={`type-message-state-active ${className}`}
      fill="none"
      height="36"
      viewBox="0 0 36 36"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="circle" cx="18" cy="18" fill={color} fillOpacity={opacity} r="18" />
      <path
        className="path"
        d="M25.5789 9.02136L10.0042 12.0441C9.41684 12.1491 9 12.7158 9 13.3666V20.2517C9 20.9025 9.41684 21.4692 10.0042 21.5742L11.5958 21.8891C12.24 23.0646 13.4526 25.1007 15.0821 26.759C15.6316 27.3258 16.5411 26.822 16.4274 25.9824C16.2758 24.8698 16.3137 23.6733 16.3705 22.8337L25.5789 24.6389C26.3179 24.7859 27 24.1561 27 23.3165V10.3438C27 9.50416 26.3179 8.87442 25.5789 9.02136ZM14.8168 17.6698C14.8168 17.9007 14.6463 18.0896 14.4379 18.0896H12.8842C12.6758 18.0896 12.5053 17.9007 12.5053 17.6698V15.9485C12.5053 15.7176 12.6758 15.5287 12.8842 15.5287H14.4379C14.6463 15.5287 14.8168 15.7176 14.8168 15.9485V17.6698ZM19.1558 17.6698C19.1558 17.9007 18.9853 18.0896 18.7768 18.0896H17.2232C17.0147 18.0896 16.8442 17.9007 16.8442 17.6698V15.9485C16.8442 15.7176 17.0147 15.5287 17.2232 15.5287H18.7768C18.9853 15.5287 19.1558 15.7176 19.1558 15.9485V17.6698ZM23.5137 17.6698C23.5137 17.9007 23.3432 18.0896 23.1347 18.0896H21.5811C21.3726 18.0896 21.2021 17.9007 21.2021 17.6698V15.9485C21.2021 15.7176 21.3726 15.5287 21.5811 15.5287H23.1158C23.3242 15.5287 23.4947 15.7176 23.4947 15.9485V17.6698H23.5137Z"
        fill={fill}
      />
    </svg>
  );
};

TypeMessageStateActive.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
  fill: PropTypes.string,
};
