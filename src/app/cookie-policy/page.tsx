"use client";
import { DBXNav, DBXFooter } from "../home-screen";

const C = {
    forestDeep: "#010a0b", forest: "#083335",
    bronze: "#a27b5b", slate: "#3f4e4f",
    creamLight: "#f4f2ed", creamMid: "#ece7da", white: "#ffffff",
};
const serif: React.CSSProperties = { fontFamily: "var(--font-dm-serif)" };

const COOKIE_TYPES = [
    { type: "Essential cookies", purpose: "Required for the website to function correctly. These cannot be disabled.", examples: "Session state, security tokens, form CSRF protection." },
    { type: "Analytics cookies", purpose: "Help us understand how visitors interact with our website so we can improve the experience.", examples: "Page views, traffic sources, device type, approximate location (country/city level)." },
    { type: "Marketing cookies", purpose: "Used to track visitors across websites to display relevant advertisements.", examples: "We do not currently use marketing or advertising cookies." },
];

export default function CookiePolicyPage() {
    return (
        <div className="overflow-x-hidden">
            <DBXNav />
            <main>
                <section className="px-4 pb-16 pt-36" style={{ background: `linear-gradient(160deg, ${C.forestDeep} 0%, #021213 50%, #0d4548 100%)` }}>
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-3 text-5xl text-white" style={serif}>Cookie Policy</h1>
                        <p className="text-lg" style={{ color: "rgba(220,215,201,0.7)" }}>Last updated: January 2026</p>
                    </div>
                </section>
                <section className="px-4 py-20" style={{ background: C.creamLight }}>
                    <div className="mx-auto max-w-3xl">
                        <div className="mb-8 rounded-2xl p-7" style={{ background: C.white, border: `1px solid rgba(8,51,53,0.08)` }}>
                            <h2 className="mb-3 text-xl font-semibold" style={{ ...serif, color: C.forest }}>What are cookies?</h2>
                            <p className="text-sm leading-relaxed" style={{ color: C.slate }}>
                                Cookies are small text files placed on your device when you visit a website. They help the site function correctly, remember your preferences, and provide analytics data to website owners. This policy explains how DBX uses cookies.
                            </p>
                        </div>

                        <div className="mb-8 overflow-hidden rounded-2xl" style={{ border: `1px solid rgba(8,51,53,0.08)` }}>
                            <div className="grid grid-cols-3 px-6 py-3 text-xs font-bold uppercase tracking-widest" style={{ background: C.forest, color: C.creamMid }}>
                                <div>Cookie type</div>
                                <div>Purpose</div>
                                <div>Examples</div>
                            </div>
                            {COOKIE_TYPES.map((row, i) => (
                                <div key={row.type} className="grid grid-cols-3 gap-4 px-6 py-5 text-sm"
                                    style={{ background: i % 2 === 0 ? C.white : C.creamLight, color: C.slate }}>
                                    <div className="font-semibold" style={{ color: C.forest }}>{row.type}</div>
                                    <div>{row.purpose}</div>
                                    <div style={{ color: "#6b7c7d" }}>{row.examples}</div>
                                </div>
                            ))}
                        </div>

                        <div className="rounded-2xl p-7" style={{ background: C.white, border: `1px solid rgba(8,51,53,0.08)` }}>
                            <h2 className="mb-3 text-xl font-semibold" style={{ ...serif, color: C.forest }}>Managing cookies</h2>
                            <p className="text-sm leading-relaxed" style={{ color: C.slate }}>
                                You can control and delete cookies through your browser settings. Note that disabling essential cookies may affect the functionality of this website. For more information, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" style={{ color: C.forest }}>aboutcookies.org</a>. To exercise your rights under our Privacy Policy, contact us at contact@dbx.events.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <DBXFooter />
        </div>
    );
}
