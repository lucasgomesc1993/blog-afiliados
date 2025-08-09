import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog de Afiliados - Reviews Imparciais e Links Confiáveis",
  description: "Encontre os melhores produtos com reviews detalhadas, comparações e links de afiliado confiáveis. Faça compras inteligentes com nossas análises imparciais.",
  keywords: ["blog de afiliados", "reviews de produtos", "comparação de produtos", "links afiliados", "melhores produtos", "tech reviews"],
  authors: [{ name: "Blog de Afiliados Team" }],
  openGraph: {
    title: "Blog de Afiliados - Reviews Imparciais",
    description: "Encontre os melhores produtos com reviews detalhadas e links de afiliado confiáveis",
    url: "https://blogafiliados.com",
    siteName: "Blog de Afiliados",
    type: "website",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog de Afiliados - Reviews Imparciais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog de Afiliados - Reviews Imparciais',
    description: 'Encontre os melhores produtos com reviews detalhadas e links de afiliado confiáveis',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
