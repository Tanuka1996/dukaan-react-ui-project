/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Pagination } from "../Pagination";
import "./style.css";

export const PaginationWrapper = ({ dots = true, previous = true, next = true, className }) => {
  return (
    <div className={`pagination-wrapper ${className}`}>
      {previous && <Pagination className="pagination-components" state="previous" />}

      <div className="frame-9">
        <Pagination state="other-page" text="1" />
        {dots && <Pagination state="other-page" text="..." />}

        <Pagination divClassName="pagination-instance" state="current-page" text1="10" />
        <Pagination state="other-page" text="11" />
        <Pagination state="other-page" text="12" />
        <Pagination state="other-page" text="13" />
        <Pagination state="other-page" text="14" />
        <Pagination state="other-page" text="15" />
        <Pagination state="other-page" text="16" />
        <Pagination state="other-page" text="17" />
        <Pagination state="other-page" text="18" />
      </div>
      {next && <Pagination className="pagination-components" state="next" />}
    </div>
  );
};

PaginationWrapper.propTypes = {
  dots: PropTypes.bool,
  previous: PropTypes.bool,
  next: PropTypes.bool,
};
