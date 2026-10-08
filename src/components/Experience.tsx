import { experience } from "@/lib/data";

export function Experience() {
    return (
        <section id="experience" className="px-6 pt-8 pb-14 md:px-9 md:pt-10 md:pb-20">
            <div className="text-center">
                <h2 className="section-title">Experience</h2>
                <div className="title-underline" />
                <p className="micro mt-3">( the arc so far )</p>
                <p className="mt-4 font-mono text-xs text-[var(--muted)]">
                    {experience.date} — {experience.subtitle}
                </p>
            </div>

            <div className="relative mt-10">
                <div className="pointer-events-none absolute bottom-8 left-1/2 top-8 hidden border-l border-dashed border-[var(--border)] md:block" />

                <div className="grid gap-6 md:grid-cols-2">
                    {experience.nodes.map((node, i) => (
                        <article
                            key={i}
                            className={`card relative p-7 transition-colors hover:border-[var(--muted)] md:p-8 ${
                                i === 0 ? "md:col-span-2" : ""
                            }`}
                        >
                            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] text-[var(--muted)]">
                                <span className="h-1.5 w-1.5 rounded-full bg-[var(--ink)]" />
                                ARENA {String(i + 1).padStart(2, "0")}
                            </div>
                            <h3 className="display mt-4 text-xl md:text-2xl">{node.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">{node.desc}</p>
                        </article>
                    ))}
                </div>
            </div>

            <div className="relative mt-10 overflow-hidden border-y border-[var(--border)] py-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                <div className="marquee-track-slow flex w-max">
                    {[0, 1].map((half) => (
                        <div key={half} aria-hidden={half === 1 || undefined} className="flex shrink-0 items-center gap-8 pr-8">
                            {experience.stats.map((s) => (
                                <span key={s.label} className="flex items-center gap-3 font-mono text-xs text-[var(--muted)]">
                  <span className="text-[var(--ink)]">{s.value}</span>
                                    {s.label}
                                    <span>◆</span>
                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}