import type { Metadata } from "next";
import "./globals.css";
import CookieConsent from "@/components/Cookie";

export const metadata: Metadata = {
  metadataBase: new URL("https://maxebbing.de"),

  title: "Max Ebbing - Moderne Websites für Unternehmen in Berlin",
  description:
    "Ich entwickle schnelle Websites für Unternehmen mit Fokus auf Performance und Qualität.",

  /*
  openGraph: {
      title: "Max Ebbing",
      description:
        "Ich entwickle schnelle Websites für Unternehmen mit Fokus auf Performance und Qualität.",
      url: "https://maxebbing.de",
      siteName: "Max Ebbing",

      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
        },
      ],

      locale: "de_DE",
      type: "website",
    },
    */

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
      </body>
    </html>
  );
}