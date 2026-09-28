export type Theme = "dark" | "light";
const KEY = "theme";
export const THEME_EVENT = "portfolio:theme-change";

export function getInitialTheme(): Theme {
    if (typeof window === "undefined") return "dark";
    const saved = localStorage.getItem(KEY) as Theme | null;
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function applyTheme(t: Theme) {
    document.documentElement.dataset.theme = t;
    localStorage.setItem(KEY, t);
    window.dispatchEvent(new CustomEvent<Theme>(THEME_EVENT, { detail: t }));
}

export function toggleTheme(): Theme {
    const next: Theme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    applyTheme(next);
    return next;
}