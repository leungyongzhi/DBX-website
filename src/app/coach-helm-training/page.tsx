"use client";

import { DBXNav, DBXFooter } from "../home-screen";

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
    paleRed:    "#f8eeee",
} as const;

const serif: React.CSSProperties = { fontFamily: "var(--font-dm-serif)" };

const PATHWAY = [
    { badge: "L1", name: "Basic Helm",      desc: "Foundation — boat control & safety" },
    { badge: "L2", name: "Coach Level 2",   desc: "Helm & coach crews, train helms" },
    { badge: "CC", name: "Centre Coach L2", desc: "Recreational centres & schools" },
    { badge: "L3", name: "Coach Level 3",   desc: "Performance coaching — race & squad" },
];

const BDA_LEVELS = [
    { num: "L1", title: "Basic Helm",         desc: "Run a crew safely over any normal racecourse. Required before any coaching award. Personal skills focus — boat control, race awareness, Rules & Regulations." },
    { num: "L2", title: "Coach Level 2",       desc: "Helm and coach crews under all normal training conditions. Supervise and train other helms. Operate at participation and performance level." },
    { num: "CC", title: "Centre Coach L2",     desc: "Coach in a commercial/recreational centre setting. Covers safety, risk assessment, and centre-appropriate coaching — reduced racing content." },
    { num: "L3", title: "Coach Level 3",       desc: "Performance coaching. Physiology, sports psychology, squad management. Supervise all helms and lower-level coaches. International competition level." },
];

const COURSES = [
    {
        level: "Level 1 · Foundation",
        title: "Basic Helm",
        sub: "The essential starting point for all coaches and helms",
        desc: "The Basic Helm award is the prerequisite for all further coaching qualifications. It covers the personal skills required to helm a dragon boat safely under normal race and training conditions — boat control, crew briefing, race rules, and emergency procedures.",
        details: [
            { label: "Duration",      val: "1 day" },
            { label: "Format",        val: "Practical + theory" },
            { label: "Prerequisites", val: "None (BDA membership req.)" },
            { label: "Who it's for",  val: "Anyone new to leading" },
        ],
    },
    {
        level: "Level 2 · Development",
        title: "Coach Level 2",
        sub: "Helm, coach, and develop other helms",
        desc: "The CL2 qualifies you to helm and coach crews under all normal training conditions, supervise the development of other helms, and introduce new members to the BDA Modular Coaching Scheme. Operates at participation and performance level.",
        details: [
            { label: "Duration",      val: "2 days" },
            { label: "Format",        val: "Practical + theory" },
            { label: "Prerequisites", val: "Basic Helm award" },
            { label: "Who it's for",  val: "Club coaches, team leads" },
        ],
    },
    {
        level: "Level 2 · Centre variant",
        title: "Centre Coach Level 2",
        sub: "For recreational centres, schools, and event providers",
        desc: "A variant of CL2 specifically designed for commercial and recreational settings. Covers all aspects of safety and risk assessment, with content calibrated for centres rather than competitive clubs. Ideal for school instructors and corporate event teams.",
        details: [
            { label: "Duration",      val: "2 days" },
            { label: "Format",        val: "Practical + theory" },
            { label: "Prerequisites", val: "Basic Helm award" },
            { label: "Who it's for",  val: "Schools, centres, event teams" },
        ],
    },
    {
        level: "Level 3 · Performance",
        title: "Coach Level 3",
        sub: "Elite and performance coaching for competitive squads",
        desc: "The CL3 develops advanced performance coaching skills — physiology, sports psychology, athlete development, and squad management. This is the qualification for coaches working at national and international competition level.",
        details: [
            { label: "Duration",      val: "Multi-day programme" },
            { label: "Format",        val: "Mentored + assessed" },
            { label: "Prerequisites", val: "Coach Level 2" },
            { label: "Who it's for",  val: "National / club squad coaches" },
        ],
    },
];

const WHO = [
    { icon: "🏆", title: "Club coaches",                  desc: "Already paddling at club level and want to give back? Coach Level 2 is the standard qualification for running club training sessions and developing your crew's performance." },
    { icon: "🏫", title: "School & centre instructors",   desc: "Running dragon boat sessions for schools, Scout groups, or a watersports centre? The Centre Coach Level 2 is designed exactly for this — safety-focused with practical centre management content." },
    { icon: "🎓", title: "New to the sport",              desc: "Start with the Basic Helm. No experience needed — it's the entry point for everyone, and the prerequisite for all further awards. DBX coaches guide you through every stage." },
];

export default function CoachHelmPage() {
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
                            <span style={{ color: C.cream }}>Coach & Helm Training</span>
                        </span>
                    </div>
                </div>

                {/* Hero */}
                <section style={{ background: C.forest, overflow: "hidden", position: "relative" }}>
                    <div aria-hidden="true" style={{ position: "absolute", right: 80, top: "50%", transform: "translateY(-50%)", fontSize: 200, opacity: 0.04, pointerEvents: "none", lineHeight: 1 }}>⚓</div>

                    <div className="relative mx-auto max-w-container px-4 py-20 md:px-8" style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "60px", alignItems: "center" }}>
                        <div>
                            <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
                                style={{ color: C.cream, letterSpacing: "0.12em" }}>
                                <span className="inline-block h-0.5 w-6" style={{ background: C.bronze }} />
                                BDA Qualification Courses
                            </div>
                            <h1 className="mb-5 text-white" style={{ ...serif, fontSize: "clamp(32px,4vw,56px)", lineHeight: 1.1 }}>
                                Train to{" "}
                                <em style={{ fontStyle: "italic", color: C.red }}>lead on the water</em>
                            </h1>
                            <p className="mb-9 max-w-lg text-lg font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                                DBX delivers BDA-aligned coach and helm training courses for anyone looking to lead dragon boat sessions — whether for a club, a school, a watersports centre, or a corporate event programme. Basic Helm through to performance coaching qualifications.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a href="#courses" className="inline-block rounded-lg px-6 py-3.5 text-sm font-bold text-white transition-colors"
                                    style={{ background: C.red }}
                                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = C.redLight)}
                                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = C.red)}>
                                    See all courses
                                </a>
                                <a href="#enquire" className="inline-block rounded-lg border px-6 py-3.5 text-sm font-medium"
                                    style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}>
                                    Enquire about a course ↓
                                </a>
                            </div>
                        </div>

                        {/* Pathway box */}
                        <div className="hidden rounded-2xl p-7 md:block"
                            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            <div className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: C.cream, letterSpacing: "0.06em" }}>BDA qualification pathway</div>
                            {PATHWAY.map((step, i) => (
                                <div key={step.badge} className="flex items-center gap-3.5 py-2.5"
                                    style={{ borderBottom: i < PATHWAY.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                                        style={{ background: C.red }}>
                                        {step.badge}
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-white">{step.name}</div>
                                        <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{step.desc}</div>
                                    </div>
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

                {/* About BDA */}
                <section style={{ background: C.creamLight, padding: "80px 0" }}>
                    <div className="mx-auto max-w-container px-4 md:px-8" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
                        <div>
                            <div className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: C.red, letterSpacing: "0.12em" }}>About the BDA scheme</div>
                            <h2 className="mb-4 text-3xl" style={{ ...serif, color: C.forest }}>The gold standard in dragon boat coaching</h2>
                            <p className="mb-4 text-base leading-relaxed" style={{ color: C.slate }}>
                                The BDA Modular Coaching Scheme is the most widely recognised dragon boat qualification in the world. Its framework underpins the IDBF and EDBF international programmes. A current BDA qualification is the recognised standard for leading sessions at clubs, watersports centres, schools, and events throughout the UK.
                            </p>
                            <p className="mb-5 text-base leading-relaxed" style={{ color: C.slate }}>
                                DBX's coaches hold qualifications up to Coach Level 3 and have delivered training at national and international competition level. That expertise is what we bring to every training course we run.
                            </p>
                            <div className="rounded-r-xl py-4 pl-5 pr-4 text-sm leading-relaxed"
                                style={{ borderLeft: `4px solid ${C.red}`, background: C.paleBlue, color: C.forestMid }}>
                                <strong>Note on membership:</strong> To hold a current BDA qualification, coaches and helms must be active BDA members — which includes personal liability insurance cover. We'll guide you through this as part of every course.
                            </div>
                        </div>

                        <div className="rounded-2xl p-8" style={{ background: C.forest }}>
                            <div className="mb-5 text-xs font-semibold uppercase tracking-widest" style={{ color: C.cream, letterSpacing: "0.06em" }}>What each level qualifies you to do</div>
                            {BDA_LEVELS.map((lv, i) => (
                                <div key={lv.num} className="mb-4 flex gap-4"
                                    style={{ paddingBottom: i < BDA_LEVELS.length - 1 ? 16 : 0, borderBottom: i < BDA_LEVELS.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white"
                                        style={{ background: C.red }}>
                                        {lv.num}
                                    </div>
                                    <div>
                                        <div className="mb-1 text-sm font-semibold text-white">{lv.title}</div>
                                        <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{lv.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Course cards */}
                <section id="courses" style={{ background: C.white, padding: "80px 0" }}>
                    <div className="mx-auto max-w-container px-4 md:px-8">
                        <div className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: C.red, letterSpacing: "0.12em" }}>Available courses</div>
                        <h2 className="mb-12 text-4xl" style={{ ...serif, color: C.forest }}>Choose your qualification level</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            {COURSES.map((course) => (
                                <div key={course.title} className="overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl"
                                    style={{ border: "1px solid rgba(8,51,53,0.1)" }}>
                                    <div className="border-b px-7 py-6" style={{ borderColor: "rgba(8,51,53,0.07)" }}>
                                        <div className="mb-1.5 text-xs font-bold uppercase tracking-wider" style={{ color: C.red }}>{course.level}</div>
                                        <h3 className="mb-1.5 text-2xl" style={{ ...serif, color: C.forest }}>{course.title}</h3>
                                        <p className="text-sm" style={{ color: C.slate }}>{course.sub}</p>
                                    </div>
                                    <div className="p-7">
                                        <p className="mb-5 text-sm leading-relaxed" style={{ color: C.slate }}>{course.desc}</p>
                                        <div className="mb-5 grid grid-cols-2 gap-3">
                                            {course.details.map((d) => (
                                                <div key={d.label} className="rounded-lg p-3" style={{ background: C.creamLight }}>
                                                    <div className="mb-0.5 text-xs font-semibold uppercase tracking-wider" style={{ color: C.slate }}>{d.label}</div>
                                                    <div className="text-sm font-medium" style={{ color: C.forest }}>{d.val}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <a href="#enquire" className="text-sm font-semibold no-underline" style={{ color: C.red }}>
                                            Enquire about {course.title} →
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Who it's for */}
                <section style={{ background: C.creamLight, padding: "80px 0" }}>
                    <div className="mx-auto max-w-container px-4 md:px-8">
                        <div className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: C.red, letterSpacing: "0.12em" }}>Who these courses are for</div>
                        <h2 className="mb-12 text-4xl" style={{ ...serif, color: C.forest }}>Training for every context</h2>
                        <div className="grid gap-5 md:grid-cols-3">
                            {WHO.map((w) => (
                                <div key={w.title} className="rounded-2xl p-7" style={{ background: C.white, border: "1px solid rgba(8,51,53,0.08)" }}>
                                    <span className="mb-4 block text-3xl">{w.icon}</span>
                                    <div className="mb-2 text-base font-semibold" style={{ color: C.forest }}>{w.title}</div>
                                    <p className="text-sm leading-relaxed" style={{ color: C.slate }}>{w.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Enquiry */}
                <section id="enquire" style={{ background: C.white, padding: "80px 0" }}>
                    <div className="mx-auto px-4 md:px-8" style={{ maxWidth: 800 }}>
                        <div className="rounded-2xl p-10" style={{ background: C.creamLight, border: "1px solid rgba(8,51,53,0.1)" }}>
                            <h2 className="mb-2 text-3xl" style={{ ...serif, color: C.forest }}>Enquire about a course</h2>
                            <p className="mb-6 text-sm leading-relaxed" style={{ color: C.slate }}>
                                Tell us which qualification you're interested in and a bit about your background. We'll be in touch within 24 hours with course dates and details.
                            </p>
                            <p className="text-sm" style={{ color: C.slate }}>
                                📧 <a href="mailto:contact@dbx.events" style={{ color: C.forest, fontWeight: 600 }}>contact@dbx.events</a>
                                &nbsp;·&nbsp;
                                📞 <a href="tel:07453214171" style={{ color: C.forest, fontWeight: 600 }}>07453 214 171</a>
                            </p>
                            <p className="mt-4 text-xs" style={{ color: "#6b7c7d" }}>
                                A HubSpot enquiry form will appear here once your Form ID is configured.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <DBXFooter />
        </div>
    );
}
