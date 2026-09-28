"use client";
import { useState, useEffect } from "react";

export function Footer() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            setTime(new Date().toLocaleTimeString("en-US", {
                hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit'
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="border-t border-[var(--border)] mt-24 pt-8 pb-12 text-center space-y-4">
            <p className="text-[var(--ink-soft)]">
                Designed & Developed by <span className="font-semibold text-[var(--ink)]">Archan Banerjee</span>
            </p>
            <p className="font-mono text-xs text-[var(--muted)]">
                © {new Date().getFullYear()} All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-2 font-mono text-xs text-[var(--muted)]">
                <span className="h-2 w-2 rounded-full bg-[var(--ok)] animate-pulse"></span>
                <span>India · {time}</span>
            </div>
        </footer>
    );
}