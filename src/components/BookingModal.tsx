"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

const SLOTS = ["10:00", "11:30", "13:00", "15:00", "16:30", "18:00", "20:00", "21:30"];
type Status = "idle" | "sending" | "sent" | "error";

export function BookingModal() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [slot, setSlot] = useState("");
    const [reason, setReason] = useState("");
    const [status, setStatus] = useState<Status>("idle");

    useEffect(() => {
        const openEvt = () => setOpen(true);
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
        window.addEventListener("booking:open", openEvt);
        window.addEventListener("keydown", onKey);
        return () => {
            window.removeEventListener("booking:open", openEvt);
            window.removeEventListener("keydown", onKey);
        };
    }, []);

    const reset = () => { setName(""); setDate(""); setSlot(""); setReason(""); setStatus("idle"); };
    const close = () => { setOpen(false); setTimeout(reset, 350); };
    const canSend = !!name.trim() && !!date && !!slot && status !== "sending";
    const today = new Date().toISOString().split("T")[0];

    const submit = async () => {
        if (!canSend) return;
        setStatus("sending");
        try {
            const res = await fetch("/api/bookings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: name.trim(), date, slot, reason: reason.trim() }),
            });
            const json = await res.json();
            if (res.ok && json.ok) {
                setStatus("sent");
                setTimeout(close, 1800);
            } else setStatus("error");
        } catch {
            setStatus("error");
        }
    };

    const fieldCls =
        "w-full rounded-xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--muted)]";

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[130] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
                    onClick={close}
                >
                    <motion.div
                        initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="card w-full max-w-md p-7 shadow-2xl md:p-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="mb-6 flex items-start justify-between">
                            <div>
                                <h3 className="display text-2xl">Book a call</h3>
                                <p className="micro mt-1">( ist slots · ~30 min )</p>
                            </div>
                            <button onClick={close} aria-label="close" className="text-[var(--muted)] transition-colors hover:text-[var(--ink)]">
                                <X size={18} />
                            </button>
                        </div>

                        <div className="space-y-5">
                            <div className="space-y-2">
                                <label htmlFor="bk-name" className="micro">Your name *</label>
                                <input id="bk-name" className={fieldCls} placeholder="Who am I talking to?" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="bk-date" className="micro">Pick a date *</label>
                                <input id="bk-date" type="date" min={today} className={fieldCls} value={date} onChange={(e) => setDate(e.target.value)} />
                            </div>

                            <div className="space-y-2">
                                <p className="micro">Pick a slot *</p>
                                <div className="grid grid-cols-4 gap-2">
                                    {SLOTS.map((s) => (
                                        <button
                                            key={s}
                                            onClick={() => setSlot(s)}
                                            className={`rounded-lg border px-2 py-2 font-mono text-xs transition-colors ${
                                                slot === s
                                                    ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--bg)]"
                                                    : "border-[var(--border)] text-[var(--ink-soft)] hover:border-[var(--muted)] hover:text-[var(--ink)]"
                                            }`}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="bk-reason" className="micro">Reason ( optional )</label>
                                <textarea id="bk-reason" rows={3} className={fieldCls} placeholder="What are we talking about?" value={reason} onChange={(e) => setReason(e.target.value)} />
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between gap-4">
                            <p className="micro">
                                {status === "error" ? "couldn't reach the sheet — mail me instead" : status === "sent" ? "logged — see you on the call ✓" : ""}
                            </p>
                            <button onClick={submit} disabled={!canSend} className="btn-pill disabled:cursor-not-allowed disabled:opacity-40">
                                {status === "sending" ? "Sending…" : status === "sent" ? "Logged ✓" : (<>Send Request <Send size={14} /></>)}
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}