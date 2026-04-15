import { PaperPlaneIcon } from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import ContactFormCard from "@/sections/contact/_components/contact-form-card";
import { GridPattern } from "@/sections/contact/_components/grid-pattern";

export default function Contact() {
	return (
		<Section
			id="contact"
			title="Contact"
			description="Feel free to connect for collaboration opportunities, project discussions, or academic and industry partnerships."
			className="grid grid-cols-1 gap-4 lg:grid-cols-2 overflow-hidden"
			badgeText="Contact"
			badgeIcon={<PaperPlaneIcon aria-hidden="true" className="size-3.5" />}
		>
			<Card className="z-10 h-fit">
				<CardContent className="space-y-3">
					<p className="text-sm text-foreground/80">
						Mobile:{" "}
						<a className="hover:text-foreground" href="tel:+639763582988">
							+63 9763582988
						</a>
					</p>
					<p className="text-sm text-foreground/80">
						Email:{" "}
						<a
							className="hover:text-foreground"
							href="mailto:andomingo@mymail.mapua.edu.ph"
						>
							andomingo@mymail.mapua.edu.ph
						</a>
					</p>
					<p className="text-sm text-foreground/80">
						Alt Email:{" "}
						<a
							className="hover:text-foreground"
							href="mailto:alisandrodomingo@gmail.com"
						>
							alisandrodomingo@gmail.com
						</a>
					</p>
					<p className="text-sm text-foreground/80">
						LinkedIn:{" "}
						<a
							className="hover:text-foreground"
							href="https://www.linkedin.com/in/alisandro-domingo-0b54a83b9"
							target="_blank"
							rel="noreferrer"
						>
							linkedin.com/in/alisandro-domingo-0b54a83b9
						</a>
					</p>
				</CardContent>
			</Card>
			<ContactFormCard />
			<GridPattern
				squares={[
					[4, 4],
					[5, 1],
					[8, 2],
					[5, 3],
					[5, 5],
					[10, 10],
					[12, 15],
					[15, 10],
					[10, 15],
					[15, 10],
					[10, 15],
					[15, 10],
				]}
				className={cn(
					"mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
					"inset-x-0 inset-y-[-30%] h-[150%] skew-y-12",
				)}
			/>
		</Section>
	);
}
