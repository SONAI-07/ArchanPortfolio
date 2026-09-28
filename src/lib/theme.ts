export type Theme = "dark" | "light";
const KEY = "theme";

export function getInitialTheme(): Theme {
    if (typeof window === "undefined") return "dark";
    const saved = localStorage.getItem(KEY) as Theme | null;
    if (saved) return saved;
    // Default to OS preference, fallback to dark
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function applyTheme(t: Theme) {
    document.documentElement.dataset.theme = t;
    localStorage.setItem(KEY, t);
}