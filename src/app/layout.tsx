import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Z.ai - AI Solutions & Human-Centered Technology",
  description: "Leading the future of artificial intelligence with innovative solutions and human-centered design. Transform your business with cutting-edge AI technology.",
  keywords: ["AI", "Artificial Intelligence", "Machine Learning", "Technology", "Innovation", "Consulting", "Solutions"],
  authors: [{ name: "Z.ai Team" }],
  openGraph: {
    title: "Z.ai - AI Solutions & Human-Centered Technology",
    description: "Leading the future of artificial intelligence with innovative solutions and human-centered design.",
    url: "https://z.ai",
    siteName: "Z.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Z.ai - AI Solutions & Human-Centered Technology",
    description: "Leading the future of artificial intelligence with innovative solutions and human-centered design.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
