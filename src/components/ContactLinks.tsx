import type { ComponentType } from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon, ThreadsIcon } from "./icons";
import { contactLinks } from "@/lib/data";


type IconComponent = ComponentType<{ size?: number; className?: string }>;

const iconMap: Record<string, IconComponent> = {
    github: GithubIcon, linkedin: LinkedinIcon, twitter: XIcon, mail: Mail, threads: ThreadsIcon
};

export function ContactLinks() {
    return (
        <section id="contact" className="space-y-8">
            <div className="relative -mx-6 md:-mx-10 border-y border-[var(--border)] bg-[var(--bg)]">
                <div className="hatch absolute inset-0 opacity-50" />
                <div className="relative px-6 py-4 md:px-10">
                    <h2 className="display text-2xl md:text-3xl">Contact</h2>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {contactLinks.map((link) => {
                    const Icon = iconMap[link.icon] || Mail;
                    return (
                        <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer"
                           className="group flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 hover:bg-[var(--bg-elev)] transition-colors">
                            <div className="flex items-center gap-3">
                                <Icon size={18} className="text-[var(--ink)]" />
                                <span className="font-medium text-[var(--ink)]">{link.name}</span>
                            </div>
                            <ArrowUpRight size={16} className="text-[var(--muted)] group-hover:text-[var(--ink)] transition-colors" />
                        </a>
                    );
                })}
            </div>
        </section>
    );
}