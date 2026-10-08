"use client";
import { useState, useEffect } from "react";
import { scrollToTop } from "@/lib/scroll";

export function Footer() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            setTime(
                new Date().toLocaleTimeString("en-US", {
                    hour12: true, hour: "2-digit", minute: "2-digit", second: "2-digit",
                })
            );
        };
        updateTime();
        const id = setInterval(updateTime, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <footer className="px-6 pb-10 pt-16 md:px-9">
            <div className="space-y-5 border-t border-[var(--border)] pt-8 text-center">
                <p className="micro">
                    designed & developed by <span className="text-[var(--ink)]">Archan Banerjee</span>
                </p>
                <p className="font-mono text-[10px] text-[var(--muted)]">
                    © {new Date().getFullYear()} · all rights reserved · built with Next.js, Tailwind & too much Coldplay
                </p>
                <div className="flex items-center justify-center gap-2 font-mono text-[10px] text-[var(--muted)]">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--ok)]" />
                    <span>India · {time}</span>
                </div>
                <button onClick={scrollToTop} className="micro mx-auto flex items-center gap-2 transition-colors hover:text-[var(--ink)]">
                    back to top ↑
                </button>
            </div>
        </footer>
    );
}