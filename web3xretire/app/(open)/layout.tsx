import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "@/app/globals.css";
import Providers from "../_providers/providers";
import { OpenNavSection } from "../components";

const ibmPS = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  weight: ["100", "300", "500"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "BlockSip",
  description: "Thy Crypto Sensei",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ibmPS.variable}>
        <Providers>
          <OpenNavSection />
          {children}
        </Providers>
      </body>
    </html>
  );
}
