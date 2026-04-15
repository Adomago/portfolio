import {
	FigmaLogoIcon,
	GitHubLogoIcon,
	PersonIcon,
} from "@radix-ui/react-icons";
import type { ReactNode } from "react";
import { CleanCodeCardContent } from "@/sections/services/_components/clean-code-card-content";
import {
	ConvertingCardContent,
	type ConvertingCardIconSet,
} from "@/sections/services/_components/converting-card-content";
import { ServicesCardContent } from "@/sections/services/_components/services-card-content";
import type { SVGProps } from "react";

const VSCodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...props}>
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 19.88V4.12a1.5 1.5 0 0 0-.85-1.533zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
  </svg>
);

const JupyterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...props}>
    <path d="M7.157 22.201A1.784 1.784 0 0 1 5.378 24a1.784 1.784 0 0 1-1.78-1.799 1.784 1.784 0 0 1 1.78-1.799 1.784 1.784 0 0 1 1.779 1.799zM20.067 1.835a1.202 1.202 0 0 1-1.201 1.202 1.202 1.202 0 0 1-1.202-1.202A1.202 1.202 0 0 1 18.866.633a1.202 1.202 0 0 1 1.201 1.202zm-2.921 1.781a1.837 1.837 0 0 1-2.258 1.253 1.837 1.837 0 0 1-1.254-2.258 1.837 1.837 0 0 1 2.258-1.254 1.837 1.837 0 0 1 1.254 2.259zM12 3.732c-2.933 0-5.616.936-7.801 2.52l.5.866A9.432 9.432 0 0 1 12 5.195a9.432 9.432 0 0 1 7.301 1.923l.5-.866A12.033 12.033 0 0 0 12 3.732zm0 16.536a9.432 9.432 0 0 1-7.301-1.923l-.5.866A12.033 12.033 0 0 0 12 21.268c2.933 0 5.616-.936 7.801-2.52l-.5-.866A9.432 9.432 0 0 1 12 20.268z"/>
  </svg>
);

const FirebaseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...props}>
    <path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z"/>
  </svg>
);

const SupabaseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...props}>
    <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.111 12.888.637 14.097 1.686 14.097h9.3c.5 0 .906.405.906.905l.007 8.963c.015.986 1.26 1.409 1.874.636l9.262-11.649c.653-.838.127-2.048-.922-2.048h-9.3a.906.906 0 0 1-.906-.906L11.9 1.036z"/>
  </svg>
);


export interface ServiceItem {
	name: string;
	description: string;
}

export interface ServiceFeature {
	name: string;
	description: string;
	href: string;
	className: string;
	background: ReactNode;
}

const convertingCardIcons: ConvertingCardIconSet = {
	destination: {
		id: "client",
		Icon: PersonIcon,
	},
	hub: {
		id: "handoff",
		Icon: FigmaLogoIcon,
	},
	sources: [
		{
			id: "brief",
			Icon: VSCodeIcon,
		},
		{
			id: "spec",
			Icon: JupyterIcon,
		},
		{
			id: "assets",
			Icon: FirebaseIcon,
		},
		    {
		id: "supabase",
		Icon: SupabaseIcon,
		},
		{
			id: "repo",
			Icon: GitHubLogoIcon,
		}
	],
};

export const serviceItems: ServiceItem[] = [
	{
		name: "Service Package 01",
		description:
			"Swap in the flagship engagement you offer most often — outline the scope, duration, and business outcome.",
	},
	{
		name: "Service Package 02",
		description:
			"Use this slot for a second offer or retainer tier to highlight how you support different client needs.",
	},
	{
		name: "Dedicated Sprint",
		description:
			"Describe a focused two-to-four week collaboration you run to tackle a single feature, redesign, or prototype.",
	},
	{
		name: "Advisory Session",
		description:
			"Note how teams can book strategy calls, technical audits, or office hours when they need a quick unblock.",
	},
	{
		name: "Launch Support",
		description:
			"Explain the handoff, QA, and deployment support you bring during product launches or campaign pushes.",
	},
	{
		name: "Optimization Pass",
		description:
			"Reserve this line for performance, accessibility, or UX audits that keep shipped work feeling polished.",
	},
	{
		name: "Systems Audit",
		description:
			"Call out any platform review, stack migration, or modernization work that keeps teams prepared for scale.",
	},
];

export const bestPractices: ServiceItem[] = [
	{
		name: "Principle 01 — Lead With Outcomes",
		description:
			"A quick reminder to mention the measurable change you bring, not just the toolset you use to get there.",
	},
	{
		name: "Principle 02 — Keep Teams In The Loop",
		description:
			"Suggest how you handle weekly updates, async notes, or Loom recaps so clients know exactly what's moving.",
	},
	{
		name: "Principle 03 — Design For Handoff",
		description:
			"Explain how you package deliverables, documentation, or recordings so work is easy to extend later on.",
	},
	{
		name: "Principle 04 — Prototype Early",
		description:
			"Encourage readers to reference the prototypes, sandboxes, or experiments you typically run up front.",
	},
	{
		name: "Principle 05 — Sweat The Details",
		description:
			"Use this space to note your obsession with accessibility, polish, or animation that sets you apart.",
	},
	{
		name: "Principle 06 — Build For Change",
		description:
			"Remind teams that you keep architecture flexible, future-friendly, and ready for whatever V2 demands.",
	},
	{
		name: "Principle 07 — Document The Journey",
		description:
			"Point to how you capture learnings, write internal notes, or ship looms that demystify key decisions.",
	},
	{
		name: "Principle 08 — Test Relentlessly",
		description:
			"Reserve this bullet for your preferred QA cadence, tooling, or review rituals before anything ships.",
	},
	{
		name: "Principle 09 — Collaborate Openly",
		description:
			"Call out the cadence of workshops, office hours, or async standups you host with product partners.",
	},
	{
		name: "Principle 10 — Iterate After Launch",
		description:
			"Highlight how you stay close to analytics, user feedback, or retention data to plan the next release.",
	},
];

export const serviceFeatures: ServiceFeature[] = [
	{
		name: "Service Overview",
		description:
			"Swap in a short blurb that explains what types of projects you take on and how clients can engage.",
		href: "#",
		className: "col-span-1",
		background: <ServicesCardContent items={serviceItems} />,
	},

	{
		name: "From Design To Build",
		description:
			"Use this tile to describe how you translate Figma boards, decks, or briefs into production-ready work.",
		href: "#",
		className: "col-span-1",
		background: <ConvertingCardContent icons={convertingCardIcons} />,
	},

	{
		name: "Code Standards",
		description:
			"Outline the engineering values, review rituals, or guardrails that keep your work maintainable.",
		href: "#",
		className: "col-span-1",
		background: <CleanCodeCardContent items={bestPractices} />,
	},
];
