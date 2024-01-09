/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { NameAnalyticsStateTrue } from "../../icons/NameAnalyticsStateTrue";
import { NameDeliveryStateTrue } from "../../icons/NameDeliveryStateTrue";
import { NameDiscountsStateFalse } from "../../icons/NameDiscountsStateFalse";
import { NameDiscountsStateTrue } from "../../icons/NameDiscountsStateTrue";
import { NameMarketingStateFalse } from "../../icons/NameMarketingStateFalse";
import { NameMarketingStateTrue } from "../../icons/NameMarketingStateTrue";
import { NamePaymentsStateFalse } from "../../icons/NamePaymentsStateFalse";
import { NameTutorialsStateTrue } from "../../icons/NameTutorialsStateTrue";
import { NavbarIcon103 } from "../../icons/NavbarIcon103";
import { NavbarIcon129 } from "../../icons/NavbarIcon129";
import { NavbarIcon179 } from "../../icons/NavbarIcon179";
import { NavbarIcon181 } from "../../icons/NavbarIcon181";
import { NavbarIcon186 } from "../../icons/NavbarIcon186";
import { NavbarIcon65 } from "../../icons/NavbarIcon65";
import { NavbarIcon90 } from "../../icons/NavbarIcon90";
import "./style.css";

export const NavbarIcon = ({
  name,
  state,
  nameAccountStateClassName,
  vectorClassName,
  vector = "/img/vector-1.svg",
}) => {
  return (
    <>
      {(name === "account" ||
        name === "affiliate" ||
        name === "appearance" ||
        name === "catalogue" ||
        name === "home" ||
        name === "manage" ||
        name === "orders" ||
        name === "pages" ||
        (name === "plugin" && !state) ||
        name === "vendor") && (
        <img
          className={`navbar-icon instance-node-8 ${nameAccountStateClassName}`}
          alt="Name account state"
          src={
            state && name === "pages"
              ? "/img/name-pages-state-true.png"
              : name === "appearance" && state
              ? "/img/name-appearance-state-true.png"
              : name === "account" && !state
              ? "/img/name-account-state-false.png"
              : name === "plugin"
              ? "/img/name-plugin-state-false.png"
              : !state && name === "pages"
              ? "/img/name-pages-state-false.png"
              : !state && name === "appearance"
              ? "/img/name-appearance-state-false.png"
              : name === "catalogue" && state
              ? "/img/name-catalogue-state-true.png"
              : !state && name === "catalogue"
              ? "/img/name-catalogue-state-false.png"
              : name === "home" && state
              ? "/img/name-home-state-true.png"
              : name === "affiliate" && state
              ? "/img/name-affiliate-state-true.png"
              : name === "vendor" && state
              ? "/img/name-vendor-state-true.png"
              : !state && name === "home"
              ? "/img/name-home-state-false.png"
              : name === "manage" && state
              ? "/img/name-manage-state-true.png"
              : name === "manage" && !state
              ? "/img/name-manage-state-false.png"
              : name === "orders" && state
              ? "/img/name-orders-state-true.png"
              : name === "orders" && !state
              ? "/img/name-orders-state-false.png"
              : name === "affiliate" && !state
              ? "/img/name-affiliate-state-false.png"
              : name === "vendor" && !state
              ? "/img/name-vendor-state-false.png"
              : "/img/name-account-state-true.png"
          }
        />
      )}

      {((state && name === "plugin") || (!state && name === "tutorials")) && (
        <div className={`navbar-icon name-plugin-state state-${state} ${nameAccountStateClassName}`}>
          <img className={`vector ${vectorClassName}`} alt="Vector" src={!state ? "/img/vector-2.svg" : vector} />
        </div>
      )}

      {name === "tools" && state && <NavbarIcon103 className="instance-node-8" color="#4D4D4D" />}

      {name === "tools" && !state && <NavbarIcon179 className="instance-node-8" color="#4D4D4D" />}

      {name === "discounts" && !state && <NameDiscountsStateFalse className="instance-node-8" />}

      {name === "discounts" && state && <NameDiscountsStateTrue className="instance-node-8" color="#4D4D4D" />}

      {name === "payments" && state && <NavbarIcon90 className="instance-node-8" color="#4D4D4D" />}

      {name === "payments" && !state && <NamePaymentsStateFalse className="instance-node-8" color="#4D4D4D" />}

      {name === "marketing" && !state && <NameMarketingStateFalse className="instance-node-8" color="#4D4D4D" />}

      {name === "customers" && !state && <NavbarIcon181 className="instance-node-8" color="#4D4D4D" />}

      {name === "marketing" && state && <NameMarketingStateTrue className="instance-node-8" color="#4D4D4D" />}

      {name === "customers" && state && <NavbarIcon129 className="instance-node-8" color="#4D4D4D" />}

      {name === "tutorials" && state && <NameTutorialsStateTrue className="instance-node-8" />}

      {name === "delivery" && !state && <NavbarIcon186 className="instance-node-8" color="#4D4D4D" />}

      {name === "delivery" && state && <NameDeliveryStateTrue className="instance-node-8" color="#4D4D4D" />}

      {name === "analytics" && !state && <NavbarIcon65 className="instance-node-8" color="#4D4D4D" />}

      {name === "analytics" && state && <NameAnalyticsStateTrue className="instance-node-8" color="#4D4D4D" />}
    </>
  );
};

NavbarIcon.propTypes = {
  name: PropTypes.oneOf([
    "tools",
    "discounts",
    "plugin",
    "tutorials",
    "appearance",
    "vendor",
    "manage",
    "customers",
    "marketing",
    "home",
    "payments",
    "account",
    "affiliate",
    "orders",
    "delivery",
    "pages",
    "analytics",
    "catalogue",
  ]),
  state: PropTypes.bool,
  vector: PropTypes.string,
};
