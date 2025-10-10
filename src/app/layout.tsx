import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trndz Pro | Curated Amazon Finds for Modern Living",
  description:
    "An editorial curation of Amazon finds — refined beauty, fashion, and lifestyle products for everyday design lovers.",
  openGraph: {
    title: "Trndz Pro | Curated Amazon Finds for Modern Living",
    description:
      "Explore thoughtfully chosen Amazon essentials across beauty, fashion, and lifestyle — modern, timeless, and design-forward.",
    url: "https://trndz.pro",
    siteName: "Trndz Pro",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Trndz Pro Editorial Curation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-neutral-50 text-neutral-900 antialiased tracking-tight`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
