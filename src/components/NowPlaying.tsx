"use client";
import { useRef, useState, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

const fmt = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

export function NowPlaying() {
    const a = useRef<HTMLAudioElement>(null);
    const [playing, setPlaying] = useState(false);
    const [cur, setCur] = useState(0);
    const [dur, setDur] = useState(0); // real duration, read from the audio file itself

    useEffect(() => {
        let id = 0;
        const tick = () => {
            if (a.current) setCur(a.current.currentTime);
            id = requestAnimationFrame(tick);
        };
        if (playing) id = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(id);
    }, [playing]);

    const toggle = () => {
        const el = a.current;
        if (!el) return;
        if (playing) el.pause();
        else el.play().catch((e) => console.log("Audio play failed:", e));
        setPlaying(!playing);
    };

    const seek = (f: number) => {
        const el = a.current;
        if (!el || !dur) return;
        el.currentTime = Math.max(0, Math.min(dur, el.currentTime + f));
        setCur(el.currentTime);
    };

    const progress = dur ? (cur / dur) * 100 : 0;

    return (
        <div className="flex items-center gap-5 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 mt-8 max-w-2xl">
            <audio
                ref={a}
                src="/music.mp3"
                onEnded={() => { setPlaying(false); setCur(0); }}
                onLoadedMetadata={(e) => setDur(e.currentTarget.duration)}
                preload="metadata"
            />

            {/* Vinyl */}
            <div className="relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                <div
                    className={`h-full w-full rounded-full border border-[var(--border)] bg-[radial-gradient(circle,var(--bg-elev)_18%,var(--panel)_19%)] shadow-inner ${playing ? "animate-[spin_4s_linear_infinite]" : ""}`}
                />
                <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--ink)]" />
                <span
                    className="absolute right-1 top-1 h-10 w-[2px] origin-top rounded bg-[var(--ink-soft)] transition-transform duration-500 md:h-12"
                    style={{ transform: `rotate(${playing ? 28 : 8}deg)` }}
                />
            </div>

            {/* Track info + progress */}
            <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] tracking-[.2em] text-[var(--muted)]">NOW PLAYING</p>
                <p className="truncate text-sm font-medium text-[var(--ink)]">Adventure of a Lifetime</p>
                <p className="font-mono text-xs text-[var(--muted)]">Coldplay</p>

                <div className="mt-3 h-[3px] w-full rounded bg-[var(--border)]">
                    <div className="h-full rounded bg-[var(--ink)] transition-all duration-100" style={{ width: `${progress}%` }} />
                </div>
                <div className="mt-1 flex justify-between font-mono text-[10px] text-[var(--muted)]">
                    <span>{fmt(cur)}</span>
                    <span>{dur ? fmt(dur) : "--:--"}</span>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2 md:gap-3">
                <button onClick={() => seek(-15)} className="text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors">
                    <SkipBack size={16} />
                </button>
                <button
                    onClick={toggle}
                    className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] text-[var(--ink)] hover:bg-[var(--bg-elev)] transition-colors md:h-11 md:w-11"
                >
                    {playing ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
                </button>
                <button onClick={() => seek(15)} className="text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors">
                    <SkipForward size={16} />
                </button>
            </div>
        </div>
    );
}