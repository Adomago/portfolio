import { GridIcon } from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { works } from "@/sections/works/works";
import WorksCard from "./works-card";

export default function Works() {
  return (
    <Section
      id="works"
      title="Projects"
      description="Selected projects spanning AI applications, full-stack platforms, and public-sector systems."
      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      badgeText="Featured projects"
      badgeIcon={<GridIcon aria-hidden="true" className="size-3.5" />}
    >
      {works.map((item) => (
        <WorksCard
          key={item.title}
          tag={item.tag}
          tagLabel={item.tagLabel}
          title={item.title}
          description={item.description}
          link={item.link}
        />
      ))}
    </Section>
  );
}