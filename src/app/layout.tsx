import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

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
  title: "Trndz Pro — Curated Amazon Finds for Modern Daily Living",
  description:
    "Discover modern Amazon finds curated for beauty, fashion, home, and baby. Simple, intentional pieces chosen to elevate your everyday living.",
  metadataBase: new URL("https://www.trndzpro.com"),
  alternates: { canonical: "https://www.trndzpro.com" },
  keywords: [
    "Amazon finds",
    "curated products",
    "modern lifestyle",
    "editorial shopping",
    "minimalist essentials",
    "Trndz Pro",
    "beauty products",
    "women fashion",
    "men fashion",
    "baby essentials",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Trndz Pro — Curated Amazon Finds for Modern Living",
    description:
      "Minimal, intentional Amazon finds curated across beauty, fashion, home, and baby. Designed to elevate your everyday routine.",
    url: "https://www.trndzpro.com",
    type: "website",
    siteName: "Trndz Pro",
    images: [
      {
        url: "https://www.trndzpro.com/logo.png",
        width: 1200,
        height: 1200,
        alt: "Trndz Pro Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trndz Pro — Curated Amazon Finds for Modern Daily Living",
    description:
      "Explore curated Amazon picks for beauty, fashion, home, and baby — modern essentials for your everyday life.",
    images: ["https://www.trndzpro.com/logo.png"],
    creator: "@trndz.pro",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Ads Global Tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17785612936"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17785612936');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-neutral-50 text-neutral-900 antialiased tracking-tight`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
