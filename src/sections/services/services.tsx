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
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.678 7.68" width="64" height="64"><path d="M2.56 7.68A1.28 1.28 0 0 0 3.84 6.4V5.12H2.56a1.28 1.28 0 0 0 0 2.56z" fill="#0acf83"/><path d="M1.28 3.84a1.28 1.28 0 0 1 1.28-1.28h1.28v2.56H2.56a1.28 1.28 0 0 1-1.28-1.28z" fill="#a259ff"/><path d="M1.28 1.28A1.28 1.28 0 0 1 2.559 0h1.28v2.56H2.56a1.28 1.28 0 0 1-1.28-1.28z" fill="#f24e1e"/><path d="M3.84 0h1.28a1.28 1.28 0 0 1 0 2.56H3.84z" fill="#ff7262"/><path d="M6.4 3.84a1.28 1.28 0 0 1-2.56 0 1.28 1.28 0 0 1 2.56 0z" fill="#1abcfe"/></svg>
);

const VSCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="15" height="15" {...props}>
    <path d="M29.01,5.03,23.244,2.254a1.742,1.742,0,0,0-1.989.338L2.38,19.8A1.166,1.166,0,0,0,2.3,21.447c.025.027.05.053.077.077l1.541,1.4a1.165,1.165,0,0,0,1.489.066L28.142,5.75A1.158,1.158,0,0,1,30,6.672V6.605A1.748,1.748,0,0,0,29.01,5.03Z" style={{fill:"#0065a9"}}/>
    <path d="M29.01,26.97l-5.766,2.777a1.745,1.745,0,0,1-1.989-.338L2.38,12.2A1.166,1.166,0,0,1,2.3,10.553c.025-.027.05-.053.077-.077l1.541-1.4A1.165,1.165,0,0,1,5.41,9.01L28.142,26.25A1.158,1.158,0,0,0,30,25.328V25.4A1.749,1.749,0,0,1,29.01,26.97Z" style={{fill:"#007acc"}}/>
    <path d="M23.244,29.747a1.745,1.745,0,0,1-1.989-.338A1.025,1.025,0,0,0,23,28.684V3.316a1.024,1.024,0,0,0-1.749-.724,1.744,1.744,0,0,1,1.989-.339l5.765,2.772A1.748,1.748,0,0,1,30,6.6V25.4a1.748,1.748,0,0,1-.991,1.576Z" style={{fill:"#1f9cf0"}}/>
  </svg>
);

const SupabaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="15" height="15" style={{fill:"none"}} {...props}>
    <defs>
      <linearGradient id="sb-paint0" x1="53.97" y1="54.97" x2="94.16" y2="71.83" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.57177306,0,0,0.57177334,0.98590077,-0.12074988)">
        <stop stopColor="#249361"/>
        <stop offset="1" stopColor="#3ECF8E"/>
      </linearGradient>
      <linearGradient id="sb-paint1" x1="36.16" y1="30.58" x2="54.48" y2="65.08" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.57177306,0,0,0.57177334,0.98590077,-0.12074988)">
        <stop/>
        <stop offset="1" stopOpacity="0"/>
      </linearGradient>
    </defs>
    <path d="m 37.41219,62.936701 c -1.634985,2.05896 -4.950068,0.93085 -4.989463,-1.69817 L 31.846665,22.786035 h 25.855406 c 4.683108,0 7.294967,5.409033 4.382927,9.07673 z" style={{fill:"url(#sb-paint0)"}}/>
    <path d="m 37.41219,62.936701 c -1.634985,2.05896 -4.950068,0.93085 -4.989463,-1.69817 L 31.846665,22.786035 h 25.855406 c 4.683108,0 7.294967,5.409033 4.382927,9.07673 z" style={{fill:"url(#sb-paint1)",fillOpacity:0.2}}/>
    <path d="m 26.89694,1.0634102 c 1.634986,-2.05918508 4.950125,-0.93090008 4.989521,1.698149 L 32.138899,41.214003 H 6.607076 c -4.6832501,0 -7.29518376,-5.409032 -4.3830007,-9.07673 z" style={{fill:"#3ecf8e"}}/>
  </svg>
);

const VercelIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 116 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15" {...props}>
		<path d="M57.5 0L115 100H0L57.5 0z" fill="currentColor"/>
	</svg>
);

const LangChainIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="15" height="15" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M7.531 15.976a7.534 7.534 0 000-10.651L2.206 0A7.537 7.537 0 000 5.326c0 1.996.794 3.913 2.206 5.325l5.325 5.325zM18.674 16.469a7.535 7.535 0 00-10.65 0l5.325 5.325a7.536 7.536 0 0010.651 0l-5.326-5.325zM2.218 21.782a7.536 7.536 0 005.326 2.206v-7.531H.012c0 1.996.795 3.914 2.206 5.325zM20.73 8.595a7.534 7.534 0 00-10.651.001l5.325 5.326 5.326-5.327z" fill="#7FC8FF"/>
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