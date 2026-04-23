import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

export const metadata = {
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