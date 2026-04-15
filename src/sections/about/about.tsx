import { PersonIcon } from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export default function About() {
	return (
		<Section
			id="about"
			title="About Me"
			description="I'm Alisandro N. Domingo, a Computer Science student specializing in Artificial Intelligence and building practical software solutions."
			className="grid grid-cols-1 gap-4 md:grid-cols-2"
			badgeText="Profile"
			badgeIcon={<PersonIcon aria-hidden="true" className="size-3.5" />}
		>
			<Card>
				<CardContent className="space-y-4">
					<div>
						<CardTitle as="h3">Alisandro N. Domingo</CardTitle>
						<CardDescription className="text-foreground/60">
							Makati City, Metro Manila
						</CardDescription>
					</div>
					<p className="text-sm text-foreground/80 leading-relaxed">
						I build practical, user-focused software by combining computer
						science fundamentals with applied AI and web engineering.
					</p>
					<div className="flex flex-wrap gap-2">
						<Badge variant="secondary" size="sm">
							AI-focused CS Student
						</Badge>
						<Badge variant="secondary" size="sm">
							Project-driven Builder
						</Badge>
					</div>
					<div>
						<p className="text-xs uppercase tracking-wide text-foreground/50">
							Education
						</p>
						<p className="mt-1 text-sm text-foreground/80">
							Mapúa University — BS Computer Science (AI specialization)
						</p>
						<p className="text-sm text-foreground/70">
							Expected Graduation: September 2026 · Running GWA: 1.7900
						</p>
					</div>
				</CardContent>
			</Card>
			<Card>
				<CardContent className="space-y-4">
					<div>
						<p className="text-xs uppercase tracking-wide text-foreground/50">
							Areas of Interest
						</p>
						<ul className="mt-2 space-y-1 text-sm text-foreground/80 leading-relaxed">
							<li>Computer Science and problem-solving</li>
							<li>Artificial Intelligence and machine learning applications</li>
							<li>Software development for real-world impact</li>
						</ul>
					</div>
					<div>
						<p className="text-xs uppercase tracking-wide text-foreground/50">
							Earlier Education
						</p>
						<p className="mt-1 text-sm text-foreground/70">
							Completed basic and senior high education with honors in Makati
							before starting university studies.
						</p>
					</div>
				</CardContent>
			</Card>
		</Section>
	);
}
