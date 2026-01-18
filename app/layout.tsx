import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ChatWidget } from "@/components/ChatWidget";
import { StickyHeader } from "@/components/StickyHeader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Nic Aslett | Technical Leader",
  description: "Personal portfolio of Nic Aslett, a Technical Leader specializing in IT Architecture and Stability at Scale.",
  other: {
    "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; connect-src 'self' https://hnet.sylentt.com; img-src 'self' data:;",
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  interactiveWidget: "resizes-content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} bg-slate-950 text-slate-100 antialiased font-sans`}>
        <StickyHeader />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
