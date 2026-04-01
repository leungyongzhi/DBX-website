"use client";

import React from "react";
import { DBXNav, DBXFooter } from "../home-screen";

const C = {
    forestDeep: "#010a0b", forest: "#083335", forestMid: "#0d4548",
    red: "#841010", redLight: "#9a1313", bronze: "#a27b5b", slate: "#3f4e4f",
    cream: "#dcd7c9", creamLight: "#f4f2ed", creamMid: "#ece7da",
    paleBlue: "#e8f0f0", paleBronze: "#f5ede5", paleRed: "#f8eeee", white: "#ffffff",
};
const serif: React.CSSProperties = { fontFamily: "var(--font-dm-serif)" };

const COACHES = [
    {
        name: "Coach Kit",
        role: "Head Coach & Chairman",
        tags: ["BDA Level 3 Coach", "Helm Certified", "Great Britain Racing", "11+ Years Experience"],
        bio: "Kit is a highly qualified Level 3 Dragon Boat Coach with an official Helming Certification and over 11 years of experience. His dedication to the sport has seen him compete at the very highest level, representing Great Britain Dragon Boat Racing. Beyond international competition, Kit serves as Chairman of the Windy Pandas, a leading charity dragon boat team in London, where he plays a key role in training, mentoring, and building community through the sport.",
        initials: "K",
        accentBg: C.red,
    },
    {
        name: "Coach Will",
        role: "Coach & Event Director",
        tags: ["10+ Years Coaching", "Helming Certified", "Team Development", "Event Delivery"],
        bio: "Will has been paddling, helming and coaching with the Windy Pandas, dragon boat festivals and events for over 10 years, guiding both new and experienced paddlers to find confidence and rhythm on the water. With a strong background in team development and event delivery, he combines technical knowledge with a warm, motivating coaching style that ensures every participant feels part of the crew.",
        initials: "W",
        accentBg: C.forestMid,
    },
    {
        name: "Coach Jean",
        role: "Elite Performance Coach",
        tags: ["BDA Level 2 Coach", "Certified Helm & Boat Operator", "GB Squad Alumni", "15+ Years Experience"],
        bio: "Jean is a Level 2 qualified Dragon Boat Coach, Certified Helm and Boat Operator with over 15 years of experience. A former member of the Great Britain Dragon Boat Squad, Jean brings elite-level expertise and a results-driven approach to coaching. His versatile coaching style supports both beginner and high-performance paddlers, delivering measurable improvements in technique, efficiency and race performance.",
        initials: "J",
        accentBg: C.forest,
    },
];

export default function CoachesPage() {
    return (
        <div>
            <DBXNav />
            <main className="pt-24">
                {/* Hero */}
                <section style={{ background: C.forest, padding: "64px 0 72px" }}>
                    <div className="mx-auto max-w-container px-4 md:px-8">
                        <div className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: C.bronze, letterSpacing: "0.12em" }}>
                            <span className="inline-block h-0.5 w-6 mr-2 align-middle" style={{ background: C.bronze }} />
                            DBX Dragon Boat Experience
                        </div>
                        <h1 className="text-white mb-4" style={{ ...serif, fontSize: "clamp(36px,4.5vw,56px)", lineHeight: 1.1 }}>
                            Our Coaching Team
                        </h1>
                        <p className="text-lg font-light max-w-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                            Three highly qualified coaches. Decades of combined experience. One shared passion for developing dragon boat talent at every level.
                        </p>
                    </div>
                </section>

                {/* Coach Cards */}
                <section style={{ background: C.creamLight, padding: "72px 0" }}>
                    <div className="mx-auto max-w-container px-4 md:px-8">
                        <div className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: C.red, letterSpacing: "0.12em" }}>
                            The team
                        </div>
                        <h2 className="mb-10 text-3xl" style={{ ...serif, color: C.forest }}>
                            Meet the coaches
                        </h2>

                        <div className="grid gap-6 md:grid-cols-3">
                            {COACHES.map((coach) => (
                                <div key={coach.name} className="overflow-hidden rounded-2xl"
                                    style={{ background: C.white, border: "1px solid rgba(8,51,53,0.08)", boxShadow: "0 2px 16px rgba(8,51,53,0.06)" }}>
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

                {/* CTA */}
                <section style={{ background: C.creamMid, padding: "64px 0" }}>
                    <div className="mx-auto max-w-container px-4 md:px-8 text-center">
                        <h2 className="mb-4 text-3xl" style={{ ...serif, color: C.forest }}>
                            Want to train with us?
                        </h2>
                        <p className="mb-8 text-base leading-relaxed max-w-lg mx-auto" style={{ color: C.slate }}>
                            Whether you're a school, a Scout group, a corporate team, or an individual looking to develop — our coaches are ready to help.
                        </p>
                        <a href="/#contact"
                            className="inline-flex items-center gap-2 rounded-xl px-8 py-3 text-sm font-semibold text-white transition-all duration-150"
                            style={{ background: C.red }}
                            onMouseEnter={e => (e.currentTarget.style.background = C.redLight)}
                            onMouseLeave={e => (e.currentTarget.style.background = C.red)}>
                            Get in touch →
                        </a>
                    </div>
                </section>
            </main>
            <DBXFooter />
        </div>
    );
}
