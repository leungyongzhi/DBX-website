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

const STAGES = [
    {
        num: "1",
        bg: C.red,
        cat: "Foundation stage",
        title: "Introduction & development",
        desc: "The entry point. No prior experience needed — just commitment and enthusiasm. Sessions focus on fundamental paddling technique, water confidence, and introducing competitive concepts.",
        bullets: ["Paddling technique fundamentals", "Crew synchronisation basics", "Race start and finish technique", "Introduction to competitive dragon boating", "Fitness and conditioning basics"],
    },
    {
        num: "2",
        bg: C.forestMid,
        cat: "Performance stage",
        title: "Squad development",
        desc: "For paddlers showing consistent progress. Regular structured training sessions targeting the physical and technical standards required for BDA youth category competition.",
        bullets: ["Advanced stroke mechanics & power", "Race pace and race strategy", "500m and 200m race-specific training", "Strength and conditioning off-water", "BDA youth competition entry"],
    },
    {
        num: "3",
        bg: C.forest,
        cat: "Elite stage",
        title: "National squad pathway",
        desc: "For paddlers targeting BDA youth trials and Team GB junior selection. Intensive coaching, performance monitoring, and specific preparation for the national selection process.",
        bullets: ["BDA youth time trial preparation", "National squad standards training", "Video analysis and technique refinement", "Nutrition and recovery guidance", "Support through Team GB trial process"],
    },
];

const WHAT_POINTS = [
    { icon: "🎯", title: "Individual development plans",  desc: "Every athlete on the elite pathway gets a personalised development plan, with specific technical and physical targets linked to the BDA selection standard." },
    { icon: "📊", title: "Video analysis",                desc: "We use video analysis to break down stroke mechanics and identify marginal gains — the kind of detail that makes the difference at trial level." },
    { icon: "🤝", title: "BDA connection",                desc: "We maintain an active relationship with the BDA and can guide athletes through the formal selection and registration process at the right stage." },
    { icon: "👨‍👩‍👧", title: "Parent & guardian briefings", desc: "We keep parents informed at every stage — session schedules, development progress, competition dates, and what national squad involvement looks like in practice." },
];

export default function TeamGBPage() {
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
                            <span style={{ color: C.cream }}>Team GB Youth Pathway</span>
                        </span>
                    </div>
                </div>

                {/* Hero */}
                <section style={{ background: C.forest, overflow: "hidden", position: "relative" }}>
                    <div className="pointer-events-none absolute inset-0" aria-hidden="true"
                        style={{ background: "radial-gradient(ellipse 60% 80% at 85% 50%, rgba(201,168,76,0.10) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 20% 20%, rgba(132,16,16,0.12) 0%, transparent 60%)" }} />

                    <div className="relative mx-auto max-w-container px-4 py-20 md:px-8" style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "60px", alignItems: "center" }}>
                        <div>
                            <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
                                style={{ color: C.bronze, letterSpacing: "0.12em" }}>
                                <span className="inline-block h-0.5 w-6" style={{ background: C.bronze }} />
                                Team GB · Elite Youth Pathway
                            </div>
                            <h1 className="mb-5 text-white" style={{ ...serif, fontSize: "clamp(32px,4vw,56px)", lineHeight: 1.1 }}>
                                From{" "}
                                <em style={{ fontStyle: "italic", color: C.red }}>first paddle</em>
                                {" "}to national squad
                            </h1>
                            <p className="mb-9 max-w-lg text-lg font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                                DBX supports talented young dragon boat paddlers on a structured development pathway aligned to BDA youth selection and Team GB junior squad trials. If you — or a young person you know — has the potential and the drive, we can map out the route forward.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a href="#enquire" className="inline-block rounded-lg px-6 py-3.5 text-sm font-bold text-white transition-colors"
                                    style={{ background: C.red }}
                                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = C.redLight)}
                                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = C.red)}>
                                    Express interest
                                </a>
                                <a href="#pathway" className="inline-block rounded-lg border px-6 py-3.5 text-sm font-medium"
                                    style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}>
                                    See the pathway ↓
                                </a>
                            </div>
                        </div>

                        {/* Medal box */}
                        <div className="hidden rounded-2xl p-8 text-center md:block"
                            style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)" }}>
                            <span className="mb-4 block text-6xl">🏅</span>
                            <div className="mb-3 text-xl" style={{ ...serif, color: C.bronze }}>Team GB Junior Squad</div>
                            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                                The BDA selects junior and youth squads for IDBF international competition. DBX's development programme is aligned to the standards and structure of that selection process — so every session counts toward a meaningful goal.
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

                {/* Pathway stages */}
                <section id="pathway" style={{ background: C.creamLight, padding: "80px 0" }}>
                    <div className="mx-auto max-w-container px-4 md:px-8">
                        <div className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: C.red, letterSpacing: "0.12em" }}>The development pathway</div>
                        <h2 className="mb-12 text-4xl" style={{ ...serif, color: C.forest }}>Three stages from beginner to squad contender</h2>
                        <div className="grid gap-5 md:grid-cols-3">
                            {STAGES.map((stage) => (
                                <div key={stage.num} className="rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
                                    style={{ background: C.white, border: "1px solid rgba(8,51,53,0.08)" }}>
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold text-white"
                                        style={{ ...serif, background: stage.bg }}>
                                        {stage.num}
                                    </div>
                                    <div className="mb-1 text-xs font-bold uppercase tracking-wider" style={{ color: C.red }}>{stage.cat}</div>
                                    <h3 className="mb-3 text-xl font-semibold" style={{ color: C.forest }}>{stage.title}</h3>
                                    <p className="mb-4 text-sm leading-relaxed" style={{ color: C.slate }}>{stage.desc}</p>
                                    <ul className="space-y-1.5">
                                        {stage.bullets.map((b) => (
                                            <li key={b} className="flex items-start gap-2 text-sm" style={{ color: C.slate }}>
                                                <span style={{ color: C.red, flexShrink: 0 }}>→</span>
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What DBX provides */}
                <section style={{ background: C.white, padding: "80px 0" }}>
                    <div className="mx-auto max-w-container px-4 md:px-8" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
                        <div>
                            <div className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: C.red, letterSpacing: "0.12em" }}>What DBX provides</div>
                            <h2 className="mb-4 text-3xl" style={{ ...serif, color: C.forest }}>Specialist coaching at every stage</h2>
                            <p className="mb-6 text-base leading-relaxed" style={{ color: C.slate }}>
                                Our coaches have competed and coached at national and international level. That experience directly shapes how we prepare young athletes — not theoretical, but lived knowledge of what it takes to perform at the highest levels of the sport.
                            </p>
                            <div className="rounded-xl p-6" style={{ background: C.forest }}>
                                <div className="mb-3 text-sm font-semibold uppercase tracking-widest" style={{ color: C.cream, letterSpacing: "0.06em" }}>BDA youth selection</div>
                                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                                    The British Dragon Boat Racing Association (BDA) runs national selection for youth and junior squads competing at IDBF World Championships and EDBF European championships. DBX's programme is structured to align with their standards and selection criteria.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            {WHAT_POINTS.map((pt) => (
                                <div key={pt.title} className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg" style={{ background: C.paleBlue }}>
                                        {pt.icon}
                                    </div>
                                    <div>
                                        <div className="mb-1 text-base font-semibold" style={{ color: C.forest }}>{pt.title}</div>
                                        <p className="text-sm leading-relaxed" style={{ color: C.slate }}>{pt.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Expression of interest */}
                <section id="enquire" style={{ background: C.creamLight, padding: "80px 0" }}>
                    <div className="mx-auto px-4 md:px-8" style={{ maxWidth: 800 }}>
                        <div className="rounded-2xl p-10" style={{ background: C.white, border: "1px solid rgba(8,51,53,0.1)" }}>
                            <h2 className="mb-2 text-3xl" style={{ ...serif, color: C.forest }}>Express interest in the pathway</h2>
                            <p className="mb-6 text-sm leading-relaxed" style={{ color: C.slate }}>
                                Tell us about the young paddler — their age, any experience, and what they're hoping to achieve. We'll be in touch within 48 hours to discuss next steps.
                            </p>
                            <div className="mb-6 rounded-xl p-4 text-sm" style={{ background: C.paleBlue, color: C.forestMid }}>
                                This form is for parents, guardians, or coaches enquiring on behalf of a young athlete. If you're an adult athlete, please use our{" "}
                                <a href="/#training" style={{ color: C.red, fontWeight: 600 }}>Training Specialists</a> page instead.
                            </div>
                            <p className="text-sm" style={{ color: C.slate }}>
                                📧 <a href="mailto:contact@dbx.events" style={{ color: C.forest, fontWeight: 600 }}>contact@dbx.events</a>
                                &nbsp;·&nbsp;
                                📞 <a href="tel:07453214171" style={{ color: C.forest, fontWeight: 600 }}>07453 214 171</a>
                            </p>
                            <p className="mt-4 text-xs" style={{ color: "#6b7c7d" }}>
                                A HubSpot form will appear here once your Form ID is configured.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <DBXFooter />
        </div>
    );
}
