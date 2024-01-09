/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { BoldCross3 } from "../../icons/BoldCross3";
import { BoldSearch1 } from "../../icons/BoldSearch1";
import { BaseSearchField } from "../BaseSearchField";
import "./style.css";

export const InputSearchBox = ({
  clearText = true,
  icon = true,
  type,
  size,
  className,
  baseSearchFieldDivClassName,
  baseSearchFieldText = "Order ID, phone or a name...",
}) => {
  return (
    <div className={`input-search-box type-${type} size-${size} ${className}`}>
      {(size === "default" || (size === "small" && type === "default") || (size === "small" && type === "header")) && (
        <BaseSearchField
          boldSearch1Color={
            type === "header" ? "#808080" : size === "small" && type === "default" ? "#999999" : undefined
          }
          className={`${
            ["default", "input"].includes(type)
              ? "class"
              : type === "active"
              ? "class-2"
              : type === "header" && size === "default"
              ? "class-3"
              : "class-4"
          }`}
          divClassName={baseSearchFieldDivClassName}
          text={baseSearchFieldText}
        />
      )}

      {size === "small" && ["active", "focus", "input"].includes(type) && (
        <>
          <>{icon && <BoldSearch1 className="instance-node-4" color="#999999" />}</>
          <div className="text-wrapper-9">Search blogs...</div>
        </>
      )}

      {size === "small" && ["focus", "input"].includes(type) && (
        <>
          <>{clearText && <BoldCross3 className="instance-node-4" />}</>
        </>
      )}
    </div>
  );
};

InputSearchBox.propTypes = {
  clearText: PropTypes.bool,
  icon: PropTypes.bool,
  type: PropTypes.oneOf(["active", "default", "focus", "header", "input"]),
  size: PropTypes.oneOf(["small", "default"]),
  baseSearchFieldText: PropTypes.string,
};
