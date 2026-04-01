"use client";
import { DBXNav, DBXFooter } from "../home-screen";

const C = {
    forestDeep: "#010a0b", forest: "#083335", forestMid: "#0d4548",
    red: "#841010", bronze: "#a27b5b", slate: "#3f4e4f",
    cream: "#dcd7c9", creamLight: "#f4f2ed", creamMid: "#ece7da", white: "#ffffff",
};
const serif: React.CSSProperties = { fontFamily: "var(--font-dm-serif)" };

const SECTIONS = [
    {
        heading: "Our commitment to safety",
        body: "DBX operates under the framework of the British Dragon Boat Racing Association (BDA) and follows all national governing body guidelines for water-based activities. All sessions are risk-assessed prior to delivery and reviewed regularly.",
    },
    {
        heading: "Qualified coaching staff",
        body: "All DBX coaches hold current BDA coaching qualifications and valid first aid certifications. Coaches are DBS-checked and hold relevant safeguarding training where required for youth sessions.",
    },
    {
        heading: "Personal protective equipment",
        body: "All participants are required to wear a buoyancy aid (life jacket) for the duration of any on-water session. DBX provides all required PPE. Footwear suitable for wet conditions is required.",
    },
    {
        heading: "Participant health",
        body: "Participants are asked to declare any relevant medical conditions prior to taking part. DBX reserves the right to decline participation where safety cannot be assured. Pregnant participants and those with specific medical conditions should consult their GP before joining.",
    },
    {
        heading: "Youth safeguarding",
        body: "All sessions involving participants under 18 years old are delivered in accordance with our Child Safeguarding Policy. A minimum coach-to-participant ratio is maintained at all times. All DBX coaches working with young people hold an Enhanced DBS certificate.",
    },
    {
        heading: "Emergencies",
        body: "All DBX coaches are trained in emergency procedures including man-overboard recovery, first aid response and venue-specific evacuation protocols. First aid kits and throw lines are present at all sessions.",
    },
    {
        heading: "Contact",
        body: "To request a copy of the full DBX Safety Policy document, or to raise a safety concern, please contact us at contact@dbx.events or call 07453 214 171.",
    },
];

export default function SafetyPolicyPage() {
    return (
        <div className="overflow-x-hidden">
            <DBXNav />
            <main>
                <section className="px-4 pb-16 pt-36"
                    style={{ background: `linear-gradient(160deg, ${C.forestDeep} 0%, #021213 50%, ${C.forestMid} 100%)` }}>
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: C.bronze, letterSpacing: "0.12em" }}>On the Water</div>
                        <h1 className="mb-5 text-5xl text-white" style={serif}>Safety Policy</h1>
                        <p className="text-lg" style={{ color: "rgba(220,215,201,0.7)" }}>Last updated: January 2026</p>
                    </div>
                </section>

                <section className="px-4 py-20" style={{ background: C.creamLight }}>
                    <div className="mx-auto max-w-3xl">
                        <div className="flex flex-col gap-8">
                            {SECTIONS.map((s) => (
                                <div key={s.heading} className="rounded-2xl p-7" style={{ background: C.white, border: `1px solid rgba(8,51,53,0.08)` }}>
                                    <h2 className="mb-3 text-xl font-semibold" style={{ ...serif, color: C.forest }}>{s.heading}</h2>
                                    <p className="text-sm leading-relaxed" style={{ color: C.slate }}>{s.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <DBXFooter />
        </div>
    );
}
