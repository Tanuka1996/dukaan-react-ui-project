/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { BoldSearch1 } from "../../icons/BoldSearch1";
import "./style.css";

export const BaseSearchField = ({
  showX = false,
  icon = true,
  className,
  divClassName,
  text = "Order ID, phone or a name...",
  boldSearch1Color = "#999999",
}) => {
  return (
    <div className={`base-search-field ${className}`}>
      {icon && <BoldSearch1 className="bold-search" color={boldSearch1Color} />}

      <p className={`order-ID-phone-or-a ${divClassName}`}>{text}</p>
    </div>
  );
};

BaseSearchField.propTypes = {
  showX: PropTypes.bool,
  icon: PropTypes.bool,
  text: PropTypes.string,
  boldSearch1Color: PropTypes.string,
};
