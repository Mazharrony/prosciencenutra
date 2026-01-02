import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/lib/store/cart-context";
import CartSidebarWrapper from "@/components/cart/CartSidebarWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProScience - Premium Supplements for Optimal Health",
  description: "Science-backed premium supplements for optimal health and performance. Discover our range of vitamins, protein, wellness, and sports supplements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <CartProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          {/* Cart Sidebar - Rendered at root level for proper positioning */}
          <CartSidebarWrapper />
        </CartProvider>
      </body>
    </html>
  );
}
