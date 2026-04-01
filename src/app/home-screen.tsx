"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Bell01, Calendar, Check, ChevronRight, Mail01, Star01, User01 } from "@untitledui/icons";

// ─── Brand tokens ─────────────────────────────────────────────────────────────
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
    paleBlue:   "#e8f0f0",
    paleBronze: "#f5ede5",
    paleRed:    "#f8eeee",
} as const;

const serif: React.CSSProperties = { fontFamily: "var(--font-dm-serif)" };

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
    { label: "Youth Programs",   href: "/youth" },
    { label: "Training",         href: "/#training" },
    { label: "Coach & Helm",     href: "/coach-helm-training" },
    { label: "Events",           href: "/#events" },
    { label: "About",            href: "/#about" },
];

const AUDIENCE_CARDS = [
    { icon: "🏆", title: "Youth & Schools",     sub: "Scouts, schools, elite pathway",      href: "/youth" },
    { icon: "🏢", title: "Corporate & Teams",   sub: "Team building, race performance",      href: "#training" },
    { icon: "🎓", title: "Coaches & Helms",     sub: "BDA qualifications, courses",          href: "/coach-helm-training" },
];

const TRUST_STATS = [
    { num: "20+", label: "Years coaching at national & international level" },
    { num: "BDA", label: "Qualified coaches — all levels" },
    { num: "3",   label: "London watersports venues" },
    { num: "GB",  label: "Team GB youth development connected" },
];

const AUDIENCE_BLOCKS = [
    {
        icon: "⚜️",
        type: "youth",
        title: "Youth, Schools & Scouts",
        sub: "Our core mission — developing young people through dragon boating",
        desc: "Structured programmes for Scout groups, schools, and ambitious young paddlers. We link activities to badge requirements, PE curriculum, and — for those who want to go further — the Team GB youth selection pathway.",
        tags: ["Scout activity badge", "School PE days", "KS3 / KS4", "Elite pathway"],
        href: "/youth",
        cta: "Explore youth programmes",
        tagStyle: { background: "#e8f0f0", color: "#083335" },
        accentBg: "#e8f0f0",
    },
    {
        icon: "🏢",
        type: "corp",
        title: "Corporate Teams & Competitive Crews",
        sub: "Faster times, stronger crews — for team building and race day",
        desc: "Whether you're preparing for a corporate event or chasing a personal best, our coaches analyse your crew's technique, synchronisation and race strategy. Sessions at Canary Wharf and Royal Docks.",
        tags: ["Team building", "Race prep", "Technique coaching", "Canary Wharf"],
        href: "#training",
        cta: "Explore training",
        tagStyle: { background: "#f5ede5", color: "#6b4e32" },
        accentBg: "#f5ede5",
    },
    {
        icon: "🎓",
        type: "coach",
        title: "Coaches & Helms",
        sub: "BDA-aligned qualification courses and professional development",
        desc: "Lead sessions yourself — for a club, a centre, or a school. Our coach and helm training prepares you for BDA certification. Basic Helm, Coach Level 2, Centre Coach, and beyond.",
        tags: ["Basic Helm", "Coach Level 2", "Centre Coach", "BDA aligned"],
        href: "/coach-helm-training",
        cta: "See courses",
        tagStyle: { background: "#f8eeee", color: "#841010" },
        accentBg: "#f8eeee",
    },
];

const SPECIALIST_BENEFITS = [
    { emoji: "🤝", title: "Real Team Cohesion",     description: "20 paddlers, one drum, one goal. Silos dissolve and trust forms in real time — no trust-fall exercises required." },
    { emoji: "🎯", title: "Leadership That Sticks",  description: "The drummer leads. The steerer decides. Real roles, real pressure, real growth — lessons that transfer back to the office." },
    { emoji: "💪", title: "Active Wellbeing",        description: "A full-body workout dressed up as the most energising team event of the year. Your wellbeing committee will thank you." },
    { emoji: "🏆", title: "Memories That Last",      description: "From the first paddle stroke to the finish line — your team will be talking about this experience for years to come." },
];

// ─── EmbedSocial Google Reviews widget ───────────────────────────────────────
// Replace YOUR_EMBEDSOCIAL_REF below with the data-ref value from your widget.
// Find it: dbx.events/about → right-click reviews → Inspect → data-ref="..."
const EMBEDSOCIAL_REF = "YOUR_EMBEDSOCIAL_REF";

const EmbedSocialWidget = () => {
    useEffect(() => {
        if (document.getElementById("EmbedSocialScript")) return;
        const script = document.createElement("script");
        script.id = "EmbedSocialScript";
        script.src = "https://embedsocial.com/cdn/aht.js";
        script.async = true;
        document.head.appendChild(script);
    }, []);

    return (
        <div
            className="embedsocial-widget"
            data-ref={EMBEDSOCIAL_REF}
        />
    );
};

import UPCOMING_EVENTS from "../data/events.json";

// ─── HubSpot Form ─────────────────────────────────────────────────────────────

const HubSpotForm = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadForm = () => {
            if (typeof window !== "undefined" && (window as any).hbspt && containerRef.current) {
                containerRef.current.innerHTML = "";
                (window as any).hbspt.forms.create({
                    region: "eu1",
                    portalId: "146885630",
                    formId: "YOUR_FORM_ID_HERE",
                    target: "#hubspot-contact-form",
                });
            }
        };
        if ((window as any).hbspt) {
            loadForm();
        } else {
            const script = document.createElement("script");
            script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
            script.async = true;
            script.onload = loadForm;
            document.head.appendChild(script);
        }
    }, []);

    return (
        <div id="hubspot-contact-form" ref={containerRef}
            className="min-h-48 w-full rounded-2xl p-2"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <p className="p-6 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>Loading form…</p>
        </div>
    );
};

// ─── Navigation ───────────────────────────────────────────────────────────────

export const DBXNav = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed left-0 right-0 top-0 z-50 transition-all duration-300"
            style={{
                background: scrolled ? C.creamLight : "rgba(1,10,11,0.78)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderBottom: scrolled ? `1px solid ${C.creamMid}` : "1px solid rgba(220,215,201,0.08)",
                boxShadow: scrolled ? "0 1px 24px rgba(8,51,53,0.08)" : "none",
            }}>
            <div className="mx-auto flex h-18 max-w-container items-center justify-between px-4 md:px-8">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3 no-underline">
                    {/* Paddle X mark — color on light nav, white on dark */}
                    <img
                        src={scrolled ? "/logo-color.png" : "/logo-white.png"}
                        alt="DBX"
                        style={{ height: "36px", width: "auto" }}
                    />
                    <div className="flex items-baseline gap-2 leading-none">
                        <span className="text-base font-black tracking-widest transition-colors duration-300"
                            style={scrolled ? { color: C.forest } : { color: "white" }}>DBX</span>
                        <span className="text-xs font-semibold uppercase tracking-widest transition-colors duration-300"
                            style={{ color: scrolled ? C.bronze : "rgba(220,215,201,0.55)" }}>Dragon Boat Experience</span>
                    </div>
                </a>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-0.5 md:flex">
                    {NAV_LINKS.map((link) => (
                        <a key={link.label} href={link.href}
                            className="rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-150"
                            style={scrolled ? { color: C.slate } : { color: "rgba(220,215,201,0.75)" }}
                            onMouseEnter={e => (e.currentTarget.style.color = scrolled ? C.forest : C.cream)}
                            onMouseLeave={e => (e.currentTarget.style.color = scrolled ? C.slate : "rgba(220,215,201,0.75)")}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTAs */}
                <div className="hidden items-center gap-3 md:flex">
                    <a href="/#contact" className="text-sm font-semibold transition-colors duration-150"
                        style={{ color: scrolled ? C.slate : "rgba(220,215,201,0.7)" }}>Contact</a>
                    <a href="/youth" className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold text-white transition-all duration-150"
                        style={{ background: C.red }}
                        onMouseEnter={e => (e.currentTarget.style.background = C.redLight)}
                        onMouseLeave={e => (e.currentTarget.style.background = C.red)}>
                        Get Started <ArrowRight className="size-3.5" />
                    </a>
                </div>

                {/* Mobile toggle */}
                <button className="rounded-lg p-2 transition duration-150 md:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                        style={{ color: scrolled ? C.forest : C.cream }}>
                        {mobileOpen
                            ? <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            : <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="border-t shadow-xl md:hidden" style={{ background: C.creamLight, borderColor: C.creamMid }}>
                    <nav className="flex flex-col py-2">
                        {NAV_LINKS.map((link) => (
                            <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                                className="px-4 py-3 text-md font-semibold transition-colors"
                                style={{ color: C.slate }}>{link.label}</a>
                        ))}
                    </nav>
                    <div className="flex flex-col gap-3 border-t px-4 py-4" style={{ borderColor: C.creamMid }}>
                        <a href="/youth" className="flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white"
                            style={{ background: C.red }}>
                            Get Started <ArrowRight className="size-4" />
                        </a>
                        <a href="/#contact" className="flex items-center justify-center rounded-xl border py-3 text-sm font-semibold"
                            style={{ borderColor: C.forest, color: C.forest }}>Contact Us</a>
                    </div>
                </div>
            )}
        </header>
    );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

const HeroSection = () => (
    <section className="relative overflow-hidden" style={{ background: C.forest }}>
        {/* Ambient gradients */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true"
            style={{ background: "radial-gradient(ellipse 65% 80% at 85% 50%, rgba(162,123,91,0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 10% 80%, rgba(132,16,16,0.10) 0%, transparent 55%)" }} />

        <div className="relative z-10 mx-auto max-w-container px-4 pb-0 pt-32 md:px-8 md:pt-36">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest"
                style={{ color: C.cream, letterSpacing: "0.12em" }}>
                <span className="inline-block h-0.5 w-7" style={{ background: C.bronze }} />
                DBX Dragon Boat Experience · London
            </div>

            {/* Headline */}
            <h1 className="max-w-3xl text-white" style={{ ...serif, fontSize: "clamp(40px,5.5vw,68px)", lineHeight: 1.08, marginBottom: "24px" }}>
                Developing the{" "}
                <em style={{ fontStyle: "italic", color: C.red }}>next generation</em>
                <br />of dragon boat talent
            </h1>

            {/* Subheading */}
            <p className="max-w-xl text-lg font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.72)", marginBottom: "48px" }}>
                From first paddle to national squad — DBX coaches young people, competitive teams, and professionals who want to lead the sport. Based at London's premier watersports venues.
            </p>

            {/* Audience cards */}
            <div className="grid max-w-2xl gap-3 sm:grid-cols-3" style={{ marginBottom: "0" }}>
                {AUDIENCE_CARDS.map((card) => (
                    <a key={card.title} href={card.href}
                        className="block rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5 no-underline"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(220,215,201,0.18)" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(162,123,91,0.15)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(220,215,201,0.40)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(220,215,201,0.18)"; }}>
                        <span className="mb-2.5 block text-2xl">{card.icon}</span>
                        <div className="text-sm font-semibold text-white">{card.title}</div>
                        <div className="mt-1 text-xs leading-snug" style={{ color: "rgba(255,255,255,0.5)" }}>{card.sub}</div>
                        <span className="mt-2.5 block text-xs font-medium" style={{ color: C.cream }}>Explore →</span>
                    </a>
                ))}
            </div>
        </div>

        {/* Wave into trust bar */}
        <div className="relative mt-16 h-16" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 64" preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full" style={{ fill: C.forestMid }}>
                <path d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z" />
            </svg>
        </div>
    </section>
);

// ─── Trust Bar ────────────────────────────────────────────────────────────────

const TrustBar = () => (
    <div style={{ background: C.forestMid, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="mx-auto grid max-w-container grid-cols-2 px-4 md:grid-cols-4 md:px-8">
            {TRUST_STATS.map((stat, i) => (
                <div key={stat.num}
                    className="flex items-center gap-3.5 px-4 py-7"
                    style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                    <span className="shrink-0 text-3xl font-bold leading-none" style={{ ...serif, color: C.cream }}>{stat.num}</span>
                    <span className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.6)" }}>{stat.label}</span>
                </div>
            ))}
        </div>
    </div>
);

// ─── Audience Blocks ("Who we work with") ─────────────────────────────────────

const AudienceSection = () => (
    <section style={{ background: C.creamLight, padding: "80px 0" }}>
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: C.bronze, letterSpacing: "0.12em" }}>
                Who we work with
            </div>
            <h2 className="mb-12 text-4xl" style={{ ...serif, color: C.forest }}>
                A specialist for every stage of the sport
            </h2>

            <div className="flex flex-col gap-4">
                {AUDIENCE_BLOCKS.map((block) => (
                    <div key={block.type}
                        className="overflow-hidden rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                        style={{ background: "white", border: "1px solid rgba(8,51,53,0.1)" }}>
                        <div className="grid" style={{ gridTemplateColumns: "72px 1fr auto" }}>
                            {/* Icon accent */}
                            <div className="flex items-center justify-center text-2xl"
                                style={{ background: block.accentBg, alignSelf: "stretch" }}>
                                {block.icon}
                            </div>
                            {/* Body */}
                            <div className="p-6 md:p-7">
                                <div className="text-lg font-semibold" style={{ color: C.forest }}>{block.title}</div>
                                <div className="mt-0.5 text-sm" style={{ color: "#6b7c7d" }}>{block.sub}</div>
                                <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: C.slate }}>{block.desc}</p>
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                    {block.tags.map((tag) => (
                                        <span key={tag} className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                                            style={block.tagStyle}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                            {/* CTA */}
                            <div className="hidden items-center px-8 md:flex">
                                <a href={block.href}
                                    className="whitespace-nowrap text-sm font-semibold no-underline transition-all duration-150"
                                    style={{ color: C.red }}>
                                    {block.cta} →
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ─── CTA Banner ───────────────────────────────────────────────────────────────

const CTABanner = () => (
    <section className="px-4 py-14" style={{ background: C.red }}>
        <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-6 md:flex-row md:px-8">
            <div>
                <h2 className="text-3xl text-white" style={serif}>Ready to get started?</h2>
                <p className="mt-1.5 text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                    Tell us about your group and we'll put together a session that works for you.
                </p>
            </div>
            <a href="#contact"
                className="inline-block shrink-0 rounded-lg px-8 py-4 text-sm font-bold transition-colors no-underline"
                style={{ background: "white", color: C.red }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = C.cream)}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "white")}>
                Get in touch →
            </a>
        </div>
    </section>
);

// ─── Training Specialists (Corporate) ────────────────────────────────────────

const SpecialistSection = () => (
    <section id="training" className="relative overflow-hidden px-4 py-20 md:py-28"
        style={{ background: `linear-gradient(160deg, ${C.forestDeep} 0%, #021213 45%, ${C.forestMid} 100%)` }}>
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/4 rounded-full opacity-10 blur-3xl"
                style={{ background: `radial-gradient(circle, ${C.bronze}, transparent 70%)` }} />
        </div>

        <div className="relative z-10 mx-auto max-w-container">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <div>
                    <div className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: C.bronze, letterSpacing: "0.12em" }}>
                        Training Specialists
                    </div>
                    <h2 className="mb-5 text-white" style={{ ...serif, fontSize: "clamp(28px,3.5vw,48px)", lineHeight: 1.1 }}>
                        Transform Your Team{" "}
                        <span style={{ color: C.cream }}>on the Water.</span>
                    </h2>
                    <p className="text-lg font-light leading-relaxed" style={{ color: "rgba(220,215,201,0.65)" }}>
                        Whether you're preparing for a corporate event or chasing a personal best, our coaches analyse your crew's technique, synchronisation and race strategy. Sessions at Canary Wharf and Royal Docks.
                    </p>

                    <ul className="mt-8 space-y-3">
                        {["Half-day and full-day bespoke programmes", "BDA-qualified coaching staff", "Full safety cover and equipment provided", "Video stroke analysis and race prep", "Custom branding and team race jerseys", "Certificates, trophies, and awards ceremony"].map((f) => (
                            <li key={f} className="flex items-center gap-3">
                                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                                    style={{ background: "rgba(162,123,91,0.2)" }}>
                                    <Check className="size-3" style={{ color: C.bronze }} />
                                </div>
                                <span className="text-sm font-medium" style={{ color: "rgba(220,215,201,0.8)" }}>{f}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                        <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white transition-all"
                            style={{ background: C.red }}
                            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = C.redLight)}
                            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = C.red)}>
                            Plan Your Event <ArrowRight className="size-4" />
                        </a>
                        <a href="#contact" className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all"
                            style={{ border: "1px solid rgba(220,215,201,0.22)" }}
                            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "rgba(220,215,201,0.07)")}
                            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "transparent")}>
                            Request a Brochure
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {SPECIALIST_BENEFITS.map((b) => (
                        <div key={b.title} className="rounded-2xl p-6"
                            style={{ background: "rgba(220,215,201,0.04)", border: "1px solid rgba(220,215,201,0.09)" }}>
                            <div className="mb-4 text-3xl">{b.emoji}</div>
                            <h3 className="text-base font-bold text-white">{b.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(220,215,201,0.52)" }}>{b.description}</p>
                        </div>
                    ))}
                    <div className="col-span-full rounded-2xl p-5"
                        style={{ background: "rgba(162,123,91,0.08)", border: "1px solid rgba(162,123,91,0.18)" }}>
                        <p className="text-sm font-semibold" style={{ color: C.bronze }}>🏅 Trusted by 120+ organisations</p>
                        <p className="mt-1 text-xs" style={{ color: "rgba(220,215,201,0.42)" }}>
                            Including FTSE-listed companies, UK universities, NHS Trusts, and major charities
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" preserveAspectRatio="none"
                className="h-16 w-full" style={{ fill: C.creamLight }}>
                <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1350,15 1440,30 L1440,60 L0,60 Z" />
            </svg>
        </div>
    </section>
);

// ─── Testimonials ─────────────────────────────────────────────────────────────

const TestimonialsSection = () => (
    <section className="px-4 py-20 md:py-28" style={{ background: C.creamLight }}>
        <div className="mx-auto max-w-container">
            <div className="mx-auto mb-12 max-w-2xl text-center">
                <div className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: C.bronze, letterSpacing: "0.12em" }}>Testimonials</div>
                <h2 className="text-4xl" style={{ ...serif, color: C.forestDeep }}>Voices from the Boat</h2>
                <p className="mt-4 text-lg" style={{ color: C.slate }}>
                    Real reviews from real paddlers — straight from Google.
                </p>
            </div>
            <EmbedSocialWidget />
        </div>
    </section>
);

// ─── Events ───────────────────────────────────────────────────────────────────

const EventsSection = () => (
    <section id="events" className="px-4 py-20 md:py-28" style={{ background: C.creamMid }}>
        <div className="mx-auto max-w-container">
            <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: C.bronze, letterSpacing: "0.12em" }}>Upcoming Events</div>
                    <h2 className="text-4xl" style={{ ...serif, color: C.forestDeep }}>Race Calendar 2026</h2>
                </div>
                <a href="/events" className="inline-flex items-center gap-1.5 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all"
                    style={{ borderColor: C.forest, color: C.forest }}>
                    Full Calendar <ChevronRight className="size-4" />
                </a>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {UPCOMING_EVENTS.map((event) => (
                    <div key={event.title}
                        className="group overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        style={{ background: C.creamLight, border: `1px solid ${C.cream}` }}>
                        <div className="h-1.5 w-full" style={{ background: event.accent }} />
                        <div className="p-7">
                            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
                                style={{ background: event.accentBg, color: event.accent }}>
                                {event.category}
                            </span>
                            <h3 className="mt-3 text-lg font-bold leading-snug" style={{ color: C.forestDeep }}>{event.title}</h3>
                            <div className="mt-4 flex items-center gap-2 text-sm" style={{ color: C.slate }}>
                                <Calendar className="size-4 shrink-0" style={{ color: C.bronze }} />
                                <span>{event.date}</span>
                            </div>
                            <div className="mt-2 flex items-center gap-2 text-sm" style={{ color: C.slate }}>
                                <User01 className="size-4 shrink-0" style={{ color: C.bronze }} />
                                <span>{event.location}</span>
                            </div>
                            <div className="mt-6 flex gap-3">
                                <a href="#contact"
                                    className="flex flex-1 items-center justify-center rounded-xl py-2 text-sm font-bold text-white transition-all"
                                    style={{ background: C.forest }}
                                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = C.forestMid)}
                                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = C.forest)}>
                                    Register
                                </a>
                                <a href="#" className="flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-semibold"
                                    style={{ borderColor: C.cream, color: C.slate }}>Details</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ─── About ────────────────────────────────────────────────────────────────────

const COACHES = [
    {
        name: "Coach Kit",
        role: "Head Coach & Chairman",
        tags: ["BDA Level 3 Coach", "Helm Certified", "Great Britain Racing"],
        bio: "Kit is a highly qualified Level 3 Dragon Boat Coach with an official Helming Certification and over 11 years of experience. His dedication to the sport has seen him compete at the very highest level, representing Great Britain Dragon Boat Racing. Beyond international competition, Kit serves as Chairman of the Windy Pandas, a leading charity dragon boat team in London, where he plays a key role in training, mentoring, and building community through the sport.",
        initials: "K",
        accentBg: C.red,
    },
    {
        name: "Coach Will",
        role: "Coach & Event Director",
        tags: ["10+ Years Coaching", "Helming Certified", "Team Development"],
        bio: "Will has been paddling, helming and coaching with the Windy Pandas, dragon boat festivals and events for over 10 years, guiding both new and experienced paddlers to find confidence and rhythm on the water. With a strong background in team development and event delivery, he combines technical knowledge with a warm, motivating coaching style that ensures every participant feels part of the crew.",
        initials: "W",
        accentBg: C.forestMid,
    },
    {
        name: "Coach Jean",
        role: "Elite Performance Coach",
        tags: ["BDA Level 2 Coach", "Certified Helm", "GB Squad Alumni"],
        bio: "Jean is a Level 2 qualified Dragon Boat Coach, Certified Helm and Boat Operator with over 15 years of experience. A former member of the Great Britain Dragon Boat Squad, Jean brings elite-level expertise and a results-driven approach to coaching. His versatile coaching style supports both beginner and high-performance paddlers, delivering measurable improvements in technique, efficiency and race performance.",
        initials: "J",
        accentBg: C.forest,
    },
];

const AboutSection = () => (
    <section id="about" style={{ background: C.creamLight, padding: "80px 0" }}>
        <div className="mx-auto max-w-container px-4 md:px-8">

            {/* Label + headline */}
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: C.red, letterSpacing: "0.12em" }}>
                Who we are
            </div>
            <h2 className="mb-6 text-4xl" style={{ ...serif, color: C.forest }}>
                Built by paddlers, for paddlers
            </h2>

            {/* Origin story */}
            <div className="mb-12 grid gap-8 md:grid-cols-2">
                <div>
                    <p className="mb-4 text-base leading-relaxed" style={{ color: C.slate }}>
                        More than 20 years ago, Will and Kit started out as university mates. Over 10 years ago they took to the water for the fun of it. What began as a shared challenge quickly grew into a lifelong passion built on teamwork, competition and community — evolving from paddlers to coaches, from teammates to business partners, always driven by the belief that when a crew moves as one, extraordinary things happen.
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: C.slate }}>
                        Jean's story runs alongside theirs. For years they found themselves on opposite sides of the start line — rivals who pushed each other to the limit. That long-standing competition eventually turned into collaboration, and what began as mutual respect has grown into a partnership built on trust, experience and a shared vision for what dragon boating can achieve.
                    </p>
                </div>
                <div className="rounded-2xl p-8" style={{ background: C.forest }}>
                    <div className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: C.bronze, letterSpacing: "0.1em" }}>Our mission</div>
                    <blockquote className="text-xl leading-relaxed" style={{ ...serif, color: C.cream }}>
                        "We strive to deliver unforgettable experiences that inspire individuals, strengthen teams and unite communities through the power of dragon boating."
                    </blockquote>
                    <div className="mt-6 border-t pt-5 text-sm leading-relaxed" style={{ borderColor: "rgba(220,215,201,0.15)", color: "rgba(255,255,255,0.6)" }}>
                        Dragon Boat Experience — DBX — is the result of that journey. Between us, we bring decades of racing, coaching and crew development experience, and a healthy dose of competitive spirit.
                    </div>
                </div>
            </div>

            {/* Coach cards */}
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: C.red, letterSpacing: "0.12em" }}>
                The coaching team
            </div>
            <h3 className="mb-8 text-3xl" style={{ ...serif, color: C.forest }}>Meet the coaches</h3>

            <div className="grid gap-6 md:grid-cols-3">
                {COACHES.map((coach) => (
                    <div key={coach.name} className="overflow-hidden rounded-2xl"
                        style={{ background: C.white, border: "1px solid rgba(8,51,53,0.08)" }}>
                        {/* Avatar bar */}
                        <div className="flex items-center gap-4 px-6 py-5" style={{ background: C.forest }}>
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white"
                                style={{ ...serif, background: coach.accentBg }}>
                                {coach.initials}
                            </div>
                            <div>
                                <div className="text-base font-semibold text-white">{coach.name}</div>
                                <div className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{coach.role}</div>
                            </div>
                        </div>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 px-6 pt-4">
                            {coach.tags.map((tag) => (
                                <span key={tag} className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                                    style={{ background: C.paleBlue, color: C.forestMid }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        {/* Bio */}
                        <p className="px-6 pb-6 pt-3 text-sm leading-relaxed" style={{ color: C.slate }}>
                            {coach.bio}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ─── Contact ──────────────────────────────────────────────────────────────────

const ContactSection = () => (
    <section id="contact" className="relative overflow-hidden px-4 py-20 md:py-28"
        style={{ background: `linear-gradient(160deg, ${C.forestDeep} 0%, #021213 45%, ${C.forestMid} 100%)` }}>
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
                style={{ background: `radial-gradient(circle, ${C.bronze}, transparent 70%)` }} />
        </div>

        <div className="relative z-10 mx-auto max-w-container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                <div>
                    <div className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: C.bronze, letterSpacing: "0.12em" }}>Get in Touch</div>
                    <h2 className="mb-5 text-white" style={{ ...serif, fontSize: "clamp(28px,3.5vw,48px)", lineHeight: 1.1 }}>
                        Ready to Get{" "}
                        <span style={{ color: C.cream }}>on the Water?</span>
                    </h2>
                    <p className="text-lg font-light leading-relaxed" style={{ color: "rgba(220,215,201,0.58)" }}>
                        Whether you're booking for a Scout group, planning a school trip, developing elite youth talent, or organising a corporate event — we'd love to hear from you.
                    </p>

                    <div className="mt-10 space-y-4">
                        {[
                            { icon: Mail01, label: "Email us", value: "contact@dbx.events", href: "mailto:contact@dbx.events" },
                            { icon: Bell01, label: "Call us",  value: "07453 214 171",       href: "tel:07453214171" },
                        ].map((item) => (
                            <a key={item.label} href={item.href}
                                className="flex items-center gap-4 rounded-2xl p-4 transition-all"
                                style={{ background: "rgba(220,215,201,0.05)", border: "1px solid rgba(220,215,201,0.1)" }}
                                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "rgba(220,215,201,0.09)")}
                                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "rgba(220,215,201,0.05)")}>
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                                    style={{ background: "rgba(162,123,91,0.15)" }}>
                                    <item.icon className="size-5" style={{ color: C.bronze }} />
                                </div>
                                <div>
                                    <p className="text-xs font-medium" style={{ color: "rgba(220,215,201,0.45)" }}>{item.label}</p>
                                    <p className="text-sm font-semibold" style={{ color: C.cream }}>{item.value}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                    <p className="mt-6 text-xs" style={{ color: "rgba(220,215,201,0.3)" }}>
                        Form submissions are connected to our HubSpot CRM and we aim to respond within one business day.
                    </p>
                </div>

                <div>
                    <p className="mb-4 text-sm font-semibold" style={{ color: "rgba(220,215,201,0.5)" }}>Send us a message</p>
                    <HubSpotForm />
                </div>
            </div>
        </div>
    </section>
);

// ─── Footer ───────────────────────────────────────────────────────────────────

export const DBXFooter = () => (
    <footer className="px-4 pb-8 pt-16" style={{ background: C.forestDeep, borderTop: "1px solid rgba(220,215,201,0.07)" }}>
        <div className="mx-auto max-w-container">
            <div className="grid gap-10 pb-12 md:grid-cols-5">
                <div className="md:col-span-2">
                    <div className="flex items-center gap-3">
                        <img src="/logo-white.png" alt="DBX" style={{ height: "36px", width: "auto" }} />
                        <div className="flex items-baseline gap-2 leading-none">
                            <p className="text-base font-black tracking-widest text-white">DBX</p>
                            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: C.bronze }}>Dragon Boat Experience</p>
                        </div>
                    </div>
                    <p className="mt-4 max-w-xs text-sm leading-relaxed" style={{ color: "rgba(220,215,201,0.42)" }}>
                        London's specialist dragon boat training provider. Serving schools, Scout groups, elite youth athletes, and corporate teams.
                    </p>
                    <div className="mt-5 flex gap-3">
                        {["FB", "IG", "YT", "LI"].map((s) => (
                            <a key={s} href="#"
                                className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-semibold transition duration-150"
                                style={{ background: "rgba(220,215,201,0.07)", color: "rgba(220,215,201,0.45)" }}
                                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "rgba(220,215,201,0.14)")}
                                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "rgba(220,215,201,0.07)")}>
                                {s}
                            </a>
                        ))}
                    </div>
                </div>

                {[
                    { title: "Programmes", links: [
                        { l: "Scout & Youth Groups",  h: "/youth/scouts" },
                        { l: "Schools Programme",     h: "/youth/schools" },
                        { l: "Team GB Youth Pathway", h: "/youth/team-gb" },
                        { l: "Training Specialists",  h: "/#training" },
                        { l: "Coach & Helm Training", h: "/coach-helm-training" },
                    ]},
                    { title: "Company", links: [
                        { l: "About DBX",    h: "/#about" },
                        { l: "Our Coaches",  h: "/coaches" },
                        { l: "Safety Policy", h: "/safety-policy" },
                        { l: "Careers",      h: "/careers" },
                        { l: "News & Blog",  h: "/news" },
                    ]},
                    { title: "Connect", links: [
                        { l: "Contact Us",        h: "/#contact" },
                        { l: "Events Calendar",   h: "/#events" },
                        { l: "Register Interest", h: "/#contact" },
                        { l: "Sponsorship",       h: "/sponsorship" },
                        { l: "Press",             h: "/press" },
                    ]},
                ].map((col) => (
                    <div key={col.title}>
                        <p className="mb-4 text-xs font-bold uppercase" style={{ color: "rgba(220,215,201,0.3)", letterSpacing: "0.1em" }}>
                            {col.title}
                        </p>
                        <ul className="space-y-2.5">
                            {col.links.map(({ l, h }) => (
                                <li key={l}>
                                    <a href={h} className="text-sm transition duration-150"
                                        style={{ color: "rgba(220,215,201,0.45)" }}
                                        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = C.cream)}
                                        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(220,215,201,0.45)")}>
                                        {l}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center justify-between gap-3 border-t pt-8 sm:flex-row"
                style={{ borderColor: "rgba(220,215,201,0.07)" }}>
                <p className="text-xs" style={{ color: "rgba(220,215,201,0.28)" }}>
                    © 2026 Dragon Boat Experience Ltd. Registered in England & Wales. All rights reserved.
                </p>
                <div className="flex gap-6">
                    {([["Privacy Policy", "/privacy-policy"], ["Terms of Service", "/terms-of-service"], ["Cookie Policy", "/cookie-policy"]] as [string,string][]).map(([link, href]) => (
                        <a key={link} href={href} className="text-xs transition duration-150"
                            style={{ color: "rgba(220,215,201,0.28)" }}
                            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = C.cream)}
                            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(220,215,201,0.28)")}>
                            {link}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

export const HomeScreen = () => (
    <div className="overflow-x-hidden">
        <DBXNav />
        <main>
            <HeroSection />
            <TrustBar />
            <AudienceSection />
            <CTABanner />
            <SpecialistSection />
            <TestimonialsSection />
            <EventsSection />
            <AboutSection />
            <ContactSection />
        </main>
        <DBXFooter />
    </div>
);
