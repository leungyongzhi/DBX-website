"use client";
import { DBXNav, DBXFooter } from "../home-screen";

const C = {
    forestDeep: "#010a0b", forest: "#083335",
    bronze: "#a27b5b", slate: "#3f4e4f",
    creamLight: "#f4f2ed", white: "#ffffff",
};
const serif: React.CSSProperties = { fontFamily: "var(--font-dm-serif)" };

const SECTIONS = [
    { heading: "Who we are", body: "Dragon Boat Experience Ltd (trading as DBX) is registered in England & Wales. Our registered email address is contact@dbx.events. We are the data controller for the personal data we collect through this website and through our services." },
    { heading: "What data we collect", body: "We collect information you provide directly to us, including your name, email address, phone number, and the details of your enquiry when you submit a form on our website. We also collect standard analytics data (page views, device type, approximate location) via our hosting provider." },
    { heading: "How we use your data", body: "We use your data to respond to your enquiries, to process bookings, to send event information you have requested, and to improve our services. We do not sell your data to third parties. We may share your data with HubSpot (our CRM provider) to manage communications." },
    { heading: "Legal basis for processing", body: "We process your data on the basis of legitimate interest (responding to enquiries and delivering booked services) and, where applicable, consent (marketing communications). You may withdraw consent at any time." },
    { heading: "Data retention", body: "We retain enquiry data for up to 3 years. Booking and financial records are retained for 7 years as required by law. You may request deletion of your personal data at any time, subject to our legal obligations." },
    { heading: "Your rights", body: "Under UK GDPR you have the right to access, rectify, erase, restrict, object to, or port your personal data. To exercise any of these rights, email contact@dbx.events. You also have the right to complain to the Information Commissioner's Office (ICO)." },
    { heading: "Cookies", body: "We use essential cookies required for the website to function, and analytics cookies to understand how visitors use our site. See our Cookie Policy for full details." },
    { heading: "Contact", body: "For any privacy-related queries, contact us at contact@dbx.events or write to Dragon Boat Experience Ltd, London, UK." },
];

export default function PrivacyPolicyPage() {
    return (
        <div className="overflow-x-hidden">
            <DBXNav />
            <main>
                <section className="px-4 pb-16 pt-36" style={{ background: `linear-gradient(160deg, ${C.forestDeep} 0%, #021213 50%, #0d4548 100%)` }}>
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-3 text-5xl text-white" style={serif}>Privacy Policy</h1>
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
