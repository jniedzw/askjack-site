import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ask Jack | AI admin on WhatsApp for tradespeople",
  description:
    "Message Jack on WhatsApp and he logs your jobs, books them in, writes your quotes and invoices, and tells you who owes you. AI admin for UK tradespeople.",
  metadataBase: new URL("https://askjack.uk"),
  // How the link looks when shared. The picture comes from opengraph-image.tsx.
  openGraph: {
    title: "Ask Jack: your admin, done on WhatsApp",
    description:
      "Message Jack and he logs your jobs, books them in, writes your quotes and invoices, and tells you who owes you.",
    url: "https://askjack.uk",
    siteName: "Ask Jack",
    locale: "en_GB",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
