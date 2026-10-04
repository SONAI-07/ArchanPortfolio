import type { CSSProperties } from "react";
import { skills } from "@/lib/data";
import { BrandIcon } from "./BrandIcon";

const NAMES = ["Python", "LangGraph", "Java", "Redis", "PostgreSQL"];

export function TechMarquee() {
    const items = NAMES.flatMap((n) => {
        const s = skills.find((sk) => sk.name === n);
        return s ? [s] : [];
    });

    const row = (key: string, hidden = false) => (
        <div key={key} aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-3 pr-3">
            {items.map((s) => (
                <span key={s.name} style={{ "--brand": s.color } as CSSProperties} className="chip group">
          <span className="text-[var(--muted)] transition-colors group-hover:text-[color:var(--brand)]">
            <BrandIcon iconKey={s.icon} size={14} />
          </span>
                    {s.name}
        </span>
            ))}
        </div>
    );

    return (
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="marquee-track flex w-max">
                {row("a")}
                {row("b", true)}
            </div>
        </div>
    );
}