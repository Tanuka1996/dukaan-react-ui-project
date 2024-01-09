/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const OutlineWallet = ({ wallet = "/img/wallet-17.svg" }) => {
  return (
    <div className="outline-wallet">
      <img className="wallet" alt="Wallet" src={wallet} />
    </div>
  );
};

OutlineWallet.propTypes = {
  wallet: PropTypes.string,
};
