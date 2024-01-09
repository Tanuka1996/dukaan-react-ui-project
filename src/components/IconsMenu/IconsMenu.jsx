/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsMenu8 } from "../../icons/IconsMenu8";
import { TypeMessageStateActive } from "../../icons/TypeMessageStateActive";
import { TypeNotificationStateActive } from "../../icons/TypeNotificationStateActive";
import { TypeNotificationStateNormal } from "../../icons/TypeNotificationStateNormal";
import { TypeShortcutsStateHover } from "../../icons/TypeShortcutsStateHover";
import { TypeShortcutsStateNormal } from "../../icons/TypeShortcutsStateNormal";
import "./style.css";

export const IconsMenu = ({
  type,
  state,
  typeDropdownStateClassName,
  polygonClassName,
  polygon = "/img/polygon-2-8.svg",
}) => {
  return (
    <>
      {type === "notification" && ["active", "hover"].includes(state) && (
        <TypeNotificationStateActive
          className="instance-node"
          color={state === "hover" ? "#D9D9D9" : "#146EB4"}
          fill={state === "hover" ? "#4D4D4D" : "#146EB4"}
          opacity={state === "active" ? "0.1" : undefined}
        />
      )}

      {state === "normal" && type === "notification" && <TypeNotificationStateNormal className="instance-node" />}

      {type === "message" && state === "normal" && <IconsMenu8 className="instance-node" />}

      {type === "message" && ["active", "hover"].includes(state) && (
        <TypeMessageStateActive
          className="instance-node"
          color={state === "hover" ? "#D9D9D9" : "#146EB4"}
          fill={state === "hover" ? "#4D4D4D" : "#146EB4"}
          opacity={state === "active" ? "0.1" : undefined}
        />
      )}

      {type === "dropdown" && (
        <div className={`icons-menu ${state} ${typeDropdownStateClassName}`}>
          <img
            className={`polygon ${polygonClassName}`}
            alt="Polygon"
            src={state === "active" ? "/img/polygon-2-7.svg" : polygon}
          />
        </div>
      )}

      {type === "shortcuts" && state === "normal" && <TypeShortcutsStateNormal className="instance-node" />}

      {type === "shortcuts" && ["active", "hover"].includes(state) && (
        <TypeShortcutsStateHover
          className="instance-node"
          color={state === "active" ? "#146EB4" : "#D9D9D9"}
          fill={state === "active" ? "#146EB4" : "#4D4D4D"}
          opacity={state === "active" ? "0.1" : undefined}
        />
      )}
    </>
  );
};

IconsMenu.propTypes = {
  type: PropTypes.oneOf(["dropdown", "message", "notification", "shortcuts"]),
  state: PropTypes.oneOf(["hover", "active", "normal"]),
  polygon: PropTypes.string,
};
