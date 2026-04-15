import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { WorksItem } from "./works";

const tagStyles: Record<string, { pill: string; dot: string }> = {
  ai:        { pill: "bg-[#EEEDFE] text-[#3C3489] dark:bg-[#26215C] dark:text-[#CECBF6]", dot: "bg-[#534AB7]" },
  fullstack: { pill: "bg-[#E1F5EE] text-[#085041] dark:bg-[#04342C] dark:text-[#9FE1CB]", dot: "bg-[#0F6E56]" },
  civic:     { pill: "bg-[#FAEEDA] text-[#633806] dark:bg-[#412402] dark:text-[#FAC775]", dot: "bg-[#BA7517]" },
  ml:        { pill: "bg-[#EAF3DE] text-[#27500A] dark:bg-[#173404] dark:text-[#C0DD97]", dot: "bg-[#639922]" },
};

export default function WorksCard({ title, description, link, tag, tagLabel }: WorksItem) {
  const style = tagStyles[tag];
  return (
    <Card className="group hover:-translate-y-0.5 transition-all duration-150">
      <CardContent className="flex flex-col gap-3">
        <span className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2 py-0.5 rounded-full w-fit ${style.pill}`}>
          <span className={`size-1.5 rounded-full ${style.dot}`} />
          {tagLabel}
        </span>
        <div>
          <CardTitle className="text-sm mb-1.5">{title}</CardTitle>
          <CardDescription className="text-xs leading-relaxed">{description}</CardDescription>
        </div>
        
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-xs text-foreground/50 border border-border/60 rounded-md px-2.5 py-1 hover:text-foreground hover:border-border transition-colors w-fit"
        >
          View project
          <svg className="size-2.5 opacity-60" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 10L10 2M10 2H5M10 2v5" />
          </svg>
        </a>
      </CardContent>
    </Card>
  );
}