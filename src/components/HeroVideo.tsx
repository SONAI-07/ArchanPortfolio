"use client";
import { useEffect, useRef } from "react";

export function HeroVideo() {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = ref.current;
        if (!video) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            video.pause();
        }
    }, []);

    return (
        <video
            ref={ref}
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
            tabIndex={-1}
            className="hero-video pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
        />
    );
}