export interface WorksItem {
	image: string;
	title: string;
	description: string;
	link: string;
}

export const works: WorksItem[] = [
	{
		image: "/placeholder-1.jpg",
		title: "StockTrack",
		description:
			"AI-driven inventory and demand forecasting platform with user/admin dashboards, built with React and forecasting models to improve stock planning decisions.",
		link: "https://www.linkedin.com/in/alisandro-domingo-0b54a83b9",
	},
	{
		image: "/placeholder-1.jpg",
		title: "AI Legal Assistant",
		description:
			"RAG-based assistant for Philippine Labor Code queries, benchmarking Llama 3.1, Qwen 2.5, and Gemma 2 for legal-response quality and speed.",
		link: "https://www.linkedin.com/in/alisandro-domingo-0b54a83b9",
	},
	{
		image: "/placeholder-2.jpg",
		title: "Barkstay",
		description:
			"Full-stack pet services platform with real-time updates, secure authentication, and payment processing using JavaScript, Supabase, and MongoDB.",
		link: "https://www.linkedin.com/in/alisandro-domingo-0b54a83b9",
	},
	{
		image: "/placeholder-2.jpg",
		title: "Barangay 881 System",
		description:
			"Web-based administrative system that digitizes local government workflows and streamlines records and frontline barangay service operations.",
		link: "https://www.linkedin.com/in/alisandro-domingo-0b54a83b9",
	},
	{
		image: "/placeholder-1.jpg",
		title: "Tomato Disease Detection",
		description:
			"YOLOv12 instance segmentation project for tomato leaf diseases, fine-tuned on a custom dataset to support accurate agricultural disease analysis.",
		link: "https://www.linkedin.com/in/alisandro-domingo-0b54a83b9",
	},
];
