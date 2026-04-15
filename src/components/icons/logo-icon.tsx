import type { SVGProps } from "react";

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="10 0 240 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      {...props}
    >
      {/* A */}
      <path
        d="M20 100 L60 20 L100 100 Z"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* L */}
      <path
        d="M130 20 V100 H190"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* I */}
      <line
        x1="220"
        y1="20"
        x2="220"
        y2="100"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}