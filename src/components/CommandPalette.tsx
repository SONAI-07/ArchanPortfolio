"use client";
import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { ArrowUpRight, Copy, Hash, SunMoon } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { toggleTheme } from "@/lib/theme";

const EMAIL = "hello@yourdomain.dev"; // ← change to your real email

export function CommandPalette() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setOpen((o) => !o);
            }
            if (e.key === "Escape") setOpen(false);
        };
        const openEvt = () => setOpen(true);
        window.addEventListener("keydown", down);
        window.addEventListener("palette:open", openEvt);
        return () => {
            window.removeEventListener("keydown", down);
            window.removeEventListener("palette:open", openEvt);
        };
    }, []);

    const run = (fn: () => void) => () => {
        fn();
        setOpen(false);
    };

    const jump = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

    const copyEmail = () => {
        navigator.clipboard?.writeText(EMAIL).catch(() => {});
    };

    const itemCls =
        "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[var(--ink-soft)] aria-[selected=true]:bg-[var(--panel)] aria-[selected=true]:text-[var(--ink)]";
    const groupCls =
        "[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:tracking-[0.2em] [&_[cmdk-group-heading]]:text-[var(--muted)]";

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-[110] flex items-start justify-center bg-black/60 p-4 pt-[12vh] backdrop-blur-sm"
            onClick={() => setOpen(false)}
        >
            <div
                className="w-full max-w-md overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <Command>
                    <Command.Input
                        placeholder="Type a command or search…"
                        className="w-full border-b border-[var(--border)] bg-transparent px-4 py-3.5 font-mono text-sm text-[var(--ink)] outline-none placeholder:text-[var(--muted)]"
                    />
                    <Command.List className="max-h-[320px] overflow-y-auto p-2">
                        <Command.Empty className="px-3 py-8 text-center font-mono text-xs text-[var(--muted)]">
                            No results found.
                        </Command.Empty>

                        <Command.Group heading="NAVIGATE" className={groupCls}>
                            {["about", "contact", "projects", "experience", "skills", "github"].map((id) => (
                                <Command.Item key={id} value={`go ${id}`} onSelect={run(() => jump(id))} className={itemCls}>
                                    <Hash size={14} /> {id.charAt(0).toUpperCase() + id.slice(1)}
                                </Command.Item>
                            ))}
                        </Command.Group>

                        <Command.Group heading="ACTIONS" className={groupCls}>
                            <Command.Item value="copy email" onSelect={run(copyEmail)} className={itemCls}>
                                <Copy size={14} /> Copy email address
                            </Command.Item>
                            <Command.Item value="toggle theme" onSelect={run(() => toggleTheme())} className={itemCls}>
                                <SunMoon size={14} /> Toggle dark / cream theme
                            </Command.Item>
                        </Command.Group>

                        <Command.Group heading="LINKS" className={groupCls}>
                            <Command.Item value="github" onSelect={run(() => window.open("https://github.com/", "_blank"))} className={itemCls}>
                                <GithubIcon size={14} /> GitHub profile
                            </Command.Item>
                            <Command.Item value="linkedin" onSelect={run(() => window.open("https://linkedin.com/", "_blank"))} className={itemCls}>
                                <LinkedinIcon size={14} /> LinkedIn profile
                            </Command.Item>
                            <Command.Item value="email" onSelect={run(() => window.open(`mailto:${EMAIL}`))} className={itemCls}>
                                <ArrowUpRight size={14} /> Send an email
                            </Command.Item>
                        </Command.Group>
                    </Command.List>
                </Command>
            </div>
        </div>
    );
}