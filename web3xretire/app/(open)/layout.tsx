import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Providers from "../_providers/providers";
import { OpenNavSection } from "../components";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Providers>
          <OpenNavSection />
          {children}
        </Providers>
      </body>
    </html>
  );
}
