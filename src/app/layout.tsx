import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";

const dmSans = DM_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-dm-sans",
    weight: ["300", "400", "500", "600", "700"],
});

const dmSerifDisplay = DM_Serif_Display({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-dm-serif",
    weight: ["400"],
    style: ["normal", "italic"],
});

export const metadata: Metadata = {
    title: "DBX — Dragon Boat Experience | UK Training Specialists",
    description:
        "DBX delivers expert dragon boat training for schools, Scout groups, Team GB Youth athletes, and corporate teams across the UK. Experience the power of the paddle.",
    keywords: "dragon boat, dragon boat experience, UK dragon boat, youth dragon boat, corporate dragon boat, Team GB, Scouts, schools, DBX",
};

export const viewport: Viewport = {
    themeColor: "#083335",
    colorScheme: "light",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cx(dmSans.variable, dmSerifDisplay.variable, "bg-primary antialiased")}>
                <RouteProvider>
                    <Theme>{children}</Theme>
                </RouteProvider>
            </body>
        </html>
    );
}
