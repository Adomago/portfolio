import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import type { ShowcaseHighlight } from "@/sections/showcase/_constants/showcase";

type ShowcaseCardProps = Omit<ShowcaseHighlight, "className">;

export default function ShowcaseCard({
	title,
	issuer,
	image,
}: ShowcaseCardProps) {
	return (
		<Card className="relative w-full lg:h-full">
			<div className="relative w-full aspect-video lg:h-full lg:aspect-auto p-1 rounded-lg">
				<img
					className="h-full w-full object-cover rounded-md overflow-hidden bg-card-elevated border border-border/80 p-0.5"
					src={image}
					alt={title}
				/>
			</div>

			<div className="absolute bottom-0 left-0 right-0 p-4">
				<CardTitle className="text-primary">{title}</CardTitle>
				<CardDescription className="text-primary/45">
					{issuer}
				</CardDescription>
			</div>
		</Card>
	);
}
