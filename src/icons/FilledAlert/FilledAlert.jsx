/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const FilledAlert = ({ className }) => {
  return (
    <svg
      className={`filled-alert ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M11.4436 3.22921C10.8021 2.1181 9.19832 2.1181 8.55682 3.22921L1.70078 15.1042C1.05928 16.2153 1.86116 17.6042 3.14416 17.6042H16.8562C18.1392 17.6042 18.9411 16.2153 18.2996 15.1042L11.4436 3.22921ZM10.0002 7.39587C10.3454 7.39587 10.6252 7.63571 10.6252 7.93158V11.8602C10.6252 12.156 10.3454 12.3959 10.0002 12.3959C9.65501 12.3959 9.37519 12.156 9.37519 11.8602V7.93158C9.37519 7.63571 9.65501 7.39587 10.0002 7.39587ZM10.6252 13.6979C10.6252 13.4391 10.3454 13.2292 10.0002 13.2292C9.65501 13.2292 9.37519 13.4391 9.37519 13.6979V14.0104C9.37519 14.2693 9.65501 14.4792 10.0002 14.4792C10.3454 14.4792 10.6252 14.2693 10.6252 14.0104V13.6979Z"
        fill="#E50B20"
        fillRule="evenodd"
      />
    </svg>
  );
};
