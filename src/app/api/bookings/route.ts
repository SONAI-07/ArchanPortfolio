import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

export async function POST(req: Request) {
    const token = process.env.NOTION_TOKEN;
    const databaseId = process.env.NOTION_DATABASE_ID;
    if (!token || !databaseId) {
        return NextResponse.json({ ok: false, error: "server misconfigured" }, { status: 500 });
    }

    let body: { name?: string; date?: string; slot?: string; reason?: string };
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ ok: false, error: "bad request" }, { status: 400 });
    }

    const name = (body.name ?? "").trim().slice(0, 200);
    const date = (body.date ?? "").trim();
    const slot = (body.slot ?? "").trim();
    const reason = (body.reason ?? "").trim().slice(0, 1500);
    if (!name || !date || !slot) {
        return NextResponse.json({ ok: false, error: "name, date and slot are required" }, { status: 400 });
    }

    try {
        const notion = new Client({ auth: token });
        await notion.pages.create({
            parent: { database_id: databaseId },
            properties: {
                // EXACT, case-sensitive names from your Notion table:
                NAME: { title: [{ text: { content: name } }] },        // "Aa" title column
                Date: { date: { start: date } },                        // calendar column
                SLOT: { select: { name: slot } },                       // select column
                REASON: { rich_text: reason ? [{ text: { content: reason } }] : [] }, // text column
                // TIMESTAMP = Created-time → filled by Notion itself
            },
        });
        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("[bookings] notion write failed:", err);
        return NextResponse.json({ ok: false, error: "notion write failed" }, { status: 502 });
    }
}