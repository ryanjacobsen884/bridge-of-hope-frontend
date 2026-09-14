import type { Metadata } from "next";
import { Newsreader, Public_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Bridge of Hope Foundation — a children's home in Narok County, Kenya",
    template: "%s — The Bridge of Hope Foundation",
  },
  description:
    "The Bridge of Hope Foundation is a registered non-profit children's home in Narok, Kenya, providing food, clothing, schooling and medical care. Give monthly from the US or UK.",
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "The Bridge of Hope Foundation",
  description:
    "A registered non-profit children's home in Narok County, Kenya, providing food, clothing, schooling and medical care.",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Narok",
    addressRegion: "Narok County",
    addressCountry: "KE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${publicSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
