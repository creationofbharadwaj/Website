import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Thatha Ennai | Ayurvedic Pain Reliever - Siddha Heritage",
  description:
    "100% herbal Ayurvedic pain reliever oil. Relieves knee & joint pain, reduces swelling, improves mobility. 30+ traditional Siddha ingredients. No chemicals. Made in India.",
  keywords: [
    "Thatha Ennai",
    "Ayurvedic pain reliever",
    "knee pain oil",
    "joint pain relief",
    "Siddha medicine",
    "herbal oil",
    "Tamil Nadu",
  ],
  openGraph: {
    title: "Thatha Ennai | Ayurvedic Pain Reliever - Siddha Heritage",
    description:
      "100% herbal Ayurvedic pain reliever. Relieves knee & joint pain. 30+ traditional Siddha ingredients. No chemicals. Made in India.",
    url: "https://thathaennai.com",
    siteName: "Thatha Ennai",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thatha Ennai | Ayurvedic Pain Reliever",
    description: "100% herbal Ayurvedic pain reliever. 30+ Siddha ingredients.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://thathaennai.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
