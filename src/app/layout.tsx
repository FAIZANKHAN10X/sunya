import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AnalyticsRoot from "@/analytics/AnalyticsRoot";
import GoogleTagManager, {
  GoogleTagManagerNoscript,
} from "@/analytics/GoogleTagManager";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sunya.studio"),
  title: {
    default: "Sunya — Personal Philosophy of Healing & Presence",
    template: "%s · Sunya",
  },
  description:
    "Sunya is a personal philosophy of healing, presence, and quiet practice.",
  keywords: [
    "Sunya",
    "Philosophy",
    "Healing",
    "Presence",
    "Mindfulness",
    "Quiet Practice",
    "Meditation",
  ],
  authors: [{ name: "Sunya Studio" }],
  openGraph: {
    title: "Sunya — Personal Philosophy of Healing & Presence",
    description:
      "Sunya is a personal philosophy of healing, presence, and quiet practice.",
    url: "https://sunya.studio",
    siteName: "Sunya",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunya — Personal Philosophy of Healing & Presence",
    description:
      "Sunya is a personal philosophy of healing, presence, and quiet practice.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://sunya.studio",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sunya",
  url: "https://sunya.studio",
  description:
    "Sunya is a personal philosophy of healing, presence, and quiet practice.",
  publisher: {
    "@type": "Organization",
    name: "Sunya",
    url: "https://sunya.studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <GoogleTagManager />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </head>
      <body className="min-h-full bg-background text-foreground">
        <GoogleTagManagerNoscript />
        <AnalyticsRoot />
        {children}
      </body>
    </html>
  );
}

