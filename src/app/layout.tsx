import Header from "@/app/header";
import { myName, siteDescription, siteName } from "@/lib/siteInfo";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Main from "./Main";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: siteName,
    description: siteDescription,
    keywords: [
        "プログラミング",
        "TypeScript",
        "React",
        "Next.js",
        "フロントエンド開発",
        "技術ブログ",
    ],
    authors: [{ name: myName }],
    creator: myName,
    openGraph: {
        title: "Dev Learning Notes",
        description: "プログラミング学習の記録や技術的な発見をシェアするブログ",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Dev Learning Notes",
        description: "プログラミング学習の記録や技術的な発見をシェアするブログ",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <Header />
                <Main>{children}</Main>
            </body>
        </html>
    );
}
