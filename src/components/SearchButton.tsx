"use client";

export function SearchButton() {
    const openPalette = () => {
        window.dispatchEvent(new Event("palette:open"));
    };

    return (
        <button
            aria-label="search"
            onClick={openPalette}
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] transition-colors hover:bg-[var(--panel)]"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
            </svg>
        </button>
    );
}