"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { applyTheme, type Theme } from "@/lib/theme";

export function ThemeToggle() {
    // Initialize state lazily by reading the DOM attribute set by our anti-flash script
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== "undefined") {
            return (document.documentElement.dataset.theme as Theme) || "dark";
        }
        return "dark";
    });

    // This effect now ONLY syncs the state if the user changes their OS preference
    // while the tab is open in the background. It does not run setState on mount.
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");

        const handleChange = () => {
            // Only auto-switch if the user hasn't manually saved a preference yet
            if (!localStorage.getItem("theme")) {
                const newTheme = mediaQuery.matches ? "light" : "dark";
                setTheme(newTheme);
                applyTheme(newTheme);
            }
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        applyTheme(newTheme);
    };

    return (
        <button
            aria-label="toggle theme"
            onClick={toggleTheme}
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] text-[var(--ink)] hover:bg-[var(--panel)] transition-colors"
        >
            {theme === "dark" ? <Sun size={16}/> : <Moon size={16}/>}
        </button>
    );
}