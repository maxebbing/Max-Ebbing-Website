import type { Metadata } from "next";
import "./globals.css";
import CookieConsent from "@/components/Cookie";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Max Ebbing | Websites für Unternehmen",
  description: "Ich entwickle Websites für Unternehmen, die mehr leisten als gut auszusehen. Durchdacht, hochwertig und ausgereift.",
  metadataBase: new URL("https://maxebbing.de"),
  alternates: {
    canonical: "https://maxebbing.de",
  },

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico",
      },
    ],

    apple: "/apple-touch-icon.png",
  },

  appleWebApp: {
    title: "Max Ebbing",
    capable: true,
    statusBarStyle: "default",
  },

  twitter: {
    card: "summary_large_image",
    title: "Max Ebbing | Websites für Unternehmen",
    description: "Ich entwickle Websites für Unternehmen, die mehr leisten als gut auszusehen. Durchdacht, hochwertig und ausgereift.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        {children}
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}