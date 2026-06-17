import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taste of Malabar Caterers & Event Management Group | Premium Catering Services in Kerala",
  description: "20+ years of catering excellence. Wedding Catering, Kerala Sadya, Corporate Catering, Buffet Services, Live Counters and Custom Menus across Kerala & Karnataka.",
  keywords: [
    "Taste of Malabar",
    "Catering Services Kerala",
    "Kannur Catering",
    "Premium Wedding Catering",
    "Kerala Sadya Catering",
    "Live Food Counters",
    "Best Caterers Kannur",
    "Event Management Kerala",
    "Malabar Cuisine Catering"
  ],
  authors: [{ name: "Taste of Malabar" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-charcoal font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
