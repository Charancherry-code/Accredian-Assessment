import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Accredian Enterprise - Next-Gen Expertise For Your Enterprise",
  description: "Transform your workforce with industry-leading data science, AI, and analytics training programs designed for enterprise success.",
  keywords: ["data science", "AI training", "enterprise learning", "corporate training", "analytics", "machine learning"],
  authors: [{ name: "Accredian" }],
  metadataBase: new URL("https://enterprise.accredian.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Accredian Enterprise - Next-Gen Expertise For Your Enterprise",
    description: "Transform your workforce with industry-leading data science, AI, and analytics training programs",
    url: "https://enterprise.accredian.com",
    siteName: "Accredian Enterprise",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accredian Enterprise - Next-Gen Expertise For Your Enterprise",
    description: "Transform your workforce with industry-leading data science, AI, and analytics training programs",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StructuredData />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
