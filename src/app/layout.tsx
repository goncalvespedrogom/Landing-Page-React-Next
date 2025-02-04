import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { HeaderMobile } from "@/components/HeaderMobile";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: "Connect Bank",
  description: "Tenha o controle do seu banco na ponta dos dedos",
  icons:{
    icon:['/favicon.ico?=v4'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']
  },
  openGraph: {
    images: ['https://lh3.googleusercontent.com/pw/AP1GczM5USD8BRHP3xwhpnVHj9X286OneKPrSXxvLKgb51JEw5yuAFX7gBM8EHtGMxA_8s8OL0Z7ZUzGj_0QjrBe50U0QmO-Fk6tcKRnmHCSjKRvrJTTMCH29BypaE7OXcN2svASovilTAnWpcfzYRg7F6YE=w500-h500-s-no-gm?authuser=5']
  },
  twitter: {
    images: ['https://lh3.googleusercontent.com/pw/AP1GczM5USD8BRHP3xwhpnVHj9X286OneKPrSXxvLKgb51JEw5yuAFX7gBM8EHtGMxA_8s8OL0Z7ZUzGj_0QjrBe50U0QmO-Fk6tcKRnmHCSjKRvrJTTMCH29BypaE7OXcN2svASovilTAnWpcfzYRg7F6YE=w500-h500-s-no-gm?authuser=5']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} antialiased`}>
        <Header />
        <HeaderMobile />
        {children}
      </body>
    </html>
  );
}
