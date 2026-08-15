import type { Metadata } from "next";
import {
  generalSans,
  vcr,
  sfPixelate,
  instrumentSerif,
  clashDisplay,
  fasthand,
  chilanka,
} from "./fonts";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "TinkerSpace Calicut",
  description:
    "A free, open space to learn, build, and explore technology together. TinkerSpace Calicut is a community makerspace in Malabar, open 24/7.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${generalSans.variable} ${vcr.variable} ${sfPixelate.variable} ${instrumentSerif.variable} ${clashDisplay.variable} ${fasthand.variable} ${chilanka.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <FloatingCTA />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
