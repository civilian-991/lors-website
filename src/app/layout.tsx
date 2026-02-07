import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

// Nunito is a geometric humanist sans-serif similar to Avenir
// If you have Avenir font files, place them in /public/fonts/ and use next/font/local
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LORS | Deliciously Crafted Treats",
  description: "Discover LORS's delicious range of biscuits, wafers, and chocolate treats. Quality confectionery that brings joy to every moment.",
  keywords: "LORS, biscuits, wafers, chocolate, treats, confectionery, snacks",
  openGraph: {
    title: "LORS | Deliciously Crafted Treats",
    description: "Discover LORS's delicious range of biscuits, wafers, and chocolate treats.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E2F71",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.variable} style={{ colorScheme: 'light' }}>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
