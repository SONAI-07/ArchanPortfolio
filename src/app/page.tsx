
import { profileData } from "@/lib/data";
import { RotatingRole } from "@/components/RotatingRole";
import { ContactLinks } from "@/components/ContactLinks";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Experience } from "@/components/Experience";
import { TechStack } from "@/components/TechStack";
import { GithubHeatmap } from "@/components/GithubHeatmap";
import { Footer } from "@/components/Footer";
import { IntroCard } from "@/components/IntroCard";

import { TechMarquee } from "@/components/TechMarquee";
import { HeroVideo } from "@/components/HeroVideo";


export default function Home() {
    return (
        <div>
            {/* ============ HERO — the universe, and three true things ============ */}
            <section className="relative isolate flex min-h-[78vh] flex-col justify-center overflow-hidden px-6 pb-10 pt-24 text-center md:px-9">
                <HeroVideo />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-b from-transparent to-[var(--bg)]" />

                <div className="relative z-10 space-y-8">
                    <div className="space-y-4">
                        <h1 className="display mx-auto max-w-4xl text-4xl leading-tight md:text-6xl">
                            AI & Backend from the eyes of a Physics grad
                        </h1>
                        <div className="mx-auto w-full max-w-md">
                            <RotatingRole roles={profileData.roles} />
                        </div>
                    </div>

                    <TechMarquee />
                </div>
            </section>


            {/* INTRO CARD + DAILY DRIVERS */}
            <section id="about" className="px-6 py-14 md:px-9 md:py-20">
                <IntroCard />
               
            </section>


            <ProjectsGrid />
            <Experience />
            <ContactLinks />
            <TechStack />
            <GithubHeatmap />
            <Footer />
        </div>
    );
}