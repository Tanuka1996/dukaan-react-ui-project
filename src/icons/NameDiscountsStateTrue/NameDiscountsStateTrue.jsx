/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const NameDiscountsStateTrue = ({ color = "#4D4D4D", className }) => {
  return (
    <svg
      className={`name-discounts-state-true ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_10420_20746)">
        <path
          className="path"
          d="M18.3988 10.2612C18.3401 10.1405 18.3097 10.008 18.3097 9.87375C18.3097 9.73951 18.3401 9.60702 18.3988 9.48625L19.0613 7.98623C19.1974 7.68803 19.2679 7.36411 19.2679 7.0363C19.2679 6.70849 19.1974 6.38449 19.0613 6.08629C18.9324 5.79541 18.7448 5.53423 18.5104 5.31915C18.2759 5.10407 17.9996 4.93971 17.6988 4.83629L16.1612 4.26126C16.0371 4.21159 15.9244 4.13722 15.8298 4.04268C15.7353 3.94813 15.6609 3.83539 15.6112 3.71126L15.0237 2.16127C14.9076 1.85878 14.731 1.58309 14.5049 1.35103C14.2788 1.11896 14.0077 0.935361 13.7084 0.811399C13.409 0.687437 13.0875 0.625698 12.7635 0.629972C12.4395 0.634246 12.1198 0.704456 11.8237 0.836271L10.3238 1.52376C10.0751 1.62386 9.79741 1.62386 9.54877 1.52376L8.04876 0.836271C7.75211 0.702425 7.43124 0.630631 7.10584 0.625318C6.78044 0.620005 6.45737 0.681282 6.15652 0.805372C5.85566 0.929462 5.58335 1.11374 5.35631 1.34691C5.12927 1.58007 4.95228 1.85721 4.83625 2.16127L4.26126 3.71126C4.21159 3.83539 4.13722 3.94813 4.04268 4.04268C3.94813 4.13722 3.83539 4.21159 3.71126 4.26126L2.16127 4.83629C1.85721 4.95232 1.58007 5.12927 1.34691 5.35631C1.11374 5.58335 0.929462 5.85569 0.805372 6.15655C0.681282 6.45741 0.620005 6.7804 0.625318 7.1058C0.630631 7.4312 0.702425 7.75215 0.836271 8.0488L1.52376 9.54873C1.62386 9.79737 1.62386 10.0751 1.52376 10.3237L0.836271 11.8237C0.703537 12.1207 0.634931 12.4423 0.634931 12.7675C0.634931 13.0927 0.703537 13.4143 0.836271 13.7113C0.961188 14.0025 1.14589 14.2644 1.37845 14.4797C1.61102 14.695 1.88623 14.8591 2.18625 14.9613L3.73624 15.5488C3.86038 15.5985 3.97316 15.6728 4.0677 15.7673C4.16224 15.8618 4.23658 15.9747 4.28625 16.0988L4.86127 17.6363C5.03264 18.0888 5.33682 18.479 5.73388 18.7556C6.13095 19.0322 6.60237 19.1823 7.08627 19.1863C7.42695 19.1878 7.76387 19.1154 8.07374 18.9738L9.57376 18.2863C9.69555 18.2308 9.82745 18.2011 9.96126 18.1988C10.0964 18.2022 10.2289 18.2363 10.3488 18.2987L11.8488 18.9613C12.1448 19.0972 12.4668 19.1675 12.7925 19.1675C13.1183 19.1675 13.4402 19.0972 13.7362 18.9613C14.0387 18.8395 14.312 18.6552 14.5382 18.4203C14.7644 18.1855 14.9384 17.9055 15.0488 17.5987L15.6363 16.0613C15.6859 15.9371 15.7603 15.8244 15.8548 15.7298C15.9494 15.6353 16.0621 15.5609 16.1863 15.5113L17.7237 14.9238C18.0246 14.8204 18.3009 14.6559 18.5354 14.4409C18.7698 14.2258 18.9573 13.9647 19.0862 13.6738C19.2221 13.3777 19.2925 13.0558 19.2925 12.73C19.2925 12.4043 19.2221 12.0824 19.0862 11.7863L18.3988 10.2612ZM6.26127 7.52374C6.26127 7.15907 6.40612 6.80939 6.66398 6.55153C6.92185 6.29366 7.2716 6.14877 7.63627 6.14877C8.00095 6.14877 8.35066 6.29366 8.60853 6.55153C8.86639 6.80939 9.01124 7.15907 9.01124 7.52374C9.01124 7.88841 8.86639 8.23817 8.60853 8.49603C8.35066 8.75389 8.00095 8.89879 7.63627 8.89879C7.2716 8.89879 6.92185 8.75389 6.66398 8.49603C6.40612 8.23817 6.26127 7.88841 6.26127 7.52374ZM8.21126 13.4238C8.1461 13.5149 8.05963 13.5887 7.95942 13.6389C7.8592 13.689 7.74829 13.7138 7.63627 13.7113C7.48393 13.7097 7.33565 13.6617 7.21124 13.5738C7.13546 13.5182 7.07143 13.4481 7.02283 13.3676C6.97424 13.2872 6.94206 13.1979 6.92811 13.1049C6.91417 13.012 6.91877 12.9173 6.94162 12.8261C6.96447 12.7349 7.00511 12.6492 7.06125 12.5738L11.7487 6.32379C11.8666 6.1754 12.0364 6.07711 12.2238 6.04875H12.3362C12.4909 6.04858 12.6409 6.10153 12.7612 6.19874C12.8375 6.2542 12.9017 6.32446 12.9501 6.40535C12.9986 6.48623 13.0301 6.57609 13.043 6.66948C13.0558 6.76286 13.0497 6.85792 13.0249 6.94887C13.0001 7.03982 12.9572 7.12476 12.8988 7.19873L8.21126 13.4238ZM12.3238 13.5863C12.0518 13.5863 11.786 13.5056 11.5598 13.3545C11.3337 13.2034 11.1575 12.9887 11.0534 12.7374C10.9494 12.4862 10.9221 12.2097 10.9752 11.943C11.0282 11.6763 11.1592 11.4313 11.3515 11.239C11.5438 11.0467 11.7888 10.9157 12.0555 10.8627C12.3222 10.8096 12.5987 10.8369 12.8499 10.9409C13.1012 11.045 13.316 11.2213 13.467 11.4474C13.6181 11.6735 13.6987 11.9393 13.6987 12.2112C13.6922 12.5716 13.5444 12.915 13.2873 13.1674C13.0301 13.4199 12.6842 13.5613 12.3238 13.5613V13.5863Z"
          fill={color}
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_10420_20746">
          <rect className="rect" fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};

NameDiscountsStateTrue.propTypes = {
  color: PropTypes.string,
};