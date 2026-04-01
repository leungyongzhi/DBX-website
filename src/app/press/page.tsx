"use client";
import { DBXNav, DBXFooter } from "../home-screen";

const C = {
    forestDeep: "#010a0b", forest: "#083335", forestMid: "#0d4548",
    red: "#841010", bronze: "#a27b5b", slate: "#3f4e4f",
    cream: "#dcd7c9", creamLight: "#f4f2ed", creamMid: "#ece7da", white: "#ffffff",
};
const serif: React.CSSProperties = { fontFamily: "var(--font-dm-serif)" };

export default function PressPage() {
    return (
        <div className="overflow-x-hidden">
            <DBXNav />
            <main>
                <section className="px-4 pb-20 pt-36"
                    style={{ background: `linear-gradient(160deg, ${C.forestDeep} 0%, #021213 50%, ${C.forestMid} 100%)` }}>
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: C.bronze, letterSpacing: "0.12em" }}>Media</div>
                        <h1 className="mb-5 text-5xl text-white" style={serif}>
                            Press <em style={{ fontStyle: "italic", color: C.red }}>&amp; Media</em>
                        </h1>
                        <p className="text-lg" style={{ color: "rgba(220,215,201,0.7)" }}>
                            For media enquiries, interview requests, and press assets, get in touch with our team.
                        </p>
                    </div>
                </section>

                <section className="px-4 py-20" style={{ background: C.creamLight }}>
                    <div className="mx-auto max-w-3xl">
                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="rounded-2xl p-8" style={{ background: C.white, border: `1px solid rgba(8,51,53,0.1)` }}>
                                <div className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: C.bronze }}>Press Contact</div>
                                <h3 className="mb-3 text-xl font-semibold" style={{ ...serif, color: C.forestDeep }}>Media enquiries</h3>
                                <p className="mb-5 text-sm leading-relaxed" style={{ color: C.slate }}>
                                    For interview requests, event coverage, photography access, or general media enquiries, please email us directly.
                                </p>
                                <a href="mailto:contact@dbx.events"
                                    className="inline-block rounded-xl px-5 py-2.5 text-sm font-semibold no-underline"
                                    style={{ background: C.red, color: C.white }}>
                                    contact@dbx.events
                                </a>
                            </div>
                            <div className="rounded-2xl p-8" style={{ background: C.white, border: `1px solid rgba(8,51,53,0.1)` }}>
                                <div className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: C.bronze }}>About DBX</div>
                                <h3 className="mb-3 text-xl font-semibold" style={{ ...serif, color: C.forestDeep }}>Brand assets</h3>
                                <p className="mb-5 text-sm leading-relaxed" style={{ color: C.slate }}>
                                    Logos, photography, and biography information for Coach Kit, Coach Will and Coach Jean are available on request.
                                </p>
                                <a href="mailto:contact@dbx.events"
                                    className="inline-block rounded-xl px-5 py-2.5 text-sm font-semibold no-underline"
                                    style={{ background: C.forest, color: C.cream }}>
                                    Request assets →
                                </a>
                            </div>
                        </div>

                        <div className="mt-8 rounded-2xl p-8" style={{ background: C.forestDeep }}>
                            <div className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: C.bronze }}>Key Facts</div>
                            <h3 className="mb-5 text-2xl text-white" style={serif}>DBX at a glance</h3>
                            <div className="grid gap-4 sm:grid-cols-3">
                                {[
                                    { stat: "20+", label: "Years combined coaching experience" },
                                    { stat: "3", label: "London watersports venues" },
                                    { stat: "5★", label: "Google rating · 8 reviews" },
                                ].map((s) => (
                                    <div key={s.stat}>
                                        <div className="text-3xl font-bold" style={{ ...serif, color: C.red }}>{s.stat}</div>
                                        <div className="mt-1 text-sm" style={{ color: "rgba(220,215,201,0.6)" }}>{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <DBXFooter />
        </div>
    );
}
