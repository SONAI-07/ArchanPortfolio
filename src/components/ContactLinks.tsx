"use client";
import type { ComponentType } from "react";
import { ArrowUpRight, Mail, CalendarDays } from "lucide-react";
import { contactLinks } from "@/lib/data";
import { GithubIcon, LinkedinIcon, XIcon } from "./icons";

type IconComponent = ComponentType<{ size?: number; className?: string }>;

const iconMap: Record<string, IconComponent> = {
    github: GithubIcon,
    linkedin: LinkedinIcon,
    twitter: XIcon,
    mail: Mail,
};

export function ContactLinks() {
    const mail = contactLinks.find((l) => l.name === "Mail");
    const socials = contactLinks.filter((l) => l.name !== "Mail");

    return (
        <section id="contact" className="px-6 py-14 md:px-9 md:py-20">
            <div className="card relative overflow-hidden p-10 text-center md:p-16">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,var(--glow),transparent_70%)]" />
                <div className="relative">
                    <p className="micro">( the ask, after the proof )</p>
                    <h2 className="section-title mt-4"> Transform your IDEA into a real Platform </h2>
                    <div className="title-underline" />
                    <p className="mx-auto mt-6 max-w-xl leading-relaxed text-[var(--ink-soft)]">
                        Open to AI engineering roles, collaborations, and conversations about voice agents,
                        event-driven systems, and shipping AI that survives the realtime Production crashes.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <a href={mail?.href ?? "mailto:sonaibanerjee571@gmail.com"} className="btn-pill">
                            <Mail size={15} /> Mail Me
                        </a>

                        <button onClick={() => window.dispatchEvent(new Event("booking:open"))} className="btn-outline">
                            <CalendarDays size={15} /> Book A Call
                        </button>

                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        {socials.map((link) => {
                            const Icon = iconMap[link.icon] ?? Mail;
                            return (
                                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="chip group">
                                    <Icon size={14} className="text-[var(--muted)] transition-colors group-hover:text-[var(--ink)]" />
                                    {link.name}
                                    <ArrowUpRight size={12} className="text-[var(--muted)] transition-colors group-hover:text-[var(--ink)]" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}