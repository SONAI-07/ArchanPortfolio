import Image from "next/image";
import { MapPin, Star, Command, GraduationCap  } from "lucide-react";
import { profileData } from "@/lib/data";
import { RotatingRole } from "@/components/RotatingRole";
import { NowPlaying } from "@/components/NowPlaying";
import { ContactLinks } from "@/components/ContactLinks";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Experience } from "@/components/Experience";
import { TechStack } from "@/components/TechStack";
import { GithubHeatmap } from "@/components/GithubHeatmap";
import { Footer } from "@/components/Footer";
import { SectionHeader, SectionBody } from "@/components/Section";
import { CommandKButton } from "@/components/CommandKButton";

export default function Home() {
    return (
        <div>
            {/* HERO */}
            <section className="grid grid-cols-1 items-center gap-10 px-6 pt-10 md:grid-cols-2 md:gap-12 md:px-9 md:pt-14">
                <div className="order-2 space-y-6 md:order-1">
                    <div className="space-y-2">
                        <h1 className="display text-5xl leading-tight md:text-6xl lg:text-7xl">{profileData.name}</h1>
                        <RotatingRole roles={profileData.roles} />
                    </div>
                    <div className="space-y-2 font-mono text-sm text-[var(--muted)]">
                        <div className="flex items-center gap-2">
                            <GraduationCap size={14} />
                            <span>{profileData.education}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={14} />
                            <span>{profileData.location}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 pt-2">
                        <button className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--border)] text-[var(--ink-soft)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--ink)]">
                            <Star size={18} />
                        </button>

                        <CommandKButton />

                    </div>
                    <div className="max-w-sm border-l border-[var(--border)] pl-5 pt-2">
                        <p className="display text-xl italic leading-snug text-[var(--ink-soft)]">
                            &ldquo;Somewhere, something incredible is waiting to be known.&rdquo;
                        </p>
                        <p className="mt-3 font-mono text-[13px] uppercase tracking-[0.2em] text-[var(--muted)]">— Carl Sagan</p>
                    </div>
                </div>

                <div className="order-1 relative md:order-2">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--panel)] shadow-2xl">
                        <Image
                            src="/hero-photo.jpg"
                            alt="Archan Banerjee workspace"
                            fill
                            priority
                            className="img-mono object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-60" />
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section id="about">
                <SectionHeader title="About" />
                <SectionBody>
                    <ul className="max-w-3xl list-disc space-y-4 pl-5 text-[var(--ink-soft)] marker:text-[var(--muted)]">
                        {profileData.aboutBullets.map((bullet, i) => (
                            <li key={i} className="pl-2 leading-relaxed">{bullet}</li>
                        ))}
                    </ul>
                    <NowPlaying />
                </SectionBody>
            </section>

            <ContactLinks />
            <ProjectsGrid />
            <Experience />
            <TechStack />
            <GithubHeatmap />
            <Footer />
        </div>
    );
}