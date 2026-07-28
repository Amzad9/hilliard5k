import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://www.hilliard5k.com");

const siteTitle = "2026 Hilliard Family Fun Run 5K";
const siteDescription =
  "Celebrate race day at the Hilliard Family Fun Run — a welcoming 5K and 1-Mile event at the Hilliard Sports Complex in Hilliard, Ohio, built for runners, walkers, families, and first-timers while supporting a local non-profit.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: siteTitle,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/photo.png",
        alt: "Hilliard Family Fun Run 5K",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
