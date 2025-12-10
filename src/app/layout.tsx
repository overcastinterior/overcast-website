import { homePageMetaData } from "../../lib/metadata/homepage";
import { calSans, golosText, inter } from "../../lib/fonts";
import type { Metadata } from "next";
import type { Viewport } from "next";
import { Suspense } from "react";
import TopProgressBar from "@/components/shared/TopProgressBar";
import NavigationEvents from "@/components/shared/NavigationEvents";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#C49D5A",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light",
};

export const metadata: Metadata = {
  ...homePageMetaData,
  icons: {
    icon: 'images/icons/favicon.svg',
    shortcut: 'images/icons/favicon.svg',
    apple: 'images/icons/favicon.svg',
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
        className={`${calSans.variable} ${golosText.variable} ${inter.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <TopProgressBar />
        </Suspense>
        <NavigationEvents />
        <main className="relative min-h-screen overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
