import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import {AuthProvider } from "./Providers";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Include any head elements you need */}
      </head>
      <body className={inter.className}>
      <AuthProvider>
        <Nav />
        <div >{children}</div>
        <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
