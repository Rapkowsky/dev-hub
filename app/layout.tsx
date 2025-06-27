import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/context/theme";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const inter = localFont({
    src: "./fonts/InterVF.ttf",
    variable: "--font-inter",
    weight: "100 200 300 400 500 700 800 900",
});

const spaceGrotesk = localFont({
    src: "./fonts/SpaceGroteskVF.ttf",
    variable: "--font-space-grotesk",
    weight: "300 400 500 700",
});

export const metadata: Metadata = {
    title: "DevHub – StackOverflow Clone Built with Next.js",
    description:
        "DevHub is a modern Q&A platform for developers, inspired by StackOverflow and built with Next.js. Ask questions, share answers, and collaborate with devs worldwide in a fast, responsive interface.",
    generator: "Next.js",
    applicationName: "DevHub",
    referrer: "origin-when-cross-origin",

    keywords: [
        "DevHub",
        "programming questions",
        "developer Q&A",
        "web development",
        "JavaScript",
        "React",
        "Node.js",
        "algorithms",
        "data structures",
        "developer community",
    ],

    authors: [{ name: "Robert" }],
    creator: "Robert",
    publisher: "DevHub",

    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },

    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    icons: {
        icon: "/images/site-logo.svg", // regular favicon
        shortcut: "/favicon.ico", // browser address bar icon
        apple: "/apple-touch-icon.png", // Apple devices
        other: [
            {
                rel: "mask-icon",
                url: "/safari-pinned-tab.svg",
                color: "#5bbad5",
            },
        ],
    },
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
    const session = await auth();

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
                />
            </head>
            <SessionProvider session={session}>
                <body
                    className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                    <Toaster
                        toastOptions={{
                            classNames: {
                                description: "dark:text-gray-400!",
                            },
                        }}
                    />
                </body>
            </SessionProvider>
        </html>
    );
};

export default RootLayout;
