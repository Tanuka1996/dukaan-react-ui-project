/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { OutlineWallet } from "../OutlineWallet";
import "./style.css";

export const BaseNavBottom = ({ property1, className, outlineWalletWallet = "/img/wallet-16.svg" }) => {
  return (
    <div className={`base-nav-bottom ${className}`}>
      <div className="frame-10">
        {property1 === "wallet-credits" && (
          <div className="outline-wallet-wrapper">
            <OutlineWallet wallet={outlineWalletWallet} />
          </div>
        )}

        <div className="frame-11">
          <div className="available-credits">
            {property1 === "wallet-credits" && <>Available credits</>}

            {property1 === "support" && <>Need any help?</>}
          </div>
          <div className={`element-2 ${property1}`}>
            {property1 === "wallet-credits" && <>222.10</>}

            {property1 === "support" && <>Watch tutorials</>}
          </div>
        </div>
      </div>
    </div>
  );
};

BaseNavBottom.propTypes = {
  property1: PropTypes.oneOf(["wallet-credits", "support"]),
  outlineWalletWallet: PropTypes.string,
};
