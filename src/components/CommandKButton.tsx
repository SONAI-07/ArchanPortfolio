"use client";

import { Command } from "lucide-react";

export function CommandKButton() {
    const openPalette = () => {
        window.dispatchEvent(new Event("palette:open"));
    };

    return (
        <button
            onClick={openPalette}
            className="flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2 font-mono text-xs text-[var(--ink-soft)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--ink)]"
        >
            <Command size={14} />
            <span>K</span>
        </button>
    );
}