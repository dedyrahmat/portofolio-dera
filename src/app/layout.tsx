import "./globals.css";
import type { Metadata } from "next";
import { Lexend_Mega } from "next/font/google";
import { ThemeProvider } from 'next-themes'
import { SpeedInsights } from "@vercel/speed-insights/next"

const lexendMega = Lexend_Mega({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dera",
  description: "My portfolio",
  // metadataBase: new URL(location.hostname),
  keywords: "software engineer, web development, Jakarta, Indonesia, portfolio",
  authors: [{ name: "Dedy Rahmat" }],
  openGraph: {
    images: './opengraph-image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lexendMega.className} antialiased bg-gray-100`}>
        {/* <ThemeProvider attribute="class"> */}
        {children}
        {/* </ThemeProvider> */}
        <SpeedInsights />
      </body>
    </html>
  );
}
