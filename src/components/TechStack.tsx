"use client";
import { useState } from "react";
import type { CSSProperties } from "react";
import { Layers, Code2, Monitor, Server, Database, BrainCircuit, Rocket, Coffee } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import * as SI from "react-icons/si";
import * as TB from "react-icons/tb";
import { skills, type SkillCategory } from "@/lib/data";
import { SectionHeader, SectionBody } from "./Section";

type Tab = "All" | SkillCategory;

const tabs: { value: Tab; label: string; icon: LucideIcon }[] = [
    { value: "All", label: "All", icon: Layers },
    { value: "Languages", label: "Languages", icon: Code2 },
    { value: "Frontend", label: "Frontend", icon: Monitor },
    { value: "Backend", label: "Backend", icon: Server },
    { value: "Databases", label: "Databases", icon: Database },
    { value: "AI / ML", label: "AI / ML", icon: BrainCircuit },
    { value: "DevOps", label: "DevOps", icon: Rocket },
];

const SI_MAP = SI as unknown as Record<string, IconType | undefined>;
const TB_MAP = TB as unknown as Record<string, IconType | undefined>;
const CUSTOM_MAP: Record<string, IconType> = {
    SiJava: Coffee as unknown as IconType,
};

function findIcon(key: string): IconType | undefined {
    return CUSTOM_MAP[key] ?? SI_MAP[key] ?? TB_MAP[key];
}

export function TechStack() {
    const [active, setActive] = useState<Tab>("All");
    const visible = active === "All" ? skills : skills.filter((s) => s.category === active);

    return (
        <section id="skills">
            <SectionHeader
                title="Tech Stack"
                right={<span className="hidden font-mono text-xs text-[var(--muted)] sm:block">( select tab to filter )</span>}
            />
            <SectionBody className="space-y-8">
                <div className="flex flex-wrap gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-2">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = active === tab.value;
                        return (
                            <button
                                key={tab.value}
                                onClick={() => setActive(tab.value)}
                                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                                    isActive
                                        ? "bg-[var(--ink)] text-[var(--bg)]"
                                        : "text-[var(--ink-soft)] hover:bg-[var(--bg-elev)] hover:text-[var(--ink)]"
                                }`}
                            >
                                <Icon size={14} />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                <div className="flex flex-wrap gap-3">
                    {visible.map((skill) => {
                        const Icon = findIcon(skill.icon);
                        return (
                            <span
                                key={skill.name}
                                style={{ "--brand": skill.color } as CSSProperties}
                                className="pill group flex cursor-default items-center gap-2 transition-colors hover:bg-[var(--ink)] hover:text-[var(--bg)]"
                            >
                {Icon ? (
                    <Icon size={14} className="shrink-0 transition-colors duration-200 group-hover:text-[color:var(--brand)]" />
                ) : (
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                )}
                                {skill.name}
              </span>
                        );
                    })}
                </div>
            </SectionBody>
        </section>
    );
}