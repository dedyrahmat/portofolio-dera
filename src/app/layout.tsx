import "./globals.css";
import type { Metadata } from "next";
import { Lexend_Mega } from "next/font/google";
import { ThemeProvider } from 'next-themes'

const lexendMega = Lexend_Mega({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dera",
  description: "Generated by create next app",
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
      </body>
    </html>
  );
}