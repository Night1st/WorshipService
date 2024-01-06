import React, { SVGProps } from 'react';

export default function IconChevronRight({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' { ...rest }>
      <path
        d='M7.05806 3.51643C6.81398 3.76051 6.81398 4.15624 7.05806 4.40031L12.6577 10L7.05806 15.5998C6.81398 15.8439 6.81398 16.2395 7.05806 16.4836C7.30213 16.7277 7.69786 16.7277 7.94194 16.4836L13.9836 10.442C14.2277 10.1979 14.2277 9.80221 13.9836 9.55812L7.94194 3.51643C7.69786 3.27236 7.30213 3.27236 7.05806 3.51643Z'
        fill='#262417'
      />
    </svg>
  );
}
