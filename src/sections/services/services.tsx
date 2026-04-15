import {
	FileIcon,
	FilePlusIcon,
	FileTextIcon,
	GitHubLogoIcon,
	PersonIcon,
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
		destination: { id: "engineer", Icon: PersonIcon },
		hub: { id: "github", Icon: GitHubLogoIcon },
		sources: [
			{ id: "vscode", Icon: FileTextIcon },
			{ id: "supabase", Icon: FilePlusIcon },
			{ id: "firebase", Icon: FileIcon },
			{ id: "colab", Icon: GitHubLogoIcon },
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
				name="Web"
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
				description="Tooling stack built around GitHub, VS Code, Supabase, Firebase, and Colab."
				className="col-span-1"
				background={<ConvertingCardContent icons={toolIcons} />}
			/>
		</Section>
	);
}
