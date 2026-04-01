"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "@untitledui/icons";
import { DBXNav, DBXFooter } from "../home-screen";

const C = {
    forest:     "#083335",
    forestMid:  "#0d4548",
    forestDeep: "#010a0b",
    red:        "#841010",
    redLight:   "#9a1313",
    bronze:     "#a27b5b",
    slate:      "#3f4e4f",
    cream:      "#dcd7c9",
    creamLight: "#f4f2ed",
    white:      "#ffffff",
    paleBlue:   "#e8f0f0",
    paleBronze: "#f5ede5",
    paleRed:    "#f8eeee",
} as const;

const serif: React.CSSProperties = { fontFamily: "var(--font-dm-serif)" };

const PROGRAMMES = [
    {
        icon: "⚜️",
        cat: "Scouts & Guides",
        catColor: C.forest,
        title: "Scouts Dragon Boat Programme",
        desc: "Earn the Dragon Boat Activity Badge with a fully structured session covering paddling technique, crew teamwork, and water safety. Designed for Scout and Guide groups aged 10–18.",
        tags: ["Activity badge", "Groups 10–24", "Half or full day"],
        tagStyle: { background: C.paleBlue, color: C.forest },
        href: "/youth/scouts",
        cta: "See Scouts programme",
        ctaColor: C.forest,
    },
    {
        icon: "🏫",
        cat: "Schools",
        catColor: "#7a5535",
        title: "Schools Dragon Boat Programme",
        desc: "PE enrichment days, curriculum-linked water activities, and competitive inter-form challenge sessions. Full equipment, qualified coaches, risk-assessed venues.",
        tags: ["PE curriculum", "KS3 / KS4", "Risk assessed"],
        tagStyle: { background: C.paleBronze, color: "#6b4e32" },
        href: "/youth/schools",
        cta: "See Schools programme",
        ctaColor: "#7a5535",
    },
    {
        icon: "🏆",
        cat: "Elite pathway",
        catColor: C.red,
        title: "Team GB Youth Pathway",
        desc: "For young paddlers ready to take the sport seriously. A structured development programme aligned to BDA youth selection and the Team GB junior squad.",
        tags: ["Competitive", "BDA aligned", "Team GB pathway"],
        tagStyle: { background: C.paleRed, color: C.red },
        href: "/youth/team-gb",
        cta: "See elite pathway",
        ctaColor: C.red,
    },
];

const WHY_POINTS = [
    { icon: "🤝", title: "Teamwork & communication",  desc: "No single paddler wins a race. Success demands synchronisation, trust, and communication — life skills as much as sport skills." },
    { icon: "🌊", title: "Inclusive by design",        desc: "Dragon boating is one of the few sports where size, strength, and prior experience matter far less than timing and unity. Everyone contributes equally." },
    { icon: "🎯", title: "A clear pathway forward",    desc: "DBX is connected to BDA youth development and Team GB selection — giving talented young paddlers a structured route from first session to national squad." },
    { icon: "🏅", title: "Recognition & achievement",  desc: "Scout badges, school achievement records, BDA qualifications — structured recognition for every level of participation." },
];

const VENUES = [
    { name: "📍 West India Docks, Canary Wharf",    desc: "Calm, sheltered dock water — ideal for first-time youth groups. Excellent transport links (DLR Westferry, Elizabeth line)." },
    { name: "📍 Royal Docks / Docklands Watersports", desc: "Larger open water for competitive sessions. Dedicated changing facilities. Home to our Team GB development training." },
    { name: "📍 Royal Docklands Watersports Centre", desc: "Purpose-built facility ideal for longer sessions and multi-group school days." },
];

export default function YouthPage() {
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
                            <span style={{ color: C.cream }}>Youth Development</span>
                        </span>
                    </div>
                </div>

                {/* Hero */}
                <section style={{ background: C.forest, paddingBottom: 0, overflow: "hidden", position: "relative" }}>
                    <div className="pointer-events-none absolute inset-0" aria-hidden="true"
                        style={{ background: "radial-gradient(ellipse 50% 70% at 90% 40%, rgba(162,123,91,0.13) 0%, transparent 60%)" }} />
                    <div className="relative mx-auto max-w-container px-4 py-20 md:px-8" style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "60px", alignItems: "center" }}>
                        <div>
                            <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
                                style={{ color: C.cream, letterSpacing: "0.12em" }}>
                                <span className="inline-block h-0.5 w-6" style={{ background: C.bronze }} />
                                Youth Development
                            </div>
                            <h1 className="mb-5 text-white" style={{ ...serif, fontSize: "clamp(34px,4.5vw,58px)", lineHeight: 1.1 }}>
                                Where young paddlers{" "}
                                <em style={{ fontStyle: "italic", color: C.red }}>discover</em> the sport
                            </h1>
                            <p className="mb-9 max-w-lg text-lg font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                                From Scout badge activities and school sports days to national youth squad — DBX is the UK's specialist in youth dragon boat development. Our coaches bring over 20 years of experience to every session.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a href="#enquire" className="inline-block rounded-lg px-6 py-3.5 text-sm font-bold text-white transition-colors"
                                    style={{ background: C.red }}
                                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = C.redLight)}
                                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = C.red)}>
                                    Book a youth session
                                </a>
                                <a href="#programmes" className="inline-block rounded-lg border px-6 py-3.5 text-sm font-medium transition-colors"
                                    style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}>
                                    Explore programmes ↓
                                </a>
                            </div>
                        </div>

                        {/* Stats grid */}
                        <div className="hidden grid-cols-2 gap-3 md:grid">
                            {[
                                { num: "20+", label: "Years coaching experience" },
                                { num: "BDA", label: "Qualified coaches" },
                                { num: "3",   label: "London venues" },
                                { num: "GB",  label: "Team GB connected" },
                            ].map((s) => (
                                <div key={s.num} className="rounded-xl p-5"
                                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(220,215,201,0.15)" }}>
                                    <div className="text-3xl font-bold leading-none" style={{ ...serif, color: C.cream }}>{s.num}</div>
                                    <div className="mt-1.5 text-xs leading-snug" style={{ color: "rgba(255,255,255,0.55)" }}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Wave */}
                    <div className="relative h-12" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" preserveAspectRatio="none"
                            className="absolute inset-0 h-full w-full" style={{ fill: C.creamLight }}>
                            <path d="M0,24 C360,48 720,0 1080,24 C1260,36 1350,12 1440,24 L1440,48 L0,48 Z" />
                        </svg>
                    </div>
                </section>

                {/* Programmes */}
                <section id="programmes" style={{ background: C.creamLight, padding: "80px 0" }}>
                    <div className="mx-auto max-w-container px-4 md:px-8">
                        <div className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: C.bronze, letterSpacing: "0.12em" }}>Our youth programmes</div>
                        <h2 className="mb-12 text-4xl" style={{ ...serif, color: C.forest }}>Three pathways into the sport</h2>
                        <div className="grid gap-5 md:grid-cols-3">
                            {PROGRAMMES.map((prog) => (
                                <div key={prog.title} className="flex flex-col overflow-hidden rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                                    style={{ background: C.white, border: "1px solid rgba(8,51,53,0.08)" }}>
                                    <div className="flex-1 p-8">
                                        <span className="mb-5 block text-4xl">{prog.icon}</span>
                                        <div className="mb-1.5 text-xs font-bold uppercase tracking-widest" style={{ color: prog.catColor, letterSpacing: "0.1em" }}>{prog.cat}</div>
                                        <h3 className="mb-3 text-2xl leading-snug" style={{ ...serif, color: C.forest }}>{prog.title}</h3>
                                        <p className="mb-4 text-sm leading-relaxed" style={{ color: C.slate }}>{prog.desc}</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {prog.tags.map((tag) => (
                                                <span key={tag} className="rounded-full px-2.5 py-0.5 text-xs font-medium" style={prog.tagStyle}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="border-t px-8 py-5" style={{ borderColor: "rgba(8,51,53,0.07)" }}>
                                        <a href={prog.href} className="flex items-center gap-1.5 text-sm font-semibold no-underline transition-all"
                                            style={{ color: prog.ctaColor }}>
                                            {prog.cta} →
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why dragon boating */}
                <section style={{ background: C.white, padding: "80px 0" }}>
                    <div className="mx-auto max-w-container px-4 md:px-8">
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
                            <div>
                                <div className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: C.bronze, letterSpacing: "0.12em" }}>Why dragon boating</div>
                                <h2 className="mb-4 text-3xl" style={{ ...serif, color: C.forest }}>A sport that builds more than paddlers</h2>
                                <p className="mb-6 text-base leading-relaxed" style={{ color: C.slate }}>
                                    Dragon boating is one of the rare sports where no individual can carry the boat. Success demands that every person paddling contributes — in sync, in time, with trust in their teammates.
                                </p>
                                <blockquote className="rounded-r-xl py-5 pl-5 pr-4 text-base italic leading-relaxed"
                                    style={{ borderLeft: `4px solid ${C.forest}`, background: C.paleBlue, color: C.forest }}>
                                    "Our Year 9 group had never been near a boat before. Within an hour they were racing and cheering each other on. The DBX coaches were exceptional — patient, professional, and brilliant with the kids."
                                    <cite className="mt-3 block not-italic text-xs font-semibold" style={{ color: C.slate }}>— PE Teacher, London secondary school</cite>
                                </blockquote>
                            </div>
                            <div className="flex flex-col gap-7">
                                {WHY_POINTS.map((pt) => (
                                    <div key={pt.title} className="flex gap-5">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl" style={{ background: C.paleBlue }}>
                                            {pt.icon}
                                        </div>
                                        <div>
                                            <div className="mb-1.5 text-base font-semibold" style={{ color: C.forest }}>{pt.title}</div>
                                            <p className="text-sm leading-relaxed" style={{ color: C.slate }}>{pt.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Red band */}
                <section className="px-4 py-12" style={{ background: C.red }}>
                    <div className="mx-auto flex max-w-container items-center justify-between gap-8 md:px-8">
                        <div>
                            <h2 className="text-2xl text-white" style={serif}>Ready to book a session?</h2>
                            <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>We respond to all enquiries within 24 hours.</p>
                        </div>
                        <a href="#enquire" className="shrink-0 rounded-lg px-7 py-3.5 text-sm font-bold transition-colors"
                            style={{ background: C.white, color: C.red }}
                            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = C.cream)}
                            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = C.white)}>
                            Enquire now →
                        </a>
                    </div>
                </section>

                {/* Enquiry + Venues */}
                <section id="enquire" style={{ background: C.creamLight, padding: "80px 0" }}>
                    <div className="mx-auto max-w-container px-4 md:px-8" style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "60px", alignItems: "start" }}>
                        {/* Form */}
                        <div className="rounded-2xl p-9" style={{ background: C.white, border: "1px solid rgba(8,51,53,0.1)" }}>
                            <h2 className="mb-2 text-2xl" style={{ ...serif, color: C.forest }}>Enquire about youth programmes</h2>
                            <p className="mb-7 text-sm leading-relaxed" style={{ color: C.slate }}>
                                Tell us about your group and we'll get back to you within 24 hours with availability and pricing.
                            </p>
                            <p className="text-sm" style={{ color: C.slate }}>
                                📧 <a href="mailto:contact@dbx.events" style={{ color: C.forest, fontWeight: 600 }}>contact@dbx.events</a>
                                &nbsp;·&nbsp;
                                📞 <a href="tel:07453214171" style={{ color: C.forest, fontWeight: 600 }}>07453 214 171</a>
                            </p>
                            <p className="mt-4 text-xs" style={{ color: "#6b7c7d" }}>
                                This page connects to our HubSpot CRM. Once your HubSpot form ID is added, a full enquiry form will appear here automatically.
                            </p>
                        </div>

                        {/* Venues */}
                        <div>
                            <h2 className="mb-2 text-2xl" style={{ ...serif, color: C.forest }}>Our London venues</h2>
                            <p className="mb-5 text-sm leading-relaxed" style={{ color: C.slate }}>
                                All sessions at fully risk-assessed London watersports venues with qualified safety cover, changing facilities, and all equipment provided.
                            </p>
                            {VENUES.map((v) => (
                                <div key={v.name} className="mb-3 rounded-xl p-5" style={{ background: C.white, border: "1px solid rgba(8,51,53,0.1)" }}>
                                    <div className="mb-1.5 text-sm font-semibold" style={{ color: C.forest }}>{v.name}</div>
                                    <p className="text-xs leading-relaxed" style={{ color: C.slate }}>{v.desc}</p>
                                </div>
                            ))}
                            <div className="rounded-xl p-5" style={{ background: C.forest }}>
                                <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
                                    Prefer to talk?<br />
                                    <a href="tel:07453214171" style={{ color: C.cream, textDecoration: "none", fontWeight: 600 }}>07453 214 171</a>
                                    &nbsp;·&nbsp;
                                    <a href="mailto:contact@dbx.events" style={{ color: C.cream, textDecoration: "none", fontWeight: 600 }}>contact@dbx.events</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <DBXFooter />
        </div>
    );
}
