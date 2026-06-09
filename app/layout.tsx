import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { APP_DESCRIPTION } from "@/lib/constant";
import { APP_NAME } from "@/lib/constant";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

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
            suppressHydrationWarning
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden h-full antialiased`}>
            <body className="min-h-full flex flex-col">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange>
                    {children}{" "}
                    <Toaster
                        toastOptions={{
                            classNames: {
                                success: "!bg-green-900 !text-green-100",
                                error: "!bg-red-900 !text-white",
                                loading: "!bg-zinc-800 text-zinc-100",
                            },
                        }}
                    />
                </ThemeProvider>
            </body>
        </html>
    );
}

// overflow - x - hidden;
