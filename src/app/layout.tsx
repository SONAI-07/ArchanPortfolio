import type { Metadata, Viewport } from "next";
import { Playfair_Display, JetBrains_Mono, Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { ThemeToggle } from "@/components/ThemeToggle";
import { IndexSidebar } from "@/components/IndexSidebar";
import { CommandPalette } from "@/components/CommandPalette";
import { SpriteCursor } from "@/components/SpriteCursor";
import { NavLinks } from "@/components/NavLinks";
import { SearchButton } from "@/components/SearchButton";

const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "Archan Banerjee — AI & Full-Stack Developer",
    description:
        "AI & full-stack developer from NIT Hamirpur, building platforms across the AI stack: RAG systems, voice agents, and production full-stack products.",
    openGraph: {
        title: "Archan Banerjee — AI & Full-Stack Developer",
        description: "Projects across RAG, voice AI agents, and production full-stack platforms. NIT Hamirpur.",
        type: "website",
        siteName: "Archan Banerjee",
        images: [{ url: "/og.png", width: 1200, height: 630, alt: "Archan Banerjee — Portfolio" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Archan Banerjee — AI & Full-Stack Developer",
        description: "Projects across RAG, voice AI agents, and production full-stack platforms.",
        images: ["/og.png"],
    },
};

export const viewport: Viewport = { themeColor: "#0a0a0a" };

const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      if (!theme) {
        theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      }
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {}
  })();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${serif.variable} ${mono.variable} ${sans.variable}`} suppressHydrationWarning>
        <head>
            <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        </head>
        <body suppressHydrationWarning className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
        <MotionConfig reducedMotion="user">
            <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md">
                <div className="mx-auto flex h-16 w-full max-w-[1080px] items-center justify-between gap-6 px-6 md:px-9">
                    <div className="flex items-baseline gap-2">
                        <span className="display text-xl">Archan</span>
                        <span className="font-mono text-xs text-[var(--muted)]">/ar · chan/</span>
                    </div>
                    <NavLinks />
                    <div className="flex items-center gap-3">
                        <SearchButton />
                        <ThemeToggle />
                    </div>
                </div>
            </header>

            <main className="rail-left rail-right mx-auto w-full max-w-[1080px]">
                {children}
            </main>

            <IndexSidebar />
            <CommandPalette />
            <SpriteCursor />
        </MotionConfig>
        </body>
        </html>
    );
}