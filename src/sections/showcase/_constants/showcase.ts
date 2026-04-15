import coursera1 from './coursera1-1.png';
import coursera2 from './coursera2-1.png';
import coursera3 from './coursera3-1.png';
import coursera4 from './coursera4-1.png';
import coursera5 from './coursera5-1.png';

export type ShowcaseHighlight = {
	title: string;
	issuer: string;
	image: string;
	className?: string;
};

export const showcaseHighlights: ShowcaseHighlight[] = [
	{
		title: "Introduction to Computer Science and Programming",
		issuer: "University of London",
		image: coursera1,
	},
	{
		title: "Cyber-Physical Systems: Modeling and Simulation",
		issuer: "University of California, Santa Cruz",
		image: coursera2,
	},
	{
		title: "Data Warehouse Concepts, Design, and Data Integration",
		issuer: "University of Colorado System",
		image: coursera3,
	},
	{
		title: "Introduction to Data Science in Python",
		issuer: "University of Michigan",
		image: coursera4,
	},
	{
		title: "Engineering Practices for Building Quality Software",
		issuer: "University of Minnesota",
		image: coursera5,
	},
];
