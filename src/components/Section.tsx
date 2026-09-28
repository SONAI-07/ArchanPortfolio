import type { ReactNode } from "react";

export function SectionHeader({ title, right }: { title: string; right?: ReactNode }) {
    return (
        <div className="hatch relative left-1/2 w-screen -translate-x-1/2 border-y border-[var(--border)]">
            <div className="rail-left rail-right mx-auto flex w-full max-w-[1080px] items-center justify-between gap-4 bg-[var(--bg)] px-6 py-4 md:px-9">
                <h2 className="display text-2xl md:text-3xl">{title}</h2>
                {right}
            </div>
        </div>
    );
}

export function SectionBody({ children, className = "" }: { children: ReactNode; className?: string }) {
    return <div className={`px-6 py-10 md:px-9 md:py-12 ${className}`}>{children}</div>;
}