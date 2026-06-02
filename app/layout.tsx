import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { APP_DESCRIPTION } from "@/lib/constant";
import { APP_NAME } from "@/lib/constant";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        absolute: APP_NAME,
        template: `%s | ${APP_NAME}`,
    },
    description: `${APP_DESCRIPTION}`,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}>
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
