import React, { SVGProps } from 'react';
export default function IconMenu({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <path d='M3.75 7.5H20.25H3.75ZM3.75 12H20.25H3.75ZM3.75 16.5H20.25H3.75Z' fill='#FCFCFC' />
      <path
        d='M3.75 7.5H20.25M3.75 12H20.25M3.75 16.5H20.25'
        stroke='#FCFCFC'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
    </svg>
  );
}
