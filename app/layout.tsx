import type { Metadata } from "next";
import {  Libre_Franklin } from "next/font/google";
import "./globals.css";
import Sidebar from "./component/sidebar";




const geistSans = Libre_Franklin({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Libre_Franklin({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-[Libre_Franklin] antialiased">
        <div className="flex">
          <Sidebar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}


