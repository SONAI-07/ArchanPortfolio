import Image from "next/image";
import { profileData } from "@/lib/data";
import { VibesBox } from "./VibesBox";

const CAPABILITIES = [
    "Applied AI Engineer",
    "Backend Developer",
    "Growth & Marketing",
    "Public Speaker",
];

export function IntroCard() {
    return (
        <div className="card p-8 md:p-10">
            <p className="micro mb-6">01 — INTRO</p>

            <div className="grid gap-10 md:grid-cols-[1.15fr_1fr]">
                {/* LEFT: story + capability bullets */}
                <div className="flex h-full flex-col space-y-5">
                    <div>
                        <h2 className="display text-3xl md:text-4xl">Hey, I am Archan.</h2>
                        <p className="text-base mt-2">NIT HAMIRPUR . INDIA </p>
                    </div>
                    <p className="leading-relaxed text-[var(--ink-soft)]">{profileData.aboutBullets[0]}</p>
                    <p className="leading-relaxed text-[var(--ink-soft)]">{profileData.aboutBullets[1]}</p>
                    <p className="flex items-center gap-2 font-mono text-xs text-[var(--muted)]">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--ok)]" />
                        {profileData.aboutBullets[2]}
                    </p>

                    <ul className="grid flex-1 grid-rows-4 gap-3 pt-2">
                        {CAPABILITIES.map((role) => (
                            <li
                                key={role}
                                className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-5 transition-colors hover:border-[var(--muted)] hover:bg-[var(--bg-elev)]"
                            >
                                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--muted)]" />
                                <span className="text-[15px] font-medium text-[var(--ink)]">{role}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RIGHT: photo + vibes box */}
                <div className="flex flex-col gap-4 self-start">
                    <div className="relative overflow-hidden rounded-xl border border-[var(--border)]">
                        <div className="relative aspect-[4/5] w-full">
                            <Image
                                src="/hero-photo.jpg"
                                alt="Archan Banerjee — the operator"
                                fill
                                sizes="(max-width: 768px) 100vw, 420px"
                                className="img-mono object-cover"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg-elev)] via-transparent to-transparent opacity-80" />
                        </div>
                    </div>
                    <VibesBox />
                </div>
            </div>

            <div className="mt-8 border-t border-[var(--border)] pt-6 text-center">
                <p className="display text-lg italic text-[var(--ink-soft)] md:text-xl">
                    “Somewhere, something incredible is waiting to be known.”
                </p>
                <p className="micro mt-3">— Carl Sagan</p>
            </div>
        </div>
    );
}