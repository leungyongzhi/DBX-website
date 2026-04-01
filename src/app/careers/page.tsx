"use client";
import { DBXNav, DBXFooter } from "../home-screen";

const C = {
    forestDeep: "#010a0b", forest: "#083335", forestMid: "#0d4548",
    red: "#841010", bronze: "#a27b5b", slate: "#3f4e4f",
    cream: "#dcd7c9", creamLight: "#f4f2ed", creamMid: "#ece7da", white: "#ffffff",
};
const serif: React.CSSProperties = { fontFamily: "var(--font-dm-serif)" };

const ROLES = [
    {
        title: "Part-Time Dragon Boat Coach",
        type: "Part-time · London",
        desc: "BDA Level 2+ qualified coaches wanted to lead sessions across our London venues. Experience with youth or corporate groups preferred.",
    },
    {
        title: "Events Coordinator",
        type: "Freelance · London",
        desc: "Help plan and deliver dragon boat festivals, corporate events and charity experiences. Strong logistics and communication skills essential.",
    },
    {
        title: "Youth Programme Lead",
        type: "Seasonal · London",
        desc: "Lead our youth programmes across Scouts, schools and Team GB development sessions. Coaching qualification and safeguarding certificate required.",
    },
];

export default function CareersPage() {
    return (
        <div className="overflow-x-hidden">
            <DBXNav />
            <main>
                {/* Hero */}
                <section className="px-4 pb-20 pt-36"
                    style={{ background: `linear-gradient(160deg, ${C.forestDeep} 0%, #021213 50%, ${C.forestMid} 100%)` }}>
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: C.bronze, letterSpacing: "0.12em" }}>Join the Team</div>
                        <h1 className="mb-5 text-5xl text-white" style={serif}>
                            Careers at <em style={{ fontStyle: "italic", color: C.red }}>DBX</em>
                        </h1>
                        <p className="text-lg" style={{ color: "rgba(220,215,201,0.7)" }}>
                            We're a small, passionate team bringing dragon boating to London. If you share our love of the sport and want to make an impact, we'd love to hear from you.
                        </p>
                    </div>
                </section>

                {/* Roles */}
                <section className="px-4 py-20" style={{ background: C.creamLight }}>
                    <div className="mx-auto max-w-3xl">
                        <div className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: C.bronze, letterSpacing: "0.12em" }}>Open Positions</div>
                        <h2 className="mb-10 text-4xl" style={{ ...serif, color: C.forestDeep }}>Current opportunities</h2>
                        <div className="flex flex-col gap-5">
                            {ROLES.map((r) => (
                                <div key={r.title} className="rounded-2xl p-7" style={{ background: C.white, border: `1px solid rgba(8,51,53,0.1)` }}>
                                    <div className="mb-1 text-lg font-semibold" style={{ color: C.forest }}>{r.title}</div>
                                    <div className="mb-3 text-xs font-semibold" style={{ color: C.bronze }}>{r.type}</div>
                                    <p className="mb-5 text-sm leading-relaxed" style={{ color: C.slate }}>{r.desc}</p>
                                    <a href="/#contact"
                                        className="inline-block rounded-xl px-5 py-2.5 text-sm font-semibold text-white no-underline"
                                        style={{ background: C.red }}>
                                        Express Interest →
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 rounded-2xl p-7 text-center" style={{ background: C.creamMid }}>
                            <p className="mb-3 text-base font-semibold" style={{ color: C.forest }}>Don't see the right role?</p>
                            <p className="mb-5 text-sm" style={{ color: C.slate }}>We always want to hear from talented coaches, event managers and water sports enthusiasts. Send us a speculative application.</p>
                            <a href="mailto:contact@dbx.events"
                                className="inline-block rounded-xl px-5 py-2.5 text-sm font-semibold no-underline"
                                style={{ background: C.forest, color: C.cream }}>
                                contact@dbx.events
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <DBXFooter />
        </div>
    );
}
