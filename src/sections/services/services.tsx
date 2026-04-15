import { StarIcon } from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function Services() {
	const skillGroups = [
		{
			title: "Programming",
			items: ["Python", "JavaScript", "C++", "Java"],
		},
		{
			title: "Web",
			items: ["React", "HTML", "CSS"],
		},
		{
			title: "Machine Learning",
			items: [
				"Computer Vision",
				"NLP",
				"Machine Learning",
				"Pandas",
				"NumPy",
				"Scikit-learn",
				"TensorFlow",
				"PyTorch",
			],
		},
		{
			title: "Tools",
			items: ["Supabase", "Firebase", "GitHub", "VS Code", "Google Colab"],
		},
	];

	return (
		<Section
			id="services"
			title="Skills"
			description="A focused stack across programming, web development, and machine learning for building end-to-end software solutions."
			className="grid grid-cols-1 md:grid-cols-2 gap-4"
			badgeText="Technical stack"
			badgeIcon={<StarIcon aria-hidden="true" />}
		>
			{skillGroups.map((group) => (
				<Card key={group.title} className="h-full">
					<CardContent className="space-y-3">
						<CardTitle as="h3">{group.title}</CardTitle>
						<ul className="flex flex-wrap gap-2">
							{group.items.map((item) => (
								<li
									key={item}
									className="rounded-md border border-border/80 bg-card-muted/40 px-2.5 py-1 text-xs text-foreground/80"
								>
									{item}
								</li>
							))}
						</ul>
					</CardContent>
				</Card>
			))}
		</Section>
	);
}
