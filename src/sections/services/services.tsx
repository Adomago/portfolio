import {
	GitHubLogoIcon,
	StarIcon,
} from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { CleanCodeCardContent } from "@/sections/services/_components/clean-code-card-content";
import {
	ConvertingCardContent,
	type ConvertingCardIconSet,
} from "@/sections/services/_components/converting-card-content";
import { ServiceCard } from "@/sections/services/_components/service-card";
import { ServicesCardContent } from "@/sections/services/_components/services-card-content";
import type { ServiceItem } from "@/sections/services/_constants/services";

// Custom SVG icons shaped like Radix icon components
const FigmaIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15" {...props}>
		<path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5Z" fill="#1ABCFE"/>
		<path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0Z" fill="#0ACF83"/>
		<path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19Z" fill="#FF7262"/>
		<path d="M0 9.5a9.5 9.5 0 0 0 9.5 9.5H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" fill="#F24E1E"/>
		<path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" fill="#FF637E"/>
	</svg>
);

const VSCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="15" height="15" {...props}>
		<path d="M74.9 7.3L51.1 31.1 32.6 15.4 7.5 26.2l-.1.1v47.6l.1.1 25.1 10.7 18.5-15.7 23.8 23.8 17.6-7.5V14.8L74.9 7.3zM82.5 64L65 49.9 82.5 36v28zM57.2 49.9L39.5 64V36l17.7 13.9zM7.5 68.9V31.1L28.2 50 7.5 68.9zm32-38.6l18.8 19.7L39.5 69.7V30.3z" fill="#007ACC"/>
	</svg>
);

const SupabaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 109 113" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15" {...props}>
		<path d="M63.7 110.3c-2.8 3.5-8.5 1.6-8.6-2.9L53.6 62H88c6 0 9.4 7 5.7 11.6L63.7 110.3z" fill="url(#sb-a)"/>
		<path d="M45.3 2.7c2.8-3.5 8.5-1.6 8.6 2.9L55.4 51H21c-6 0-9.4-7-5.7-11.6L45.3 2.7z" fill="#3ECF8E"/>
		<defs>
			<linearGradient id="sb-a" x1="53.9" y1="54" x2="94.2" y2="71.3" gradientUnits="userSpaceOnUse">
				<stop stopColor="#249361"/>
				<stop offset="1" stopColor="#3ECF8E"/>
			</linearGradient>
		</defs>
	</svg>
);

const VercelIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 116 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15" {...props}>
		<path d="M57.5 0L115 100H0L57.5 0z" fill="currentColor"/>
	</svg>
);

const LangChainIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15" {...props}>
		<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#1C7ED6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
);

export default function Services() {
	const programmingSkills: ServiceItem[] = [
		{
			name: "Python",
			description: "Core language for scripting, data workflows, and AI projects.",
		},
		{
			name: "JavaScript",
			description: "Frontend and full-stack web application development.",
		},
		{
			name: "C++",
			description: "Performance-focused programming and algorithmic problem-solving.",
		},
		{
			name: "Java",
			description: "Object-oriented programming and foundational software design.",
		},
	];

	const webSkills: ServiceItem[] = [
		{
			name: "React",
			description: "Component-based interfaces with modern reusable patterns.",
		},
		{
			name: "HTML",
			description: "Semantic and accessible page structure.",
		},
		{
			name: "CSS",
			description: "Responsive styling and polished UI presentation.",
		},
	];

	const machineLearningSkills: ServiceItem[] = [
		{
			name: "Computer Vision",
			description: "Image-based models and classification tasks.",
		},
		{
			name: "NLP",
			description: "Language-focused pipelines and model experimentation.",
		},
		{
			name: "Pandas & NumPy",
			description: "Data manipulation and numerical analysis for model workflows.",
		},
		{
			name: "Scikit-learn",
			description: "Classical ML modeling and evaluation.",
		},
		{
			name: "TensorFlow & PyTorch",
			description: "Deep learning model training and iteration.",
		},
	];

	const toolIcons: ConvertingCardIconSet = {
		destination: { id: "figma", Icon: FigmaIcon },
		hub: { id: "github", Icon: GitHubLogoIcon },
		sources: [
			{ id: "vscode", Icon: VSCodeIcon },
			{ id: "supabase", Icon: SupabaseIcon },
			{ id: "vercel", Icon: VercelIcon },
			{ id: "langchain", Icon: LangChainIcon },
		],
	};

	return (
		<Section
			id="services"
			title="Skills"
			description="A focused stack across programming, web development, and machine learning for building end-to-end software solutions."
			className="grid grid-cols-1 md:grid-cols-2 gap-4"
			badgeText="Technical stack"
			badgeIcon={<StarIcon aria-hidden="true" />}
		>
			<ServiceCard
				name="Programming"
				description="Python, JavaScript, C++, and Java for end-to-end software solutions."
				className="col-span-1"
				background={<ServicesCardContent items={programmingSkills} />}
			/>
			<ServiceCard
				name="Web Development"
				description="Modern frontend fundamentals centered on React, HTML, and CSS."
				className="col-span-1"
				background={<ServicesCardContent items={webSkills} maxVisible={2} />}
			/>
			<ServiceCard
				name="Machine Learning"
				description="From classical ML to deep learning across CV and NLP tasks."
				className="col-span-1"
				background={<CleanCodeCardContent items={machineLearningSkills} />}
			/>
			<ServiceCard
				name="Tools"
				description="Tooling stack built around Figma, GitHub, VS Code, Supabase, Vercel, and LangChain."
				className="col-span-1"
				background={<ConvertingCardContent icons={toolIcons} />}
			/>
		</Section>
	);
}