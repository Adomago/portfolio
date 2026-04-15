import type { SVGProps } from "react";

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 56 56"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			{...props}
		>
			<rect
				x="1"
				y="1"
				width="54"
				height="54"
				rx="12"
				stroke="currentColor"
				strokeWidth="2"
				fill="none"
			/>
			<text
				x="28"
				y="35"
				textAnchor="middle"
				fontSize="20"
				fontWeight="700"
				fill="currentColor"
				fontFamily="system-ui, sans-serif"
			>
				AD
			</text>
		</svg>
	);
}
