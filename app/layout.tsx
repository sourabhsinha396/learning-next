import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/ui/navbar";


export const metadata: Metadata = {
  title: "Issue-Wissue",
  description: "A simple issue tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=""
      >
        <NavBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
