"use client";

import { DBXNav, DBXFooter } from "../../home-screen";

const C = {
    forest:     "#083335",
    forestMid:  "#0d4548",
    red:        "#841010",
    redLight:   "#9a1313",
    bronze:     "#a27b5b",
    slate:      "#3f4e4f",
    cream:      "#dcd7c9",
    creamLight: "#f4f2ed",
    white:      "#ffffff",
    paleBlue:   "#e8f0f0",
} as const;

const serif: React.CSSProperties = { fontFamily: "var(--font-dm-serif)" };

const CURRICULUM = [
    { icon: "🏃", title: "Physical Education",   desc: "Dragon boating directly supports PE curriculum objectives: cardiovascular activity, coordination, stroke mechanics, and competitive sport. Suitable for mixed ability groups at all fitness levels.", tag: "GCSE PE enrichment" },
    { icon: "🤝", title: "PSHE & Citizenship",   desc: "The nature of dragon boating — where no individual can win alone — creates natural opportunities to discuss teamwork, leadership, resilience, and inclusion in a PE or PSHE context.", tag: "Teamwork & leadership" },
    { icon: "🌏", title: "Cultural Learning",     desc: "Dragon boating originates in ancient China and has over 2,000 years of history. Sessions can incorporate cultural background for cross-curricular links to history, geography, or RE.", tag: "Cross-curricular potential" },
];

const OPTIONS = [
    {
        title: "Half-day PE taster",
        sub: "3 hours · One class group",
        body: "Perfect for a single class or tutor group. Safety briefing, technique session, and a timed race. Suits timetabled PE slots or reward days.",
        bullets: ["Up to 24 students per session", "Year 7–11 suitable", "Minimal teacher preparation needed"],
    },
    {
        title: "Full-day enrichment trip",
        sub: "6 hours · Multiple class groups",
        body: "Multiple crews rotate through coaching, drills, and racing. Ideal for a whole year group or inter-form competition day. We manage the full programme.",
        bullets: ["Up to 100 students accommodated", "Inter-form / inter-house format available", "Teachers get a genuine day off from instruction"],
    },
    {
        title: "GCSE PE practical assessment support",
        sub: "Flexible · Year 10–11",
        body: "Dragon boating can count as a GCSE PE practical activity. DBX coaches can provide assessment context and documentation to support student performance records.",
        bullets: [],
    },
];

const INCLUDED = [
    "All equipment — paddles, life jackets, boats",
    "BDA-qualified lead coach & assistants",
    "Qualified helm on every boat",
    "Safety boat and water safety cover throughout",
    "Full venue risk assessment (school copy available)",
    "Pre-visit teacher information pack",
    "Structured session plan aligned to PE objectives",
    "Post-session summary for school records",
];

export default function SchoolsPage() {
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
                            <a href="/youth" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Youth Development</a>
                            <span className="mx-2">›</span>
                            <span style={{ color: C.cream }}>Schools Programme</span>
                        </span>
                    </div>
                </div>

                {/* Hero */}
                <section style={{ background: C.forest, overflow: "hidden" }}>
                    <div className="mx-auto max-w-container px-4 py-20 md:px-8">
                        <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
                            style={{ color: C.cream, letterSpacing: "0.12em" }}>
                            <span className="inline-block h-0.5 w-6" style={{ background: C.bronze }} />
                            Schools · Dragon Boat
                        </div>
                        <h1 className="mb-5 max-w-3xl text-white" style={{ ...serif, fontSize: "clamp(32px,4.5vw,58px)", lineHeight: 1.1 }}>
                            Dragon boating for schools —{" "}
                            <em style={{ fontStyle: "italic", color: C.red }}>on the water in London</em>
                        </h1>
                        <p className="mb-9 max-w-xl text-lg font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                            PE enrichment days, curriculum-linked water activities, and competitive inter-form challenge sessions. Fully qualified coaches, risk-assessed London venues, and a day your students will talk about for years.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a href="#book" className="inline-block rounded-lg px-6 py-3.5 text-sm font-bold text-white transition-colors"
                                style={{ background: C.red }}
                                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = C.redLight)}
                                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = C.red)}>
                                Book a school session
                            </a>
                            <a href="#options" className="inline-block rounded-lg border px-6 py-3.5 text-sm font-medium"
                                style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}>
                                See session options ↓
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="mt-11 grid grid-cols-2 gap-3 sm:grid-cols-4">
                            {[
                                { num: "BDA", label: "Qualified coaches on every session" },
                                { num: "KS3", label: "to KS4 — Year 7 through Year 11" },
                                { num: "2",   label: "London waterside venues" },
                                { num: "RA",  label: "Full risk assessment provided" },
                            ].map((s) => (
                                <div key={s.num} className="rounded-xl p-5"
                                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                                    <div className="mb-1 text-2xl font-bold" style={{ ...serif, color: C.cream }}>{s.num}</div>
                                    <div className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.55)" }}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-12" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" preserveAspectRatio="none"
                            className="absolute inset-0 h-full w-full" style={{ fill: C.creamLight }}>
                            <path d="M0,24 C360,48 720,0 1080,24 C1260,36 1350,12 1440,24 L1440,48 L0,48 Z" />
                        </svg>
                    </div>
                </section>

                {/* Curriculum */}
                <section style={{ background: C.creamLight, padding: "80px 0" }}>
                    <div className="mx-auto max-w-container px-4 md:px-8">
                        <div className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: C.red, letterSpacing: "0.12em" }}>Curriculum & enrichment links</div>
                        <h2 className="mb-12 text-4xl" style={{ ...serif, color: C.forest }}>More than just a fun day out</h2>
                        <div className="grid gap-5 md:grid-cols-3">
                            {CURRICULUM.map((item) => (
                                <div key={item.title} className="rounded-2xl p-7" style={{ background: C.white, border: "1px solid rgba(8,51,53,0.08)" }}>
                                    <span className="mb-4 block text-3xl">{item.icon}</span>
                                    <div className="mb-2 text-base font-semibold" style={{ color: C.forest }}>{item.title}</div>
                                    <p className="mb-3 text-sm leading-relaxed" style={{ color: C.slate }}>{item.desc}</p>
                                    <span className="inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold" style={{ background: C.paleBlue, color: C.forestMid }}>{item.tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Session options + included */}
                <section id="options" style={{ background: C.white, padding: "80px 0" }}>
                    <div className="mx-auto max-w-container px-4 md:px-8" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
                        <div>
                            <div className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: C.red, letterSpacing: "0.12em" }}>Session options</div>
                            <h2 className="mb-7 text-3xl" style={{ ...serif, color: C.forest }}>Flexible formats for every school</h2>
                            {OPTIONS.map((opt) => (
                                <div key={opt.title} className="mb-4 overflow-hidden rounded-xl" style={{ border: "1px solid rgba(8,51,53,0.1)" }}>
                                    <div className="px-6 py-5" style={{ background: C.forestMid }}>
                                        <div className="text-base font-semibold text-white">{opt.title}</div>
                                        <div className="mt-0.5 text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{opt.sub}</div>
                                    </div>
                                    <div className="px-6 py-5 text-sm leading-relaxed" style={{ color: C.slate }}>
                                        {opt.body}
                                        {opt.bullets.length > 0 && (
                                            <ul className="mt-3 space-y-1.5 pl-4">
                                                {opt.bullets.map((b) => <li key={b} className="list-disc">{b}</li>)}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h2 className="mb-5 text-2xl" style={{ ...serif, color: C.forest }}>What's included</h2>
                            <ul className="mb-5 space-y-0">
                                {INCLUDED.map((item) => (
                                    <li key={item} className="flex items-start gap-3 border-b py-3 text-sm"
                                        style={{ borderColor: "rgba(8,51,53,0.07)", color: C.slate }}>
                                        <span style={{ color: C.red, fontSize: 16, flexShrink: 0 }}>✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="rounded-xl p-5" style={{ background: C.forest }}>
                                <div className="mb-3 text-sm font-semibold" style={{ color: C.cream }}>Both our venues offer</div>
                                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                                    ✓ Changing facilities &nbsp;·&nbsp; ✓ Accessible site &nbsp;·&nbsp; ✓ Transport links (DLR / Elizabeth line) &nbsp;·&nbsp; ✓ Parking available &nbsp;·&nbsp; ✓ Catering nearby
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Booking */}
                <section id="book" style={{ background: C.creamLight, padding: "80px 0" }}>
                    <div className="mx-auto px-4 md:px-8" style={{ maxWidth: 800 }}>
                        <div className="rounded-2xl p-10" style={{ background: C.white, border: "1px solid rgba(8,51,53,0.1)" }}>
                            <h2 className="mb-2 text-3xl" style={{ ...serif, color: C.forest }}>Book a school session</h2>
                            <p className="mb-6 text-sm leading-relaxed" style={{ color: C.slate }}>
                                Send us your details and we'll respond within 24 hours with availability, pricing and a session proposal. Or call <strong>07453 214 171</strong>.
                            </p>
                            <p className="text-sm" style={{ color: C.slate }}>
                                📧 <a href="mailto:contact@dbx.events" style={{ color: C.forest, fontWeight: 600 }}>contact@dbx.events</a>
                                &nbsp;·&nbsp;
                                📞 <a href="tel:07453214171" style={{ color: C.forest, fontWeight: 600 }}>07453 214 171</a>
                            </p>
                            <p className="mt-4 text-xs" style={{ color: "#6b7c7d" }}>
                                A HubSpot booking form will appear here once your Form ID is configured. See the DBX HubSpot Build Guide for setup instructions.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <DBXFooter />
        </div>
    );
}
