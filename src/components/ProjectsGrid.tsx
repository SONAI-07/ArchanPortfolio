"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, X } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects } from "@/lib/data";
import { SectionHeader, SectionBody } from "./Section";

export function ProjectsGrid() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const featured = projects.filter((p) => p.featured);
    const hidden = projects.filter((p) => !p.featured);

    return (
        <section id="projects">
            <SectionHeader
                title="Projects"
                right={
                    <button onClick={() => setIsModalOpen(true)} className="pill transition-colors hover:bg-[var(--bg-elev)]">
                        View All Projects ›
                    </button>
                }
            />
            <SectionBody>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {featured.map((project) => (
                        <div key={project.id} className="group overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--panel)] transition-colors hover:border-[var(--ink-soft)]">
                            <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-elev)]">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--panel),var(--bg-elev))] opacity-50"></div>
                                <div className="pointer-events-none absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <div className="absolute left-3 top-3 z-10 flex items-center gap-2 font-mono text-[10px] text-white">
                                        <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--rec)]"></span> REC
                                    </div>
                                    <div className="absolute right-3 top-3 z-10 font-mono text-[10px] text-white">ISO 400</div>
                                    <div className="absolute left-4 top-4 h-4 w-4 border-l-2 border-t-2 border-white"></div>
                                    <div className="absolute right-4 top-4 h-4 w-4 border-r-2 border-t-2 border-white"></div>
                                    <div className="absolute bottom-4 left-4 h-4 w-4 border-b-2 border-l-2 border-white"></div>
                                    <div className="absolute bottom-4 right-4 h-4 w-4 border-b-2 border-r-2 border-white"></div>
                                </div>
                            </div>

                            <div className="space-y-4 p-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-[var(--ink)]">{project.title}</h3>
                                    <span className="font-mono text-xs text-[var(--muted)]">{project.year}</span>
                                </div>
                                <p className="text-sm leading-relaxed text-[var(--ink-soft)]">{project.description}</p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tags.slice(0, 5).map((tag) => (
                                        <span key={tag} className="pill text-[10px]">{tag}</span>
                                    ))}
                                    {project.tags.length > 5 && <span className="pill text-[10px]">+{project.tags.length - 5}</span>}
                                </div>
                                <div className="flex items-center gap-4 border-t border-[var(--border)] pt-4">
                                    <a href="#" aria-label={`${project.title} live site`} className="text-[var(--muted)] hover:text-[var(--ink)]"><Globe size={16} /></a>
                                    <a href="#" aria-label={`${project.title} repository`} className="text-[var(--muted)] hover:text-[var(--ink)]"><GithubIcon size={16} /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionBody>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            className="w-full max-w-lg rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] p-8 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="mb-6 flex items-center justify-between">
                                <h3 className="display text-2xl">All Projects</h3>
                                <button onClick={() => setIsModalOpen(false)} aria-label="close" className="text-[var(--muted)] hover:text-[var(--ink)]">
                                    <X size={20} />
                                </button>
                            </div>
                            <p className="mb-6 font-mono text-xs text-[var(--muted)]">{hidden.length} more beyond the featured work</p>
                            {hidden.map((project) => (
                                <div key={project.id} className="space-y-3 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-semibold text-[var(--ink)]">{project.title}</h4>
                                        <span className="font-mono text-xs text-[var(--muted)]">{project.year}</span>
                                    </div>
                                    <p className="text-sm text-[var(--ink-soft)]">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="pill text-[10px]">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}