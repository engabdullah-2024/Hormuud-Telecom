// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hormuud Telecom- No1 Telecom Provider In Somalia",
  description:
    "Hormuud Telecom is the leading telecom provider in Somalia, offering a wide range of services to meet your communication needs.",
  icons: {
    icon: [
      // If you also have an SVG mark, uncomment the next line:
      // { url: "/Hormuud.svg", type: "image/svg+xml" },
      { url: "/hormuud.icon.png", type: "image/png" }, // ✅ correct type for PNG
      { url: "/favicon.ico" },                          // fallback
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  themeColor: "#10B981",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
