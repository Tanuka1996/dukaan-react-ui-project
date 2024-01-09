/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ControlsToggle } from "../../icons/ControlsToggle";
import { OutlinedCopy } from "../../icons/OutlinedCopy";
import { OutlinedKebabRight } from "../../icons/OutlinedKebabRight";
import { OutlinedShare } from "../../icons/OutlinedShare";
import { OutlinedView } from "../../icons/OutlinedView";
import { TypeCheckbox } from "../../icons/TypeCheckbox";
import { TagInfo } from "../TagInfo";
import { TagStatus } from "../TagStatus";
import "./style.css";

export const TableType = ({
  icon2 = true,
  icon1 = true,
  icon3 = true,
  infoTag = false,
  icon4 = true,
  image = false,
  iconRight = false,
  twoLineText = false,
  italics = false,
  text = "Sample Data",
  iconLeft = false,
  threeLineText = false,
  checkbox = false,
  strikeThrough = false,
  type,
  className,
  divClassName,
  divClassNameOverride,
}) => {
  return (
    <div className={`table-type type-${type} ${className}`}>
      {(type === "input-active" ||
        type === "input-disabled" ||
        type === "link" ||
        type === "remove" ||
        type === "text-medium" ||
        type === "text-regular" ||
        type === "u-line-link") && (
        <div className="checkbox-text">
          {["input-active", "input-disabled", "link", "text-medium", "text-regular", "u-line-link"].includes(type) && (
            <div className="text">
              {["link", "text-medium", "text-regular", "u-line-link"].includes(type) && (
                <div className="icon-text-italics">
                  <div
                    className={`text-2 ${["link", "u-line-link"].includes(type) ? divClassNameOverride : undefined}`}
                  >
                    {["text-medium", "text-regular"].includes(type) && (
                      <div className={`sample-data ${divClassName}`}>{text}</div>
                    )}

                    {["link", "u-line-link"].includes(type) && <>{text}</>}
                  </div>
                </div>
              )}

              {["input-active", "input-disabled"].includes(type) && <>Placeholder</>}
            </div>
          )}

          {type === "remove" && <>Remove</>}
        </div>
      )}

      {type === "switch" && (
        <>
          <ControlsToggle className="controls-toggle" />
          <div className="text-wrapper-10">In stock</div>
        </>
      )}

      {type === "status" && <TagStatus className="instance-node-5" type="accepted" weight="regular" />}

      {type === "icons" && (
        <>
          <>
            {icon1 && (
              <div className="icon">
                <OutlinedView className="instance-node-6" />
              </div>
            )}
          </>
          <>
            {icon2 && (
              <div className="icon">
                <OutlinedCopy className="instance-node-6" />
              </div>
            )}
          </>
          <>
            {icon3 && (
              <div className="icon">
                <OutlinedShare className="instance-node-6" />
              </div>
            )}
          </>
          <>
            {icon4 && (
              <div className="outlined-kebab-right-wrapper">
                <OutlinedKebabRight className="outlined-kebab-right" />
              </div>
            )}
          </>
        </>
      )}

      {type === "tag" && <TagInfo className="instance-node-5" size="twenty-two-px" text="semi-bold" type="paid" />}

      {type === "checkbox" && <TypeCheckbox className="instance-node-6" color="white" />}
    </div>
  );
};

TableType.propTypes = {
  icon2: PropTypes.bool,
  icon1: PropTypes.bool,
  icon3: PropTypes.bool,
  infoTag: PropTypes.bool,
  icon4: PropTypes.bool,
  image: PropTypes.bool,
  iconRight: PropTypes.bool,
  twoLineText: PropTypes.bool,
  italics: PropTypes.bool,
  text: PropTypes.string,
  iconLeft: PropTypes.bool,
  threeLineText: PropTypes.bool,
  checkbox: PropTypes.bool,
  strikeThrough: PropTypes.bool,
  type: PropTypes.oneOf([
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
  ]),
};
