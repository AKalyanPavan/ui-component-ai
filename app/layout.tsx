import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Lexend, Lexend_Deca, Lexend_Zetta, Red_Hat_Display, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lexend = Lexend({
   subsets: ['latin'],
   weight: ['400', '700'],
   style: ['normal'], // You can add more styles if needed
});

const lexendZetta = Lexend_Zetta({
   subsets: ['latin'],
   weight: ['400', '700'],
   style: ['normal'], // You can add more styles if needed
});

const lexendDeca = Lexend_Deca({
   subsets: ['latin'],
   weight: ['400', '700'],
   style: ['normal'], // You can add more styles if needed
});

const redHatDisplay = Red_Hat_Display({
   subsets: ['latin'],
   weight: ['400', '700'],
   style: ['normal'], // You can add more styles if needed
});

const montserrat = Montserrat({
   subsets: ['latin'],
   weight: ['400', '700'],
   style: ['normal'], // You can add more styles if needed
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lexend} ${lexendZetta} ${redHatDisplay} ${lexendDeca} ${montserrat} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
