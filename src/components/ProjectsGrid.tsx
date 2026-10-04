"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon } from "./icons";
import { projects } from "@/lib/data";
import { Globe, X, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";


export function ProjectsGrid() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const featured = projects.filter((p) => p.featured);
    const hidden = projects.filter((p) => !p.featured);

    return (
        <section id="projects" className="px-6 pt-14 pb-8 md:px-9 md:pt-20 md:pb-10">
            {/* centered title — hybrid grammar */}
            <div className="text-center">
                <h2 className="section-title">Projects</h2>
                <div className="title-underline" />
                <p className="micro mt-3">( selected work — proof over promises )</p>
            </div>

            {/* recording rows */}
            <div className="mt-10 space-y-6">
                {featured.map((project, idx) => (
                    <article
                        key={project.id}
                        className="card group grid overflow-hidden transition-colors hover:border-[var(--muted)] md:grid-cols-[44%_1fr]"
                    >
                        {/* LEFT: image + viewfinder */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-elev)] md:aspect-auto md:min-h-[280px]">
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={`${project.title} preview`}
                                    className="img-mono absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--panel),var(--bg-elev))] opacity-60" />
                            )}

                            <p className="micro absolute left-4 top-4 z-10">CASE {String(idx + 1).padStart(2, "0")}</p>

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

                        {/* RIGHT: story + actions */}
                        <div className="flex flex-col justify-between gap-6 p-7 md:p-9">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className="display text-2xl md:text-3xl">{project.title}</h3>
                                    <span className="font-mono text-xs text-[var(--muted)]">{project.year}</span>
                                </div>
                                <p className="leading-relaxed text-[var(--ink-soft)] line-clamp-3">{project.description}</p>
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {project.tags.slice(0, 6).map((tag) => (
                                        <span key={tag} className="pill text-[10px]">{tag}</span>
                                    ))}
                                    {project.tags.length > 6 && (
                                        <span className="pill text-[10px]">+{project.tags.length - 6}</span>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <a href="#" className="btn-pill px-5 py-2.5 text-[13px]">
                                    View Project <ArrowUpRight size={14} />
                                </a>
                                <a
                                    href="#"
                                    aria-label={`${project.title} repository`}
                                    className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] text-[var(--ink-soft)] transition-colors hover:border-[var(--muted)] hover:text-[var(--ink)]"
                                >
                                    <GithubIcon size={15} />
                                </a>
                                <a
                                    href="#"
                                    aria-label={`${project.title} live site`}
                                    className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] text-[var(--ink-soft)] transition-colors hover:border-[var(--muted)] hover:text-[var(--ink)]"
                                >
                                    <Globe size={15} />
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 md:gap-5">
        <span aria-hidden className="flex items-center gap-1 text-[var(--muted)]">
          <ChevronLeft size={14} />
          <span className="flow-line flow-left w-12 md:w-24" />
        </span>
                <a
                    href="https://github.com/SONAI-07?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline min-w-[240px] justify-center px-10 md:min-w-[300px] md:px-14"
                >
                    All my Builds <ArrowUpRight size={14} />
                </a>
                <span aria-hidden className="flex items-center gap-1 text-[var(--muted)]">
          <span className="flow-line flow-right w-12 md:w-24" />
          <ChevronRight size={14} />
        </span>
            </div>

            {/* ALL PROJECTS MODAL — unchanged */}
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