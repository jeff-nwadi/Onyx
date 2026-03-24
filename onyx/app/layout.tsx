import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CartSidebar from "@/components/sections/CartSidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Onyx",
  description: "Onyx - The ultimate smart collar for your dog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F7FBFF]">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
          <CartSidebar />
        </SmoothScroll>
        </body>
    </html>
  );
}
