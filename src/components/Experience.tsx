import { experience } from "@/lib/data";
import { SectionHeader, SectionBody } from "./Section";

export function Experience() {
    return (
        <section id="experience">
            <SectionHeader
                title="Experience"
                right={<span className="font-mono text-xs text-[var(--muted)]">{experience.date}</span>}
            />
            <SectionBody className="space-y-8">
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[var(--ink)]">{experience.title}</h3>
                    <p className="text-[var(--ink-soft)]">{experience.subtitle}</p>
                </div>

                <div className="relative ml-2 space-y-8 border-l border-dashed border-[var(--border)] pl-6">
                    {experience.nodes.map((node, i) => (
                        <div key={i} className="relative">
                            <span className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-[var(--border)] bg-[var(--bg)]"></span>
                            <h4 className="mb-1 text-base font-semibold text-[var(--ink)]">{node.title}</h4>
                            <p className="text-sm leading-relaxed text-[var(--ink-soft)]">{node.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 grid grid-cols-2 overflow-hidden rounded-xl border border-[var(--border)] md:grid-cols-4">
                    {experience.stats.map((stat, i) => (
                        <div
                            key={i}
                            className={`border-[var(--border)] p-6 text-center ${i % 2 === 0 ? "border-r" : ""} ${i < 3 ? "md:border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""}`}
                        >
                            <p className="display text-2xl text-[var(--ink)] md:text-3xl">{stat.value}</p>
                            <p className="mt-2 font-mono text-[10px] tracking-wider text-[var(--muted)]">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </SectionBody>
        </section>
    );
}