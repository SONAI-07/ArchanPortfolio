"use client";
import { useEffect, useState } from "react";

const ITEMS = [
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "github", label: "GitHub" },
];

export function IndexSidebar() {
    const [active, setActive] = useState("about");

    useEffect(() => {
        let raf = 0;
        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const mid = window.innerHeight * 0.4;
                let current = ITEMS[0].id;
                for (const item of ITEMS) {
                    const el = document.getElementById(item.id);
                    if (el && el.getBoundingClientRect().top <= mid) current = item.id;
                }
                setActive(current);
            });
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(raf);
        };
    }, []);

    const jump = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

    return (
        <aside className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 min-[1400px]:block xl:right-10">
            <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-[var(--muted)]">INDEX</p>
            <nav className="space-y-3">
                {ITEMS.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => jump(item.id)}
                        className={`flex items-center gap-2 font-mono text-xs transition-colors ${
                            active === item.id ? "text-[var(--ink)]" : "text-[var(--muted)] hover:text-[var(--ink-soft)]"
                        }`}
                    >
            <span
                className={`h-px bg-[var(--ink)] transition-all duration-300 ${
                    active === item.id ? "w-4 opacity-100" : "w-0 opacity-0"
                }`}
            />
                        {item.label}
                    </button>
                ))}
            </nav>
        </aside>
    );
}