"use client";
import { DBXNav, DBXFooter } from "../home-screen";

const C = {
    forestDeep: "#010a0b", forest: "#083335", forestMid: "#0d4548",
    red: "#841010", bronze: "#a27b5b", slate: "#3f4e4f",
    cream: "#dcd7c9", creamLight: "#f4f2ed", creamMid: "#ece7da", white: "#ffffff",
};
const serif: React.CSSProperties = { fontFamily: "var(--font-dm-serif)" };

const POSTS = [
    {
        tag: "Youth Development",
        date: "March 2026",
        title: "DBX launches new Team GB Youth Pathway for 2026",
        excerpt: "We're proud to announce the expansion of our elite youth development programme, with new training slots available at West India Docks and Royal Docks.",
    },
    {
        tag: "Events",
        date: "February 2026",
        title: "DBX Open Regatta 2026 — registration now open",
        excerpt: "The DBX Open Regatta returns to West India Docks, Canary Wharf on 16–17 May 2026. Places are limited — register your crew now.",
    },
    {
        tag: "Scouts",
        date: "January 2026",
        title: "New Scouts Dragon Boat Badge partnership confirmed",
        excerpt: "DBX is now an approved delivery partner for the Scouts Dragon Boat Activity Badge across London, covering all six required competency areas.",
    },
    {
        tag: "Coaching",
        date: "December 2025",
        title: "Coach Kit appointed BDA Regional Development Officer",
        excerpt: "We're delighted to share that Head Coach Kit has been appointed as Regional Development Officer by the British Dragon Boat Association.",
    },
];

export default function NewsPage() {
    return (
        <div className="overflow-x-hidden">
            <DBXNav />
            <main>
                <section className="px-4 pb-20 pt-36"
                    style={{ background: `linear-gradient(160deg, ${C.forestDeep} 0%, #021213 50%, ${C.forestMid} 100%)` }}>
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: C.bronze, letterSpacing: "0.12em" }}>Latest from DBX</div>
                        <h1 className="mb-5 text-5xl text-white" style={serif}>
                            News <em style={{ fontStyle: "italic", color: C.red }}>&amp; Blog</em>
                        </h1>
                        <p className="text-lg" style={{ color: "rgba(220,215,201,0.7)" }}>
                            Updates, stories and insights from the DBX coaching team and the world of dragon boating.
                        </p>
                    </div>
                </section>

                <section className="px-4 py-20" style={{ background: C.creamLight }}>
                    <div className="mx-auto max-w-3xl">
                        <div className="flex flex-col gap-6">
                            {POSTS.map((p) => (
                                <article key={p.title} className="rounded-2xl p-7" style={{ background: C.white, border: `1px solid rgba(8,51,53,0.1)` }}>
                                    <div className="mb-3 flex items-center gap-3">
                                        <span className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                                            style={{ background: C.creamMid, color: C.forest }}>{p.tag}</span>
                                        <span className="text-xs" style={{ color: C.bronze }}>{p.date}</span>
                                    </div>
                                    <h2 className="mb-3 text-xl font-semibold" style={{ ...serif, color: C.forestDeep }}>{p.title}</h2>
                                    <p className="text-sm leading-relaxed" style={{ color: C.slate }}>{p.excerpt}</p>
                                </article>
                            ))}
                        </div>
                        <p className="mt-10 text-center text-sm" style={{ color: C.slate }}>
                            More articles coming soon. Follow us on social media for the latest updates.
                        </p>
                    </div>
                </section>
            </main>
            <DBXFooter />
        </div>
    );
}
