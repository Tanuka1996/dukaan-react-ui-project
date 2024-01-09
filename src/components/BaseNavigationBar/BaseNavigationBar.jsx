/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { BoldChevronDown16 } from "../../icons/BoldChevronDown16";
import { NameMarketingStateFalse } from "../../icons/NameMarketingStateFalse";
import { NamePaymentsStateFalse } from "../../icons/NamePaymentsStateFalse";
import { NavbarIcon130 } from "../../icons/NavbarIcon130";
import { NavbarIcon179 } from "../../icons/NavbarIcon179";
import { NavbarIcon181 } from "../../icons/NavbarIcon181";
import { NavbarIcon185 } from "../../icons/NavbarIcon185";
import { NavbarIcon186 } from "../../icons/NavbarIcon186";
import { NavbarIcon193 } from "../../icons/NavbarIcon193";
import { NavbarIcon194 } from "../../icons/NavbarIcon194";
import { NavbarIcon196 } from "../../icons/NavbarIcon196";
import { NavbarIcon205 } from "../../icons/NavbarIcon205";
import { NavbarIcon61 } from "../../icons/NavbarIcon61";
import { NavbarIcon65 } from "../../icons/NavbarIcon65";
import { NavbarIcon68 } from "../../icons/NavbarIcon68";
import { BaseNavBottom } from "../BaseNavBottom";
import { BaseNavButton } from "../BaseNavButton";
import "./style.css";

export const BaseNavigationBar = ({
  className,
  divClassName,
  baseNavButtonIcon = <NavbarIcon205 className="icon-instance-node" />,
  override = <NavbarIcon61 className="icon-instance-node" />,
  baseNavButtonIcon1 = <NavbarIcon185 className="icon-instance-node" />,
  baseNavButtonIcon2 = <NavbarIcon186 className="icon-instance-node" color="white" />,
  baseNavButtonIcon3 = <NameMarketingStateFalse className="icon-instance-node" color="white" />,
  baseNavButtonIcon4 = <NavbarIcon65 className="icon-instance-node" color="white" />,
  baseNavButtonState = "inactive",
  baseNavButtonText = "Payouts",
  baseNavButtonIcon5 = <NamePaymentsStateFalse className="icon-instance-node" color="white" />,
  baseNavButtonIcon6 = <NavbarIcon179 className="icon-instance-node" color="white" />,
  baseNavButtonIcon7 = <NavbarIcon68 className="icon-instance-node" />,
  baseNavButtonIcon8 = <NavbarIcon181 className="icon-instance-node" color="white" />,
  visible = true,
  visible1 = true,
  baseNavButtonIcon9 = <NavbarIcon130 className="icon-instance-node" />,
  baseNavButtonIcon10 = <NavbarIcon196 className="icon-instance-node" />,
  baseNavBottomOutlineWalletWallet = "/img/wallet-16.svg",
  baseNavButtonState1 = "inactive",
  baseNavButtonState2 = "inactive",
  baseNavButtonState3 = "inactive",
  baseNavButtonState4 = "inactive",
  baseNavButtonState5 = "inactive",
  baseNavButtonState6 = "inactive",
  baseNavButtonState7 = "inactive",
  baseNavButtonState8 = "inactive",
  baseNavButtonIcon11 = <NavbarIcon193 className="icon-instance-node" />,
  baseNavButtonIcon12 = <NavbarIcon194 className="icon-instance-node" />,
  baseNavButtonState9 = "inactive",
}) => {
  return (
    <div className={`base-navigation-bar ${className}`}>
      <div className="nav-top">
        <div className="company-icon-image">
          <div className="rectangle" />
          <div className="frame-12">
            <div className="text-wrapper-12">Nishyan</div>
            <div className={`text-wrapper-13 ${divClassName}`}>Visit store</div>
          </div>
          <img className="image" alt="Image" src="/img/image-15.png" />
          <BoldChevronDown16 className="icon-instance-node" color="white" />
        </div>
        <div className="pages">
          <BaseNavButton
            badge={false}
            beta={false}
            className="design-component-instance-node"
            icon={baseNavButtonIcon}
            state={baseNavButtonState1}
            text="Home"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="design-component-instance-node"
            icon={override}
            state="inactive"
            text="Orders"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="design-component-instance-node"
            icon={baseNavButtonIcon1}
            state="inactive"
            text="Products"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="design-component-instance-node"
            icon={baseNavButtonIcon2}
            state={baseNavButtonState2}
            text="Delivery"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="design-component-instance-node"
            icon={baseNavButtonIcon3}
            state={baseNavButtonState3}
            text="Marketing"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="design-component-instance-node"
            icon={baseNavButtonIcon4}
            state={baseNavButtonState4}
            text="Analytics"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="design-component-instance-node"
            icon={baseNavButtonIcon5}
            state={baseNavButtonState}
            text={baseNavButtonText}
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="design-component-instance-node"
            icon={baseNavButtonIcon6}
            state={baseNavButtonState5}
            text="Tools"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="design-component-instance-node"
            icon={baseNavButtonIcon7}
            state={baseNavButtonState6}
            text="Discounts"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="design-component-instance-node"
            icon={baseNavButtonIcon8}
            state={baseNavButtonState7}
            text="Audience"
            type="parent"
          />
          {visible && (
            <BaseNavButton
              badge={false}
              beta={false}
              className="design-component-instance-node"
              icon={baseNavButtonIcon11}
              state={baseNavButtonState8}
              text="Affiliates"
              type="parent"
            />
          )}

          {visible1 && (
            <BaseNavButton
              badge={false}
              beta={false}
              className="design-component-instance-node"
              icon={baseNavButtonIcon12}
              state={baseNavButtonState9}
              text="Vendors"
              type="parent"
            />
          )}

          <BaseNavButton
            badge={false}
            beta={false}
            className="design-component-instance-node"
            icon={baseNavButtonIcon9}
            state="inactive"
            text="Appearance"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="design-component-instance-node"
            icon={baseNavButtonIcon10}
            state="inactive"
            text="Plugins"
            type="parent"
          />
        </div>
      </div>
      <BaseNavBottom
        className="design-component-instance-node"
        outlineWalletWallet={baseNavBottomOutlineWalletWallet}
        property1="wallet-credits"
      />
    </div>
  );
};

BaseNavigationBar.propTypes = {
  baseNavButtonState: PropTypes.string,
  baseNavButtonText: PropTypes.string,
  visible: PropTypes.bool,
  visible1: PropTypes.bool,
  baseNavBottomOutlineWalletWallet: PropTypes.string,
  baseNavButtonState1: PropTypes.string,
  baseNavButtonState2: PropTypes.string,
  baseNavButtonState3: PropTypes.string,
  baseNavButtonState4: PropTypes.string,
  baseNavButtonState5: PropTypes.string,
  baseNavButtonState6: PropTypes.string,
  baseNavButtonState7: PropTypes.string,
  baseNavButtonState8: PropTypes.string,
  baseNavButtonState9: PropTypes.string,
};
