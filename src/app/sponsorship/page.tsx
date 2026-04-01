"use client";
import { DBXNav, DBXFooter } from "../home-screen";

const C = {
    forestDeep: "#010a0b", forest: "#083335", forestMid: "#0d4548",
    red: "#841010", bronze: "#a27b5b", slate: "#3f4e4f",
    cream: "#dcd7c9", creamLight: "#f4f2ed", creamMid: "#ece7da", white: "#ffffff",
};
const serif: React.CSSProperties = { fontFamily: "var(--font-dm-serif)" };

const TIERS = [
    { name: "Paddle Partner", price: "£500", perks: ["Brand on race day banners", "Social media mention", "2 complimentary crew places"] },
    { name: "Dragon Sponsor", price: "£1,500", perks: ["Boat naming rights for one event", "Logo on team kit", "5 complimentary crew places", "Social media campaign"] },
    { name: "Title Sponsor", price: "£5,000+", perks: ["Event title naming rights", "Full branding across all materials", "10 complimentary crew places", "Press coverage & PR", "Dedicated post-event report"] },
];

export default function SponsorshipPage() {
    return (
        <div className="overflow-x-hidden">
            <DBXNav />
            <main>
                <section className="px-4 pb-20 pt-36"
                    style={{ background: `linear-gradient(160deg, ${C.forestDeep} 0%, #021213 50%, ${C.forestMid} 100%)` }}>
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: C.bronze, letterSpacing: "0.12em" }}>Partner With Us</div>
                        <h1 className="mb-5 text-5xl text-white" style={serif}>
                            <em style={{ fontStyle: "italic", color: C.red }}>Sponsorship</em> opportunities
                        </h1>
                        <p className="text-lg" style={{ color: "rgba(220,215,201,0.7)" }}>
                            Align your brand with one of London's most exciting and community-focused water sports organisations.
                        </p>
                    </div>
                </section>

                <section className="px-4 py-20" style={{ background: C.creamLight }}>
                    <div className="mx-auto max-w-4xl">
                        <div className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: C.bronze, letterSpacing: "0.12em" }}>Sponsorship Packages</div>
                        <h2 className="mb-10 text-4xl" style={{ ...serif, color: C.forestDeep }}>Choose your level of involvement</h2>
                        <div className="grid gap-6 md:grid-cols-3">
                            {TIERS.map((t, i) => (
                                <div key={t.name} className="flex flex-col rounded-2xl overflow-hidden"
                                    style={{ border: `1px solid rgba(8,51,53,0.1)`, background: i === 2 ? C.forest : C.white }}>
                                    <div className="p-6 pb-4">
                                        <div className="mb-1 text-xs font-semibold uppercase tracking-widest"
                                            style={{ color: i === 2 ? C.bronze : C.bronze }}>{t.name}</div>
                                        <div className="text-3xl font-bold" style={{ ...serif, color: i === 2 ? C.cream : C.forestDeep }}>{t.price}</div>
                                    </div>
                                    <div className="flex flex-1 flex-col p-6 pt-0">
                                        <ul className="mb-6 flex-1 space-y-2">
                                            {t.perks.map((p) => (
                                                <li key={p} className="flex items-start gap-2 text-sm"
                                                    style={{ color: i === 2 ? "rgba(220,215,201,0.8)" : C.slate }}>
                                                    <span style={{ color: C.red, marginTop: "2px" }}>✓</span>{p}
                                                </li>
                                            ))}
                                        </ul>
                                        <a href="/#contact"
                                            className="block rounded-xl py-2.5 text-center text-sm font-semibold no-underline"
                                            style={{ background: i === 2 ? C.red : C.creamMid, color: i === 2 ? C.white : C.forest }}>
                                            Enquire →
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-center text-sm" style={{ color: C.slate }}>
                            Bespoke packages available. Contact us at <a href="mailto:contact@dbx.events" style={{ color: C.red }}>contact@dbx.events</a>
                        </p>
                    </div>
                </section>
            </main>
            <DBXFooter />
        </div>
    );
}
