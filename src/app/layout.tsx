import type { Metadata } from "next";
import "../styles/globals.css";


export const metadata: Metadata = {
  title: "Intra Software Next",
  description: "Intra Software",
  icons: {
    icon: '/logoIntra.png',
    apple: '/logoIntra.png',
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
