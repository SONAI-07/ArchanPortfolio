import { experience } from "@/lib/data";

export function Experience() {
    return (
        <section id="experience" className="space-y-8">
            <div className="relative -mx-6 md:-mx-10 border-y border-[var(--border)] bg-[var(--bg)]">
                <div className="hatch absolute inset-0 opacity-50" />
                <div className="relative px-6 py-4 md:px-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h2 className="display text-2xl md:text-3xl">Experience</h2>
                    <span className="font-mono text-xs text-[var(--muted)]">{experience.date}</span>
                </div>
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[var(--ink)]">{experience.title}</h3>
                <p className="text-[var(--ink-soft)]">{experience.subtitle}</p>
            </div>

            {/* Timeline */}
            <div className="space-y-8 border-l border-dashed border-[var(--border)] pl-6 ml-2 relative">
                {experience.nodes.map((node, i) => (
                    <div key={i} className="relative">
                        <span className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-[var(--border)] bg-[var(--bg)]"></span>
                        <h4 className="text-base font-semibold text-[var(--ink)] mb-1">{node.title}</h4>
                        <p className="text-sm text-[var(--ink-soft)] leading-relaxed">{node.desc}</p>
                    </div>
                ))}
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 border border-[var(--border)] rounded-xl overflow-hidden mt-12">
                {experience.stats.map((stat, i) => (
                    <div key={i} className={`p-6 text-center ${i < experience.stats.length - 1 ? "md:border-r border-[var(--border)]" : ""} ${i % 2 === 0 ? "border-b md:border-b-0 border-[var(--border)]" : ""}`}>
                        <p className="display text-2xl md:text-3xl text-[var(--ink)]">{stat.value}</p>
                        <p className="font-mono text-[10px] tracking-wider text-[var(--muted)] mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}