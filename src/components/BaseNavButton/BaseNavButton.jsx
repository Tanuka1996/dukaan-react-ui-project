/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { NavbarIcon205 } from "../../icons/NavbarIcon205";
import "./style.css";

export const BaseNavButton = ({
  type,
  state,
  badge,
  beta,
  className,
  icon = <NavbarIcon205 className="navbar-icon" />,
  text = "Home",
  override = <NavbarIcon205 className="navbar-icon" />,
  text1 = "Child Item (12)",
}) => {
  return (
    <div className={`base-nav-button state-1-${state} ${type} beta-1-${beta} ${className}`}>
      {!beta && type === "parent" && !badge && (
        <>
          {icon}
          <div className="home">{text}</div>
        </>
      )}

      {(badge || beta) && (
        <>
          {override}
          <div className={`home-2 badge-${badge} state-2-${state}`}>{text}</div>
          <div className={`BETA-wrapper badge-0-${badge}`}>
            <div className="BETA">
              {!badge && <>BETA</>}

              {badge && <div className="text-wrapper-11">3</div>}
            </div>
          </div>
        </>
      )}

      {type === "child" && <div className="child-item">{text1}</div>}
    </div>
  );
};

BaseNavButton.propTypes = {
  type: PropTypes.oneOf(["child", "parent"]),
  state: PropTypes.oneOf(["inactive", "active", "hover"]),
  badge: PropTypes.bool,
  beta: PropTypes.bool,
  text: PropTypes.string,
  text1: PropTypes.string,
};
