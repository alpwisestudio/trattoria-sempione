import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const dm = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trattoria Sempione 210 · Busto Arsizio",
  description:
    "Ragù, polenta e pappardelle fatti come una volta. Corso Sempione 210, Busto Arsizio. Posti all'aperto e cibo da asporto.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${display.variable} ${dm.variable}`}>
      <body>{children}</body>
    </html>
  );
}
