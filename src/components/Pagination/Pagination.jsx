/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { OutlinedChevronRight2 } from "../../icons/OutlinedChevronRight2";
import { OutlinedChevronRight4 } from "../../icons/OutlinedChevronRight4";
import { ButtonText } from "../ButtonText";
import "./style.css";

export const Pagination = ({ state, className, text = "0", divClassName, text1 = "1" }) => {
  return (
    <div className={`pagination state-${state} ${className}`}>
      {state === "previous" && <OutlinedChevronRight2 className="outlined-chevron" />}

      {["next", "previous"].includes(state) && (
        <ButtonText
          className="button-text-instance"
          fontWeight="medium"
          size="fourteen-px"
          text={state === "next" ? "Next" : "Previous"}
        />
      )}

      {["current-page", "hover", "other-page"].includes(state) && (
        <div className={`element ${divClassName}`}>
          {state === "current-page" && <>{text1}</>}

          {["hover", "other-page"].includes(state) && <>{text}</>}
        </div>
      )}

      {state === "next" && <OutlinedChevronRight4 className="outlined-chevron" />}
    </div>
  );
};

Pagination.propTypes = {
  state: PropTypes.oneOf(["previous", "other-page", "next", "hover", "current-page"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
