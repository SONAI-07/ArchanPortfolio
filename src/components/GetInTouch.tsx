"use client";
import { scrollToId } from "@/lib/scroll";

export function GetInTouch() {
    return (
        <button onClick={() => scrollToId("contact")} className="btn-outline hidden md:inline-flex">
            Get in Touch
        </button>
    );
}