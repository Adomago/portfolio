const IconLinkedIn = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		fill="currentColor"
		viewBox="0 0 24 24"
		{...props}
	>
		<title>Linkedin Logo</title>
		<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
	</svg>
);

const IconGitHub = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		fill="currentColor"
		viewBox="0 0 24 24"
		{...props}
	>
		<title>GitHub Logo</title>
		<path d="M12 .5C5.649.5.5 5.649.5 12c0 5.084 3.292 9.4 7.861 10.922.575.106.785-.25.785-.556 0-.273-.01-1-.016-1.962-3.197.695-3.872-1.54-3.872-1.54-.523-1.329-1.277-1.683-1.277-1.683-1.044-.714.079-.699.079-.699 1.155.082 1.763 1.186 1.763 1.186 1.026 1.759 2.693 1.251 3.35.957.103-.743.402-1.251.731-1.539-2.552-.29-5.236-1.276-5.236-5.682 0-1.256.449-2.284 1.185-3.089-.118-.291-.513-1.461.112-3.046 0 0 .966-.309 3.167 1.18a10.99 10.99 0 0 1 2.884-.388c.979.004 1.966.132 2.885.388 2.199-1.489 3.164-1.18 3.164-1.18.627 1.585.233 2.755.114 3.046.738.805 1.184 1.833 1.184 3.089 0 4.417-2.688 5.388-5.248 5.673.413.355.781 1.057.781 2.131 0 1.539-.014 2.778-.014 3.156 0 .309.207.668.79.555A11.503 11.503 0 0 0 23.5 12C23.5 5.649 18.351.5 12 .5z" />
	</svg>
);

export type FooterLink = {
	label: string;
	href: string;
};

export type FooterSocialLink = {
	label: string;
	href: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const footerLinks: FooterLink[] = [
	{ label: "About Me", href: "#about" },
	{ label: "Skills", href: "#services" },
	{ label: "Projects", href: "#works" },
	{ label: "Certificates", href: "#certificates" },
	{ label: "Contact", href: "#contact" },
];

export const footerSocialLinks: FooterSocialLink[] = [
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/alisandro-domingo-0b54a83b9",
		icon: IconLinkedIn,
	},
	{
		label: "GitHub",
		href: "https://github.com/Adomago",
		icon: IconGitHub,
	},
];
