import { homePageMetaData } from "../../lib/metadata/homepage";
import { calSans,golosText,inter } from "../../lib/fonts";
import type { Metadata } from "next";
import type { Viewport } from "next"; 
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#C49D5A",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light",
};

export const metadata: Metadata = homePageMetaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${calSans.variable} ${golosText.variable} ${inter.variable} antialiased`}
      >
        <main className="relative min-h-screen overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
