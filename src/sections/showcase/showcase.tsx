import { CubeIcon } from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { showcaseHighlights } from "@/sections/showcase/_constants/showcase";

export default function Showcase() {
	return (
		<Section
			id="certificates"
			title="Certificates"
			description="Professional certifications and training credentials."
			className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
			badgeText="Certificates"
			badgeIcon={<CubeIcon aria-hidden="true" className="size-3.5" />}
		>
			{showcaseHighlights.map(({ title, issuer, image }) => (
				<Card key={title} className="overflow-hidden">
					<div className="aspect-video w-full border-b border-border/80 bg-card-elevated p-1">
						<img
							src={image}
							alt={title}
							className="h-full w-full rounded-md border border-border/80 object-cover"
						/>
					</div>
					<CardContent>
						<CardTitle>{title}</CardTitle>
						<CardDescription className="text-foreground/60">
							{issuer}
						</CardDescription>
					</CardContent>
				</Card>
			))}
		</Section>
	);
}
