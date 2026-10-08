import type Lenis from "lenis";

let lenis: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
    lenis = instance;
}

const prefersReduced = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function scrollToId(id: string, offset = 88) {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) {
        lenis.scrollTo(el, { offset: -offset, duration: 2.8 });
    } else {
        el.scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth", block: "start" });
    }
}

export function scrollToTop() {
    if (lenis) {
        lenis.scrollTo(0, { duration: 2.8 });
    } else {
        window.scrollTo({ top: 0, behavior: prefersReduced() ? "auto" : "smooth" });
    }
}