import type { Metadata, Viewport } from "next";
import { Inter, Cedarville_Cursive } from "next/font/google";
import "./globals.css";
import { StarsCanvas } from "@/components/main/star-background";
import { Navbar } from "@/components/main/navbar";
import { Footer } from "@/components/main/footer";
import LoadingScreen from "@/components/main/loading-screen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cursive = Cedarville_Cursive({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cursive",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#030014",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Jaswanth Satya Dev Portfolio",
  description: "A futuristic portfolio showcasing fullstack projects, 3D experiences, and AI engineering skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cursive.variable}`}>
      <body
        className={`${inter.className} bg-[#030014] text-gray-100 overflow-y-scroll overflow-x-hidden antialiased`}
      >
        <LoadingScreen />
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
