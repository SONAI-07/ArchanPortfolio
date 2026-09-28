"use client";
import { useEffect, useRef, useState } from "react";

const P = 2, COLS = 20, ROWS = 12;

const SIT = [
    "..............w.w...", "..............www...", ".............wwwww..",
    ".............w.www..", ".............wwwww..", ".............wwww...",
    "............wwwwww..", ".w..........wwwwww..", ".ww.........wwwwww..",
    "..ww........wwwwww..", "...wwwwwwwwwwwwww...", "....wwwwwwwwwwww....",
];
const TOP = [
    "..............w.w...", "..............www...", ".............wwwww..",
    ".............w.www..", ".w...........wwwww..", ".ww.........wwwwww..",
    "..ww..wwwwwwwwwww...", "...wwwwwwwwwwwww....", "..wwwwwwwwwwwwww....",
];
const RUN_EXT = [...TOP, ".ww....ww....wwww...", ".w......ww......ww..", "w........w.......w.."];
const RUN_TUCK = [...TOP, "....wwww....wwww....", ".....ww......ww.....", "...................."];
const STRETCH = [
    "........w.w.........", "........www.........", ".......wwwww........",
    ".......w.www........", ".......wwwww........", ".......wwwww........",
    ".......wwwww........", ".......wwwww........", ".......w.w.w........",
    ".......w...w........", "......w.....w.......", "....................",
];
const CURL = [
    "........w.w.........", ".......wwwww........", "......wwwwwww.......",
    "......wwwwwww.......", "......wwwwwww.......", ".......wwwww........",
    "........w.w.........", "........w...........", "....................",
    "....................", "....................", "....................",
];

function toShadow(f: string[]): string {
    const p: string[] = [];
    for (let y = 0; y < f.length; y++)
        for (let x = 0; x < f[y].length; x++)
            if (f[y][x] === "w") p.push(`${x * P}px ${y * P}px`);
    return p.join(",");
}

const SH = {
    sit: toShadow(SIT),
    runExt: toShadow(RUN_EXT),
    runTuck: toShadow(RUN_TUCK),
    stretch: toShadow(STRETCH),
    curl: toShadow(CURL),
};

export function SpriteCursor() {
    const wrapRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const [shadow, setShadow] = useState(SH.sit);

    useEffect(() => {
        if (window.matchMedia("(pointer: coarse)").matches) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const wrap = wrapRef.current;
        const inner = innerRef.current;
        if (!wrap || !inner) return;

        const pos = { x: innerWidth * 0.25, y: innerHeight * 0.7 };
        const target = { ...pos };

        // DOM writes (allowed in effects): place the cat at its start spot and fade it in.
        wrap.style.transform = `translate3d(${pos.x - (COLS * P) / 2}px, ${pos.y - (ROWS * P) / 2}px, 0)`;
        wrap.style.opacity = "0.95";

        let mode: "sit" | "crouch" | "run" = "sit";
        let modeT = 0, poseIdx = 0, poseT = 0, bobT = 0, last = 0, raf = 0;

        const onMove = (e: PointerEvent) => {
            target.x = e.clientX;
            target.y = e.clientY + 24;
        };
        addEventListener("pointermove", onMove, { passive: true });

        const loop = (t: number) => {
            const dt = last ? Math.min(48, t - last) : 16;
            last = t;
            const dx = target.x - pos.x, dy = target.y - pos.y;
            const dist = Math.hypot(dx, dy);
            modeT += dt; poseT += dt; bobT += dt;
            let rot = 0, facing = 1, squash = 1, bob = 0;

            if (mode === "sit") {
                if (poseT > 120) { poseT = 0; setShadow(SH.sit); }
                if (dist > 46) { mode = "crouch"; modeT = 0; }
            } else if (mode === "crouch") {
                squash = 0.82;
                setShadow(SH.sit);
                if (modeT > 90) { mode = "run"; modeT = 0; poseT = 0; }
            } else {
                const speed = Math.min(3.0, dist * 0.09) * (dt / 16.5);
                pos.x += (dx / dist) * speed;
                pos.y += (dy / dist) * speed;
                bob = -Math.abs(Math.sin(bobT * 0.014)) * 3;

                const theta = (Math.atan2(dy, dx) * 180) / Math.PI;
                facing = dx >= 0 ? 1 : -1;
                rot = facing === 1 ? theta : theta > 0 ? theta - 180 : theta + 180;
                const vertical = Math.abs(rot) > 60;

                if (poseT > 150) { poseT = 0; poseIdx ^= 1; }
                if (vertical) {
                    rot = 0; facing = 1;
                    setShadow(dy < 0 ? (poseIdx ? SH.stretch : SH.curl) : (poseIdx ? SH.curl : SH.stretch));
                } else {
                    setShadow(poseIdx ? SH.runExt : SH.runTuck);
                }
                if (dist < 8) { mode = "sit"; poseT = 0; setShadow(SH.sit); bob = 0; }
            }

            wrap.style.transform = `translate3d(${pos.x - (COLS * P) / 2}px, ${pos.y - (ROWS * P) / 2 + bob}px, 0)`;
            inner.style.transform = `rotate(${rot}deg) scaleX(${facing}) scaleY(${squash})`;
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);

        return () => {
            removeEventListener("pointermove", onMove);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div
            ref={wrapRef}
            aria-hidden
            className="pointer-events-none fixed left-0 top-0 z-[120] opacity-0 transition-opacity duration-500"
        >
            <div ref={innerRef} style={{ width: COLS * P, height: ROWS * P, transformOrigin: "center" }}>
                <div className="text-[var(--ink)]" style={{ width: P, height: P, boxShadow: shadow }} />
            </div>
        </div>
    );
}