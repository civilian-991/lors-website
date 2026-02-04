import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LOR | Deliciously Crafted Treats",
  description: "Discover LOR's delicious range of biscuits, wafers, and chocolate treats. Quality confectionery that brings joy to every moment.",
  keywords: "LOR, biscuits, wafers, chocolate, treats, confectionery, snacks",
  openGraph: {
    title: "LOR | Deliciously Crafted Treats",
    description: "Discover LOR's delicious range of biscuits, wafers, and chocolate treats.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
