import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Sans, Syne } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const displayFont = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const bodyFont = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.davem.ca"),
  title: "Dave Manning | Executive AI Leadership and Production Delivery",
  description:
    "Architect of AI operating models, governed enterprise AI delivery, and architecture teams that move from pilot to production.",
  openGraph: {
    title: "Dave Manning | Executive AI Leadership and Production Delivery",
    description:
      "Architect of AI operating models, governed enterprise AI delivery, and architecture teams that move from pilot to production.",
    url: "https://www.davem.ca",
    siteName: "Dave Manning",
    type: "website",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Dave Manning | Executive AI Leadership and Production Delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dave Manning | Executive AI Leadership and Production Delivery",
    description:
      "Architect of AI operating models, governed enterprise AI delivery, and architecture teams that move from pilot to production.",
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
      <body className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
