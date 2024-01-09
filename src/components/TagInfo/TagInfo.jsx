/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TagInfo = ({ type, size, text, className }) => {
  return (
    <div className={`tag-info type-${type} text-0-${text} ${size} ${className}`}>
      <div className="NEW">
        {type === "new" && <>NEW</>}

        {type === "beta" && <>BETA</>}

        {type === "return" && <>RETURN</>}

        {type === "draft" && <>DRAFT</>}

        {type === "cash" && <>CASH</>}

        {type === "paid" && <>PAID</>}

        {type === "COD" && <>COD</>}

        {type === "manual" && <>MANUAL</>}

        {type === "unpaid" && <>UNPAID</>}
      </div>
    </div>
  );
};

TagInfo.propTypes = {
  type: PropTypes.oneOf(["manual", "COD", "new", "paid", "unpaid", "beta", "draft", "cash", "return"]),
  size: PropTypes.oneOf(["twenty-two-px", "twenty-px"]),
  text: PropTypes.oneOf(["medium", "semi-bold"]),
};
