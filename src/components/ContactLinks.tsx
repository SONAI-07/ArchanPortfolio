import type { ComponentType } from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon, ThreadsIcon } from "./icons";
import { contactLinks } from "@/lib/data";
import { SectionHeader } from "./Section";

type IconComponent = ComponentType<{ size?: number; className?: string }>;

const iconMap: Record<string, IconComponent> = {
    github: GithubIcon,
    linkedin: LinkedinIcon,
    twitter: XIcon,
    mail: Mail,
    threads: ThreadsIcon,
};

export function ContactLinks() {
    return (
        <section id="contact">
            <SectionHeader title="Contact" />
            <div className="grid grid-cols-1 divide-y divide-[var(--border)] border-b border-[var(--border)] md:grid-cols-5 md:divide-x md:divide-y-0">
                {contactLinks.map((link) => {
                    const Icon = iconMap[link.icon] || Mail;
                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between px-6 py-5 transition-colors hover:bg-[var(--panel)] md:px-5"
                        >
              <span className="flex items-center gap-3">
                <Icon size={17} className="text-[var(--ink)]" />
                <span className="text-sm font-medium text-[var(--ink)]">{link.name}</span>
              </span>
                            <ArrowUpRight size={14} className="text-[var(--muted)] transition-colors group-hover:text-[var(--ink)]" />
                        </a>
                    );
                })}
            </div>
        </section>
    );
}