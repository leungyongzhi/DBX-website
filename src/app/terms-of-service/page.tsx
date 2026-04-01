"use client";
import { DBXNav, DBXFooter } from "../home-screen";

const C = {
    forestDeep: "#010a0b", forest: "#083335",
    bronze: "#a27b5b", slate: "#3f4e4f",
    creamLight: "#f4f2ed", white: "#ffffff",
};
const serif: React.CSSProperties = { fontFamily: "var(--font-dm-serif)" };

const SECTIONS = [
    { heading: "Acceptance of terms", body: "By booking a session, event, or programme with Dragon Boat Experience Ltd (DBX), you agree to be bound by these Terms of Service. If you do not agree, please do not make a booking." },
    { heading: "Bookings and payment", body: "Bookings are confirmed upon receipt of a deposit or full payment as specified in your booking confirmation. All prices are inclusive of VAT where applicable. DBX reserves the right to adjust pricing with reasonable notice." },
    { heading: "Cancellation by the customer", body: "Cancellations made more than 14 days before the event date are eligible for a full refund. Cancellations within 7–14 days will receive a 50% refund. Cancellations within 7 days are non-refundable. Rescheduling requests will be accommodated where possible." },
    { heading: "Cancellation by DBX", body: "DBX reserves the right to cancel or reschedule sessions due to unsafe weather conditions, insufficient participant numbers, or circumstances beyond our control. In such cases, a full refund or alternative date will be offered." },
    { heading: "Participant health and fitness", body: "Participants are responsible for ensuring they are fit and healthy enough to take part. Any known medical conditions must be declared at booking. DBX accepts no liability for undisclosed conditions that result in injury or illness." },
    { heading: "Liability", body: "DBX maintains full public liability insurance. We accept liability for injury or loss caused by our negligence. We do not accept liability for personal belongings lost or damaged during sessions, or for injury caused by failure to follow safety instructions." },
    { heading: "Photography and media", body: "DBX may photograph or film sessions for promotional purposes. If you do not consent to being photographed, please notify us before your session. Participants consent to DBX using anonymised group images for marketing purposes." },
    { heading: "Governing law", body: "These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales." },
];

export default function TermsPage() {
    return (
        <div className="overflow-x-hidden">
            <DBXNav />
            <main>
                <section className="px-4 pb-16 pt-36" style={{ background: `linear-gradient(160deg, ${C.forestDeep} 0%, #021213 50%, #0d4548 100%)` }}>
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-3 text-5xl text-white" style={serif}>Terms of Service</h1>
                        <p className="text-lg" style={{ color: "rgba(220,215,201,0.7)" }}>Last updated: January 2026</p>
                    </div>
                </section>
                <section className="px-4 py-20" style={{ background: C.creamLight }}>
                    <div className="mx-auto max-w-3xl flex flex-col gap-6">
                        {SECTIONS.map((s) => (
                            <div key={s.heading} className="rounded-2xl p-7" style={{ background: C.white, border: `1px solid rgba(8,51,53,0.08)` }}>
                                <h2 className="mb-3 text-xl font-semibold" style={{ ...serif, color: C.forest }}>{s.heading}</h2>
                                <p className="text-sm leading-relaxed" style={{ color: C.slate }}>{s.body}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <DBXFooter />
        </div>
    );
}
