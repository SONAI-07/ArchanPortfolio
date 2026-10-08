"use client";
import { useEffect, useRef } from "react";

export function HeroVideo() {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = ref.current;
        if (!video) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            video.removeAttribute("autoPlay");
            return;
        }

        // THE FIX: React SSR drops the muted property; set it imperatively
        // so autoplay policy always sees a muted video.
        video.muted = true;

        let cancelled = false;
        const tryPlay = () => {
            if (cancelled) return;
            const p = video.play();
            if (p) p.catch(() => {});
        };

        // Retry at every readiness stage
        tryPlay();
        video.addEventListener("loadedmetadata", tryPlay);
        video.addEventListener("canplay", tryPlay);

        // If the browser still refuses, the first user gesture unlocks it
        const unlock = () => tryPlay();
        window.addEventListener("pointerdown", unlock, { once: true });
        window.addEventListener("keydown", unlock, { once: true });

        // Anything that pauses us (tab switch, power-state flip) gets resumed
        const onPause = () => tryPlay();
        video.addEventListener("pause", onPause);
        const onVis = () => {
            if (document.visibilityState === "visible") tryPlay();
        };
        document.addEventListener("visibilitychange", onVis);

        return () => {
            cancelled = true;
            video.removeEventListener("loadedmetadata", tryPlay);
            video.removeEventListener("canplay", tryPlay);
            video.removeEventListener("pause", onPause);
            document.removeEventListener("visibilitychange", onVis);
            window.removeEventListener("pointerdown", unlock);
            window.removeEventListener("keydown", unlock);
        };
    }, []);

    return (
        <video
            ref={ref}
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden
            tabIndex={-1}
            className="hero-video pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
        />
    );
}