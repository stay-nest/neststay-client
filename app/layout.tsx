import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import MaterialSymbolsFont from "./components/MaterialSymbolsFont";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Neststay | Find Your Perfect Stay",
  description: "Discover unique stays in over 190 countries around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${plusJakartaSans.variable} antialiased bg-background-light dark:bg-background-dark text-[#111618] dark:text-white transition-colors duration-300`}
      >
        <MaterialSymbolsFont />
        {children}
      </body>
    </html>
  );
}
