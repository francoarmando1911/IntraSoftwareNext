import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";


export const metadata: Metadata = {
  title: "Intra Software Next",
  description: "Intra Software",
  icons: {
    icon: '/logoMobileIntra.png',
    apple: '/logoMobileIntra.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
