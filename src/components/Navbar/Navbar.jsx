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
import { NavbarIcon142 } from "../../icons/NavbarIcon142";
import { NavbarIcon157 } from "../../icons/NavbarIcon157";
import { NavbarIcon170 } from "../../icons/NavbarIcon170";
import { NavbarIcon172 } from "../../icons/NavbarIcon172";
import { NavbarIcon179 } from "../../icons/NavbarIcon179";
import { NavbarIcon181 } from "../../icons/NavbarIcon181";
import { NavbarIcon185 } from "../../icons/NavbarIcon185";
import { NavbarIcon186 } from "../../icons/NavbarIcon186";
import { NavbarIcon193 } from "../../icons/NavbarIcon193";
import { NavbarIcon194 } from "../../icons/NavbarIcon194";
import { NavbarIcon196 } from "../../icons/NavbarIcon196";
import { NavbarIcon25 } from "../../icons/NavbarIcon25";
import { NavbarIcon38 } from "../../icons/NavbarIcon38";
import { NavbarIcon61 } from "../../icons/NavbarIcon61";
import { NavbarIcon65 } from "../../icons/NavbarIcon65";
import { NavbarIcon68 } from "../../icons/NavbarIcon68";
import { NavbarIcon90 } from "../../icons/NavbarIcon90";
import { BaseNavBottom } from "../BaseNavBottom";
import { BaseNavButton } from "../BaseNavButton";
import { BaseNavigationBar } from "../BaseNavigationBar";
import { NavbarIcon } from "../NavbarIcon";
import "./style.css";

export const Navbar = ({
  navbar,
  className,
  baseNavigationBarBaseNavButtonIcon = <NavbarIcon179 className="navbar-icon-2" color="white" />,
  baseNavigationBarBaseNavBottomOutlineWalletWallet = "/img/wallet-11.svg",
  override = <NavbarIcon185 className="navbar-icon-2" />,
  baseNavigationBarBaseNavButtonText = "Payouts",
  baseNavigationBarBaseNavButtonIcon1 = <NavbarIcon196 className="navbar-icon-2" />,
  baseNavigationBarBaseNavButtonIcon2 = <NameMarketingStateFalse className="navbar-icon-2" color="white" />,
  baseNavigationBarBaseNavButtonIcon3 = <NavbarIcon61 className="navbar-icon-2" />,
  baseNavigationBarBaseNavButtonIcon4 = <NavbarIcon172 className="navbar-icon-2" />,
  baseNavigationBarBaseNavButtonIcon5 = <NavbarIcon186 className="navbar-icon-2" color="white" />,
  baseNavigationBarBaseNavButtonIcon6 = <NavbarIcon181 className="navbar-icon-2" color="white" />,
  baseNavigationBarBaseNavButtonIcon7 = <NavbarIcon90 className="navbar-icon-2" color="white" />,
  baseNavigationBarBaseNavButtonIcon8 = <NavbarIcon68 className="navbar-icon-2" />,
  baseNavigationBarBaseNavButtonIcon9 = <NavbarIcon130 className="navbar-icon-2" />,
  baseNavigationBarDivClassName,
  baseNavigationBarBaseNavButtonIcon10 = <NavbarIcon65 className="navbar-icon-2" color="white" />,
}) => {
  return (
    <div className={`navbar ${className}`}>
      {(navbar === "account" ||
        navbar === "affiliates" ||
        navbar === "analytics" ||
        navbar === "audience" ||
        navbar === "delivery" ||
        navbar === "discounts" ||
        navbar === "home" ||
        navbar === "marketing" ||
        navbar === "payouts" ||
        navbar === "tools" ||
        navbar === "vendors") && (
        <BaseNavigationBar
          baseNavBottomOutlineWalletWallet={baseNavigationBarBaseNavBottomOutlineWalletWallet}
          baseNavButtonIcon={baseNavigationBarBaseNavButtonIcon4}
          baseNavButtonIcon1={override}
          baseNavButtonIcon10={baseNavigationBarBaseNavButtonIcon1}
          baseNavButtonIcon11={
            navbar === "affiliates" ? (
              <NavbarIcon142 className="navbar-icon-2" />
            ) : navbar === "vendors" ? (
              <NavbarIcon193 className="navbar-icon-2" />
            ) : undefined
          }
          baseNavButtonIcon12={
            navbar === "affiliates" ? (
              <NavbarIcon194 className="navbar-icon-2" />
            ) : navbar === "vendors" ? (
              <NavbarIcon157 className="navbar-icon-2" />
            ) : undefined
          }
          baseNavButtonIcon2={baseNavigationBarBaseNavButtonIcon5}
          baseNavButtonIcon3={baseNavigationBarBaseNavButtonIcon2}
          baseNavButtonIcon4={baseNavigationBarBaseNavButtonIcon10}
          baseNavButtonIcon5={baseNavigationBarBaseNavButtonIcon7}
          baseNavButtonIcon6={baseNavigationBarBaseNavButtonIcon}
          baseNavButtonIcon7={baseNavigationBarBaseNavButtonIcon8}
          baseNavButtonIcon8={baseNavigationBarBaseNavButtonIcon6}
          baseNavButtonIcon9={baseNavigationBarBaseNavButtonIcon9}
          baseNavButtonState={navbar === "payouts" ? "active" : "inactive"}
          baseNavButtonState1={
            navbar === "home"
              ? "active"
              : navbar === "affiliates" ||
                navbar === "analytics" ||
                navbar === "audience" ||
                navbar === "delivery" ||
                navbar === "discounts" ||
                navbar === "marketing" ||
                navbar === "payouts" ||
                navbar === "tools" ||
                navbar === "vendors"
              ? "inactive"
              : undefined
          }
          baseNavButtonState2={
            navbar === "delivery"
              ? "active"
              : navbar === "affiliates" ||
                navbar === "analytics" ||
                navbar === "audience" ||
                navbar === "discounts" ||
                navbar === "marketing" ||
                navbar === "payouts" ||
                navbar === "tools" ||
                navbar === "vendors"
              ? "inactive"
              : undefined
          }
          baseNavButtonState3={
            navbar === "marketing"
              ? "active"
              : navbar === "affiliates" ||
                navbar === "analytics" ||
                navbar === "audience" ||
                navbar === "discounts" ||
                navbar === "payouts" ||
                navbar === "tools" ||
                navbar === "vendors"
              ? "inactive"
              : undefined
          }
          baseNavButtonState4={
            navbar === "analytics"
              ? "active"
              : ["affiliates", "audience", "discounts", "payouts", "tools", "vendors"].includes(navbar)
              ? "inactive"
              : undefined
          }
          baseNavButtonState5={
            navbar === "tools"
              ? "active"
              : ["affiliates", "audience", "discounts", "vendors"].includes(navbar)
              ? "inactive"
              : undefined
          }
          baseNavButtonState6={
            navbar === "discounts"
              ? "active"
              : ["affiliates", "audience", "vendors"].includes(navbar)
              ? "inactive"
              : undefined
          }
          baseNavButtonState7={
            navbar === "audience" ? "active" : ["affiliates", "vendors"].includes(navbar) ? "inactive" : undefined
          }
          baseNavButtonState8={navbar === "affiliates" ? "active" : navbar === "vendors" ? "inactive" : undefined}
          baseNavButtonState9={navbar === "vendors" ? "active" : undefined}
          baseNavButtonText={baseNavigationBarBaseNavButtonText}
          className="navbar-account"
          divClassName={baseNavigationBarDivClassName}
          override={baseNavigationBarBaseNavButtonIcon3}
          visible={
            navbar === "account" ||
            navbar === "analytics" ||
            navbar === "audience" ||
            navbar === "delivery" ||
            navbar === "discounts" ||
            navbar === "home" ||
            navbar === "marketing" ||
            navbar === "payouts" ||
            navbar === "tools"
              ? false
              : undefined
          }
          visible1={
            navbar === "account" ||
            navbar === "analytics" ||
            navbar === "audience" ||
            navbar === "delivery" ||
            navbar === "discounts" ||
            navbar === "home" ||
            navbar === "marketing" ||
            navbar === "payouts" ||
            navbar === "tools"
              ? false
              : undefined
          }
        />
      )}

      {["apperance", "orders", "plugins", "products"].includes(navbar) && (
        <div className="navbar-orders">
          <div className="nav-top-2">
            <div className="company-icon-image-2">
              <div className="rectangle-2" />
              <div className="frame-13">
                <div className="text-wrapper-14">Nishyan</div>
                <div className="text-wrapper-15">Visit store</div>
              </div>
              <img className="img" alt="Image" src="/img/image-15.png" />
              <BoldChevronDown16 className="navbar-icon-2" color="white" />
            </div>
            <div className="pages-2">
              <BaseNavButton
                badge={false}
                beta={false}
                className="instance-node-7"
                icon={<NavbarIcon172 className="navbar-icon-2" />}
                state="inactive"
                text="Home"
                type="parent"
              />
              {navbar === "products" && (
                <div className="base-child">
                  <BaseNavButton
                    badge
                    beta={false}
                    override={<NavbarIcon61 className="navbar-icon-2" />}
                    state="inactive"
                    text="Orders"
                    type="parent"
                  />
                </div>
              )}

              {["orders", "products"].includes(navbar) && (
                <div className="base-child-2">
                  <BaseNavButton
                    badge={navbar === "products" ? false : true}
                    beta={false}
                    className="instance-node-7"
                    icon={navbar === "products" ? <NavbarIcon38 className="navbar-icon-2" /> : undefined}
                    override={navbar === "orders" ? <NavbarIcon25 className="navbar-icon-2" /> : undefined}
                    state="active"
                    text={navbar === "products" ? "Products" : "Orders"}
                    type="parent"
                  />
                  <div className="frame-14">
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="instance-node-7"
                      state="active"
                      text1={navbar === "products" ? "All products (133)" : "All orders (303)"}
                      type="child"
                    />
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="instance-node-7"
                      state="inactive"
                      text1={navbar === "products" ? "Categories (13)" : "Returns (2)"}
                      type="child"
                    />
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="instance-node-7"
                      state="inactive"
                      text1={navbar === "products" ? "Inventory" : "Abandoned (103)"}
                      type="child"
                    />
                  </div>
                </div>
              )}

              <BaseNavButton
                badge={false}
                beta={false}
                className="instance-node-7"
                icon={
                  navbar === "orders" ? (
                    <NavbarIcon185 className="navbar-icon-2" />
                  ) : navbar === "products" ? (
                    <NavbarIcon186 className="navbar-icon-2" color="white" />
                  ) : (
                    <NavbarIcon61 className="navbar-icon-2" />
                  )
                }
                state="inactive"
                text={navbar === "orders" ? "Products" : navbar === "products" ? "Delivery" : "Orders"}
                type="parent"
              />
              <BaseNavButton
                badge={false}
                beta={false}
                className="instance-node-7"
                icon={
                  navbar === "orders" ? (
                    <NavbarIcon186 className="navbar-icon-2" color="white" />
                  ) : navbar === "products" ? (
                    <NameMarketingStateFalse className="navbar-icon-2" color="white" />
                  ) : (
                    <NavbarIcon185 className="navbar-icon-2" />
                  )
                }
                state="inactive"
                text={navbar === "orders" ? "Delivery" : navbar === "products" ? "Marketing" : "Products"}
                type="parent"
              />
              <BaseNavButton
                badge={false}
                beta={false}
                className="instance-node-7"
                icon={
                  navbar === "orders" ? (
                    <NameMarketingStateFalse className="navbar-icon-2" color="white" />
                  ) : navbar === "products" ? (
                    <NavbarIcon65 className="navbar-icon-2" color="white" />
                  ) : (
                    <NavbarIcon186 className="navbar-icon-2" color="white" />
                  )
                }
                state="inactive"
                text={navbar === "orders" ? "Marketing" : navbar === "products" ? "Analytics" : "Delivery"}
                type="parent"
              />
              <BaseNavButton
                badge={false}
                beta={false}
                className="instance-node-7"
                icon={
                  navbar === "products" ? (
                    <NamePaymentsStateFalse className="navbar-icon-2" color="white" />
                  ) : navbar === "orders" ? (
                    <NavbarIcon65 className="navbar-icon-2" color="white" />
                  ) : (
                    <NameMarketingStateFalse className="navbar-icon-2" color="white" />
                  )
                }
                state="inactive"
                text={navbar === "products" ? "Payouts" : navbar === "orders" ? "Analytics" : "Marketing"}
                type="parent"
              />
              <BaseNavButton
                badge={false}
                beta={false}
                className="instance-node-7"
                icon={
                  navbar === "products" ? (
                    <NavbarIcon179 className="navbar-icon-2" color="white" />
                  ) : navbar === "orders" ? (
                    <NamePaymentsStateFalse className="navbar-icon-2" color="white" />
                  ) : (
                    <NavbarIcon65 className="navbar-icon-2" color="white" />
                  )
                }
                state="inactive"
                text={navbar === "products" ? "Tools" : navbar === "orders" ? "Payouts" : "Analytics"}
                type="parent"
              />
              <BaseNavButton
                badge={false}
                beta={false}
                className="instance-node-7"
                icon={
                  navbar === "orders" ? (
                    <NavbarIcon179 className="navbar-icon-2" color="white" />
                  ) : navbar === "products" ? (
                    <NavbarIcon68 className="navbar-icon-2" />
                  ) : (
                    <NamePaymentsStateFalse className="navbar-icon-2" color="white" />
                  )
                }
                state="inactive"
                text={navbar === "orders" ? "Tools" : navbar === "products" ? "Discounts" : "Payouts"}
                type="parent"
              />
              <BaseNavButton
                badge={false}
                beta={false}
                className="instance-node-7"
                icon={
                  navbar === "orders" ? (
                    <NavbarIcon68 className="navbar-icon-2" />
                  ) : navbar === "products" ? (
                    <NavbarIcon181 className="navbar-icon-2" color="white" />
                  ) : (
                    <NavbarIcon179 className="navbar-icon-2" color="white" />
                  )
                }
                state="inactive"
                text={navbar === "orders" ? "Discounts" : navbar === "products" ? "Audience" : "Tools"}
                type="parent"
              />
              <BaseNavButton
                badge={false}
                beta={false}
                className="instance-node-7"
                icon={
                  navbar === "orders" ? (
                    <NavbarIcon181 className="navbar-icon-2" color="white" />
                  ) : navbar === "products" ? (
                    <NavbarIcon130 className="navbar-icon-2" />
                  ) : (
                    <NavbarIcon68 className="navbar-icon-2" />
                  )
                }
                state="inactive"
                text={navbar === "orders" ? "Audience" : navbar === "products" ? "Appearance" : "Discounts"}
                type="parent"
              />
              <BaseNavButton
                badge={false}
                beta={false}
                className="instance-node-7"
                icon={
                  navbar === "products" ? (
                    <NavbarIcon196 className="navbar-icon-2" />
                  ) : navbar === "orders" ? (
                    <NavbarIcon130 className="navbar-icon-2" />
                  ) : (
                    <NavbarIcon181 className="navbar-icon-2" color="white" />
                  )
                }
                state="inactive"
                text={navbar === "products" ? "Plugins" : navbar === "orders" ? "Appearance" : "Audience"}
                type="parent"
              />
              {navbar === "apperance" && (
                <div className="base-child-2">
                  <BaseNavButton
                    badge={false}
                    beta={false}
                    className="instance-node-7"
                    icon={<NavbarIcon170 className="navbar-icon-2" />}
                    state="active"
                    text="Appearance"
                    type="parent"
                  />
                  <div className="frame-14">
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="instance-node-7"
                      state="active"
                      text1="Themes"
                      type="child"
                    />
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="instance-node-7"
                      state="inactive"
                      text1="Pages"
                      type="child"
                    />
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="instance-node-7"
                      state="inactive"
                      text1="Menus"
                      type="child"
                    />
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="instance-node-7"
                      state="inactive"
                      text1="Blog"
                      type="child"
                    />
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="instance-node-7"
                      state="inactive"
                      text1="Media"
                      type="child"
                    />
                  </div>
                </div>
              )}

              {["apperance", "orders", "plugins"].includes(navbar) && (
                <BaseNavButton
                  badge={false}
                  beta={false}
                  className="instance-node-7"
                  icon={
                    navbar === "plugins" ? (
                      <NavbarIcon130 className="navbar-icon-2" />
                    ) : (
                      <NavbarIcon196 className="navbar-icon-2" />
                    )
                  }
                  state="inactive"
                  text={navbar === "plugins" ? "Appearance" : "Plugins"}
                  type="parent"
                />
              )}

              {navbar === "plugins" && (
                <div className="base-child-2">
                  <div className="base-nav-button-2">
                    <NavbarIcon
                      name="plugin"
                      nameAccountStateClassName="navbar-icon-instance"
                      state
                      vector="/img/vector.svg"
                      vectorClassName="navbar-icon-3"
                    />
                    <div className="home-3">Plugins</div>
                  </div>
                  <div className="frame-14">
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="instance-node-7"
                      state="active"
                      text1="Installed (11)"
                      type="child"
                    />
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="instance-node-7"
                      state="inactive"
                      text1="All plugins (99)"
                      type="child"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <BaseNavBottom
            className="instance-node-7"
            outlineWalletWallet={
              ["apperance", "plugins"].includes(navbar) ? "/img/wallet-14.svg" : "/img/wallet-11.svg"
            }
            property1="wallet-credits"
          />
        </div>
      )}
    </div>
  );
};

Navbar.propTypes = {
  navbar: PropTypes.oneOf([
    "tools",
    "discounts",
    "affiliates",
    "vendors",
    "apperance",
    "payouts",
    "plugins",
    "marketing",
    "products",
    "home",
    "audience",
    "orders",
    "account",
    "delivery",
    "analytics",
  ]),
  baseNavigationBarBaseNavBottomOutlineWalletWallet: PropTypes.string,
  baseNavigationBarBaseNavButtonText: PropTypes.string,
};
