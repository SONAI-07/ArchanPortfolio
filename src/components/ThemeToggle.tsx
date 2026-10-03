"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { toggleTheme, THEME_EVENT, type Theme } from "@/lib/theme";

export function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== "undefined") {
            return (document.documentElement.dataset.theme as Theme) || "dark";
        }
        return "dark";
    });

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const id = requestAnimationFrame(() => setMounted(true));

        const sync = (e: Event) => setTheme((e as CustomEvent<Theme>).detail);
        window.addEventListener(THEME_EVENT, sync);

        return () => {
            cancelAnimationFrame(id);
            window.removeEventListener(THEME_EVENT, sync);
        };
    }, []);


    return (
        <button
            aria-label="toggle theme"
            onClick={() => toggleTheme()}
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] text-[var(--ink)] transition-colors hover:bg-[var(--panel)]"
        >
            {mounted ? (theme === "dark" ? <Sun size={16} /> : <Moon size={16} />) : <span className="h-4 w-4" />}
        </button>
    );
}