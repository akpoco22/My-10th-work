
import React from 'react';

export const SparkleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9.5 2.5 12 8l2.5-5.5" />
    <path d="M3 10h18" />
    <path d="M9.5 21.5 12 16l2.5 5.5" />
    <path d="M2.5 14.5 8 12l-5.5-2.5" />
    <path d="M21.5 14.5 16 12l5.5-2.5" />
  </svg>
);
