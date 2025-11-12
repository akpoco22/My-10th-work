
import React from 'react';

export const GoldBarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="10" x="2" y="7" rx="2" ry="2" />
    <path d="m14 12-4-1" />
    <path d="m13 15-4-1" />
    <path d="m15 9-4-1" />
  </svg>
);
