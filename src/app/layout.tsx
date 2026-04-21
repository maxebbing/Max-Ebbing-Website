import "./globals.css";

export const metadata = {
  title: "Mehr Anfragen durch bessere Websites",
  description:
    "Ich entwickle schnelle, klare Websites für lokale Unternehmen, die gezielt darauf ausgelegt sind, mehr Anfragen zu generieren.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}