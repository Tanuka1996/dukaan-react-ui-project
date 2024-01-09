/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { BoldSearch1 } from "../../icons/BoldSearch1";
import { IconsOutlinedDownArrow } from "../../icons/IconsOutlinedDownArrow";
import { IconsOutlinedInfo7 } from "../../icons/IconsOutlinedInfo7";
import { IconsOutlinedRightArrow1 } from "../../icons/IconsOutlinedRightArrow1";
import { HowToUse } from "../HowToUse";
import { Icons } from "../Icons";
import "./style.css";

export const DashboardHeader = ({
  backArrow,
  help,
  searchBox,
  descriptionText,
  button,
  screenWidth,
  beta,
  className,
  divClassName,
  text = "Dashboard",
  howToUseIcon = <IconsOutlinedInfo7 className="icons-outlined-info-7" />,
  howToUseText = "How to use",
  howToUseDivClassName,
  iconsSearch = "/img/icons-search-1.png",
  placeholderTextClassName,
}) => {
  return (
    <div
      className={`dashboard-header back-arrow-${backArrow} beta-${beta} help-${help} description-text-${descriptionText} ${screenWidth} button-${button} ${className}`}
    >
      {(searchBox || (backArrow && descriptionText) || (button && !descriptionText)) && (
        <>
          <div className="frame">
            {(backArrow || !help) && <div className="dashboard">{!backArrow && <>{text}</>}</div>}

            {!backArrow && help && (
              <div className="div">
                {!descriptionText && <div className={`dashboard-2 ${divClassName}`}>{text}</div>}

                {descriptionText && (
                  <>
                    <div className="dashboard-wrapper">
                      <div className="dashboard-2">{text}</div>
                    </div>
                    <HowToUse
                      className="instance-node-2"
                      icon={<IconsOutlinedInfo7 className="icons-outlined-info-7" />}
                      text="How to use"
                    />
                  </>
                )}
              </div>
            )}

            {!backArrow && help && !descriptionText && (
              <HowToUse
                className="instance-node-2"
                divClassName={howToUseDivClassName}
                icon={howToUseIcon}
                text={howToUseText}
              />
            )}

            {!backArrow && descriptionText && (
              <div className="frame-2">
                <div className="text-wrapper-2">Sample text</div>
                <IconsOutlinedRightArrow1 className="instance-node-3" color="#808080" />
              </div>
            )}
          </div>
          <div
            className={`search-box back-arrow-2-${backArrow} description-text-2-${descriptionText} help-0-${help} search-box-${searchBox}`}
          >
            {!backArrow && !help && (
              <>
                <BoldSearch1 className="icons-global-search" color="#808080" />
                <div className={`placeholder-text ${placeholderTextClassName}`}>Search features, tutorials, etc.</div>
              </>
            )}

            {!backArrow && help && (
              <>
                <img className="icons-global-search" alt="Icons search" src={iconsSearch} />
                <div className={`text-wrapper-3 ${placeholderTextClassName}`}>Search features, tutorials, etc.</div>
              </>
            )}

            {backArrow && !descriptionText && (
              <div className="dashboard-wrapper">
                <div className="dashboard-2">{text}</div>
              </div>
            )}

            {button && help && (
              <HowToUse
                className="instance-node-2"
                icon={<IconsOutlinedInfo7 className="icons-outlined-info-7" />}
                text="How to use"
              />
            )}

            {!searchBox && descriptionText && (
              <>
                <div className="frame-3">
                  <div className="dashboard-wrapper">
                    <div className="dashboard-2">{text}</div>
                  </div>
                  {help && (
                    <HowToUse
                      className="instance-node-2"
                      icon={<IconsOutlinedInfo7 className="icons-outlined-info-7" />}
                      text="How to use"
                    />
                  )}
                </div>
                <div className={`thane-testing-rankz ${placeholderTextClassName}`}>
                  {!button && !help && <>Thane | Testing@rankz.io</>}

                  {(button || help) && <div className="text-wrapper-4">Sample text</div>}

                  {help && <IconsOutlinedRightArrow1 className="instance-node-3" color="#146EB4" />}

                  {button && <IconsOutlinedDownArrow className="instance-node-3" />}
                </div>
              </>
            )}
          </div>
          <div className="frame-4">
            {!backArrow && <Icons className="instance-node-2" type="two" />}

            {backArrow && !descriptionText && (
              <>
                <button className="button">
                  <div className="text-wrapper-5">Button</div>
                </button>
                <button className="div-wrapper">
                  <div className="text-wrapper-6">Button</div>
                </button>
              </>
            )}

            {button && descriptionText && (
              <div className="frame-5">
                <button className="button-2">
                  <div className="text-wrapper-7">Button</div>
                </button>
                <button className="div-wrapper">
                  <div className="text-wrapper-6">Button</div>
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {!searchBox && (descriptionText || !button) && (!backArrow || !descriptionText) && (
        <>
          <div className="icons-global-back">
            {backArrow && <div className="group" />}

            {descriptionText && (
              <div className="frame-6">
                <div className="dashboard-wrapper">
                  <div className="dashboard-2">{text}</div>
                </div>
                <HowToUse
                  className="instance-node-2"
                  icon={<IconsOutlinedInfo7 className="icons-outlined-info-7" />}
                  text="How to use"
                />
              </div>
            )}

            {!backArrow && (
              <div className="frame-7">
                <div className="dashboard-3">
                  {!descriptionText && <>{text}</>}

                  {descriptionText && <>Sample text</>}
                </div>
                {descriptionText && <IconsOutlinedRightArrow1 className="instance-node-3" color="#808080" />}
              </div>
            )}

            {!backArrow && !descriptionText && (
              <HowToUse
                className="instance-node-2"
                icon={<IconsOutlinedInfo7 className="icons-outlined-info-7" />}
                text="How to use"
              />
            )}
          </div>
          <div className="frame-8">
            {!beta && !help && <div className="dashboard-2">{text}</div>}

            {(beta || (backArrow && help)) && (
              <div className="dashboard-wrapper">
                <div className="dashboard-2">{text}</div>
              </div>
            )}

            {backArrow && help && (
              <HowToUse
                className="instance-node-2"
                icon={<IconsOutlinedInfo7 className="icons-outlined-info-7" />}
                text="How to use"
              />
            )}

            {beta && (
              <div className="tags">
                <div className="text-wrapper-8">BETA</div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

DashboardHeader.propTypes = {
  backArrow: PropTypes.bool,
  help: PropTypes.bool,
  searchBox: PropTypes.bool,
  descriptionText: PropTypes.bool,
  button: PropTypes.bool,
  screenWidth: PropTypes.oneOf(["full", "large", "middle", "small"]),
  beta: PropTypes.bool,
  text: PropTypes.string,
  howToUseText: PropTypes.string,
  iconsSearch: PropTypes.string,
};
