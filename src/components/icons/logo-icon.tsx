import type { ImgHTMLAttributes } from "react";
import aliLogo from "@/components/icons/alilogo.png";

export function LogoIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
	return (
		<img
			src={aliLogo}
			alt="Alisandro Domingo logo"
			width={56}
			height={56}
			{...props}
		/>
	);
}
