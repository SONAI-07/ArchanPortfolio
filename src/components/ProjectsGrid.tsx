"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, X } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects } from "@/lib/data";

export function ProjectsGrid() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const featured = projects.filter(p => p.featured);
    const hidden = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="space-y-8">
            {/* Header */}
            <div className="relative -mx-6 md:-mx-10 border-y border-[var(--border)] bg-[var(--bg)]">
                <div className="hatch absolute inset-0 opacity-50" />
                <div className="relative px-6 py-4 md:px-10 flex items-center justify-between">
                    <h2 className="display text-2xl md:text-3xl">Projects</h2>
                    <button onClick={() => setIsModalOpen(true)} className="pill hover:bg-[var(--bg-elev)] transition-colors">
                        View All Projects ›
                    </button>
                </div>
            </div>

            {/* Featured Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featured.map((project) => (
                    <div key={project.id} className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] overflow-hidden hover:border-[var(--ink-soft)] transition-colors">
                        {/* Image Placeholder with Viewfinder Overlay */}
                        <div className="relative aspect-[16/10] bg-[var(--bg-elev)] overflow-hidden">
                            {/* Replace this div with <Image> later when you have project screenshots */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--panel),var(--bg-elev))] opacity-50"></div>

                            {/* THE VIEWFINDER EFFECT */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/20">
                                <div className="absolute top-3 left-3 flex items-center gap-2 font-mono text-[10px] text-white z-10">
                                    <span className="h-2 w-2 rounded-full bg-[var(--rec)] animate-pulse"></span> REC
                                </div>
                                <div className="absolute top-3 right-3 font-mono text-[10px] text-white z-10">ISO 400</div>
                                {/* Corner brackets */}
                                <div className="absolute top-4 left-4 h-4 w-4 border-l-2 border-t-2 border-white"></div>
                                <div className="absolute top-4 right-4 h-4 w-4 border-r-2 border-t-2 border-white"></div>
                                <div className="absolute bottom-4 left-4 h-4 w-4 border-l-2 border-b-2 border-white"></div>
                                <div className="absolute bottom-4 right-4 h-4 w-4 border-r-2 border-b-2 border-white"></div>
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-[var(--ink)]">{project.title}</h3>
                                <span className="font-mono text-xs text-[var(--muted)]">{project.year}</span>
                            </div>
                            <p className="text-sm text-[var(--ink-soft)] leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {project.tags.slice(0, 5).map((tag) => (
                                    <span key={tag} className="pill text-[10px]">{tag}</span>
                                ))}
                                {project.tags.length > 5 && <span className="pill text-[10px]">+{project.tags.length - 5}</span>}
                            </div>
                            <div className="flex items-center gap-4 pt-4 border-t border-[var(--border)]">
                                <a href="#" className="text-[var(--muted)] hover:text-[var(--ink)]"><Globe size={16} /></a>
                                <a href="#" className="text-[var(--muted)] hover:text-[var(--ink)]"><GithubIcon size={16} /></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* All Projects Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
                            className="w-full max-w-lg rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] p-8 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="display text-2xl">All Projects</h3>
                                <button onClick={() => setIsModalOpen(false)} className="text-[var(--muted)] hover:text-[var(--ink)]">
                                    <X size={20} />
                                </button>
                            </div>
                            <p className="font-mono text-xs text-[var(--muted)] mb-6">
                                {hidden.length} more beyond the featured work
                            </p>

                            {hidden.map((project) => (
                                <div key={project.id} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 space-y-3">
                                    <div className="flex justify-between items-center">
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