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
  title: "Sunya",
  description:
    "Sunya is a personal philosophy of healing, presence, and quiet practice.",
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
      </head>
      <body className="min-h-full bg-background text-foreground">
        <GoogleTagManagerNoscript />
        <AnalyticsRoot />
        {children}
      </body>
    </html>
  );
}
