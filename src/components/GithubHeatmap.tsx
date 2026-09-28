"use client";
import { useState, useMemo } from "react";
import { SectionHeader, SectionBody } from "./Section";

const YEARS = ["2026", "2025", "2024"] as const;
type Year = (typeof YEARS)[number];

const WEIGHTS = [0, 1, 3, 6, 9];
const LEVEL_COLORS = [
    "bg-[var(--panel)]",
    "bg-[var(--border)]",
    "bg-[var(--muted)]",
    "bg-[var(--ink-soft)]",
    "bg-[var(--ink)]",
];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function seeded(seed: number) {
    let s = seed;
    return () => {
        s = (s * 9301 + 49297) % 233280;
        return s / 233280;
    };
}

function buildYear(year: Year) {
    const rand = seeded(year === "2026" ? 42 : year === "2025" ? 7 : 99);
    const grid: number[][] = [];
    for (let w = 0; w < 52; w++) {
        const col: number[] = [];
        for (let d = 0; d < 7; d++) {
            const r = rand();
            col.push(r < 0.45 ? 0 : r < 0.7 ? 1 : r < 0.85 ? 2 : r < 0.95 ? 3 : 4);
        }
        grid.push(col);
    }
    const total = grid.flat().reduce((sum, level) => sum + WEIGHTS[level], 0);
    return { grid, total };
}

export function GithubHeatmap() {
    const [year, setYear] = useState<Year>("2026");
    const { grid, total } = useMemo(() => buildYear(year), [year]);

    return (
        <section id="github">
            <SectionHeader
                title="GitHub Activity"
                right={
                    <a
                        href="https://github.com/SONAI-07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
                    >
                        @SONAI-07 ↗
                    </a>
                }
            />
            <SectionBody>
                <div className="space-y-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
                    <div className="flex justify-end gap-2">
                        {YEARS.map((y) => (
                            <button
                                key={y}
                                onClick={() => setYear(y)}
                                className={`rounded-lg px-4 py-1.5 font-mono text-xs transition-colors ${
                                    year === y
                                        ? "bg-[var(--ink)] text-[var(--bg)]"
                                        : "border border-[var(--border)] text-[var(--ink-soft)] hover:text-[var(--ink)]"
                                }`}
                            >
                                {y}
                            </button>
                        ))}
                    </div>

                    <div className="min-w-[640px] space-y-2">
                        <div className="flex justify-between font-mono text-[10px] text-[var(--muted)]">
                            {MONTHS.map((m) => (
                                <span key={m}>{m}</span>
                            ))}
                        </div>
                        <div className="grid w-max grid-flow-col grid-rows-7 gap-[3px]">
                            {grid.map((week, w) =>
                                week.map((level, d) => (
                                    <div
                                        key={`${w}-${d}`}
                                        title={`${WEIGHTS[level]} contributions`}
                                        className={`h-3 w-3 rounded-[2px] ${LEVEL_COLORS[level]}`}
                                    />
                                ))
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                        <p className="font-mono text-xs text-[var(--muted)]">
                            <span className="text-[var(--ink)]">{total}</span> contributions in {year}
                        </p>
                        <div className="flex items-center gap-2 font-mono text-[10px] text-[var(--muted)]">
                            Less
                            {LEVEL_COLORS.map((c) => (
                                <span key={c} className={`h-3 w-3 rounded-[2px] ${c}`} />
                            ))}
                            More
                        </div>
                    </div>
                </div>
            </SectionBody>
        </section>
    );
}