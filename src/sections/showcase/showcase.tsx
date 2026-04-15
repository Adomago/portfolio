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
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" // Increased gap for better spacing
            badgeText="Certificates"
            badgeIcon={<CubeIcon aria-hidden="true" className="size-3.5" />}
        >
            {showcaseHighlights.map(({ title, issuer, image }) => (
                <Card key={title} className="overflow-hidden flex flex-col h-full">
                    {/* Container for the image */}
                    <div className="aspect-[4/3] w-full border-b border-border/80 bg-muted/30 p-2 flex items-center justify-center">
                        <img
                            src={image}
                            alt={title}
                            // Changed object-cover to object-contain
                            className="h-full w-full rounded-sm object-contain transition-transform hover:scale-105 duration-300"
                        />
                    </div>
                    
                    <CardContent className="p-4">
                        <CardTitle className="line-clamp-2 text-lg">{title}</CardTitle>
                        <CardDescription className="text-foreground/60 mt-1">
                            {issuer}
                        </CardDescription>
                    </CardContent>
                </Card>
            ))}
        </Section>
    );
}
