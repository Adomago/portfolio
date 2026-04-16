import { PersonIcon } from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const focusAreas = [
    "Computer Science",
    "Artificial Intelligence",
    "Machine Learning",
    "Full-Stack Development",
    "Applied Intelligent Systems",
];

const timeline = [
    {
        period: "2010 – 2021",
        school: "Divine Light Academy",
        detail: "Molino Campus · Grades 8–10 with Honors",
    },
    {
        period: "2021 – 2023",
        school: "Mapúa University — Senior High",
        detail: "Grade 11 with Honors · Grade 12 with High Honors",
    },
    {
        period: "2023 – Present",
        school: "Mapúa University",
        detail: "BS Computer Science (AI) · Expected Sep 2026 · GWA 1.79",
    },
];

export default function About() {
    return (
        <Section
            id="about"
            title="About Me"
			description="Meet the developer behind the code."
            badgeText="Profile"
            badgeIcon={<PersonIcon aria-hidden="true" className="size-3.5" />}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
            {/* Left — identity + focus areas */}
            <Card>
                <CardContent className="space-y-5 pt-6">
                    <div className="space-y-1">
                        <h3 className="text-base font-semibold tracking-tight">
                            Alisandro N. Domingo
                        </h3>
                        <p className="text-sm text-foreground/55">Makati City, Metro Manila</p>
                    </div>

                    <p className="text-sm text-foreground/75 leading-relaxed">
						Hi! I'm Ali, a third-year CS student at Mapúa University. I'm always on the lookout for new problems to tackle and ways to use my skills to solve them!
                    </p>

                    <div className="border-t border-border/40 pt-4 space-y-2">
                        <p className="text-[11px] uppercase tracking-widest text-foreground/40 font-medium">
                            Focus Areas
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {focusAreas.map((area) => (
                                <Badge key={area} variant="secondary" size="sm">
                                    {area}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Right — education timeline */}
            <Card>
                <CardContent className="pt-6">
                    <p className="text-[11px] uppercase tracking-widest text-foreground/40 font-medium mb-4">
                        Background
                    </p>

                    <ol className="relative space-y-5 border-l border-border/40 pl-4">
                        {timeline.map(({ period, school, detail }, i) => (
                            <li key={i} className="relative">
                                <span className="absolute -left-[17px] top-1.5 size-2 rounded-full bg-border" />
                                <p className="text-[11px] text-foreground/40 tracking-wide mb-0.5">
                                    {period}
                                </p>
                                <p className="text-sm font-medium text-foreground/85">{school}</p>
                                <p className="text-xs text-foreground/55 leading-relaxed">{detail}</p>
                            </li>
                        ))}
                    </ol>
                </CardContent>
            </Card>
        </Section>
    );
}