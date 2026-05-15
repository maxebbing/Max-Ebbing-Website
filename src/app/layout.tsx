import type { Metadata } from "next";
import "./globals.css";
import CookieConsent from "@/components/Cookie";

export const metadata: Metadata = {
  metadataBase: new URL("https://maxebbing.de"),
  title: "Mehr Anfragen durch bessere Websites",
  description:
    "Ich entwickle schnelle, klare Websites für lokale Unternehmen, die gezielt darauf ausgelegt sind, mehr Anfragen zu generieren.",
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