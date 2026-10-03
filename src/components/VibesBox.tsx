"use client";
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export function VibesBox() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [playing, setPlaying] = useState(false);

    const toggle = () => {
        const el = audioRef.current;
        if (!el) return;
        if (playing) el.pause();
        else el.play().catch(() => {});
        setPlaying(!playing);
    };

    return (
        <div className="flex items-center justify-between gap-4 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3">
            <audio ref={audioRef} src="/music.mp3" onEnded={() => setPlaying(false)} preload="metadata" />
            <div className="flex items-center gap-3">
                <div
                    className={`relative h-8 w-8 shrink-0 rounded-full border border-[var(--border)] bg-[radial-gradient(circle,var(--bg-elev)_20%,var(--panel)_21%)] ${
                        playing ? "animate-[spin_3s_linear_infinite]" : ""
                    }`}
                >
                    <span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--ink)]" />
                </div>
                <p className="text-sm font-medium text-[var(--ink)]">Vibes</p>
            </div>
            <button
                onClick={toggle}
                aria-label={playing ? "pause" : "play"}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--border)] text-[var(--ink)] transition-colors hover:bg-[var(--bg-elev)]"
            >
                {playing ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
            </button>
        </div>
    );
}