"use client";
import { useEffect, useState } from "react";

const LINKS = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
];

export function NavLinks() {
    const [active, setActive] = useState("home");

    useEffect(() => {
        let raf = 0;
        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const mid = window.innerHeight * 0.4;
                let current = "home";
                for (const l of LINKS.slice(1)) {
                    const el = document.getElementById(l.id);
                    if (el && el.getBoundingClientRect().top <= mid) current = l.id;
                }
                setActive(current);
            });
        };
        onScroll();
        addEventListener("scroll", onScroll, { passive: true });
        return () => {
            removeEventListener("scroll", onScroll);
            cancelAnimationFrame(raf);
        };
    }, []);

    const jump = (id: string) => {
        if (id === "home") window.scrollTo({ top: 0, behavior: "smooth" });
        else document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <nav className="hidden items-center gap-6 md:flex">
            {LINKS.map((l) => (
                <button
                    key={l.id}
                    onClick={() => jump(l.id)}
                    className={`relative py-1 text-sm transition-colors ${
                        active === l.id ? "text-[var(--ink)]" : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                    }`}
                >
                    {l.label}
                    <span
                        className={`absolute -bottom-0.5 left-0 h-px bg-[var(--ink)] transition-all duration-300 ${
                            active === l.id ? "w-full" : "w-0"
                        }`}
                    />
                </button>
            ))}
        </nav>
    );
}