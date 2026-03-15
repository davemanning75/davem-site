import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://davemanning.ca"),
  title: "Dave Manning — Agentic AI Leader",
  description:
    "Agentic AI leadership, enterprise AI architecture, and production-grade AI delivery.",
  openGraph: {
    title: "Dave Manning — Agentic AI Leader",
    description:
      "Agentic AI leadership, enterprise AI architecture, and production-grade AI delivery.",
    url: "https://davemanning.ca",
    siteName: "Dave Manning",
    type: "website",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Dave Manning — Agentic AI Leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dave Manning — Agentic AI Leader",
    description:
      "Agentic AI leadership, enterprise AI architecture, and production-grade AI delivery.",
    images: ["/og.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
