import React, { SVGProps } from "react";

export default function IconArrowLeft({ fill, ...rest }: SVGProps<SVGSVGElement> & { fill: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      { ...rest }
    >
      <mask
        id="mask0_1408_331"
        className="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1408_331)">
        <path
          d="M10 18L4 12L10 6L11.4 7.45L7.85 11H20V13H7.85L11.4 16.55L10 18Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

