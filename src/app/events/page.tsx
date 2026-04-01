"use client";

import { DBXNav, DBXFooter } from "../home-screen";
import EVENTS from "../../data/events.json";
import { ArrowRight, Calendar, MarkerPin01 } from "@untitledui/icons";

const C = {
    forestDeep: "#010a0b",
    forest:     "#083335",
    forestMid:  "#0d4548",
    red:        "#841010",
    redLight:   "#9a1313",
    bronze:     "#a27b5b",
    slate:      "#3f4e4f",
    cream:      "#dcd7c9",
    creamLight: "#f4f2ed",
    creamMid:   "#ece7da",
    white:      "#ffffff",
    paleBlue:   "#e8f0f0",
} as const;

const serif: React.CSSProperties = { fontFamily: "var(--font-dm-serif)" };

// Group events by year-month derived from the date string
function groupByMonth(events: typeof EVENTS) {
    const groups: Record<string, typeof EVENTS> = {};
    events.forEach((e) => {
        // Extract a rough month label — use everything after the last space as year,
        // and everything before as day/month. e.g. "16–17 May 2026" → "May 2026"
        const parts = e.date.trim().split(" ");
        const key = parts.length >= 2 ? parts.slice(-2).join(" ") : e.date;
        if (!groups[key]) groups[key] = [];
        groups[key].push(e);
    });
    return groups;
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
    "All Levels":  { bg: "rgba(8,51,53,0.1)",    text: "#083335" },
    "Corporate":   { bg: "rgba(132,16,16,0.1)",   text: "#841010" },
    "Youth Elite": { bg: "rgba(162,123,91,0.12)", text: "#7a5535" },
    "Youth":       { bg: "rgba(162,123,91,0.12)", text: "#7a5535" },
    "Scouts":      { bg: "rgba(8,51,53,0.08)",    text: "#083335" },
};

function categoryStyle(cat: string) {
    return CATEGORY_COLORS[cat] ?? { bg: "rgba(63,78,79,0.1)", text: C.slate };
}

export default function EventsPage() {
    const grouped = groupByMonth(EVENTS);
    const months = Object.keys(grouped);

    return (
        <div className="overflow-x-hidden">
            <DBXNav />
            <main>
                {/* Breadcrumb */}
                <div style={{ background: C.forest, paddingTop: "80px" }}>
                    <div className="mx-auto max-w-container px-4 py-3 md:px-8">
                        <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                            <a href="/" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Home</a>
                            <span className="mx-2">›</span>
                            <span style={{ color: C.cream }}>Events Calendar</span>
                        </span>
                    </div>
                </div>

                {/* Hero */}
                <section style={{ background: C.forest, paddingBottom: 0, overflow: "hidden", position: "relative" }}>
                    <div className="pointer-events-none absolute inset-0" aria-hidden="true"
                        style={{ background: "radial-gradient(ellipse 60% 80% at 85% 40%, rgba(162,123,91,0.12) 0%, transparent 60%)" }} />
                    <div className="relative mx-auto max-w-container px-4 py-20 md:px-8">
                        <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
                            style={{ color: C.cream, letterSpacing: "0.12em" }}>
                            <span className="inline-block h-0.5 w-6" style={{ background: C.bronze }} />
                            Race Calendar 2026
                        </div>
                        <h1 className="mb-4 text-white" style={{ ...serif, fontSize: "clamp(36px,5vw,64px)", lineHeight: 1.08 }}>
                            Upcoming Events
                        </h1>
                        <p className="max-w-xl text-lg font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                            Dragon boat festivals, corporate challenges, and elite youth competitions across London and beyond. Register your crew or enquire about availability below.
                        </p>
                    </div>
                    <div className="relative h-12" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" preserveAspectRatio="none"
                            className="absolute inset-0 h-full w-full" style={{ fill: C.creamLight }}>
                            <path d="M0,24 C360,48 720,0 1080,24 C1260,36 1350,12 1440,24 L1440,48 L0,48 Z" />
                        </svg>
                    </div>
                </section>

                {/* Filter bar */}
                <section style={{ background: C.creamLight, borderBottom: `1px solid ${C.creamMid}` }}>
                    <div className="mx-auto flex max-w-container flex-wrap items-center gap-2 px-4 py-4 md:px-8">
                        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: C.slate, marginRight: "8px" }}>Filter:</span>
                        {["All", "All Levels", "Corporate", "Youth Elite"].map((cat) => (
                            <span key={cat}
                                className="cursor-pointer rounded-full px-3 py-1 text-xs font-semibold transition-all"
                                style={cat === "All"
                                    ? { background: C.forest, color: C.cream }
                                    : { background: C.creamMid, color: C.slate }}>
                                {cat}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Calendar listing */}
                <section style={{ background: C.creamLight, padding: "60px 0 80px" }}>
                    <div className="mx-auto max-w-container px-4 md:px-8">
                        {months.length === 0 ? (
                            <p className="text-center text-sm" style={{ color: C.slate }}>No events scheduled yet — check back soon.</p>
                        ) : (
                            <div className="space-y-14">
                                {months.map((month) => (
                                    <div key={month}>
                                        {/* Month header */}
                                        <div className="mb-6 flex items-center gap-4">
                                            <div className="rounded-xl px-4 py-2"
                                                style={{ background: C.forest }}>
                                                <span className="text-sm font-bold text-white">{month}</span>
                                            </div>
                                            <div className="h-px flex-1" style={{ background: C.creamMid }} />
                                        </div>

                                        {/* Event cards for this month */}
                                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                                            {grouped[month].map((event, i) => {
                                                const catStyle = categoryStyle(event.category);
                                                return (
                                                    <div key={i}
                                                        className="group overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                                        style={{ background: C.white, border: `1px solid ${C.creamMid}` }}>
                                                        {/* Accent bar */}
                                                        <div className="h-1.5 w-full" style={{ background: event.accent }} />

                                                        <div className="p-7">
                                                            {/* Category badge */}
                                                            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
                                                                style={{ background: catStyle.bg, color: catStyle.text }}>
                                                                {event.category}
                                                            </span>

                                                            {/* Title */}
                                                            <h2 className="mt-3 text-xl font-bold leading-snug" style={{ ...serif, color: C.forestDeep }}>
                                                                {event.title}
                                                            </h2>

                                                            {/* Meta */}
                                                            <div className="mt-4 space-y-2">
                                                                <div className="flex items-center gap-2 text-sm" style={{ color: C.slate }}>
                                                                    <Calendar className="size-4 shrink-0" style={{ color: C.bronze }} />
                                                                    <span>{event.date}</span>
                                                                </div>
                                                                <div className="flex items-center gap-2 text-sm" style={{ color: C.slate }}>
                                                                    <MarkerPin01 className="size-4 shrink-0" style={{ color: C.bronze }} />
                                                                    <span>{event.location}</span>
                                                                </div>
                                                            </div>

                                                            {/* Actions */}
                                                            <div className="mt-6 flex gap-3">
                                                                <a href="/#contact"
                                                                    className="flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-sm font-bold text-white transition-all"
                                                                    style={{ background: C.forest }}
                                                                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = C.forestMid)}
                                                                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = C.forest)}>
                                                                    Register <ArrowRight className="size-3.5" />
                                                                </a>
                                                                <a href="/#contact"
                                                                    className="flex items-center justify-center rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all"
                                                                    style={{ borderColor: C.creamMid, color: C.slate }}
                                                                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = C.forest)}
                                                                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = C.creamMid)}>
                                                                    Enquire
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA band */}
                <section className="px-4 py-16" style={{ background: C.forestDeep }}>
                    <div className="mx-auto max-w-container md:px-8">
                        <div className="grid gap-10 md:grid-cols-2 md:items-center">
                            <div>
                                <div className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: C.bronze, letterSpacing: "0.12em" }}>
                                    Want to run an event?
                                </div>
                                <h2 className="mb-4 text-white" style={{ ...serif, fontSize: "clamp(26px,3vw,40px)", lineHeight: 1.15 }}>
                                    Host your own dragon boat race
                                </h2>
                                <p className="text-base font-light leading-relaxed" style={{ color: "rgba(220,215,201,0.6)" }}>
                                    DBX organises bespoke corporate regattas, charity fundraiser races, and community festival events across London's docklands. We handle everything — venue, safety, equipment, officiating, and ceremonies.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 sm:flex-row md:justify-end">
                                <a href="/#contact"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-sm font-bold text-white transition-all"
                                    style={{ background: C.red }}
                                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = C.redLight)}
                                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = C.red)}>
                                    Enquire about hosting <ArrowRight className="size-4" />
                                </a>
                                <a href="/"
                                    className="inline-flex items-center justify-center rounded-xl px-7 py-4 text-sm font-semibold text-white transition-all"
                                    style={{ border: "1px solid rgba(220,215,201,0.2)" }}
                                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "rgba(220,215,201,0.07)")}
                                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "transparent")}>
                                    Back to home
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <DBXFooter />
        </div>
    );
}
