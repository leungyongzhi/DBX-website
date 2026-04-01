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

const COVERED = [
    { num: "01", title: "Water safety & briefing",        desc: "Every session begins with a structured land-based safety briefing. Scouts learn about personal buoyancy, boat awareness, capsize procedure, and how to support fellow crew members on the water." },
    { num: "02", title: "Paddling technique",              desc: "Coaches introduce the correct paddling technique — grip, posture, stroke entry and exit. Scouts practise on the bank before boarding, ensuring everyone feels confident before going on the water." },
    { num: "03", title: "Teamwork & synchronisation",     desc: "Dragon boating can't be won alone. Scouts learn to paddle in time with their crew, respond to the drummer's beat, and communicate under race conditions — the heart of the activity badge." },
    { num: "04", title: "On-water drills",                 desc: "Scouts complete a series of structured drills — starts, stops, turns, and pace changes — building confidence and competence before the race element of the session." },
    { num: "05", title: "The race",                        desc: "Groups are split into crews and race each other across the dock. The race brings together everything learned — a memorable conclusion that every Scout remembers long after the day." },
    { num: "06", title: "Debrief & reflection",           desc: "A structured debrief covers what Scouts learned, how they worked as a team, and what they'd do differently. Leaders receive a session summary for badge records." },
];

const STEPS = [
    { num: 1, time: "Arrival",   title: "Welcome & register",          desc: "Meet the DBX team, collect equipment, and get settled at the venue. Leaders receive the session plan and health & safety overview." },
    { num: 2, time: "30 mins",   title: "Land-based safety briefing",  desc: "Water safety, equipment fitting, paddling technique demonstration. Interactive and engaging — designed for young people, not a lecture." },
    { num: 3, time: "90 mins",   title: "On-water paddling & drills",  desc: "Board the boats, practise technique, complete crew drills. Coaches provide hands-on guidance from the bank and safety boat throughout." },
    { num: 4, time: "30 mins",   title: "Race day",                     desc: "The main event — crew vs crew racing. Timing, encouragement, and results. Optional second heat for close finishes." },
    { num: 5, time: "15 mins",   title: "Debrief & close",             desc: "Reflection, badge documentation, and photos. Leaders receive a written session summary for badge record-keeping." },
];

const INCLUDED = [
    "All paddling equipment (paddles, life jackets, helmets where required)",
    "BDA-qualified lead coach and additional coaches based on group size",
    "Qualified helm on every boat throughout the session",
    "Safety boat and qualified water safety cover",
    "Structured session plan covering all badge requirements",
    "Written session summary for badge record-keeping",
    "Full venue risk assessment available on request",
    "Pre-session leader information pack",
];

export default function ScoutsPage() {
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
                            <span style={{ color: C.cream }}>Scouts Programme</span>
                        </span>
                    </div>
                </div>

                {/* Hero */}
                <section style={{ background: C.forest, position: "relative", overflow: "hidden" }}>
                    {/* Decorative rings */}
                    <div aria-hidden="true" style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(220,215,201,0.12)", pointerEvents: "none" }} />
                    <div aria-hidden="true" style={{ position: "absolute", top: -60, right: -60, width: 260, height: 260, borderRadius: "50%", border: "1px solid rgba(220,215,201,0.08)", pointerEvents: "none" }} />

                    <div className="relative mx-auto max-w-container px-4 py-20 md:px-8" style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "60px", alignItems: "center" }}>
                        <div>
                            <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
                                style={{ color: C.cream, letterSpacing: "0.12em" }}>
                                <span className="inline-block h-0.5 w-6" style={{ background: C.bronze }} />
                                Scouts & Guides · Dragon Boat
                            </div>
                            <h1 className="mb-5 text-white" style={{ ...serif, fontSize: "clamp(32px,4vw,54px)", lineHeight: 1.1 }}>
                                Earn your{" "}
                                <em style={{ fontStyle: "italic", color: C.red }}>Dragon Boat badge</em> with DBX
                            </h1>
                            <p className="mb-9 max-w-lg text-lg font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                                A fully structured dragon boat session designed for Scout and Guide groups. Covering water safety, paddling technique, and teamwork — everything needed to achieve the Dragon Boat Activity Badge.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a href="#book" className="inline-block rounded-lg px-6 py-3.5 text-sm font-bold text-white transition-colors"
                                    style={{ background: C.red }}
                                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = C.redLight)}
                                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = C.red)}>
                                    Book a Scout session
                                </a>
                                <a href="#format" className="inline-block rounded-lg border px-6 py-3.5 text-sm font-medium"
                                    style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}>
                                    See what's involved ↓
                                </a>
                            </div>
                        </div>

                        {/* Badge box */}
                        <div className="hidden rounded-2xl p-8 text-center md:block"
                            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                            <span className="mb-4 block text-6xl">⚜️</span>
                            <div className="mb-3 text-xl text-white" style={serif}>Dragon Boat Activity Badge</div>
                            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                                Our structured sessions are designed to meet the requirements of the Scout Association's Dragon Boat activity badge, combining water safety education with hands-on paddling and team racing.
                            </p>
                        </div>
                    </div>

                    <div className="relative h-12" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" preserveAspectRatio="none"
                            className="absolute inset-0 h-full w-full" style={{ fill: C.creamLight }}>
                            <path d="M0,24 C360,48 720,0 1080,24 C1260,36 1350,12 1440,24 L1440,48 L0,48 Z" />
                        </svg>
                    </div>
                </section>

                {/* What's covered */}
                <section id="covered" style={{ background: C.creamLight, padding: "80px 0" }}>
                    <div className="mx-auto max-w-container px-4 md:px-8">
                        <div className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: C.red, letterSpacing: "0.12em" }}>What the session covers</div>
                        <h2 className="mb-12 text-4xl" style={{ ...serif, color: C.forest }}>Badge requirements, fully delivered</h2>
                        <div className="grid gap-5 md:grid-cols-3">
                            {COVERED.map((item) => (
                                <div key={item.num} className="rounded-2xl p-7 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                                    style={{ background: C.white, border: "1px solid rgba(8,51,53,0.08)" }}>
                                    <div className="mb-3 text-4xl font-bold leading-none" style={{ ...serif, color: C.paleBlue }}>{item.num}</div>
                                    <div className="mb-2.5 text-base font-semibold" style={{ color: C.forest }}>{item.title}</div>
                                    <p className="text-sm leading-relaxed" style={{ color: C.slate }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Format + Included */}
                <section id="format" style={{ background: C.white, padding: "80px 0" }}>
                    <div className="mx-auto max-w-container px-4 md:px-8" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
                        <div>
                            <div className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: C.red, letterSpacing: "0.12em" }}>Session format</div>
                            <h2 className="mb-8 text-3xl" style={{ ...serif, color: C.forest }}>A typical Scout day with DBX</h2>
                            <div className="flex flex-col gap-7">
                                {STEPS.map((step) => (
                                    <div key={step.num} className="flex gap-5">
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                                            style={{ background: C.red, marginTop: 2 }}>
                                            {step.num}
                                        </div>
                                        <div>
                                            <div className="mb-0.5 text-xs font-semibold uppercase tracking-wider" style={{ color: C.red }}>{step.time}</div>
                                            <div className="mb-1.5 text-base font-semibold" style={{ color: C.forest }}>{step.title}</div>
                                            <p className="text-sm leading-relaxed" style={{ color: C.slate }}>{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="mb-6 text-2xl" style={{ ...serif, color: C.forest }}>What's included</h2>
                            <ul className="mb-6 space-y-0">
                                {INCLUDED.map((item) => (
                                    <li key={item} className="flex items-start gap-3 border-b py-3 text-sm"
                                        style={{ borderColor: "rgba(8,51,53,0.07)", color: C.slate }}>
                                        <span style={{ color: C.red, fontSize: 16, flexShrink: 0 }}>✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Details at a glance */}
                            <div className="rounded-xl p-6" style={{ background: C.forest }}>
                                <div className="mb-3 text-sm font-semibold" style={{ color: C.cream }}>Session details at a glance</div>
                                {[
                                    { label: "Group size",     val: "10 – 24 participants" },
                                    { label: "Age range",      val: "10 – 18 years" },
                                    { label: "Session length", val: "Half day (3h) or full day (6h)" },
                                    { label: "Locations",      val: "Canary Wharf / Royal Docks" },
                                    { label: "What to bring",  val: "Clothes to get wet, towel, snacks" },
                                    { label: "Pricing",        val: "Enquire for group quote" },
                                ].map((row) => (
                                    <div key={row.label} className="flex items-center justify-between border-b py-2 text-sm"
                                        style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                                        <span style={{ color: "rgba(255,255,255,0.55)" }}>{row.label}</span>
                                        <span className="font-medium text-white">{row.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Booking */}
                <section id="book" style={{ background: C.creamLight, padding: "80px 0" }}>
                    <div className="mx-auto max-w-container px-4 md:px-8" style={{ maxWidth: 760 }}>
                        <div className="rounded-2xl p-10" style={{ background: C.white, border: "1px solid rgba(8,51,53,0.1)" }}>
                            <h2 className="mb-2 text-3xl" style={{ ...serif, color: C.forest }}>Book a Scout session</h2>
                            <p className="mb-6 text-sm leading-relaxed" style={{ color: C.slate }}>
                                Fill in the details below and we'll confirm availability and send a quote within 24 hours. Alternatively call us on <strong>07453 214 171</strong>.
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
